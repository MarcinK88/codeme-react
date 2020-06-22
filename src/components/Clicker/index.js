import React from 'react';

export default class Clicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    handleClick() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        const { counter } = this.props;


        return (
            <div>
                <h1 onClick={this.handleClick.bind(this)}>

                    ile kliknięć: {this.state.counter}</h1>
            </div>
        )

    }



}