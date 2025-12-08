//json javascript object notaion

//json data is in string format

//JSON.parse(data)method        use to acess the data from json format
//JSON.stringify(json)           js object to json format



let JsonRes =
    '{"fact":"A cat lover is called an Ailurophilia (Greek: cat+lover).","length":57}';
  
let validRes = JSON.parse(JsonRes);
console.log(validRes.fact);
console.log(validRes.length);

let student = {
    name: "Anurag chauhan",
    marks: 95,
};

console.log(JSON.stringify(student));



//tool to test apis
//postman  old need to download
//hoppscoth


//AJAX  asynchronous javascript and xml
//means the whole process of request and response of api asynchronously


//https verbs
//get : to get the data
//post : to post the data
//delete : to delete the data


//status codes
//200 means ok
//404 means not found
//400 means bad request
//500 means internal server error

//headers to get different type of data format like json ,html ,plain text

