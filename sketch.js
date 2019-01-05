
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
    const tensorA = tf.tensor2d(values, shape,'int32');
    const tensorB = tf.tensor2d(values, shape,'int32');
    const tensorBTrans = tensorB.transpose();
    const tensorC=tensorA.matMul(tensorBTrans);

//    tedious way...
//    tensorA.dispose();
//    tensorB.dispose();
//    tensorC.dispose();
//    tensorBTrans.dispose();
    
    console.log(tf.memory().numTensors);
    
}