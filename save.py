import model
from stable_baselines import PPO2

import time
from utils import make_vec_envs

import tensorflow as tf

log_dir = './'

def save_agent(game, representation, model_path, **kwargs):
    """
     - max_trials: The number of trials per evaluation.
     - infer_kwargs: Args to pass to the environment.
    """
    env_name = '{}-{}-v0'.format(game, representation)
    if game == "binary":
        model.FullyConvPolicy = model.FullyConvPolicyBigMap
        kwargs['cropped_size'] = 28
    elif game == "zelda":
        model.FullyConvPolicy = model.FullyConvPolicyBigMap
        kwargs['cropped_size'] = 22
    elif game == "sokoban":
        model.FullyConvPolicy = model.FullyConvPolicySmallMap
        kwargs['cropped_size'] = 10
    kwargs['render'] = True
    
    agent = PPO2.load('runs/binary_narrow_1_log/best_model.pkl')

    with agent.graph.as_default():
        tf.saved_model.simple_save(agent.sess, './checkpoint', inputs={"obs": agent.act_model.obs_ph},
                                   outputs={"action": agent.action_ph})

################################## MAIN ########################################
game = 'binary'
representation = 'narrow'
model_path = 'models/{}/{}/model_1.pkl'.format(game, representation)
kwargs = {
    'change_percentage': 0.4,
    'trials': 1,
    'verbose': True
}

if __name__ == '__main__':
    save_agent(game, representation, model_path, **kwargs)
