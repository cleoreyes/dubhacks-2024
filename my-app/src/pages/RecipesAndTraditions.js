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

export default function RecipesTraditionsPage() {
  return (
    <>
      <Navbar />
      <div className="p-4 margins" style={{ minHeight: "100vh" }}>
        <h1 className="text-center mb-4">Recipes and Traditions</h1>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <Dropdown title="Family Recipes">
                <p>
                  <strong>Signature Dishes:</strong> Share recipes for favorite
                  family dishes that have been passed down through generations.
                  <br />
                  <strong>Special Occasion Meals:</strong> Include recipes for
                  meals traditionally prepared for holidays, birthdays, or other
                  celebrations.
                  <br />
                  <strong>Comfort Foods:</strong> List recipes for your go-to
                  comfort foods that evoke warmth, nostalgia, and happy
                  memories.
                  <br />
                  <strong>Cooking Tips:</strong> Provide cooking techniques or
                  tips that you've learned and want to pass on to others in your
                  family.
                </p>
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Holiday Traditions">
                <p>
                  <strong>Seasonal Traditions:</strong> Detail how your family
                  celebrates major holidays, such as Christmas, Thanksgiving,
                  Hanukkah, or other cultural or religious observances.
                  <br />
                  <strong>Holiday Activities:</strong> Describe the activities,
                  decorations, or events your family participates in, such as
                  decorating the tree, caroling, or setting up a holiday altar.
                  <br />
                  <strong>Food Traditions:</strong> Highlight specific foods
                  that are tied to the holidays and how they’re prepared and
                  enjoyed.
                  <br />
                  <strong>Special Customs:</strong> Share any unique customs or
                  rituals your family follows during these celebrations.
                </p>
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Cultural Customs">
                <p>
                  <strong>Festivals and Celebrations:</strong> Document cultural
                  festivals or community celebrations that you and your family
                  participate in.
                  <br />
                  <strong>Rituals and Practices:</strong> Describe any
                  significant cultural or religious rituals, from weddings to
                  baptisms to other rites of passage.
                  <br />
                  <strong>Traditional Clothing:</strong> Note if there are any
                  traditional garments or attire worn for special occasions and
                  their meanings.
                  <br />
                  <strong>Passed Down Stories:</strong> Include family stories,
                  legends, or folklore that have been shared over the years.
                </p>
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Family Gatherings">
                <p>
                  <strong>Annual Reunions:</strong> Share information about
                  family reunions or gatherings that happen annually, like where
                  they're held, the significance of the location, and what
                  activities you do together.
                  <br />
                  <strong>Game Nights or Fun Activities:</strong> Provide
                  details about traditional games, puzzles, or activities your
                  family enjoys during these gatherings.
                  <br />
                  <strong>Family Stories and Anecdotes:</strong> Highlight
                  humorous or touching stories that are often retold at family
                  gatherings.
                  <br />
                  <strong>Favorite Recipes for Gatherings:</strong> Include
                  crowd-pleasing dishes or potluck recipes that are must-haves
                  for family events.
                </p>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
