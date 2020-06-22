import React from 'react';

export default class TwoColumns extends React.Component {

    render() {
        const { children } = this.props;
        return (
            <div><p>
                <table>
                    <tr>
                        <td>{children[0]}</td>
                        <td>{children[1]}</td>
                    </tr>
                </table>
                </p>
            </div>
        )
    }

}