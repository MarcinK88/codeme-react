import React from 'react';
import './style.css';

class HelloWorld extends React.Component {

    render() {
        let chceZmiany = "Hello World";
        function hanldeClick() {
            alert("Kliknales!");
            chceZmiany = 'Siemanko';
            
        }
        return (
            <div className="fajna-klasa">
                <h1 onClick={hanldeClick}>{chceZmiany}</h1>
            </div>
        )
    }
}
export default HelloWorld;