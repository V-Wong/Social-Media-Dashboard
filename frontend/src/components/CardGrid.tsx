import React from "react";
import DetailedCard from "./DetailedCard";

import "./css/card-grid.css"

export default class CardGrid extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            cards: [1, 2, 3, 4],
        }
    }

    render() {
        return (
            <div className="grid">
                {this.state.cards.map(card => (
                    <DetailedCard/>
                ))}
            </div>
        )
    }
}