
function getTime(){
    var currentdate = new Date(); 
     return  "["+currentdate.getHours() + ": " 
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds()+"s]";
}

callLayersApi();

function callLayersApi(){
    console.log(getTime()+" Start Layers");
    
    const model = tf.sequential();
    
    //    Hidden Layer
    const hidden = tf.layers.dense({
        units: 4,
        inputShape: [2],
        activation: 'sigmoid',
    });    

    //    Output Layer
    const output = tf.layers.dense({
        units: 3,
        activation: 'sigmoid',
    });
    
    model.add(hidden);
    model.add(output);
    
    const sgdOptimizer = tf.train.sgd(0.1);
        
    const config = {
        optimizer: sgdOptimizer,
        loss: 'm eanSquaredError'
    }
    model.compile(config);
    
    console.log(model);
}
