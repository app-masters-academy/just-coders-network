import axios from 'axios';

const baseUrl = 'http://api.justcoders.appmasters.io/dev';

const getPosts = () => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const options = {
        method: 'GET',
        headers: { 'token': auth.token },
        url: baseUrl + '/timeline'
    };
    return axios(options).then(response => response.data.data);
};

const createPost = (post) => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const options = {
        method: 'POST',
        headers: { 'token': auth.token },
        data: post,
        url: baseUrl + '/post'
    };
    return axios(options).then(response => response.data.data);
};

const addLike = (post) => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const options = {
        method: 'POST',
        headers: { 'token': auth.token },
        data: {},
        url: baseUrl + '/post/' + post.id + '/like'
    };
    return axios(options).then(response => response.data.data);
}


const signUp = (data) => {
    const profile = data.additionalUserInfo.profile;
    const body = {
        email: profile.email || data.user.email,
        name: profile.name || data.user.displayName || profile.login,
        network: "github",
        id: profile.id.toString(),
        photo: profile.avatar_url || data.user.photoURL
    };
    return axios.post(baseUrl + '/auth/loginsocial', body);
}

export {getPosts, createPost, signUp};
