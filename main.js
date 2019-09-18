const axios = require('axios').default;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingredients ', (answer) => {
  axios.get(`http://www.recipepuppy.com/api/?i=${answer}&q=omelet&p=1`).then(response => {
    console.log(response.data)
    response.data 
  })  
  rl.close();
});
