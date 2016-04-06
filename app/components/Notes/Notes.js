import React from 'react';

export default class Notes extends React.Component {
    render() {
        return (
            <div>
                <p>NOTES </p>
                <p> {this.props.notes}</p>

            </div>
        )

    }
}