#!/bin/sh

# python version is 3.7
# wide
python save.py --rep wide --model model_1
tensorflowjs_converter \
    --input_format=tf_saved_model \
    --output_node_names='model_1' \
    ./models-tf/sokoban/wide/model_1 \
    ./tfjs/models-tfjs/sokoban/wide/model_1

python save.py --rep wide --model model_2
tensorflowjs_converter \
    --input_format=tf_saved_model \
    --output_node_names='model_2' \
    ./models-tf/sokoban/wide/model_2 \
    ./tfjs/models-tfjs/sokoban/wide/model_2

python save.py --rep wide --model model_3
tensorflowjs_converter \
    --input_format=tf_saved_model \
    --output_node_names='model_3' \
    ./models-tf/sokoban/wide/model_3 \
    ./tfjs/models-tfjs/sokoban/wide/model_3
