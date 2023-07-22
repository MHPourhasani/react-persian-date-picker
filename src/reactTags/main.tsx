import React from "react";
import "../index.css";
import { TagContainerProps } from "./components/TagContainer/TagContainer.interface";
import TagContainer from "./components/TagContainer/TagContainer";

const ReactTags = (props: TagContainerProps) => {
  return (
    <TagContainer
      mode={props.mode}
      theme={props.theme}
      maxTags={props.maxTags}
      tagsList={props.tagsList}
      title={props.title}
      inputPlaceholder={props.inputPlaceholder}
      inputClassName={props.inputClassName}
      addToCategoryOnClick={props.addToCategoryOnClick}
      dropDownContainerClassName={props.dropDownContainerClassName}
      tagsContainerClassName={props.tagsContainerClassName}
    />
  );
};

export default ReactTags