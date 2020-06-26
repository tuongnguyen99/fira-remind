import React, { useState, useEffect } from 'react';
import TableCustom from './Common/TableCustom';
import Axios from 'axios';
import MiniInput from './Common/MiniInput';
import Checkbox from './Common/Checkbox';
import SearchBox from './Common/SearchBox';
import StatisticTab from './StatisticTab';
import Select from './Common/Select';
import { API_URL } from '../constants';
import { getCurrentDate } from '../utils/time';
import { toast } from 'react-toastify';

//inspect/statistical

const InspectTabs = ({ uId }) => {
  const columns = [
    { name: 'thu', title: 'Thứ' },
    { name: 't_bdau', title: 'Tiết bắt đầu' },
    { name: 's_tiet', title: 'Số Tiết' },
    { name: 'm_mon', title: 'Mã môn học' },
    { name: 'm_gvien', title: 'Mã nhân viên' },
    { name: 't_gvien', title: 'Tên giảng viên' },
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

  const inspectSearchAttr = [
    { id: '0', name: 't_bdau', value: 'Tiết bắt đầu' },
    { id: '1', name: 'm_mon', value: 'Mã môn' },
    { id: '2', name: 'm_gvien', value: 'Mã giảng viên' },
    { id: '3', name: 'phong', value: 'Phòng' },
    { id: '4', name: 'lop', value: 'Lớp' },
    { id: '5', name: 't_mon', value: 'Tên môn' },
  ];

  useEffect(() => {
    fetchInspectData();
    fetchStatisticData();
  }, []);

  const [inspectData, setInspectData] = useState([]);
  const [statisticData, setStatisticData] = useState([]);
  const [searchAttr, setSearchAttr] = useState('t_bdau');
  const [searchContent, setSearchContent] = useState('');

  const handleSearchInputChange = ({ target }) => {
    setSearchContent(target.value);
  };

  const handleSearchAttrChange = ({ target }) => {
    setSearchAttr(target.options[target.selectedIndex].dataset.name);
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
    Axios.get(`${API_URL}/inspect/statistical`).then(({ data }) => {
      console.log(data);

      setStatisticData(data);
    });
  };

  const mapToView = (data) => {
    return data.map((item) => {
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

  const getRenderData = () => {
    const data = inspectData;
    if (searchContent.trim().length === 0) return mapToView(data);
    return mapToView(
      data.filter((i) => {
        return i[searchAttr]
          .toString()
          .toLowerCase()
          .includes(searchContent.toLowerCase());
      })
    );
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
          <div className='my-2 d-flex justify-content-end'>
            <Select
              items={inspectSearchAttr}
              style={{ margin: 0, marginRight: 6 }}
              onChange={handleSearchAttrChange}
            />
            <MiniInput
              onChange={handleSearchInputChange}
              value={searchContent}
              style={{ width: 200 }}
            />
          </div>
          <div className='table-responsive'>
            <TableCustom
              columns={columns}
              data={getRenderData(inspectData)}
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
