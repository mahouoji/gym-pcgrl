
let model = null

async function init() {
    //loads model
    let model = await tf.loadGraphModel('models-tfjs/sokoban/narrow/model_1/model.json')
    //draw()
}

async function test() {

    const saveResults = await model.save('localstorage://my-model-1');
}

const MODEL_HTTP_URL = 'models-tfjs/sokoban/narrow/model_1/model.json';

function getState() {

}

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

async function predictAndDraw() {
    //let state = getState()
    let state =[[
    [[0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0]],

    [[0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0]],

    [[0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0]],

    [[0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0]],

    [[0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0]],

    [[0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0]],

    [[0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0]],

    [[0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0]],

    [[0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0]],

    [[0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0]],
    ]]

    let a = tf.tensor4d(state, shape = [1, 10, 10, 5], dtype = "float32")
    // calls predict on the model
    let preResp = await model.predict(a).array()
    console.log(preResp)
    /*
    // let actionIndex = preResp[0].indexOf(Math.max(...preResp[0]))
    indexes = preResp[0].map((val, ind) => {return {ind, val}})
           .sort((a, b) => {return a.val > b.val ? 1 : a.val == b.val ? 0 : -1 })
           .map((obj) => obj.ind)
    actionIndex = indexes[indexes.length-1]
    console.log(indexes)
    console.log('preResp', preResp[0])
    // avoid choosing the opposite direction:
    if ((actionIndex == 0 && d == 'LEFT') ||  (actionIndex == 1 && d == 'RIGHT') || (actionIndex == 2&& d == 'DOWN') || (actionIndex == 3 && d == 'UP')) {
        actionIndex = indexes[indexes.length-2]
    }
    let preDir = d
    if (actionIndex == 0) {
        preDir = 'RIGHT'
    } else if (actionIndex == 1) {
        preDir = 'LEFT'
    } else if (actionIndex == 2) {
        preDir = 'UP'
    } else if (actionIndex == 3) {
        preDir = 'DOWN'
    }
    console.log('action index: ', actionIndex)
    console.log('direction: ', preDir)
    d = preDir
    draw()*/
}

let game = null

fetchModel().then(async modelResp => {
    model = modelResp;
    predictAndDraw();
    //game = setInterval(predictAndDraw, 50);
})