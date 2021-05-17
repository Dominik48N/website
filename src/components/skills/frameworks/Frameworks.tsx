import React from "react";

import "./Frameworks.sass";

const node = "https://www.pngrepo.com/download/303360/nodejs-logo.png";
const angular = "https://miro.medium.com/max/250/0*8sDp0XY021r81ut8.png";
const react = "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png";

const netty = "https://pbs.twimg.com/profile_images/1619736178/netty_icon_256px_400x400.png";
const spring = "https://img.icons8.com/color/452/spring-logo.png";

const flask = "https://i.pinimg.com/originals/87/bd/39/87bd39372d14ae2acda0121d9bc69d9c.png";

export class Frameworks extends React.Component {

    render() {
        return (
            <div>
                <h4 className="title">Frameworks / APIs</h4>
                <img src={ angular } title="Angular" alt="Angular Icon" height="56px" width="56px" />
                <img src={ react } title="React" alt="React Icon" height="56px" width="56px" />
                <img src={ netty } title="Netty" alt="Netty Icon" height="56px" width="56px" />
                <img src={ spring } title="Spring" alt="Spring Icon" height="56px" width="56px" />
                <img src={ flask } title="Flask" alt="Flask Icon" height="56px" width="56px" />
                <img src={ node } title="Node" alt="Node Icon" height="56px" width="56px" />
            </div>
        );
    }

}

