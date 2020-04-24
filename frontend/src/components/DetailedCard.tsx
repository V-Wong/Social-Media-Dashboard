import React from "react";

import "./css/detailed-card.css"

export default class DetailedCard extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="detailed-card">
                <div className="handle">
                    @Test
                </div>
                <div className="follower-count">
                    1234
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