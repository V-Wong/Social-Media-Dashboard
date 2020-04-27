import React from "react";

import "./css/detailed-card.css"

export default class DetailedCard extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);

        return (
            <div className={`detailed-card ${this.props.type}`}
             onClick={() => window.location.href = this.props.path}
             style={this.props.styles}
            >
                <div className="handle">
                    @{this.props.handle}
                </div>
                <div className="follower-count">
                    {this.props.followerCount}
                </div>
                <div className="follower-label">
                    FOLLOWERS
                </div>
                <div className="change">
                    +500 today
                </div>
            </div>
        )
    }
}