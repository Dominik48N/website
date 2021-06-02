import React from "react";

import "./Languages.sass";

const kotlin = "https://pics.freeicons.io/uploads/icons/png/18852341021548218200-512.png";
const java = "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/181_Java-512.png";
const python = "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png";
const javascript = "https://img.icons8.com/ios/452/javascript.png";
const typescript = "https://img.icons8.com/ios/452/typescript.png";
const html = "https://cdn0.iconfinder.com/data/icons/social-network-9/50/22-512.png";
const css = "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png";
const sass = "https://cdn.iconscout.com/icon/free/png-512/sass-226054.png";
const go = "https://user-images.githubusercontent.com/3613230/41752586-476b0b24-7596-11e8-95fe-8fd3faa21e8a.png";

export class Languages extends React.Component {

    render() {
        return (
            <div>
                <h4 className="title">Programming and scripting languages</h4>
                <img src={ kotlin } title="Kotlin" alt="Kotlin Icon" height="56px" width="56px" />
                <img src={ python } title="Python" alt="Python Icon" height="56px" width="56px" />
                <img src={ java } title="Java" alt="Java Icon" height="56px" width="56px" />
                <img src={ javascript } title="JavaScript" alt="JavaScript Icon" height="58px" width="58px" />
                <img src={ typescript } title="TypeScript" alt="TypeScript Icon" height="58px" width="58px" />
                <img src={ sass } title="SASS" alt="SASS Icon" height="56px" width="56px" />
                <img src={ html } title="HTML" alt="HTML Icon" height="56px" width="56px" />
                <img src={ css } title="CSS" alt="CSS Icon" height="56px" width="56px" />
                <img src={ go } title="GoLang" alt="Go Icon" height="56px" width="56px" />
            </div>
        );
    }

}

