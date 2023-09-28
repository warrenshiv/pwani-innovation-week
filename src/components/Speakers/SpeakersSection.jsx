import React, { useState } from "react";
import { speakers } from "../../data/constants";

const SpeakerItem = ({ name, organization }) => {
  return (
    <div className="col-6 col-lg-3 mb-4">
      <div className="card rounded-0">
        <a
          href="#modal-speaker-1"
          data-bs-toggle="modal"
          data-bs-target="#modal-speaker-1"
        ></a>
        <div className="card-body">
          <h5 className="card-title mb-2">{name}</h5>
          <div className="card-text mb-3">
            <div className="meta">{organization}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpeakersSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSpeakers, setFilteredSpeakers] = useState([]);

  const handleSearch = () => {
    const filtered = speakers.filter((speaker) =>
      speaker.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSpeakers(filtered);
  };

  const handleKeyUp = (e) => {
    const userInput = e.target.value.toLowerCase();
    setSearchQuery(userInput);

    const filtered = speakers.filter((speaker) =>
      speaker.name.toLowerCase().includes(userInput)
    );
    setFilteredSpeakers(filtered);
  };

  return (
    <>
      <section id="speakers-section" className="speakers-section section">
        <div className="container">
          <h3 className="section-heading text-center mb-3">Speakers</h3>
          <div className="section-intro text-center single-col-max mx-auto mb-5">
            Our Curated list of Speakers for the Pwani Innovation Week 2023
          </div>
          <div
            className="speakers-cta text-center py-3 d-flex"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              style={{
                width: "300px",
                height: "50px",
                padding: "5px",
              }}
              className="form-control"
              placeholder="Search Speakers"
              value={searchQuery}
              onChange={handleKeyUp}
            />

            <div>
              <button
                className="btn btn-primary btn-lg"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>

          <div className="row">
            {searchQuery
              ? filteredSpeakers.map((speaker) => (
                  <SpeakerItem
                    key={speaker.id}
                    name={speaker.name}
                    organization={speaker.organization}
                  />
                ))
              : speakers.length > 0
              ? speakers.map((speaker) => (
                  <SpeakerItem
                    key={speaker.id}
                    name={speaker.name}
                    organization={speaker.organization}
                  />
                ))
              : (
                  <h4 className="text-center py-5 text-muted">
                    Our Speaker List is getting ready; we will update soon!
                  </h4>
                )}
          </div>

          <div className="speakers-cta text-center py-3">
            <a
              className="btn btn-primary btn-lg"
              href="https://afritickets.events/2270-pwani-innovation-week"
            >
              Get Tickets
            </a>
          </div>
        </div>
      </section>
      <div className="container">
        <hr />
      </div>
    </>
  );
};

export default SpeakersSection;