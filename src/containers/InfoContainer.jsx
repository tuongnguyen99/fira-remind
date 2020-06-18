import React, { useState, useEffect } from 'react';
import InfoCardGroup from '../components/InfoCardGroup';
import {
  infoCardItems,
  teacherColumns,
  roomColumns,
  logsColumns,
  API_URL,
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
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    console.log(infoActive);

    getData(infoActive.apiPath);
    console.log(searchContent);
  };

  const getColumns = () => {
    switch (infoActive.id) {
      case '1':
        return teacherColumns;
      case '2':
        return roomColumns;
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
      if (searchContent.trim().length === 0) {
        console.log(data);

        setData(data);
        setIsLoading(false);
      } else {
        const filtered = data.filter((item) => {
          return item.t_gvien ? item.t_gvien.includes(searchContent) : false;
        });
        console.log('====================================');
        console.log(filtered);
        console.log('====================================');
        console.log(data);

        setData(filtered);
        setIsLoading(false);
      }
      setIsLoading(false);
    });
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
                return { id: i, value: item.title };
              })}
              style={{
                width: 100,
                height: 20,
                marginRight: 4,
                display: 'inline-block',
              }}
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
            <TableContainer>
              <Table
                tableType='striped'
                theadType='dark sticky'
                columns={getColumns()}
                data={data}
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
