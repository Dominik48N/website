import React from "react";

import "./Projects.sass";

import { Project } from "./project";

export class Projects extends React.Component {

    x: String = "Heute ist ein \"toller\" Tag";

    render() {
        return (
            <header className="App-header">
                <h3>Projects</h3>

                <div>
                    <p>Here you can find some projects that I am currently working on or have been working on.</p>
                </div>

                <Project
                    title="Private-Pentests"
                    description="I like to work in IT security and also have a few things from IT security projects in my private pentests organization on github public."
                    link="https://github.com/Privat-Pentests"
                />

                <Project
                    title="Druffchat"
                    description="DruffChat is a messenger service. I have been developing it with two friends who are currently learning to program."
                    link="https://github.com/Druffchat"
                />

                <Project
                    title="RunGames"
                    description="RunGames is a developer studio that I'm currently building."
                    link="https://github.com/RunGamesDE"
                />

                <Project
                    title="ReoHost"
                    description="ReoHost is a hosting company that specializes in private customers. I work there as a full stack software engineer."
                    link="https://github.com/ReoHost"
                />

                <Project
                    title="Others"
                    description="You can find other public projects on my github profile."
                    link="https://github.com/Dominik48N"
                />
            </header>
        );
    }

}

