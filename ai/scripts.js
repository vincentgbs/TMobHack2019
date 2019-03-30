let trainedNet;

function encode(arg) {
   return arg.split('').map(x => (x.charCodeAt(0) / 255));
}

function processTrainingData(data) {
   return data.map(d => {
       return {
           input: encode(d.input),
           output: d.output
       }
   })
}

function train(data) {
   let net = new brain.NeuralNetwork();
   net.train(processTrainingData(data));
   trainedNet = net.toFunction();
   console.log('Finished training...');
};

function execute(input) {
   let results = trainedNet(encode(input));
   let output;
//     results.trump > results.kardashian ? output = 'Trump' : output = 'Kardashian';
//     results.kardashian > results.trump ? output = 'K' : output = 'T';

//    results.technical > results.sales ? output = 'Tech' : output = 'Sales';

//    results.sales > results.technical ? output = 'Sales' : output = 'Tech Support';


    results.t > results.k ? output = 'Tech Support' : output = 'Sales';


   return output;
}

train(trainingData);

// console.log(execute("These aren't real. Kanye would never write Yeezy on the side"));



// console.log(execute("I cracked my phone and it doesn't work"));

// console.log(execute("I want to buy the latest Pixel phone"));

// console.log(execute("I want to get a new phone case"));

console.log(execute("fix"));

console.log(execute("buy"));


