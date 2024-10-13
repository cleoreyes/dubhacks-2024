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

export default function MessagesPage() {
  return (
    <>
      <Navbar />
      <div className="p-4 margins" style={{ minHeight: "100vh" }}>
        <h1 className="text-center mb-4">Messages for Loved Ones</h1>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <Dropdown title="Personal Stories">
                <p>
                  <strong>Memories:</strong> Share your favorite memories with
                  your loved ones, like the day you met them, moments you
                  cherish, or experiences that shaped your relationship.
                  <br />
                  <strong>Lessons Learned:</strong> Pass down valuable life
                  lessons that you’ve learned along the way and want others to
                  carry forward.
                </p>
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Reflections and Stories">
                <p>
                  <strong>Life Reflections:</strong> Share your thoughts on
                  life, the things you've come to value most, and the moments
                  that have shaped your character.
                  <br />
                  <strong>Hardships and Growth:</strong> Reflect on the
                  difficult moments you’ve faced and how you overcame them, so
                  that your loved ones can draw strength from your resilience.
                  <br />
                  <strong>Life Philosophy:</strong> Offer reflections on your
                  personal beliefs, values, or a guiding philosophy that has
                  influenced your decisions and actions.
                  <br />
                  <strong>Funny or Touching Stories:</strong> Share lighthearted
                  or meaningful stories that capture who you were and how you
                  viewed the world. These can help others smile and remember you
                  fondly.
                </p>
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Advice for the Future">
                <p>
                  <strong>Life Guidance:</strong> Offer words of wisdom on how
                  to navigate life’s challenges, important decisions, or how to
                  pursue happiness.
                  <br />
                  <strong>Career Advice:</strong> Provide insights based on your
                  own career journey or share the dreams you hope they pursue.
                  <br />
                  <strong>Relationship Advice:</strong> Share advice on love,
                  friendships, and maintaining strong relationships.
                </p>
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Wishes for Their Future">
                <p>
                  <strong>Dreams for Loved Ones:</strong> Express your hopes for
                  their future, from personal aspirations to professional
                  achievements.
                  <br />
                  <strong>Messages of Encouragement:</strong> Write notes of
                  encouragement for moments when they might need support and
                  motivation.
                  <br />
                  <strong>Future Milestones:</strong> Leave special messages for
                  future occasions, like graduations, weddings, or birthdays.
                </p>
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Gratitude and Love">
                <p>
                  <strong>Thank You Notes:</strong> Express your gratitude for
                  the love and support you received throughout your life.
                  <br />
                  <strong>Messages of Love:</strong> Share heartfelt messages
                  reminding them of how much they mean to you, and how deeply
                  you cared for them.
                  <br />
                  <strong>Apologies:</strong> If there were any unresolved
                  issues or moments you wish to apologize for, this could be a
                  space for closure.
                </p>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
