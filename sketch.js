
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
    for (let i = 0; i<30; i++){
        values[i]= random(0,100);

    }
//    const vTensor1 tf.variable(tensor1);
    const shape = [2,5,3];
    const tensorA = tf.tensor3d(values, shape,'int32');
    const tensorB = tf.tensor3d(values, shape,'int32');
    
    const tensorC=tensorB.add(tensorA);
    
    
    
    console.log (tensorA.toString());
    console.log (tensorC.toString());
    //console.log(tensor1.dataSync();
    //console.log(tensor1.get(0,0,0));
    //    console.log.(vTensor1);
    
    
}
