import React from "react";

import { Languages } from "./languages";
import { Databases } from "./databases";
import { Frameworks } from "./frameworks";

export class Skills extends React.Component {

    render() {
        return (
            <header className="App-header">
                <div className="skills-container">
                    <Languages />
                    <Databases />
                    <Frameworks />
                </div>
            </header>
        );
    }

}

