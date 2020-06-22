import React from 'react';

export default class Text extends React.Component {
    render() {
        const { title, text, titleFunction, children } = this.props;
        return (
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        )
    }
}