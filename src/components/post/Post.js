import React from 'react';
import {styles, colors} from '../../styles/styles';

const Post = (props) => {
    return (
        <div style={styles.grayBox}>
            <p style={{color: colors.appBlue}}>{props.user_name}</p>
            <p style={{color: colors.appBlue}}>{props.time}</p>
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
                <p style={{color: colors.appBlue}}>Karla</p>
                <div style={{...styles.box, backgroundColor: 'white', padding: 5}}>
                    <p>Nulla facilisi. Curabitur tincidunt odio eu facilisis convallis. Maecenas commodo et
                        dolor ac
                        blandit. Proin tincidunt mauris odio, vel blandit mauris finibus sit amet.</p>
                </div>
            </div>
            <div>
                <p style={{color: colors.appBlue}}>Jonny</p>
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
    )
}

export default Post;
