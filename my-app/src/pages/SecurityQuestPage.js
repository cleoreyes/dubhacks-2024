import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const SecurityQuestPage = () => {
  return (
    <div className="center">
      <h1 className="fw-bold">Security Question:</h1>
      <p>What is Karen's maiden mother's name?</p>

      <div>
        <textarea style={{ width: "300px", height: "100px" }}> </textarea>
      </div>

      <Link to="/homepage">
        <div>
          <button type="button" class="btn btn-secondary mt-2">
            Submit
          </button>
        </div>
      </Link>
    </div>
  );
};

export default SecurityQuestPage;
