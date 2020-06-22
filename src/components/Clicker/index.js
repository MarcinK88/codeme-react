import React from 'react';

export default class Clicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        const { counter } = this.props;

        function handleClick() {
            this.setState({
                counter: this.state.counter + 1
            })
        }
        return (
            <div>
                <h1 onClick={handleClick.bind(this)}>

                    ile kliknięć: {this.state.counter}</h1>
            </div>
        )

    }



}