import axios from 'axios';

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
    return new Promise((resolve, reject) => {
        // Pegar meu array de posts
        let postArray = localStorage.getItem('posts');
        if (postArray) {
            postArray = JSON.parse(postArray);
        } else {
            postArray = [];
        }
        // Editar meu array de posts -> inserir o post novo
        post.id = new Date().getTime();
        post.created_at = 'Agora';
        postArray.unshift(post);
        // Salvar novamente meu array de posts
        localStorage.setItem('posts', JSON.stringify(postArray));
        setTimeout(() => resolve(post), 2000);
    })
};

const baseUrl = 'http://asda'

const signUp = (user) => {
    axios.post('', user)
}

export {getPosts, createPost};
