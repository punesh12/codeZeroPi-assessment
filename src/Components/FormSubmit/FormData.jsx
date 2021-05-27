import React, { useState } from "react";
import "./formData.css";

function FormData() {
  const [formData, setFormData] = useState([]);

  const [displayData, setDisplayData] = useState([]);

  console.log(formData);

  const submitData = (e) => {
    e.preventDefault();

    setDisplayData([
      ...displayData,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        image: formData.image,
      },
    ]);
  };

  console.log(displayData);

  return (
    <div>
      <form>
        <h2>Form</h2>
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => {
            e.persist();
            setFormData((prevUser) => ({
              ...prevUser,
              [e.target.name]: e.target.value,
            }));
          }}
        />

        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => {
            e.persist();
            setFormData((prevUser) => ({
              ...prevUser,
              [e.target.name]: e.target.value,
            }));
          }}
        />
        <input
          className="form-input"
          type="text"
          name="phone"
          placeholder="phone"
          onChange={(e) => {
            e.persist();
            setFormData((prevUser) => ({
              ...prevUser,
              [e.target.name]: e.target.value,
            }));
          }}
        />
        <input
          className="form-input"
          type="text"
          name="address"
          placeholder="address"
          onChange={(e) => {
            e.persist();
            setFormData((prevUser) => ({
              ...prevUser,
              [e.target.name]: e.target.value,
            }));
          }}
        />

        <input
          className="form-input"
          type="file"
          id="myFile"
          name="image"
          onChange={(e) => {
            e.persist();
            setFormData((prevUser) => ({
              ...prevUser,
              [e.target.name]: e.target.value,
            }));
          }}
        />
        <input
          className="form-btn"
          type="submit"
          value="Submit"
          onClick={submitData}
        />
      </form>

      {displayData == "" ? (
        <h2> No data : Fill the form and submit </h2>
      ) : (
        <div className="display-block">
          <h2> Form Data</h2>
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Image</th>
            </tr>
            {displayData.map((d) => (
              <tr>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>{d.address}</td>
                <td>
                  <img className="form-image" src={d.image} alt="" srcset="" />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default FormData;
