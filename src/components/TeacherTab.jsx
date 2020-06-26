import React, { useState, useEffect } from 'react';
import TableCustom from './Common/TableCustom';
import MiniInput from './Common/MiniInput';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../constants';
import { tsColumns } from '../constants';
import { formatDate, getCurrentDate } from '../utils/time';

console.log(formatDate);

const TeacherTab = ({ history }) => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const handleActionClick = ({ target }) => {
    const body = {
      id: target.id,
      status: target.value === 'Học' ? 'Nghỉ' : 'Học',
    };
    axios
      .post(`${API_URL}/teacher/changeSchedule`, body)
      .then(({ data }) => {
        toast.success('Cập nhật thành công');
        fetchData();
      })
      .catch((err) => {
        toast.error('Cập nhật thất bại, vui lòng thử lại sau!');
      });
  };

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
                  className={
                    item.t_thai === 'Học'
                      ? 'btn btn-warning'
                      : 'btn btn-success'
                  }
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

  const getRenderData = () => {
    if (!date) {
      return data;
    } else {
      return data.filter((d) => {
        console.log(d.ngay, date);
        return d.ngay.split('-').reverse().join('-') === date;
      });
    }
  };

  const handleDateChange = ({ target }) => {
    setDate(target.value);
  };

  const handleTodayBtnClick = () => {
    setDate(getCurrentDate());
  };

  const handleAllBtnClick = () => {
    setDate(null);
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
            <div className='my-2'>
              <MiniInput type='date' onChange={handleDateChange} />
              <button
                className='btn btn-info mx-2'
                onClick={handleTodayBtnClick}
              >
                Hôm nay
              </button>
              <button
                className={'btn mr-2' + !date}
                onClick={handleAllBtnClick}
              >
                Tất cả
              </button>
            </div>
            <TableCustom columns={tsColumns} data={getRenderData()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherTab;
