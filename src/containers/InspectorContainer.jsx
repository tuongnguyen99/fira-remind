import React from 'react';
import Container from '../components/Common/Container';
import TabList from '../components/Common/TabList';
import InspectTabs from '../components/InspectTabs';

const InspectorContainer = ({ history }) => {
  return (
    <div className='Inspector'>
      <Container type='fluid'>
        {/* <TabList /> */}
        <InspectTabs uId={history.location.state.userId} />
      </Container>
    </div>
  );
};

export default InspectorContainer;
