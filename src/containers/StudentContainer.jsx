import React from 'react';
import Container from '../components/Common/Container';

const StudentContainer = () => {
  return (
    <Container type='fluid'>
      <div className='row'>
        <iframe
          title='g'
          className='m-auto'
          src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&mode=WEEK&ctz=Asia%2FHo_Chi_Minh&src=bmN0dW9uZzk5QGdtYWlsLmNvbQ&src=dmkudmlldG5hbWVzZSNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%230B8043&showTitle=1'
          style={{ borderWidth: 0, width: '100%', height: '100vh' }}
          width={800}
          height={600}
          frameBorder={0}
          scrolling='no'
        />
      </div>
    </Container>
  );
};

export default StudentContainer;
