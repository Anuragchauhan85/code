async function greet() {                                   //it return a promise
  //throw "some random error";                               //throw use to show error
  return "hello";
}

greet()
    .then((result) => {
        console.log("promise was resolved");
        console.log("result was : ",result);
    })
    .catch((err) => {
        console.log("promise was rejected with err",err);
    })



let demo = async () => {
    return 5;
};