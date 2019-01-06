
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
    model.add(hidden);
        
    //    Output Layer
    const output = tf.layers.dense({
        units: 1,
        activation: 'sigmoid',
    });
    model.add(output);
    
    const sgdOptimizer = tf.train.sgd(0.5);
    
    model.compile({
        optimizer: sgdOptimizer,
        loss: 'meanSquaredError'
    });
 
    //
    // Do the training
    //
    
    // input data
    const xs = tf.tensor2d(
        [
            [0, 0], 
            [0.5, 0.5],
            [1, 1]            
        ]); 
    
    // output data
    const ys = tf.tensor2d(
        [
            [0], 
            [0.5],
            [1]
        ]); 
    
    

    asyncStratTraining().then(()=> {
        // After trainins is finished
        console.log("Training completed");

        //
        // Use the trained model to get some outputs
        //
        let outputs = model.predict(xs);
        // this console out put should match the input Ys from training 
        outputs.print();
    });
                       
    async function asyncStratTraining()  {
        for (let i=0;i<100;i++){
            const response = await model.fit(xs, ys, {shuffle:true, epochs: 10});
            console.log(response.history.loss[0]);
        }
    }
    

    
}
