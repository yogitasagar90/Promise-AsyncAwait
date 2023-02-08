let cl = console.log;

function getAngularDev(skillSets) {
    //api call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (skillSets.toLowerCase().includes("anguler")) {
                resolve("candidate is shortlisted");
            } else {
                reject("candidate is not shortlisted");
            }
        }, 3000)
    })
}
function firstInter() {
    //api call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() > .4 ? true : false;
            if (result) {
                resolve("candidate is shortlisted for 2nd round");
            } else {
                reject("candidate is not shortlisted");
            }
        }, 1000)
    })
}
function secondInter() {
    //api call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() > .4 ? true : false;
            if (result) {
                resolve("candidate is shortlisted for ML round");
            } else {
                reject("candidate is not shortlisted");
            }
        }, 500)
    })
}
function mlRound() {
    //api call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() > .4 ? true : false;
            if (result) {
                resolve("candidate is shortlisted for given profile");
            } else {
                reject("candidate is not shortlisted");
            }
        }, 500)
    })
}
let skillName = Math.random() >= .5 ? "Anguler 15" : "React 18";
cl(skillName);

async function init() {
    try {
        await getAngularDev(skillName);
        await firstInter();
        await secondInter();
        let result = await mlRound();
        cl(result);
        Swal.fire({
            icon: 'success',
            title: result,
            timer: 4000
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
init();