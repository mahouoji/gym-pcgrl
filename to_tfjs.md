## TensorFlow.js

### Convert to TensorFlow.js format

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
pip install ipykernel
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
    ./checkpoint/sokoban/model_1 \
    ./tfjsmodel
```

### Use TensorFlow.js model

Load model

```javascript
async function fetchModel() {
    try {
        console.log('url: ', window.location.href + MODEL_HTTP_URL)
        let model = await tf.loadGraphModel(window.location.href.split('index.html')[0] + MODEL_HTTP_URL);
        console.log('Model loaded from HTTP.');
        console.log(model);
        return model;
    } catch (error) {
        console.error(error);
    }
}
```

Use model

```javascript
    let state = getState()
    let a = tf.tensor2d([state], shape = [1, 12], dtype = "int32")
    // calls predict on the model
    let preResp = await model.predict(a).array()
```

TODO: rewrite env in JS

`inference.py`

```python
    agent = PPO2.load(model_path)
    env = make_vec_envs(env_name, representation, None, 1, **kwargs)
    obs = env.reset()
    obs = env.reset()
    dones = False
    for i in range(kwargs.get('trials', 1)):
        while not dones:
            action, _ = agent.predict(obs)
            obs, _, dones, info = env.step(action)
            if kwargs.get('verbose', False):
                print(info[0])
            if dones:
                break
        time.sleep(0.2)
```

### Reference

Snake RL  https://www.pedro-torres.com/snake-rl/

- Train https://github.com/pedrohbtp/snake-rl (pygame & stable-baseline)
- TFJS  https://github.com/pedrohbtp/Snake-JavaScript