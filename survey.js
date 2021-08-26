const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your favorite music? ', (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);

  rl.question('What\'s your favorite color? ', (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);

    rl.question('What\'s your favorite sport? ', (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer3}`);

      console.log(`I love ${answer1} and like to play ${answer3}. My favorite color is ${answer2}.`);

      rl.close();
    })
  })
})

