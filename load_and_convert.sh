#!/bin/sh

# python version is 3.5
# narrow
python save.py --rep narrow --model model_1
tensorflowjs_converter \
    --input_format=tf_saved_model \
    --output_node_names='model_1' \
    ./models-tf/sokoban/narrow/model_1 \
    ./tfjs/models-tfjs/sokoban/narrow/model_1

python save.py --rep narrow --model model_2
tensorflowjs_converter \
    --input_format=tf_saved_model \
    --output_node_names='model_2' \
    ./models-tf/sokoban/narrow/model_2 \
    ./tfjs/models-tfjs/sokoban/narrow/model_2

python save.py --rep narrow --model model_3
tensorflowjs_converter \
    --input_format=tf_saved_model \
    --output_node_names='model_3' \
    ./models-tf/sokoban/narrow/model_3 \
    ./tfjs/models-tfjs/sokoban/narrow/model_3
# turtle
python save.py --rep turtle --model model_1
tensorflowjs_converter \
    --input_format=tf_saved_model \
    --output_node_names='model_1' \
    ./models-tf/sokoban/turtle/model_1 \
    ./tfjs/models-tfjs/sokoban/turtle/model_1

python save.py --rep turtle --model model_2
tensorflowjs_converter \
    --input_format=tf_saved_model \
    --output_node_names='model_2' \
    ./models-tf/sokoban/turtle/model_2 \
    ./tfjs/models-tfjs/sokoban/turtle/model_2

python save.py --rep turtle --model model_3
tensorflowjs_converter \
    --input_format=tf_saved_model \
    --output_node_names='model_3' \
    ./models-tf/sokoban/turtle/model_3 \
    ./tfjs/models-tfjs/sokoban/turtle/model_3
