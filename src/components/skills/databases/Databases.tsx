import React from "react";

import "./Databases.sass";

const mongodb = "https://img.icons8.com/color/452/mongodb.png";
const mysql = "https://pngimg.com/uploads/mysql/mysql_PNG23.png";
const redis = "https://img.icons8.com/color/452/redis.png";

export class Databases extends React.Component {

    render() {
        return (
            <div>
                <h4 className="title">Databases</h4>
                <img src={ mongodb } title="MongoDB" alt="MongoDB Icon" height="56px" width="56px" />
                <img src={ mysql } title="MySQL" alt="MySQL Icon" height="56px" width="56px" />
                <img src={ redis } title="Redis" alt="Redis Icon" height="56px" width="56px" />
            </div>
        );
    }

}

