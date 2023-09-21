import React, { useState } from 'react'
import { schedule } from '../../data/constants'

const ScheduleItem = ({ time, title, venue, type }) => {
  return (
    <div className='item item-other'>
      <div className='meta'>
        <h4 className='time mb-3'>{time}</h4>
      </div>
      {/*//meta*/}
      <div className='content'>
        <h3 className='title mb-3'>{title}</h3>
        <div className='location mb-3'>
          <i className='fas fa-map-marker-alt me-2' />
          {venue}
        </div>
        <div className='desc'>{type}</div>
      </div>
      {/*//content*/}
    </div>
  )
}

const ScheduleSection = () => {
  const [activeTab, setActiveTab] = useState('tab-1') // Set the default active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <section id='schedule-section' className='schedule-section section'>
      <div className='container'>
        <h3 className='section-heading text-center mb-5'>Schedule</h3>
        {/* Nav tabs */}
        <ul
          className='schedule-nav nav nav-pills nav-fill'
          id='myTab'
          role='tablist'
        >
          {schedule.map((day) => (
            <li className='nav-item me-2' key={day.id}>
              <a
                className={`nav-link ${
                  activeTab === `tab-${day.id}` ? 'active' : ''
                }`}
                id={`tab-${day.id}`}
                onClick={() => handleTabClick(`tab-${day.id}`)}
                data-bs-toggle='tab'
                href={`#tab-${day.id}-content`}
                role='tab'
                aria-controls={`tab-${day.id}-content`}
                aria-selected={activeTab === `tab-${day.id}`}
              >
                <span className=''>Day {day.day}</span>
                <span className=''>({day.date})</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Tab panes for Schedule */}
        <div className='schedule-tab-content tab-content'>
          {schedule.map((day) => (
            <div
              className={`tab-pane ${
                activeTab === `tab-${day.id}` ? 'active' : ''
              }`}
              id={`tab-${day.id}-content`}
              role='tabpanel'
              aria-labelledby={`tab-${day.id}`}
              key={day.id}
            >
              <h4 className='text-center py-5 text-muted'>
                {day.program.length === 0
                  ? `Day ${day.day} Schedule Will be Updated Soon`
                  : `Day ${day.day} Schedule`}
              </h4>
              {day.program.map((event) => (
                <ScheduleItem
                  key={event.id}
                  time={event.time}
                  title={event.event_title}
                  venue={event.venue}
                  type={event.event_type}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Schedule CTA */}
        <div className='schedule-cta text-center mx-auto'>
          <a
            href='https://afritickets.events/2270-pwani-innovation-week'
            className='btn btn-secondary btn-lg d-block d-md-inline-block'
          >
            Buy Tickets
          </a>
        </div>
      </div>
      {/* //container */}
    </section>
  )
}

export default ScheduleSection