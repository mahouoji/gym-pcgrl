import model
from stable_baselines import PPO2

import time
from utils import make_vec_envs

import tensorflow as tf

import os
import shutil

def save_agent(game, representation, model_path, checkpoint_path, **kwargs):
    agent = PPO2.load(model_path)
    with agent.graph.as_default():
        if os.path.exists(checkpoint_path):
            shutil.rmtree(checkpoint_path)
        tf.saved_model.simple_save(agent.sess, checkpoint_path, inputs={"obs": agent.act_model.obs_ph},
                                   outputs={"action": agent.act_model._policy_proba})

################################## MAIN ########################################
game = 'binary'
representation = 'narrow'
#model_path = 'models/{}/{}/model_1.pkl'.format(game, representation) #TODO: error loading pretrained agents
model_path = 'runs/{}_{}_1_log/best_model.pkl'.format(game, representation)
checkpoint_path = './checkpoint'
kwargs = {}

if __name__ == '__main__':
    save_agent(game, representation, model_path, checkpoint_path, **kwargs)
