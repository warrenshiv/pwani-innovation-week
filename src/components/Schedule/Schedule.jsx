import React, { useState } from 'react';
import '../../assets/scss/theme.scss';
import '../../assets/css/theme.css';

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('tab-1'); // Set the default active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      {/* Schedule */}
      <section id="schedule-section" className="schedule-section section">
        <div className="container">
          <h3 className="section-heading text-center mb-5">Schedule</h3>

          {/* Nav tabs */}
          <ul
            className="schedule-nav nav nav-pills nav-fill"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item me-2">
              <a
                className={`nav-link ${activeTab === 'tab-1' ? 'active' : ''}`}
                id="tab-1"
                onClick={() => handleTabClick('tab-1')}
                data-bs-toggle="tab"
                href="#tab-1-content"
                role="tab"
                aria-controls="tab-1-content"
                aria-selected={activeTab === 'tab-1'}
              >
                <span className="heading">Day 1</span>
                <span className="meta">(Mon 2, Oct)</span>
              </a>
            </li>
            <li className="nav-item me-2">
              <a
                className={`nav-link ${activeTab === 'tab-2' ? 'active' : ''}`}
                id="tab-2"
                onClick={() => handleTabClick('tab-2')}
                data-bs-toggle="tab"
                href="#tab-2-content"
                role="tab"
                aria-controls="tab-2-content"
                aria-selected={activeTab === 'tab-2'}
              >
                <span className="heading">Day 2</span>
                <span className="meta">(Tue 3, Oct)</span>
              </a>
            </li>
            <li className="nav-item me-2">
              <a
                className={`nav-link ${activeTab === 'tab-3' ? 'active' : ''}`}
                id="tab-3"
                onClick={() => handleTabClick('tab-3')}
                data-bs-toggle="tab"
                href="#tab-3-content"
                role="tab"
                aria-controls="tab-3-content"
                aria-selected={activeTab === 'tab-3'}
                >
                <span className="heading">Day 3</span>
                <span className="meta">(Wed 4, Oct)</span>
              </a>
            </li>
            <li className="nav-item me-2">
              <a
                className={`nav-link ${activeTab === 'tab-4' ? 'active' : ''}`}
                id="tab-4"
                onClick={() => handleTabClick('tab-4')}
                data-bs-toggle="tab"
                href="#tab-4-content"
                role="tab"
                aria-controls="tab-4-content"
                aria-selected={activeTab === 'tab-4'}
              >
                <span className="heading">Day 4</span>
                <span className="meta">(Thu 5, Oct)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'tab-5' ? 'active' : ''}`}
                id="tab-5"
                onClick={() => handleTabClick('tab-5')}
                data-bs-toggle="tab"
                href="#tab-5-content"
                role="tab"
                aria-controls="tab-5-content"
                aria-selected={activeTab === 'tab-5'}
              >
                <span className="heading">Day 5</span>
                <span className="meta">(Fri 6, Oct)</span>
              </a>
            </li>
          </ul>

          {/* Tab panes for Schedule */}
          <div className="schedule-tab-content tab-content">
            {/* day 1 */}
            <div
              className={`tab-pane ${
                activeTab === 'tab-1' ? 'active' : ''
              }`}
              id="tab-1-content"
              role="tabpanel"
              aria-labelledby="tab-1"
            >
              <h4 className="text-center py-5 text-muted">
                Day 1 Schedule Will be Updated Soon
              </h4>
            </div>
            {/* day 2 */}
            <div
              className={`tab-pane ${
                activeTab === 'tab-2' ? 'active' : ''
              }`}
              id="tab-2-content"
              role="tabpanel"
              aria-labelledby="tab-2"
            >
              <h4 className="text-center py-5 text-muted">
                Day 2 Schedule Will be Updated Soon
              </h4>
            </div>
            {/* day 3 */}
            <div
              className={`tab-pane ${
                activeTab === 'tab-3' ? 'active' : ''
              }`}
              id="tab-3-content"
              role="tabpanel"
              aria-labelledby="tab-3"
            >
              <h4 className="text-center py-5 text-muted">
                Day 3 Schedule Will be Updated Soon
              </h4>
            </div>
            {/* day 4 */}
            <div
              className={`tab-pane ${
                activeTab === 'tab-4' ? 'active' : ''
              }`}
              id="tab-4-content"
              role="tabpanel"
              aria-labelledby="tab-4"
            >
              <h4 className="text-center py-5 text-muted">
                Day 4 Schedule Will be Updated Soon
              </h4>
            </div>
            {/* Repeat for other days */}
          {/* day 5 */}
          <div
              className={`tab-pane ${
                activeTab === 'tab-5' ? 'active' : ''
              }`}
              id="tab-5-content"
              role="tabpanel"
              aria-labelledby="tab-5"
            >
              <h4 className="text-center py-5 text-muted">
                Day 5 Schedule Will be Updated Soon
              </h4>
          </div>
          </div>
            {/* Repeat for other days */}
          

          {/* Schedule CTA */}
          <div className="schedule-cta text-center mx-auto">
            <a
              href="https://afritickets.events/2270-pwani-innovation-week"
              className="btn btn-secondary btn-lg d-block d-md-inline-block"
              >
              Buy Tickets
            </a>
          </div>
        </div>
        {/* //container */}
      </section>
    </>

  )
};

export default Schedule;
