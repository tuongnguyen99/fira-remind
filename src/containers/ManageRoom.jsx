import React, { useEffect } from 'react';
import Table from '../components/Common/Table';
import RoomModal from '../components/RoomModal';
import MiniInput from '../components/Common/MiniInput';
import SearchBox from '../components/Common/SearchBox';
import { useState } from 'react';
import getCurrentDate from '../utils/time';
import Axios from 'axios';
import { API_URL } from '../constants';
const ManageRoom = () => {
  const columns = [
    { name: 't_phong', title: 'Phòng' },
    { name: 'khu', title: 'Khu' },
    { name: 'status', title: 'Trạng thái' },
  ];

  const getRoomStatus = (date) => {
    console.log(date);

    Axios.get(`${API_URL}/room/statusroom/${date || getCurrentDate()}`)
      .then(({ data }) => {
        console.log(data);
        setRooms(data);
      })
      .then((err) => {});
  };

  useEffect(() => {
    getRoomStatus();
  }, []);

  const [rooms, setRooms] = useState([]);

  const [searchInput, setSearchInput] = useState({
    searchDate: getCurrentDate(),
    searchText: '',
  });

  const [date, setDate] = useState(getCurrentDate);

  const handleInputChange = ({ target }) => {
    console.log(target.name);
    console.log(target.value);
  };

  const handleDateChange = ({ target }) => {
    setDate(target.value);
    getRoomStatus(target.value);
  };

  return (
    <div className='Mange-Room'>
      <div className='head'>
        <MiniInput
          name='searchDate'
          type='date'
          value={date}
          // dark
          placeHolder='dd-MM-yyyy'
          onChange={handleDateChange}
        />
        <SearchBox
          position='float-left'
          name='searchText'
          onChange={handleInputChange}
        />
        <button
          type='button'
          className='btn btn-primary float-right mb-2'
          data-toggle='modal'
          data-target='#exampleModalCenter'
        >
          <i className='fas fa-plus mr-2'></i>
          Thêm
        </button>
      </div>
      <div className='my-2 table-responsive' style={{ maxHeight: 460 }}>
        <Table theadType='dark' columns={columns} data={rooms}></Table>
      </div>
      <RoomModal />
    </div>
  );
};

export default ManageRoom;
