import React, { useState } from "react";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Playground = () => {
  const [url, setUrl] = useState("https://");

  const [method, setMethod] = useState("GET");

  const [params, setParams] = useState([
    { key: "thing", value: "asd", id: uuidv4() },
  ]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      const res = await axios({
        method: "POST",

        url:
          "https://app.epiloguewills.com/api/external/v1/questionnaire_link?app_id=1605825206",

        headers: { "x-api-key": "TyhM4qt6zpq15lh5wH4RKHK2gxhi4kRX" },

        // params: { app_id: "1605805123" },

        data: {
          email: "feldman238@gmail.com",
          province: "Ontario",
          hasPartner: "no",
          hasChildren: "yes",
          familyDisability: "yes",
          childrenOtherRelationship: "no",
          firstName: "Orlando",
          middleName: "Forest",
          lastName: "Schumacher",
        },
      });

      console.log("res.status🎃:", res.status);
      console.log("res.data 🇨🇦:", res.data);
      console.log("res.headers😈:", res.headers);
    } catch (error) {
      console.log("ERROR.status:", error.response.status);
      console.log("ERROR.response:", error.response.data);
    }
  };

  return (
    <div className="pages-playground wrapper">
      <form onSubmit={onSubmit}>
        <div>
          <label>
            URL:
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Method:
            <select value={method} onChange={(e) => setMethod(e.target.value)}>
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="PATCH">PATCH</option>
              <option value="DELETE">DELETE</option>
            </select>
          </label>
        </div>

        <div>
          {params.map((p, i) => {
            return (
              <div>
                <input
                  key={p.id}
                  type="text"
                  value={p.key}
                  onChange={(e) => setParams([e.target.value])}
                />
                :
                <input
                  key={p.id}
                  type="text"
                  value={p.value}
                  onChange={(e) => setParams([e.target.value])}
                />
              </div>
            );
          })}
          <button
            onClick={() => {
              setParams([...params, { key: "", value: "", id: uuidv4() }]);
            }}
          >
            Add Param +
          </button>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Playground;
