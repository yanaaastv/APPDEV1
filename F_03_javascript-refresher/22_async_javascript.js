function getStudentCallback(callback) {
    setTimeout(() => {callback("Student information received using callback");}, 1000);
}

function getStudentPromise() {
    return new Promise(resolve => {
        setTimeout(() => {resolve("Student information received using promise");}, 1000);
    });
}

async function getStudentAsync() {
    const data = await getStudentPromise();
    console.log(data);
}

getStudentCallback(data => {
    console.log(data);
});

getStudentPromise().then(data => {
    console.log(data);
});

getStudentAsync();