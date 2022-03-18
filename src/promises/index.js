const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('hey');
        }else{
            reject('no se pudo');
        }
    })
}

somethingWillHappen().then(response => console.log(response)).catch(error => console.error(error));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('hey');
            }, 3000)
        }else{
            const error = new Error('nooooo');
            reject(error);
        }
    })
}

somethingWillHappen2().then(response => console.log(response)).catch(error => console.error(error));