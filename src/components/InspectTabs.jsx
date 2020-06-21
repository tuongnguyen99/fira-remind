import React, { useState, useEffect } from 'react';
import TableCustom from './Common/TableCustom';
import Axios from 'axios';
import MiniInput from './Common/MiniInput';
import Checkbox from './Common/Checkbox';
import SearchBox from './Common/SearchBox';
import StatisticTab from './StatisticTab';
import { API_URL } from '../constants';
import getCurrentDate from '../utils/time';

const InspectTabs = () => {
  const columns = [
    { name: 'thu', title: 'Thứ' },
    { name: 't_bdau', title: 'Tiết bắt đầu' },
    { name: 's_tiet', title: 'Số Tiết' },
    { name: 'm_mon', title: 'Mã môn học' },
    { name: 'm_gvien', title: 'Mã nhân viên' },
    { name: 'maNhom', title: 'Mã nhóm' },
    { name: 'phong', title: 'Phòng' },
    { name: 'lop', title: 'Lớp' },
    { name: 's_so', title: 'Sỉ số ĐK' },
    { name: 'siSo', title: 'sỉ số' },
    { name: 't_mon', title: 'Tên MH' },
    { name: 'boTiet', title: 'Gv bỏ tiết' },
    { name: 'lenLopTre', title: 'Gv lên lớp trễ' },
    { name: 'choNghiSom', title: 'Gv cho nghỉ sớm' },
    { name: 'khongDungTen', title: 'Gv không đúng tên' },
    { name: 'khongBaoLich', title: 'GV dạy không báo lịch' },
    { name: 'chiTiet', title: 'Chi tiết' },
    { name: 'thaoTac', title: 'Thao tác' },
  ];

  const [rowData, setRowData] = useState([]);
  const [inputData, setInputData] = useState({});

  const [inspectData, setInspectData] = useState([]);
  useEffect(() => {
    fetchInspectData();
    fetchStatisticData();
  }, []);

  const [searchContent, setSearchContent] = useState('');

  const [statisticData, setStatisticData] = useState([]);

  const handleSearchInputChange = ({ target }) => {
    setSearchContent(target.value);
  };

  const handleSearchClick = () => {
    console.log(searchContent);
    // await fetchInspectData();
    const filtered = inspectData.filter((item) => {
      console.log(item);

      return item.tenMonHoc.includes(searchContent);
    });

    setInspectData(filtered);
  };

  const handleInputChange = ({ target }) => {
    console.log(target.dataset.id);
    console.log(target.type);
    const data = rowData[target.dataset.id] || {};
    setRowData({
      ...rowData,
      [target.dataset.id]: { ...data, [String(target.name)]: target.checked },
    });

    if (target.type === 'checkbox') {
      console.log(target.checked);
      console.log(target.name);

      console.log(data);

      // setRowData({...rowData, [id]: {[target.name]: } })
      return;
    }
    console.log(target.value);
  };

  const handleSaveClick = ({ target }) => {
    console.log(target.dataset.id);
    console.log(rowData[target.dataset.id]);
  };

  const fetchInspectData = () => {
    Axios.get(`${API_URL}/inspect/list/${'2019-09-02'}`).then(({ data }) => {
      console.log(data);
      setInspectData(data);
    });
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
          return (
            <MiniInput
              name='siSo'
              data-id={item.id}
              onChange={handleInputChange}
            />
          );
        },
        boTiet: () => {
          return (
            <Checkbox
              name='boTiet'
              data-id={item.id}
              onChange={handleInputChange}
            />
          );
        },
        lenLopTre: () => {
          return (
            <Checkbox
              name='lenLopTre'
              data-id={item.id}
              onChange={handleInputChange}
            />
          );
        },
        choNghiSom: () => {
          return (
            <Checkbox
              name='choNghiSom'
              data-id={item.id}
              onChange={handleInputChange}
            />
          );
        },
        khongDungTen: () => {
          return (
            <Checkbox
              name='khongDungTen'
              data-id={item.id}
              onChange={handleInputChange}
            />
          );
        },
        khongBaoLich: () => {
          return (
            <Checkbox
              name='khongBaoLich'
              data-id={item.id}
              onChange={handleInputChange}
            />
          );
        },
        chiTiet: () => {
          return (
            <MiniInput
              name='khongBaoLich'
              style={{ width: 200 }}
              data-id={item.id}
              onChange={handleInputChange}
            />
          );
        },
        thaoTac: () => {
          return (
            <button
              className='btn btn-info'
              data-id={item.id}
              onClick={handleSaveClick}
            >
              Lưu
            </button>
          );
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
          <div className='my-2 d-flex'>
            <SearchBox
              onChange={handleSearchInputChange}
              value={searchContent}
              onClick={handleSearchClick}
            />
          </div>
          <div className='table-responsive'>
            <TableCustom
              columns={columns}
              data={mapToView()}
              theadType='dark'
            />
          </div>
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
