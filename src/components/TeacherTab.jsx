import React, { useState, useEffect } from 'react';
import TableCustom from './Common/TableCustom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../constants';
import formatDate from '../utils/time';

const TeacherTab = ({ history }) => {
  const [data, setData] = useState([]);
  const tsColumns = [
    { name: 'thu', title: 'Thứ' },
    { name: 'm_mon', title: 'mã môn' },
    { name: 't_mon', title: 'Tên môn học' },
    { name: 't_bdau', title: 'Tiết bắt đầu' },
    { name: 's_tiet', title: 'Số tiết' },
    { name: 's_tiet', title: 'Số tiết' },
    { name: 'ngay', title: 'Ngày' },
    { name: 't_thai', title: 'Trạng thái' },
    { name: 'action', title: 'Thao tác' },
  ];

  const handleActionClick = ({ target }) => {
    const body = {
      id: target.id,
      status: target.value === 'Học' ? 'Nghỉ' : 'Học',
    };
    axios
      .post(`${API_URL}/teacher/changeSchedule`, body)
      .then(({ data }) => {
        console.log(data);

        toast.success('Cập nhật thành công');
        fetchData();
      })
      .catch((err) => {
        console.log(err);

        toast.error('Cập nhật thất bại, vui lòng thử lại sau!');
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const { username: teacherId } = history.location.state;
    axios
      .get(`${API_URL}/teacher/listteacher/${teacherId}`)
      .then(({ data }) => {
        const renderData = data.map((item) => {
          return {
            ...item,
            ngay: formatDate(item.ngay),

            action: () => {
              return (
                <button
                  key={item.id}
                  id={item.id}
                  value={item.t_thai}
                  onClick={handleActionClick}
                >
                  {item.t_thai === 'Học' ? 'Báo nghỉ' : 'Báo học'}
                </button>
              );
            },
          };
        });
        setData(renderData);
      })
      .catch(() => {
        setData([]);
      });
  };

  return (
    <div className='container-fluid p-0 mt-2'>
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
            Lịch
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
            Thay đổi
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
          <div className='mb-4'>
            <iframe
              src={`https://calendar.google.com/calendar/embed?src=${history.location.state.email.replace(
                '@',
                '%40'
              )}&ctz=Asia%2FHo_Chi_Minh?bgcolor=%23ffffff&showCalendars=0&amp;mode=WEEK&amp;showPrint=0" style="border-width:0"`}
              style={{
                border: 0,
                width: '100%',
                height: '90vh',
              }}
              scrolling='no'
            />
          </div>
        </div>

        <div
          className='tab-pane fade'
          id='contact'
          role='tabpanel'
          aria-labelledby='contact-tab'
        >
          <div className='table-responsive'>
            <TableCustom columns={tsColumns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherTab;
