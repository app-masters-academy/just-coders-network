import React, {Component} from 'react';
import './App.css';

const appGray = '#EFEFEF';
const appBlue = '#4990E2';

const styles = {
    grayBox: {
        marginTop: 15,
        padding: 20,
        backgroundColor: appGray,
        border: '1px solid gray'
    },
    box: {
        marginTop: 15,
        padding: 20,
        border: '1px solid gray'
    },
    blueButton: {
        marginTop: 10,
        borderWidth: 0,
        backgroundColor: appBlue,
        color: 'white',
        padding: 10
    }
};


class App extends Component {
    render() {
        return (
            <div>

                <div style={styles.grayBox}>
                    <h3 style={{color: appBlue}}>
                        Postar agora
                    </h3>
                    <input style={{width: '100%'}}/>
                    <button
                        style={styles.blueButton}>
                        Enviar
                    </button>
                </div>
                <div style={styles.grayBox}>
                    <p style={{color: appBlue}}>Linus Torvalds</p>
                    <p style={{color: appBlue}}>Ontém às 19:35</p>
                    <div style={{...styles.box, backgroundColor: 'white'}}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis massa magna, eget
                            elementum diam pharetra sed. Morbi sagittis malesuada nisl, non tristique erat viverra at.
                            Proin
                            pulvinar tempor justo et tincidunt. Sed id dui purus. Mauris varius sem ultrices risus
                            feugiat
                            molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus.
                            Donec a nisl hendrerit, rhoncus dui ut, bibendum diam. Nam ipsum lorem, egestas nec feugiat
                            sed,
                            sollicitudin ut nisl. Nulla vulputate cursus libero a aliquet. Nulla nec rhoncus nunc. Nulla
                            at
                            faucibus orci, ac egestas augue. Donec sed sodales ligula. Class aptent taciti sociosqu ad
                            litora torquent per conubia nostra, per inceptos himenaeos. Morbi id egestas justo, egestas
                            ultrices quam. Donec ultrices commodo luctus. Nulla eget quam ut felis hendrerit porttitor
                            eget
                            viverra sem.
                        </p>
                    </div>
                    <div>
                        <p style={{color: appBlue}}>Karla</p>
                        <div style={{...styles.box, backgroundColor: 'white', padding: 5}}>
                            <p>Nulla facilisi. Curabitur tincidunt odio eu facilisis convallis. Maecenas commodo et
                                dolor ac
                                blandit. Proin tincidunt mauris odio, vel blandit mauris finibus sit amet.</p>
                        </div>
                    </div>
                    <div>
                        <p style={{color: appBlue}}>Jonny</p>
                        <div style={{...styles.box, backgroundColor: 'white', padding: 5}}>
                            <p>Nulla facilisi. Curabitur tincidunt odio eu facilisis convallis. Maecenas commodo et
                                dolor ac
                                blandit. Proin tincidunt mauris odio, vel blandit mauris finibus sit amet.</p>
                        </div>
                    </div>
                    <input style={{width: '100%'}}/>
                    <button
                        style={styles.blueButton}>
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

export {styles};
export default App;
