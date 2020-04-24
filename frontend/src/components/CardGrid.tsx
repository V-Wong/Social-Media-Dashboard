import React from "react";
import DetailedCard from "./DetailedCard";

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
    }
]

export default class CardGrid extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            cards: SAMPLE_CARDS
        }
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