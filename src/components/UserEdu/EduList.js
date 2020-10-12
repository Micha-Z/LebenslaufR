import React from "react";
import EduItem from "./EduItem";

const EduList = (props) => {
  return (
    <div>
      <ul className="list-group">
        {props.edudata.map((item, index) => (
          <EduItem item={item} deleteItem={props.deleteItem} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default EduList;
