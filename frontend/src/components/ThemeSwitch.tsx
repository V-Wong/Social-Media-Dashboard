import React from "react";
import DetailedCard from "./DetailedCard";

import "./css/theme-switch.css"

export default class ThemeSwitch extends React.Component<any, any> {
    render() {
        return (
            <div className="switch-container">
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                </label>
            </div>
        )
    }
}