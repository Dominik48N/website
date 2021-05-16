import React from "react";

import { Information } from "../information";
import { Links } from "../links";

export class Home extends React.Component {

    render() {
        return (
            <div>
                <header className="App-header">
                    <Information />
                    <Links />
                </header>
            </div>
        );
    }

}
