import React from "react";
import DetailedCard from "./DetailedCard";
import GitHub from 'github-api';

import "./css/card-grid.css"

const SAMPLE_CARDS = [
    {
        site: "Facebook",
        handle: "Test",
        followerCount: 100
    },
    {
        site: "Facebook",
        handle: "Test",
        followerCount: 100
    },
    {
        site: "Facebook",
        handle: "Test",
        followerCount: 100
    },
    {
        site: "Facebook",
        handle: "Test",
        followerCount: 100
    },
]

export default class CardGrid extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            cards: SAMPLE_CARDS
        }
    }

    componentDidMount() {
        const gh = new GitHub();
        const myProfile = gh.getUser("V-Wong");
        myProfile.listFollowers()
            .then(listFollowers => {
                const gitHubDetails = {
                    site: "GitHub",
                    handle: "V-Wong",
                    followerCount: listFollowers.data.length
                }

                this.state.cards[0] = gitHubDetails;
                this.setState({cards: this.state.cards});
            })
    }

    render() {
        return (
            <div className="grid">
                {this.state.cards.map(card => (
                    <DetailedCard handle={card.handle} followerCount={card.followerCount}/>
                ))}
            </div>
        )
    }
}