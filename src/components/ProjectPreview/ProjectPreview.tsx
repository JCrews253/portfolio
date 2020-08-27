import React from "react";
import "./ProjectPreview.css";

export interface ProjectPreviewProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectPreview = (props: ProjectPreviewProps) => {
  const OpenProject = () => {
    window.open(props.link);
  };

  return (
    <div className="projectPreview">
      <p className="projectPreview__title">{props.title}</p>
      <div className="projectPreview__img--container">
        <img
          className="projectPreview__img"
          src={props.image}
          onClick={OpenProject}
        />
        <p className="projectPreview__img--description">{props.description}</p>
      </div>
    </div>
  );
};

export default ProjectPreview;
