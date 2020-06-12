import React, { useState, useEffect } from 'react';
import TableCustom from './Common/TableCustom';
import Axios from 'axios';
import MiniInput from './Common/MiniInput';
import Checkbox from './Common/Checkbox';
import SearchBox from './Common/SearchBox';
import StatisticTab from './StatisticTab';

const InspectTabs = () => {
  const columns = [
    { name: 'thu', title: 'Thứ' },
    { name: 'tiet', title: 'Tiết' },
    { name: 'soTiet', title: 'Số Tiết' },
    { name: 'maMh', title: 'Mã môn học' },
    { name: 'maNv', title: 'Mã nhân viên' },
    { name: 'maNhom', title: 'Mã nhóm' },
    { name: 'phong', title: 'Phòng' },
    { name: 'lop', title: 'Lớp' },
    { name: 'siSoDk', title: 'Sỉ số ĐK' },
    { name: 'siSo', title: 'sỉ số' },
    { name: 'tenMonHoc', title: 'Tên MH' },
    { name: 'boTiet', title: 'Gv bỏ tiết' },
    { name: 'lenLopTre', title: 'Gv lên lớp trễ' },
    { name: 'choNghiSom', title: 'Gv cho nghỉ sớm' },
    { name: 'khongDungTen', title: 'Gv không đúng tên' },
    { name: 'khongBaoLich', title: 'GV dạy không báo lịch' },
    { name: 'chiTiet', title: 'Chi tiết' },
    { name: 'thaoTac', title: 'Thao tác' },
  ];

  const [inspectData, setInspectData] = useState([]);
  useEffect(() => {
    fetchInspectData();
    fetchStatisticData();
  }, []);

  const [statisticData, setStatisticData] = useState([]);

  const fetchInspectData = () => {
    Axios.get('https://5edf50379ed06d001696d08b.mockapi.io/api/inspect').then(
      ({ data }) => {
        console.log(data);

        setInspectData(data);
      }
    );
  };

  const fetchStatisticData = () => {
    Axios.get('https://5ee38cb15dd8b80016082397.mockapi.io/statistic').then(
      ({ data }) => {
        setStatisticData(data);
      }
    );
  };

  const mapToView = () => {
    return inspectData.map((item) => {
      return {
        ...item,
        siSo: () => {
          return <MiniInput name='siSo' />;
        },
        boTiet: () => {
          return <Checkbox name='boTiet' />;
        },
        lenLopTre: () => {
          return <Checkbox name='lenLopTre' />;
        },
        choNghiSom: () => {
          return <Checkbox name='choNghiSom' />;
        },
        khongDungTen: () => {
          return <Checkbox name='khongDungTen' />;
        },
        khongBaoLich: () => {
          return <Checkbox name='khongBaoLich' />;
        },
        chiTiet: () => {
          return <MiniInput name='khongBaoLich' style={{ width: 200 }} />;
        },
        thaoTac: () => {
          return <button className='btn btn-info'>Lưu</button>;
        },
      };
      // return null;
    });
  };

  return (
    <div className='mt-2'>
      <nav class='breadcrumb'>
        <span class='breadcrumb-item active'>Ban thanh tra</span>
      </nav>
      <ul className='nav nav-tabs' id='myTab' role='tablist'>
        <li className='nav-item'>
          <a
            className='nav-link active'
            id='home-tab'
            data-toggle='tab'
            href='#home'
            role='tab'
            aria-controls='home'
            aria-selected='true'
          >
            Theo dõi
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link'
            id='profile-tab'
            data-toggle='tab'
            href='#profile'
            role='tab'
            aria-controls='profile'
            aria-selected='false'
          >
            Thống kê
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link'
            id='contact-tab'
            data-toggle='tab'
            href='#contact'
            role='tab'
            aria-controls='contact'
            aria-selected='false'
          >
            Thống kê tổng
          </a>
        </li>
      </ul>
      <div className='tab-content' id='myTabContent'>
        <div
          className='tab-pane fade show active'
          id='home'
          role='tabpanel'
          aria-labelledby='home-tab'
        >
          <div className='mb-2'>
            <SearchBox />
          </div>
          <TableCustom columns={columns} data={mapToView()} theadType='dark' />
        </div>
        <StatisticTab data={statisticData} />
        <div
          className='tab-pane fade'
          id='contact'
          role='tabpanel'
          aria-labelledby='contact-tab'
        >
          ...
        </div>
      </div>
    </div>
  );
};

export default InspectTabs;
