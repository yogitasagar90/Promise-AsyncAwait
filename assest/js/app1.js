let cl = console.log;

const blogContainer = document.getElementById("blogContainer");
let blogs = [
    { title: "Angular 15 update", content: "It supports Standalone Component" },
    { title: "ES6-Promise", content: "ES6 gives us Promise to handle Async operations" }
]
function createLog(blog, callBackFun) {
    setTimeout(() => {
        //api call
        let error = Math.random() >= .5 ? false : true;
        if (!error) {
            blogs.push(blog);
            cl(blogs, `New blog created successfully`);
            callBackFun()
        } else {
            cl(`something went wrong while creating blogs`);
        }

    }, 3000);
}
function fetchData() {
    setTimeout(() => {
        //api call
        let error = math.random() >= .5 ? false : true;
        if (!error) {
            blogs.push(blogs);
            cl(blogs, `New blog fetcheded successfully`);
            templatingCards(blogs)
        } else {
            cl(`something went wrong while fetching data`);
        }

    }, 1000);
}
function templatingCards(arr) {
    let result = '';
    arr.forEach(blog => {
        result += `
            <div class = "card mb-4">
                <div class="card-header">${blog.title}</div>
                <div class="card-body">${blog.content}</div>
            </div>
        `
    });
    blogContainer.innerHTML = result;
}
createLog({ title: "ES7 - Async Await", content: "ES7 gives us Async Awit to handle Async operations" }, fetchData);



