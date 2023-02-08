let cl = console.log;

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

async function init(){
    try{
        let data = await promise;
        cl(data);
    }catch(err){
        cl(err);
    }
}
init();