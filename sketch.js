
function setup() {
    noCanvas();
    const values = [];
    console.log("start");
    for (let i = 0; i<30; i++){
        values[i]= random(0,100);

    }

    const shape = [2,5,3];
    //const tensor1 = tf.tensor(values, shape,'int32');
    const tensor1 = tf.tensor3d(values, shape,'int32');

    console.log (tensor1.toString());
    console.log (tensor1);
}