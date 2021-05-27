import React, { useState, useEffect } from "react";
import "./FetchData.css";

function FetchData() {
  const [apiData, setapiData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setapiData(json));
  }
  return (
    <div className="fetch-data">
      <h1>Data fetch from API using UseEffect</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>

        {apiData.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.title}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default FetchData;
