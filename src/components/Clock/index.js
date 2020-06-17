import React from 'react';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };

        // setInterval(() => { //sposob 1

        //     this.setState({
        //         date: new Date()
        //     })

        // }, 1000)

        setInterval(this.updateTime.bind(this), 1000); //sposob 2

    }

    updateTime() { //sposob 2
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;
