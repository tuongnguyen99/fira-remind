import React from 'react';

const TabList = ({ tabLabels, data }) => {
  return (
    <div className='Tab-List'>
      <nav>
        <div class='nav nav-tabs' id='nav-tab' role='tablist'>
          <a
            class='nav-item nav-link'
            id='nav-profile-tab'
            data-toggle='tab'
            href='#nav-profile'
            role='tab'
            aria-controls='nav-profile'
            aria-selected='false'
          >
            Profile
          </a>
          <a
            class='nav-item nav-link'
            id='nav-profile-tab'
            data-toggle='tab'
            href='#nav-profile'
            role='tab'
            aria-controls='nav-profile'
            aria-selected='false'
          >
            Profile
          </a>
          <a
            class='nav-item nav-link'
            id='nav-profile-tab'
            data-toggle='tab'
            href='#nav-profile'
            role='tab'
            aria-controls='nav-profile'
            aria-selected='false'
          >
            Profile
          </a>
        </div>
      </nav>
      <div class='tab-content' id='nav-tabContent'>
        <div
          class='tab-pane fade show active'
          id='nav-home'
          role='tabpanel'
          aria-labelledby='nav-home-tab'
        >
          ...
        </div>
        <div
          class='tab-pane fade'
          id='nav-profile'
          role='tabpanel'
          aria-labelledby='nav-profile-tab'
        >
          ...
        </div>
        <div
          class='tab-pane fade'
          id='nav-contact'
          role='tabpanel'
          aria-labelledby='nav-contact-tab'
        >
          ...
        </div>
      </div>
    </div>
  );
};

export default TabList;
