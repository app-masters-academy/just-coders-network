import axios from 'axios';

const baseUrl = 'http://api.justcoders.appmasters.io/dev';

const getPosts = () => {
    return new Promise((resolve, reject) => {
        let postArray = localStorage.getItem('posts');
        if (postArray) {
            postArray = JSON.parse(postArray);
            setTimeout(() => resolve(postArray), 2000);
        } else {
            reject('Nenhum post salvo');
        }

    });
};

const createPost = (post) => {
    const auth = localStorage.getItem('')
    const options = {
        method: 'POST',
        headers: { 'token': 'application/x-www-form-urlencoded' },
        data: post,
        url: baseUrl + '/post'
    };

    return axios.post(baseUrl + '/post', post);
};



const signUp = (data) => {
    const profile = data.additionalUserInfo.profile;
    const body = {
        email: profile.email || data.user.email,
        name: profile.name || data.user.displayName || profile.login,
        network: "github",
        id: profile.id.toString(),
        photo: profile.avatar_url || data.user.photoURL
    };
    console.log(body);
    return axios.post(baseUrl + '/auth/loginsocial', body);
}

export {getPosts, createPost, signUp};
