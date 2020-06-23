import React, { useState, useEffect } from 'react';
import TableCustom from './Common/TableCustom';
import Axios from 'axios';
import MiniInput from './Common/MiniInput';
import Checkbox from './Common/Checkbox';
import SearchBox from './Common/SearchBox';
import StatisticTab from './StatisticTab';
import { API_URL } from '../constants';
import { getCurrentDate } from '../utils/time';
import { toast } from 'react-toastify';

const InspectTabs = ({ uId }) => {
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
    { name: 'sisothucte', title: 'sỉ số' },
    { name: 't_mon', title: 'Tên MH' },
    { name: 'nghihoc', title: 'Nghỉ học' },
    { name: 'gv_botiet', title: 'Gv bỏ tiết' },
    { name: 'gv_ditre', title: 'Gv lên lớp trễ' },
    { name: 'gv_nghisom', title: 'Gv cho nghỉ sớm' },
    { name: 'gv_saiten', title: 'Gv không đúng tên' },
    { name: 'gv_daykhongthongbao', title: 'GV dạy không báo lịch' },
    { name: 'chitiet', title: 'Chi tiết' },
    { name: 'thaoTac', title: 'Thao tác' },
  ];

  const [rowData, setRowData] = useState([]);

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
    const filtered = inspectData.filter((item) => {
      return item.tenMonHoc.includes(searchContent);
    });

    setInspectData(filtered);
  };

  const handleInputChange = ({ target }) => {
    const id = target.dataset.id;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const newData = [...inspectData];
    const index = inspectData.findIndex((d) => {
      return d.id == id;
    });

    newData[index][target.name] = value;
    setInspectData(newData);
  };

  const handleSaveClick = ({ target }) => {
    const id = target.dataset.id;
    const data = rowData[id];
    const item = inspectData.filter((d) => {
      return d.id.toString() === id;
    })[0];

    const body = {
      ...item,
      m_ttra: uId,
      giovipham: new Date().toLocaleString(),
    };

    delete body.id;

    Axios.post(`${API_URL}/inspect/evaluate`, body)
      .then((res) => {
        toast.info('Cập nhật thành công');
      })
      .catch((err) => {
        toast.error('Lỗi trong khi cập nhật dữ liệu, vui lòng thử lại sau!');
      });
  };

  const fetchInspectData = () => {
    Axios.get(`${API_URL}/inspect/list/${getCurrentDate()}`).then(
      ({ data }) => {
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
        sisothucte: () => {
          return (
            <MiniInput
              value={item.sisothucte || ''}
              name='sisothucte'
              type='number'
              data-id={item.id}
              onChange={handleInputChange}
            />
          );
        },
        nghihoc: () => {
          return (
            <Checkbox
              name='nghihoc'
              checked={item.nghihoc}
              data-id={item.id}
              onChange={handleInputChange}
            />
          );
        },
        gv_botiet: () => {
          return (
            <Checkbox
              name='gv_botiet'
              checked={item.gv_botiet}
              data-id={item.id}
              onChange={handleInputChange}
            />
          );
        },
        gv_ditre: () => {
          return (
            <Checkbox
              checked={item.gv_ditre}
              name='gv_ditre'
              data-id={item.id}
              onChange={handleInputChange}
            />
          );
        },
        gv_nghisom: () => {
          return (
            <Checkbox
              checked={item.gv_nghisom}
              name='gv_nghisom'
              data-id={item.id}
              onChange={handleInputChange}
            />
          );
        },
        gv_saiten: () => {
          return (
            <Checkbox
              checked={item.gv_saiten}
              name='gv_saiten'
              data-id={item.id}
              onChange={handleInputChange}
            />
          );
        },
        gv_daykhongthongbao: () => {
          return (
            <Checkbox
              checked={item.gv_daykhongthongbao}
              name='gv_daykhongthongbao'
              data-id={item.id}
              onChange={handleInputChange}
            />
          );
        },
        chitiet: () => {
          return (
            <MiniInput
              value={item.chitiet === 'null' ? '' : item.chitiet}
              name='chitiet'
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
      <nav className='breadcrumb'>
        <span className='breadcrumb-item active'>Ban thanh tra</span>
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
