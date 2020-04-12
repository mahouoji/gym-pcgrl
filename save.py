import model
from stable_baselines import PPO2

import time
from utils import make_vec_envs

import tensorflow as tf

import os
import shutil
import argparse

def save_agent(game, model_path, checkpoint_path, **kwargs):
    if game == "binary":
        model.FullyConvPolicy = model.FullyConvPolicyBigMap
    elif game == "zelda":
        model.FullyConvPolicy = model.FullyConvPolicyBigMap
    elif game == "sokoban":
        model.FullyConvPolicy = model.FullyConvPolicySmallMap
    agent = PPO2.load(model_path)
    #print(model.summary())
    with agent.graph.as_default():
        if os.path.exists(checkpoint_path):
            shutil.rmtree(checkpoint_path)
        tf.saved_model.simple_save(agent.sess, checkpoint_path, inputs={'obs': agent.act_model.obs_ph},
                                   outputs={'action': agent.act_model._policy_proba})

def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('-g', '--game', type=str, default='sokoban', help='game: binary/sokoban/zelda')
    parser.add_argument('-r', '--rep', type=str, default='turtle', help='representation: narrow/turtle/wide')
    parser.add_argument('-m', '--model', type=str, default='model_1', help='model name: model_1/model_2/model_3')
    return parser.parse_args()

################################## MAIN ########################################
if __name__ == '__main__':
    args = parse_args()
    model_path = 'models/{}/{}/{}.pkl'.format(args.game, args.rep, args.model)
    checkpoint_path = 'models-tf/{}/{}/{}'.format(args.game, args.rep, args.model)
    kwargs = {}
    save_agent(args.game, model_path, checkpoint_path, **kwargs)
