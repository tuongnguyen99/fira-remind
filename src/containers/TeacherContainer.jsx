import React from 'react';
import Container from '../components/Common/Container';
import TeacherTab from '../components/TeacherTab';
import { Redirect } from 'react-router-dom';

const TeacherContainer = ({ history }) => {
  const checkAccess = () => {
    if (!history.location.state || !history.location.state.userId) {
      return false;
    }
    return true;
  };
  return checkAccess() ? (
    <Container type='fluid'>
      <TeacherTab history={history} />
    </Container>
  ) : (
    <Redirect to='/' />
  );
};

export default TeacherContainer;
