const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const promise = welcome();

console.log(promise);

const question = "Will the weather be nice today?";
const tellPromise = tell(question);
tellPromise.then((fortune) => {
  console.log(question);
  console.log(fortune);
});

//> Will the weather be nice today?
//> Without a doubt. (or other random response)

tell()
  .then((fortune) => {
    console.log(question);
    console.log(fortune);
  })
  .catch(console.error);

// No question is being passed into tell, so the error message will be 'caught'