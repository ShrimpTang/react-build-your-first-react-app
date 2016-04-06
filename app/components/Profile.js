import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import React from 'react';
export default class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            notes: [1, 2, 3],
            bio: {
                name: 'Tyler McGinnis'
            },
            repos: ['a', 'b', 'c']
        }//{this.props.params.username}
    }

    render() {
        return (
            <h1>dqwdqw</h1>
            //<div className="row">
            //    <div className="col-md-4">
            //        <UserProfile username="cas" bio={this.state.bio} />
            //    </div>
            //    <div className="col-md-4">
            //        <Repos repos={this.state.repos}/>
            //    </div>
            //    <div className="col-md-4">
            //        <Notes notes={this.state.notes} />
            //    </div>
            //</div>
        )
    }
}