import React, { useState } from "react";

import axios from "axios";

const Playground = () => {
  const [url, setUrl] = useState("https://randomuser.me/api/");

  const [method, setMethod] = useState("GET");

  const [params, setParams] = useState('{ "gender": "male", "results": 5 }');

  const [headers, setHeaders] = useState(
    '{ "Content-Type": "application/json" }'
  );

  const [data, setData] = useState('{ "thing": "hello world" }');

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit info:", {
      url,
      method,
      params: JSON.parse(params),
      headers: JSON.parse(headers),
      data: JSON.parse(data),
    });
    try {
      const res = await axios({
        method,

        url,

        headers: JSON.parse(headers),

        params: JSON.parse(params),

        data: JSON.parse(data),
      });

      console.log("res.status🎃:", res.status);
      console.log("res.data 🇨🇦:", res.data);
    } catch (error) {
      console.log("ERROR.status:", error.response.status);
      console.log("ERROR.response:", error.response.data);
    }
  };

  return (
    <div className="pages-playground wrapper">
      <form onSubmit={onSubmit} style={{ marginBottom: "200px" }}>
        <div>
          <label>
            URL:
            <input
              style={{ width: "100%", marginTop: "4px", padding: "5px" }}
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
        </div>

        <div style={{ marginTop: "22px" }}>
          <label>
            Method:
            <select
              style={{
                width: "100%",
                marginTop: "4px",
                height: "40px",
                padding: "5px",
              }}
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="PATCH">PATCH</option>
              <option value="DELETE">DELETE</option>
            </select>
          </label>
        </div>

        <div style={{ marginTop: "22px" }}>
          <label>
            Params:
            <textarea
              style={{ width: "100%", marginTop: "4px", padding: "7px" }}
              rows={3}
              cols={60}
              value={params}
              onChange={(e) => setParams(e.target.value)}
            />
          </label>
        </div>

        <div style={{ marginTop: "22px" }}>
          <label>
            Headers:
            <textarea
              style={{ width: "100%", marginTop: "4px", padding: "7px" }}
              rows={3}
              cols={60}
              value={headers}
              onChange={(e) => setHeaders(e.target.value)}
            />
          </label>
        </div>

        <div style={{ marginTop: "22px" }}>
          <label>
            Body Data:
            <textarea
              style={{ width: "100%", marginTop: "4px", padding: "7px" }}
              rows={4}
              cols={60}
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </label>
        </div>

        <button
          style={{
            height: "40px",
            cursor: "pointer",
            width: "100%",
            marginTop: "22px",
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Playground;
