
function setup() {
    noCanvas();
    const values = [];
    console.log("start");
    for (let i = 0; i<15; i++){
        values[i]= random(0,100);

    }

    const shape = [5,3];
    const tensor1 = tf.tensor(values, shape);

    console.log (tensor1.toString());
    console.log (tensor1);
}