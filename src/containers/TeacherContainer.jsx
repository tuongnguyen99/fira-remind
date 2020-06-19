import React from 'react';
import Container from '../components/Common/Container';
import TeacherTab from '../components/TeacherTab';

const TeacherContainer = ({ history }) => {
  return (
    <Container type='fluid'>
      <TeacherTab history={history} />
    </Container>
  );
};

export default TeacherContainer;
