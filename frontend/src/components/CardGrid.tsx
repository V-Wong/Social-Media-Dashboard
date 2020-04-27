import React from "react";
import DetailedCard from "./DetailedCard";
import GitHub from 'github-api';

import "./css/card-grid.css"

const SAMPLE_CARDS = [
    {
        site: "Facebook",
        path: "facebook.com",
        handle: "Test",
        followerCount: 100,
        style: {
            borderTop: "5px solid red"
        }
    },
    {
        site: "Facebook",
        path: "facebook.com",
        handle: "Test",
        followerCount: 100,
        type: "instagram"
    },
    {
        site: "Facebook",
        path: "facebook.com",
        handle: "Test",
        followerCount: 100,
        style: {
            borderTop: "5px solid hsl(203, 89%, 53%",
        }
    },
    {
        site: "Facebook",
        path: "facebook.com",
        handle: "Test",
        followerCount: 100,
        style: {
            borderTop: "5px solid hsl(195, 100%, 50%)",
        }
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
                    path: "https://github.com/V-Wong/",
                    handle: "V-Wong",
                    followerCount: listFollowers.data.length,
                    style: {
                        borderTop: "5px solid red"
                    }
                }

                this.state.cards[0] = gitHubDetails;
                this.setState({cards: this.state.cards});
            })
    }

    render() {
        return (
            <div className="grid">
                {this.state.cards.map(card => (
                    <DetailedCard handle={card.handle} 
                     followerCount={card.followerCount} 
                     path={card.path}
                     styles={card.style}
                     type={card.type}
                    />
                ))}
            </div>
        )
    }
}