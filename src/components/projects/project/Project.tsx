import React from "react";

type ProjectProps = {
    title: string,
    description: string
    link: string
}

export class Project extends React.Component<ProjectProps> {

    render() {
        return (
            <div>
                <h4 className="title">{ this.props.title }</h4>
                <p>{ this.props.description }</p>
                <a className="project-link" href={ this.props.link } target="_blank" rel="noreferrer" >{ this.props.link }</a>
            </div>
        );
    }

}
