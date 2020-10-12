import React from "react";
import { useState } from "react";

const DataForm = (props) => {
  const [user, setUserData] = useState({
    userdata: { name: "", email: "", address: "" },
  });

  const onChange = (e) => {
    setUserData({
      userdata: { ...user.userdata, [e.target.name]: e.target.value },
    });
  };
  const onSubmit = (e) => {
    props.addData(user);
    console.log(user);
    e.preventDefault();
  };

  return (
    <div className="card">
      <div className="container">
        <h2 className="py-3">Persönliche Daten</h2>
        <h5>Bitte geben Sie ihre persönlichen Daten ein</h5>
        <form className="form-group" onSubmit={onSubmit}>
          <div className="py-3">
            <label htmlFor="" className="px-1">
              Name
            </label>
            <input
              onChange={onChange}
              type="text"
              name="name"
              className="form-control p-2"
              placeholder="Name"
            />
          </div>
          <div className="py-2">
            <label htmlFor="" className="px-1">
              E-Mail
            </label>
            <input
              onChange={onChange}
              type="text"
              name="email"
              className="form-control "
              placeholder="max.musterman@muster.com"
            />
          </div>
          <div className="py-2">
            <label htmlFor="" className="px-1">
              Addresse
            </label>
            <input
              onChange={onChange}
              type="text"
              name="address"
              className="form-control"
              placeholder="Muster Straße 42"
            />
          </div>
          <div className="py-2">
            <input
              type="submit"
              className="btn-primary form-control"
              value="Speichern"
            />
          </div>
        </form>
        {/* <div className="alert alert-success" style={display:none} role="alert">
          Ihre Daten wurden gespeichert!
        </div> */}
      </div>
    </div>
  );
};

export default DataForm;
