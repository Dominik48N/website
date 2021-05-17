import React from "react";

import "./Links.sass";

export class Links extends React.Component {

    render() {
        return (
            <div className="container">
                <a href="/projects" className="left-text link">Projects</a>
                <a href="/skills" className="left-text link">Skills</a>
                <a href="mailto:admin@dominik48n.de" className="link">Contact</a>
            </div>
        );
    }

}
