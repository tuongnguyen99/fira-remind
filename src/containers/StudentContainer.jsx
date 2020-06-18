import React from 'react';
import Container from '../components/Common/Container';

const StudentContainer = ({ history }) => {
  console.log(history);

  return (
    <Container type='fluid'>
      <div className='row'>
        <iframe
          src={`https://calendar.google.com/calendar/embed?src=${history.location.state.username}%40student.bdu.edu.vn&ctz=Asia%2FHo_Chi_Minh?bgcolor=%23ffffff&showCalendars=0&amp;mode=WEEK&amp;showPrint=0" style="border-width:0"`}
          style={{
            border: 0,
            width: '100vw',
            height: '90vh',
            margin: '10px',
          }}
          frameBorder={0}
          scrolling='no'
        />
      </div>
    </Container>
  );
};

export default StudentContainer;
