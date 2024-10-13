import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar"; 

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-3">
      <button
        className="w-100 btn btn-outline-secondary d-flex justify-content-between align-items-center p-3"
        onClick={toggleDropdown}
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className="p-3 border border-top-0">{children}</div>}
    </div>
  );
};

export default function PersonalInfoPage() {
  return (
    <>
      <Navbar />
      <div className="p-4 margins" style={{ minHeight: "100vh" }}>
        <h1 className="text-center mb-4">Personal Information</h1>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <Dropdown title="Basic Information">
                <p>
                  <strong>Full Name:</strong> Legal name, including any
                  nicknames or aliases.
                  <br />
                  <strong>Date of Birth:</strong> To provide context about the
                  user's age and life stage.
                  <br />
                  <strong>Place of Birth:</strong> The city or town where the
                  user was born.
                  <br />
                  <strong>Current Address:</strong> Where the user currently
                  resides (can be kept private if needed).
                </p>
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Educational Background">
                <p>
                  <strong>Schools Attended:</strong> Names of educational
                  institutions from elementary school to higher education.
                  <br />
                  <strong>Degrees and Certifications:</strong> Types of degrees
                  earned and any relevant certifications that showcase
                  expertise.
                  <br />
                  <strong>Notable Achievements:</strong> Honors, awards, or
                  recognitions received during their educational journey that
                  are significant.
                  <br />
                  <strong>Extracurricular Activities:</strong> Clubs, sports, or
                  organizations that the user participated in during their
                  education.
                </p>
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Career Information">
                <p>
                  <strong>Job History:</strong> A list of past jobs, including
                  roles, companies, and duration of employment.
                  <br />
                  <strong>Current Employment:</strong> Information about the
                  user's current job title and employer, including a brief
                  description of their role.
                  <br />
                  <strong>Professional Achievements:</strong> Significant
                  accomplishments, projects, or contributions to the workplace
                  that the user is proud of.
                  <br />
                  <strong>Skills and Expertise:</strong> A summary of key
                  skills, professional interests, and areas of expertise that
                  can highlight strengths in the job market.
                </p>
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Family Introduction">
                <p>
                  <strong>Immediate Family Members:</strong> Names and
                  relationships of family members, such as spouse, children,
                  parents, and siblings.
                  <br />
                  <strong>Extended Family:</strong> Information about
                  grandparents, aunts, uncles, cousins, etc., that may hold
                  special significance.
                  <br />
                  <strong>Pet Information:</strong> Names and details about pets
                  that were a part of the user’s life, contributing to their
                  family story.
                  <br />
                  <strong>Family Traditions:</strong> Unique customs or
                  traditions the family shares, providing insight into their
                  values and heritage.
                </p>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
