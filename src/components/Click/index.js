import React from 'react';

export default class Click extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: props.defaultValue // || 0,
        }
    }

    handleClick() {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }

    render() {
        const {clicks} = this.state;
        return (
            <div>
                <div>
                    <strong>{clicks}</strong>
                </div>
                <input onClick={this.handleClick.bind(this)} type="button" value="Kliknij!" />
            </div>
        )
    }
}

Click.defaultProps = { 
    defaultValue: 0
}