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

export default function MediaMemoriesPage() {
  return (
    <>
      <Navbar />
      <div className="p-4 margins" style={{ minHeight: "100vh" }}>
        <h1 className="text-center mb-4">Media and Memories</h1>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <Dropdown title="Photo Albums">
                <p>
                  <strong>Family Photos:</strong> Upload or provide links to
                  family photos from childhood to adulthood, capturing special
                  family moments.
                  <br />
                  <strong>Travel Photos:</strong> Share images from your travels
                  and adventures around the world, highlighting key experiences.
                  <br />
                  <strong>Holiday and Celebrations:</strong> Photos from
                  birthdays, holidays, and important celebrations throughout
                  your life.
                  <br />
                  <strong>Friends and Social Life:</strong> Include pictures
                  with friends that capture fun moments and social experiences.
                </p>
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Video Memories">
                <p>
                  <strong>Personal Messages:</strong> Record video messages for
                  your loved ones to share your thoughts, feelings, and
                  reflections.
                  <br />
                  <strong>Special Events:</strong> Videos of important events
                  such as graduations, weddings, or family gatherings.
                  <br />
                  <strong>Travel Videos:</strong> Footage from your travels,
                  showcasing the places you visited and experiences you had.
                  <br />
                  <strong>Funny or Memorable Moments:</strong> Candid videos
                  that capture your personality and fun moments throughout your
                  life.
                </p>
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Favorite Music and Playlists">
                <p>
                  <strong>Favorite Songs:</strong> A collection of songs that
                  hold special meaning to you, with links to playlists (Spotify,
                  YouTube, etc.).
                  <br />
                  <strong>Memorable Concerts:</strong> Videos or photos from
                  concerts or live performances that were meaningful to you.
                  <br />
                  <strong>Playlists:</strong> Curate playlists for different
                  moods or themes that reflect your taste in music.
                  <br />
                  <strong>Family Songs:</strong> Music shared and loved by
                  family members that may bring comfort and nostalgia to those
                  you leave behind.
                </p>
              </Dropdown>
            </div>
            <div className="col-12">
              <Dropdown title="Journal and Letters">
                <p>
                  <strong>Personal Journal:</strong> Excerpts from your journal,
                  sharing your thoughts and experiences across different stages
                  of life.
                  <br />
                  <strong>Letters to Loved Ones:</strong> Handwritten or typed
                  letters to specific family members or friends that hold
                  special meaning.
                  <br />
                  <strong>Reflections on Life:</strong> Written reflections or
                  stories about your life, highlighting lessons you've learned
                  and cherished memories.
                  <br />
                  <strong>Advice for the Future:</strong> Words of wisdom or
                  advice you'd like to pass on to future generations.
                </p>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
