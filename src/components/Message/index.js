import React from 'react';

export default class Message extends React.Component {
    render() {
        const { title, text, titleFunction, children } = this.props;
        return (
            <div>
                <h2>{title}</h2>
                <h3> {titleFunction && titleFunction()}</h3>
                <p>{text}</p>
                {children}
            </div>
        )
    }
}