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

const PersonalInfoForm = ({ fields, onAdd }) => {
  const initialState = fields.reduce((acc, field) => {
    acc[field] = "";
    return acc;
  }, {});

  const [input, setInput] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(input);
    setInput(initialState); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div className="mb-3" key={field}>
          <input
            type="text"
            className="form-control"
            placeholder={field}
            value={input[field]}
            onChange={(e) => setInput({ ...input, [field]: e.target.value })}
          />
        </div>
      ))}
      <button type="submit" className="btn btn-primary w-100">
        Add
      </button>
    </form>
  );
};

const InteractiveList = ({ items, onDelete }) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {Object.entries(item).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {value}
            </div>
          ))}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default function PersonalInfoPage() {
  const [basicInfo, setBasicInfo] = useState([]);
  const [education, setEducation] = useState([]);
  const [careerInfo, setCareerInfo] = useState([]);
  const [familyInfo, setFamilyInfo] = useState([]);

  const addItem = (setter) => (item) => {
    setter((prevItems) => [...prevItems, item]);
  };

  const deleteItem = (setter) => (index) => {
    setter((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <>
      <Navbar />
      <div className="p-4 margins" style={{ minHeight: "100vh" }}>
        <h1 className="text-center mb-4">Personal Information</h1>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <Dropdown title="Basic Information">
                <PersonalInfoForm
                  fields={[
                    "Full Name",
                    "Date of Birth",
                    "Place of Birth",
                    "Current Address",
                  ]}
                  onAdd={addItem(setBasicInfo)}
                />
                <InteractiveList
                  items={basicInfo}
                  onDelete={deleteItem(setBasicInfo)}
                />
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Educational Background">
                <PersonalInfoForm
                  fields={[
                    "Schools Attended",
                    "Degrees and Certifications",
                    "Notable Achievements",
                    "Extracurricular Activities",
                  ]}
                  onAdd={addItem(setEducation)}
                />
                <InteractiveList
                  items={education}
                  onDelete={deleteItem(setEducation)}
                />
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Career Information">
                <PersonalInfoForm
                  fields={[
                    "Job History",
                    "Current Employment",
                    "Professional Achievements",
                    "Skills and Expertise",
                  ]}
                  onAdd={addItem(setCareerInfo)}
                />
                <InteractiveList
                  items={careerInfo}
                  onDelete={deleteItem(setCareerInfo)}
                />
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Family Introduction">
                <PersonalInfoForm
                  fields={[
                    "Immediate Family Members",
                    "Extended Family",
                    "Pet Information",
                    "Family Traditions",
                  ]}
                  onAdd={addItem(setFamilyInfo)}
                />
                <InteractiveList
                  items={familyInfo}
                  onDelete={deleteItem(setFamilyInfo)}
                />
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
