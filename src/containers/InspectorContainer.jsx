import React from 'react';
import Container from '../components/Common/Container';
import TabList from '../components/Common/TabList';
import InspectTabs from '../components/InspectTabs';

const InspectorContainer = () => {
  return (
    <div className='Inspector'>
      <Container type='fluid'>
        {/* <TabList /> */}
        <InspectTabs />
      </Container>
    </div>
  );
};

export default InspectorContainer;
