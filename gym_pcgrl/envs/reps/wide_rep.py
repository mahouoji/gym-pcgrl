from gym_pcgrl.envs.reps.representation import Representation
from PIL import Image
from gym import spaces
import numpy as np

"""
The wide representation where the agent can pick the tile position and tile value at each update.
"""
class WideRepresentation(Representation):
    """
    Initialize all the parameters used by that representation
    """
    def __init__(self):
        super().__init__()

    """
    Gets the action space used by the wide representation

    Parameters:
        width: the current map width
        height: the current map height
        num_tiles: the total number of the tile values

    Returns:
        MultiDiscrete: the action space used by that wide representation which
        consists of the x position, y position, and the tile value
    """
    def get_action_space(self, width, height, num_tiles):
        return spaces.MultiDiscrete([width, height, num_tiles])

    """
    Get the observation space used by the wide representation

    Parameters:
        width: the current map width
        height: the current map height
        num_tiles: the total number of the tile values

    Returns:
        Box: the observation space used by that representation. A 2D array of tile numbers
    """
    def get_observation_space(self, width, height, num_tiles):
        high = num_tiles - 1
        if self.static_builds:
            high += 1
        return spaces.Dict({
            "map": spaces.Box(low=0, high=high, dtype=np.uint8, shape=(height, width))
        })

    """
    Get the current representation observation object at the current moment

    Returns:
        observation: the current observation at the current moment. A 2D array of tile numbers
    """
    def get_observation(self):
        map = self._map.copy()
        if self.static_builds:
            map = map + self._static_builds
        return {
            "map": map
        }

    """
    Update the wide representation with the input action

    Parameters:
        action: an action that is used to advance the environment (same as action space)

    Returns:
        boolean: True if the action change the map, False if nothing changed
    """
    def update(self, action):
        if not self.static_builds or not self._static_builds[action[1]][action[0]]:
            change = [0,1][self._map[action[1]][action[0]] != action[2]]
            self._map[action[1]][action[0]] = action[2]
        else:
           #print('not overwriting static build at {} {}'.format(action[1], action[0]))
            change = False
        return change, action[0], action[1]
