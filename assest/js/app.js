var cl = console.log;
// javascript is syncronous
// javascript is single threaded
// javascript is non-blocking

function fetchData(callBackFun) {
    setTimeout(() => {
        cl(`data is fetched successfully`);
        // templatingLi();
        callBackFun();
    }, 2000);
}
function templatingLi() {
    cl(`Lists are created successfully`);
}
function templatingCard() {
    cl(`Cards are crated successfully`);
}
fetchData(templatingLi);
fetchData(templatingCard);