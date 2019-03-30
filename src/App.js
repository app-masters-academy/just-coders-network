import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <div className="Header">
                    <h1>Just coders Network</h1>
                </div>
                <div style={{border: '1px solid gray'}}>
                    <h3>Postar agora</h3>
                    <input/>
                    <button>
                        Enviar
                    </button>
                </div>
                <div>
                    <p>Linus Torvalds</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis massa magna, eget
                        elementum diam pharetra sed. Morbi sagittis malesuada nisl, non tristique erat viverra at. Proin
                        pulvinar tempor justo et tincidunt. Sed id dui purus. Mauris varius sem ultrices risus feugiat
                        molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec a nisl hendrerit, rhoncus dui ut, bibendum diam. Nam ipsum lorem, egestas nec feugiat sed,
                        sollicitudin ut nisl. Nulla vulputate cursus libero a aliquet. Nulla nec rhoncus nunc. Nulla at
                        faucibus orci, ac egestas augue. Donec sed sodales ligula. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos himenaeos. Morbi id egestas justo, egestas
                        ultrices quam. Donec ultrices commodo luctus. Nulla eget quam ut felis hendrerit porttitor eget
                        viverra sem.
                    </p>
                    <div>
                        <p>Karla</p>
                        <p>Nulla facilisi. Curabitur tincidunt odio eu facilisis convallis. Maecenas commodo et dolor ac
                            blandit. Proin tincidunt mauris odio, vel blandit mauris finibus sit amet.</p>
                    </div>
                    <div>
                        <p>Jonny</p>
                        <p>Nulla facilisi. Curabitur tincidunt odio eu facilisis convallis. Maecenas commodo et dolor ac
                            blandit. Proin tincidunt mauris odio, vel blandit mauris finibus sit amet.</p>
                    </div>
                    <input/>
                    <button>
                        Comentar
                    </button>
                </div>
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

export default App;
