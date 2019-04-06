let postArray = null;

const getPosts = () => {
    return new Promise((resolve,reject) => {
        if(postArray){
            resolve(postArray);
        } else {
            reject('Nenhum post salvo');
        }

    });
};

export {getPosts};
