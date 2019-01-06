
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
    const configHidden = {
        units: 4,
        inputShape: [2],
        activation: 'sigmoid',
    }
    const hidden = tf.layers.dense(configHidden);    

    //    Output Layer
    const configOutput = {
        units: 3,
        activation: 'sigmoid',
    }
    const output = tf.layers.dense( configOutput);
    
    model.add(hidden);
    model.add(output);
    console.log(model);
}
