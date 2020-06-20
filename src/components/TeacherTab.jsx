import React from 'react';

const TeacherTab = ({ history }) => {
  console.log(history);

  return (
    <div className='container-fluid p-0'>
      <ul className='nav nav-tabs' id='myTab' role='tablist'>
        <li className='nav-item'>
          <a
            className='nav-link active'
            id='home-tab'
            data-toggle='tab'
            href='#home'
            role='tab'
            aria-controls='home'
            aria-selected='true'
          >
            Lịch
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link'
            id='contact-tab'
            data-toggle='tab'
            href='#contact'
            role='tab'
            aria-controls='contact'
            aria-selected='false'
          >
            Thay đổi
          </a>
        </li>
      </ul>
      <div className='tab-content' id='myTabContent'>
        <div
          className='tab-pane fade show active'
          id='home'
          role='tabpanel'
          aria-labelledby='home-tab'
        >
          <div className='mb-4'>
            <iframe
              src={`https://calendar.google.com/calendar/embed?src=${history.location.state.email.replace(
                '@',
                '%40'
              )}&ctz=Asia%2FHo_Chi_Minh?bgcolor=%23ffffff&showCalendars=0&amp;mode=WEEK&amp;showPrint=0" style="border-width:0"`}
              style={{
                border: 0,
                width: '100%',
                height: '90vh',
                margin: '10px',
              }}
              scrolling='no'
            />
          </div>
        </div>

        <div
          className='tab-pane fade'
          id='contact'
          role='tabpanel'
          aria-labelledby='contact-tab'
        >
          ...
        </div>
      </div>
    </div>
  );
};

export default TeacherTab;
