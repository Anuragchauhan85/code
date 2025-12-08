// call stack :  it is a order in which our function is call.
// break point :  it is to see step by step working of functions it is use for debuging.
// js is single treaded : means it execute only one task at a time.to ececute other task we use settimeout
// to execute the task with the help of browser.
function one() {
    return 1;
}

 function two() {
     return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();