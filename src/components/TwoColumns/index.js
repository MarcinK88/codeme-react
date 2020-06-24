import React from 'react';
import './style.css';

export default function TwoColumn(props) {
    return (
        <div class="two-column-grid">
            <div>
                {props.children[0]}
            </div>
            <div>
                {props.children[1]}
            </div>
        </div>
    )
}
