import React from "react";
import { useState } from "react";
import Edulist from "./EduList";

const EduForm = (props) => {
  const [eduitem, setEduItem] = useState({});

  const [education, setEduData] = useState({ edudata: [] });

  const [id, setId] = useState(0);

  const onChange = (e) => {
    setEduItem({
      ...eduitem,
      [e.target.name]: e.target.value,
      id: id,
    });
  };

  const onSubmit = (e) => {
    setEduData({ edudata: [...education.edudata, eduitem] });
    props.addData(education.edudata);
    setId(id + 1);
    e.preventDefault();
  };

  const deleteItem = (item) => {
    const arr = education.edudata.filter((eduitem) => eduitem.id !== item.id);
    setEduData({ edudata: arr });

    // for (let i = 0; i < education.edudata.length; i++) {
    //   if (item.id === education.edudata[i].id) {
    //     console.log(education.edudata[i].id);
    //     setEduData(education.edudata.splice(i));
    //   }
    // }
    // setEduData(education.edudata.filter((eduitem) => eduitem.id !== item.id));
  };

  return (
    <div className="card my-3">
      <div className="container">
        <h2 className="py-3">Ausbildung</h2>
        <h5>Bitte geben sie ihren Bildungsweg ein</h5>
        <form className="form-group" onSubmit={onSubmit}>
          <div className="py-3">
            <label className="px-1">Studiengang / Ausbildung</label>
            <input
              onChange={onChange}
              id="degree"
              type="text"
              name="degree"
              className="form-control test p-2"
              placeholder="z.B. Informatik"
            />
          </div>
          <div className="py-2">
            <label htmlFor="" className="px-1">
              Name der Institution
            </label>
            <input
              onChange={onChange}
              id="place"
              type="text"
              name="place"
              className="form-control test"
              placeholder="z.B. Universität Heidelberg"
            />
          </div>
          <div className="row py-2">
            <div className="col-6">
              <label htmlFor="" className="px-1">
                Abschlussart
              </label>
              <input
                onChange={onChange}
                type="text"
                name="graduation"
                className="form-control"
                placeholder="z.B. Bachelor"
              />
            </div>
            <div className="col-6">
              <label htmlFor="" className="px-1">
                Noten Durchschnitt
              </label>
              <input
                onChange={onChange}
                type="number"
                name="grade"
                className="form-control"
                placeholder="z.B. 1.6"
              />
            </div>
          </div>
          <div className="py-2">
            <input
              type="submit"
              className="btn-primary form-control"
              value="Hinzufügen"
            />
          </div>
        </form>
        <Edulist edudata={education.edudata} deleteItem={deleteItem} />
      </div>
    </div>
  );
};

export default EduForm;
