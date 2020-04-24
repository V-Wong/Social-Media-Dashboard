import React from "react";
import DetailedCard from "./DetailedCard";

import "./css/theme-switch.css"

export default class ThemeSwitch extends React.Component<any, any> {
    toggleLightTheme() {
        document.getElementsByTagName("body")[0].classList.toggle("light");
        document.getElementsByClassName("top-bar")[0].classList.toggle("light");
        
        for (let element of document.getElementsByClassName("detailed-card")) {
            element.classList.toggle("light");
        }
    }

    render() {
        return (
            <div className="switch-container">
                <label className="switch">
                    <input type="checkbox" onClick={this.toggleLightTheme}/>
                    <span className="slider"></span>
                </label>
            </div>
        )
    }
}