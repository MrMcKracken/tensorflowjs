
function getTime(){
    var currentdate = new Date(); 
     return  "["+currentdate.getHours() + ": " 
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds()+"s]";
}


function setup() {
    noCanvas();
    const values = [];
    console.log(getTime()+" Start");
    for (let i = 0; i<15; i++){
        values[i]= random(0,100);

    }
//    const vTensor1 tf.variable(tensor1);
    const shapeA = [5,3];
    const shapeB = [3,5];
    
    
    
    const tensorA = tf.tensor2d(values, shapeA,'int32');
    const tensorB = tf.tensor2d(values, shapeB,'int32');
    
    // equal results 
//    const tensorC=tensorA.matMul(tensorB);
    const tensorC=tensorA.matMul(tensorA.transpose());
    
    
    console.log (tensorA.toString());
    console.log (tensorB.toString());
    
    tensorC.print();
    //console.log(tensor1.dataSync();
    //console.log(tensor1.get(0,0,0));
    //    console.log.(vTensor1);
    
    
}
