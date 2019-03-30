import React, {Component} from 'react';
import Header from './components/header/';
import PostForm from'./components/post/PostForm';
import {styles, colors} from './styles/styles';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <PostForm />

                <div>
                    <p>James Galvein Olive</p>
                    <p>
                        Nulla vulputate cursus libero a aliquet. Nulla nec rhoncus nunc. Nulla at
                        faucibus orci, ac egestas augue. Donec sed sodales ligula. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos himenaeos. Morbi id egestas justo, egestas
                        ultrices quam. Donec ultrices commodo luctus. Nulla eget quam ut felis hendrerit porttitor eget
                        viverra sem.
                    </p>
                    <div>
                        <p>Linus</p>
                        <p>Nulla facilisi. Curabitur tincidunt odio eu facilisis convallis. Maecenas commodo et dolor ac
                            blandit. Proin tincidunt mauris odio, vel blandit mauris finibus sit amet.</p>
                    </div>
                    <input/>
                    <button>
                        Comentar
                    </button>
                </div>
            </div>
        );
    }
}

export {styles};
export default App;
