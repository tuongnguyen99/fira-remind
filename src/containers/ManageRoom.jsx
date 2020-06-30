import React, { useEffect } from 'react';
import Table from '../components/Common/Table';
import RoomModal from '../components/RoomModal';
import MiniInput from '../components/Common/MiniInput';
import SearchBox from '../components/Common/SearchBox';
import { useState } from 'react';
import Axios from 'axios';
import { API_URL } from '../constants';
import { getCurrentDate } from '../utils/time';
import Select from '../components/Common/Select';

const ManageRoom = () => {
  const columns = [
    { name: 't_phong', title: 'Phòng' },
    { name: 'b_sang', title: 'Sáng' },
    { name: 'b_chieu', title: 'Chiều' },
    { name: 'b_toi', title: 'Tối' },
  ];

  const getRoomStatus = (date = getCurrentDate()) => {
    console.log(date);

    Axios.get(`${API_URL}/room/listemptyroom/${date || getCurrentDate()}`)
      .then(({ data }) => {
        setRooms(data);
      })
      .then((err) => {});
  };

  const translateData = () => {
    return rooms.map((item) => {
      return {
        ...item,
        b_sang: item.b_sang ? (
          <strong className='text-success'>Trống</strong>
        ) : (
          <strong className='text-warning'>Sử dụng</strong>
        ),
        b_chieu: item.b_chieu ? (
          <strong className='text-success'>Trống</strong>
        ) : (
          <strong className='text-warning'>Sử dụng</strong>
        ),
        b_toi: item.b_toi ? (
          <strong className='text-success'>Trống</strong>
        ) : (
          <strong className='text-warning'>Sử dụng</strong>
        ),
      };
    });
  };

  useEffect(() => {
    getRoomStatus();
  }, []);

  const [rooms, setRooms] = useState([]);

  const [searchInput, setSearchInput] = useState('');

  const [date, setDate] = useState(getCurrentDate());

  const handleInputChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const handleDateChange = ({ target }) => {
    setDate(target.value);
    getRoomStatus(target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    const filtered = rooms.map((r) => {
      return (
        r.t_phong.toLowerCase().includes(searchInput) ||
        r.khu.toLowerCase().includes(searchInput)
      );
    });
    setRooms(filtered);
  };

  return (
    <div className='Mange-Room'>
      <div className='d-flex align-items-center'>
        <MiniInput
          name='searchDate'
          type='date'
          value={getCurrentDate()}
          // dark
          placeHolder='dd-MM-yyyy'
          onChange={handleDateChange}
        />
        <Select
          items={[{ name: 'afd', value: 'adf' }]}
          style={{ margin: '0 10px' }}
        />
        <SearchBox
          name='searchText'
          value={searchInput}
          onChange={handleInputChange}
          onClick={handleSearchClick}
        />
        <button
          type='button'
          className='btn btn-primary ml-auto'
          data-toggle='modal'
          data-target='#exampleModalCenter'
        >
          <i className='fas fa-plus mr-2'></i>
          Thêm
        </button>
      </div>
      <div className='my-2 table-responsive' style={{ maxHeight: 460 }}>
        <Table
          theadType='dark'
          columns={columns}
          data={translateData()}
        ></Table>
      </div>
      <RoomModal />
    </div>
  );
};

export default ManageRoom;
