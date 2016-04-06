import React from 'react';
export default class UserProfile extends React.Component {
    render() {
        return (
            <div>
                <p> USER PROFILE! </p>
                <p> Username: {this.props.username} </p>
                <p> Bio: {this.props.bio.name} </p>
            </div>
        )

    }
}