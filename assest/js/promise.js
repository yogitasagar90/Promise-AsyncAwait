let cl = console.log;
//promise is javascript object which give some value in future
//it is used to handle async operations in JS

//states of promise
//pending  >>waiting for result
//fullfilled  >>the action related to promise is success
//reject  >>the action related to promise is failed
//settled  >> promise either fullfilled or reject

//benefits of promise
//improve readability of cade
//better handling async operations
//better error handling
//better execution of code

let promise = new Promise((resolve, reject) => {
    //api call
    setTimeout(() => {
        let error = Math.random() >= .5 ? false : true;
        cl(error);
        if (!error) {
            resolve(`succesfully login`);
        } else {
            reject(`invalid username or password`);
        }
    }, 3000)

})


promise
    .then((res) => {
        cl(res);
    })
    .catch((err) => {
        cl(err);
    })
