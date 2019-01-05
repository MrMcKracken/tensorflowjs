
function getTime(){
    var currentdate = new Date(); 
     return  "["+currentdate.getHours() + ": " 
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds()+"s]";
}


function setup() {
    noCanvas();
//    frameRate(1);
}

tf.tidy(myFunc);

function myFunc(){
    
}

function draw(){
    const values = [];
    console.log(getTime()+" Start");
    for (let i = 0; i<150000; i++){
        values[i]= random(0,100);

    }
    const shape = [500,300];
    
    // tedious way
    const tensorY = tf.tensor2d(values, shape,'int32');
    tensorY.dispose();
    
    tf.tidy(() => {
    const tensorA = tf.tensor2d(values, shape,'int32');
    const tensorB = tf.tensor2d(values, shape,'int32');
    const tensorBTrans = tensorB.transpose();
    const tensorC=tensorA.matMul(tensorBTrans);
    });
    
    console.log(tf.memory().numTensors);
    
}