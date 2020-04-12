
let model = null;
let wide = true;
const MODEL_HTTP_URL = wide ? 'models-tfjs/sokoban/wide/model_1/model.json'
    : 'models-tfjs/sokoban/turtle/model_1/model.json';

function getState() {}

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

function get_observation() {
    let state = [[[[0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.]],

   [[0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.]],

   [[0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.]],

   [[0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [1., 0., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [1., 0., 0., 0., 0.],
    [1., 0., 0., 0., 0.]],

   [[0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [1., 0., 0., 0., 0.],
    [1., 0., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [1., 0., 0., 0., 0.],
    [0., 1., 0., 0., 0.]],

   [[0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 0., 0., 1., 0.],
    [0., 1., 0., 0., 0.],
    [0., 0., 0., 1., 0.],
    [0., 1., 0., 0., 0.]],

   [[0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [1., 0., 0., 0., 0.],
    [0., 0., 1., 0., 0.],
    [1., 0., 0., 0., 0.],
    [1., 0., 0., 0., 0.],
    [1., 0., 0., 0., 0.]],

   [[0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [1., 0., 0., 0., 0.],
    [1., 0., 0., 0., 0.],
    [1., 0., 0., 0., 0.],
    [1., 0., 0., 0., 0.],
    [1., 0., 0., 0., 0.]],

   [[0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.]],

   [[0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.]]]];
    // prepare state input
    return tf.tensor4d(state, shape = [1, 10, 10, 5], dtype = "float32");
}

function get_observation_wide() {
    let state = [[[[0., 1., 0., 0., 0.],
    [1., 0., 0., 0., 0.],
    [0., 0., 0., 1., 0.],
    [0., 1., 0., 0., 0.],
    [0., 0., 0., 1., 0.]],

   [[0., 1., 0., 0., 0.],
    [0., 0., 1., 0., 0.],
    [1., 0., 0., 0., 0.],
    [1., 0., 0., 0., 0.],
    [0., 0., 1., 0., 0.]],

   [[0., 1., 0., 0., 0.],
    [1., 0., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [1., 0., 0., 0., 0.]],

   [[1., 0., 0., 0., 0.],
    [0., 0., 1., 0., 0.],
    [0., 1., 0., 0., 0.],
    [1., 0., 0., 0., 0.],
    [0., 1., 0., 0., 0.]],

   [[0., 0., 1., 0., 0.],
    [0., 1., 0., 0., 0.],
    [1., 0., 0., 0., 0.],
    [0., 1., 0., 0., 0.],
    [0., 1., 0., 0., 0.]]]];
    return tf.tensor4d(state, shape = [1, 5, 5, 5], dtype = "float32");
}

async function predictAndDraw() {
    //let state = getState()
    let a = null;
    if (wide) {
        a = get_observation_wide();
        // calls predict on the model
        let preResp = await model.predict(a).array()
        console.log(preResp)
        // let actionIndex = preResp[0].indexOf(Math.max(...preResp[0]))
        indexes = preResp[0].map((val, ind) => {return {ind, val}})
            .sort((a, b) => {return a.val > b.val ? 1 : a.val == b.val ? 0 : -1 })
            .map((obj) => obj.ind)
        actionIndex = indexes[indexes.length-1]
        console.log(actionIndex)
    } else {
        a = get_observation();
        // calls predict on the model
        let preResp = await model.predict(a).array()
        console.log(preResp)
        // let actionIndex = preResp[0].indexOf(Math.max(...preResp[0]))
        indexes = preResp[0].map((val, ind) => {return {ind, val}})
           .sort((a, b) => {return a.val > b.val ? 1 : a.val == b.val ? 0 : -1 })
           .map((obj) => obj.ind)
        actionIndex = indexes[indexes.length-1]
        console.log(actionIndex)
    }
}

let game = null

fetchModel().then(async modelResp => {
    model = modelResp;
    predictAndDraw();
    //game = setInterval(predictAndDraw, 50);
})