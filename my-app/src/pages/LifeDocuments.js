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

export default function LifeDocumentsPage() {
  return (
    <>
      <Navbar />
      <div className="p-4 margins" style={{ minHeight: "100vh" }}>
        <h1 className="text-center mb-4">Important Life Documents</h1>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <Dropdown title="Legal Documents">
                <p>
                  <strong>Last Will and Testament:</strong> A document
                  specifying how your assets and belongings should be
                  distributed and managed after your passing.
                  <br />
                  <strong>Power of Attorney:</strong> Assign someone to manage
                  your affairs in case you're unable to make decisions.
                  <br />
                  <strong>Healthcare Directive:</strong> Outline your wishes for
                  medical care if you're unable to express them yourself.
                  <br />
                  <strong>Living Trust:</strong> Specify how you want your
                  assets distributed without going through probate court.
                </p>
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Financial Documents">
                <p>
                  <strong>Bank Account Information:</strong> Provide details of
                  bank accounts, including institution names, account numbers,
                  and contacts.
                  <br />
                  <strong>Insurance Policies:</strong> Life, health, auto, home,
                  or other insurance policies you hold, including policy numbers
                  and contacts.
                  <br />
                  <strong>Retirement Accounts:</strong> Details about retirement
                  savings plans like 401(k), IRAs, or pensions, including
                  beneficiaries.
                  <br />
                  <strong>Debts and Loans:</strong> Information about
                  outstanding debts, loans, or mortgages that need to be
                  settled.
                </p>
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Property Documents">
                <p>
                  <strong>Property Deeds:</strong> Documents proving ownership
                  of real estate, including homes, land, or other property.
                  <br />
                  <strong>Vehicle Titles:</strong> Ownership documents for
                  vehicles like cars, motorcycles, or boats.
                  <br />
                  <strong>Rental Agreements:</strong> If applicable, provide any
                  lease or rental agreements for properties you own or rent.
                </p>
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Personal Documents">
                <p>
                  <strong>Birth Certificates:</strong> Copies of birth
                  certificates for you and any family members.
                  <br />
                  <strong>Social Security Information:</strong> Social security
                  card or number.
                  <br />
                  <strong>Marriage or Divorce Certificates:</strong> Official
                  certificates for marriage or divorce.
                  <br />
                  <strong>Passports or Identification:</strong> Passports,
                  driver's licenses, or other government-issued identification.
                </p>
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Digital Accounts and Passwords">
                <p>
                  <strong>Email Accounts:</strong> A list of your email accounts
                  and instructions on how to access them.
                  <br />
                  <strong>Social Media Accounts:</strong> Provide details for
                  platforms like Facebook, Instagram, Twitter, etc., including
                  instructions on how to manage or close them.
                  <br />
                  <strong>Online Banking or Investment Accounts:</strong> Login
                  details for any online banking or investment accounts.
                  <br />
                  <strong>Password Manager:</strong> If you use a password
                  manager, share how to access it for a seamless transfer of all
                  your accounts.
                </p>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
