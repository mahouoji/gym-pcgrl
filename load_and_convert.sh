#!/bin/sh

# python 3.5 
python save.py --rep narrow
tensorflowjs_converter \
    --input_format=tf_saved_model \
    --output_node_names='model_1' \
    ./models-tf/sokoban/narrow/model_1 \
    ./models-tfjs/sokoban/narrow/model_1

python save.py --rep turtle
tensorflowjs_converter \
    --input_format=tf_saved_model \
    --output_node_names='model_1' \
    ./models-tf/sokoban/turtle/model_1 \
    ./models-tfjs/sokoban/turtle/model_1