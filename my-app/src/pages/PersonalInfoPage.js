import React, { useState } from 'react';

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-64 border border-gray-300 rounded-md">
      <button
        className="w-full px-4 py-2 text-left flex justify-between items-center hover:bg-gray-200"
        onClick={toggleDropdown}
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className="p-4 border-t">
          {children}
        </div>
      )}
    </div>
  );
};

export default function PersonalInfoPage() {
  return (
    <div className="p-4" style={{backgroundColor: 'gray'}}>
      <Dropdown title="Basic Information">
        <p>Full Name: Legal name, including any nicknames or aliases.<br></br>
        Date of Birth: To provide context about the user's age and life stage.<br></br>
        Place of Birth: The city or town where the user was born.<br></br>
        Current Address: Where the user currently resides (can be kept private if needed).</p>
      </Dropdown>

      <Dropdown title="Educational Background">
        <p></p>
      </Dropdown>

      <Dropdown title="Career Information">
        <p></p>
      </Dropdown>

      <Dropdown title="Family Introduction">
        <p></p>
      </Dropdown>
    </div>
  );
}