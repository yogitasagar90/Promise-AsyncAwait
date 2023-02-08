let cl = console.log;

const blogContainer = document.getElementById("blogContainer");
let blogs = [
    { title: "Angular 15 update", content: "It supports Standalone Component" },
    { title: "ES6-Promise", content: "ES6 gives us Promise to handle Async operations" }
]
function createLog(blog) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //api call
            let error = Math.random() >= .2 ? false : true;
            if (!error) {
                blogs.push(blog)
                resolve(`post created `)
            } else {
                reject(`something went wrong`)
            }
        }, 1000);

    })
}
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //api call
            let error = Math.random() >= .2 ? false : true;
            if (!error) {
                resolve(`post fetched `)
            } else {
                reject(`something went wrong`)
            }
        }, 1000);
    })
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

    async function init() {
        try {
            await createLog({ title: "ES7 - Async Await", content: "ES7 gives us Async Awit to handle Async operations" })
            let result= await fetchData()
            await templatingCards(blogs);
            Swal.fire({
                icon: 'success',
                title: result,
                timer: 1500,
                showConfirmButton: true
              })

        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err,
                timer: 4000
            })
        }
    }
    init()
