# Converting to TensorFlow.js models

Set up pcgrl

```bash
pip install tensorflow==1.15
pip install stable-baselines
cd gym_pcgrl
pip install -e ..
cd ..
```

Install tensorflowjs

```bash
pip install --no-deps tensorflowjs   
```

Save as TensorFlow model

```bash
python save.py
```

Convert model to TensorFlow.js web format

```bash
tensorflowjs_converter \
    --input_format=tf_saved_model \
    --output_node_names='testsave' \
    ./checkpoint \
    .
```

