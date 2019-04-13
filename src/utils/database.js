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
    const auth = localStorage.getItem('auth');
    const options = {
        method: 'POST',
        headers: { 'token': auth.token },
        data: post,
        url: baseUrl + '/post'
    };
    axios(options).then(data => {
        console.log(data);
    })
    return null;
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
