import React, { Fragment } from "react";

const EduItem = (props) => {
  const { degree, grade, graduation, place } = props.item;

  const deleteItem = () => {
    props.deleteItem(props.item);
  };
  return (
    <Fragment>
      <div className="row px-2">
        <div className="alert alert-primary py-2" role="alert">
          Abschluss: {graduation} | Studiengang: {degree} | Note: {grade} | Ort:
          {place}
          <button className="btn ml-3" onClick={deleteItem}>
            Löschen
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default EduItem;
