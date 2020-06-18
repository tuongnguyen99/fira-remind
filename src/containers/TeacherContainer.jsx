import React from 'react';
import TeacherTab from '../components/TeacherTab';

const TeacherContainer = ({ history }) => {
  return (
    <div>
      <TeacherTab history={history} />
    </div>
  );
};

export default TeacherContainer;
