import React, { useState, useEffect } from 'react';
import InfoCardGroup from '../components/InfoCardGroup';
import {
  infoCardItems,
  teacherColumns,
  roomColumns,
  logsColumns,
  API_URL,
  emptyRoomColumns,
} from '../constants';
import Table from '../components/Common/Table';
import Spinner from '../components/Common/Spinner';
import TableContainer from '../components/Common/TableContainer/TableContainer';
import CardContainer from '../components/Common/CardContainer';
import CardHeader from '../components/Common/CardHeader';
import CardBody from '../components/Common/CardBody';
import SearchBox from '../components/Common/SearchBox';
import Select from '../components/Common/Select';
const axios = require('axios');

const InfoContainer = () => {
  const [infoActive, setInfoActive] = useState(infoCardItems[0]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchContent, setSearchContent] = useState('');
  const [searchAttr, setSearchAttr] = useState('n_sinh');

  useEffect(() => {
    getData(infoCardItems[0].apiPath);
  }, []);

  const handleItemChange = (item) => {
    console.log('onChange');
    setInfoActive(item);
    getData(item.apiPath);
  };

  const handleSearchChange = ({ target }) => {
    setSearchContent(target.value);
    console.log(target);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    console.log(searchContent, searchAttr);
  };

  const handleAttrChange = ({ target }) => {
    setSearchAttr(target.options[target.selectedIndex].dataset.name);
  };

  const getColumns = () => {
    switch (infoActive.id) {
      case '1':
        return teacherColumns;
      case '2':
        return emptyRoomColumns;
      case '3':
        return roomColumns;
      case '4':
        return logsColumns;
      default:
        return roomColumns;
    }
  };

  const getData = (path) => {
    setIsLoading(true);
    axios.get(`${API_URL}${path}`).then(({ data }) => {
      setData(data);
      setIsLoading(false);
    });
  };

  const getRenderData = () => {
    if (searchContent.trim.length === 0) {
      return data;
    } else {
      return data.filter((item) => {
        return item[searchAttr].includes(searchContent);
      });
    }
  };

  return (
    <div className='mb-2'>
      <InfoCardGroup
        items={infoCardItems}
        activeItem={infoActive}
        onItemChange={handleItemChange}
      />
      <CardContainer style={{ marginTop: 10 }}>
        <CardHeader title={infoActive.value}>
          <div className='search d-inline float-right'>
            <Select
              items={getColumns().map((item, i) => {
                return { id: i, value: item.title, name: item.name };
              })}
              style={{
                width: 140,
                height: 20,
                marginRight: 4,
                display: 'inline-block',
              }}
              onChange={handleAttrChange}
            />
            <SearchBox
              value={searchContent}
              onChange={handleSearchChange}
              onClick={handleSearchClick}
            />
          </div>
        </CardHeader>
        <CardBody>
          {!isLoading ? (
            <TableContainer style={{ height: 400 }}>
              <Table
                tableType='striped'
                theadType='dark sticky'
                columns={getColumns()}
                data={getRenderData()}
              />
            </TableContainer>
          ) : (
            <Spinner />
          )}
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default InfoContainer;
