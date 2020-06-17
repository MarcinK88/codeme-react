import React from 'react';
import './style.css';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chceZmiany: 'Hello World'
        }
    }


    render() {
        let chceZmiany = 'Hello World';
        function hanldeClick() {
            alert('Kliknales!');
            this.setState({
                chceZmiany: 'Siemanko'
            })
        }
        return (
            <div className='fajna-klasa'>
                <h1 onClick={hanldeClick.bind(this)}>{this.state.chceZmiany}</h1>
            </div>
        )
    }
}
export default HelloWorld;