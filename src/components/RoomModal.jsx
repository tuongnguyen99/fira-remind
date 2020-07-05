import React, { useState } from 'react';
import Input from './Common/Input';
import { toast } from 'react-toastify';
import Axios from 'axios';
import { API_URL } from '../constants';

const RoomModal = ({ rooms }) => {
  const renderRoom = ['', ...rooms];

  const [input, setInput] = useState({ check: 'b_sang' });

  const handleInputChange = ({ target }) => {
    const value = target.value;
    setInput({ ...input, [target.name]: value });
  };

  const handleSave = () => {
    if (!input.room || !input.date || !input.bc) {
      toast.error('Vui lòng nhập đầy đủ thông tin');
    } else {
      Axios.post(`${API_URL}/room/arrangeroom`, {
        t_phong: input.room,
        ngay: input.date,
        n_dung: input.bc,
        b_sang: input.check === 'b_sang',
        b_chieu: input.check === 'b_chieu',
        b_toi: input.check === 'b_toi',
      })
        .then(({ data }) => {
          toast.success('Đã lưu vào cơ sở dữ liệu');
        })
        .catch((err) => {
          toast.error('Có lỗi xãy ra, vui lòng thử lại!');
        });
    }
  };

  const handleFormReset = () => {
    // setInput({});
  };
  return (
    <div
      className='modal fade'
      id='exampleModalCenter'
      tabIndex={-1}
      role='dialog'
      aria-labelledby='exampleModalCenterTitle'
      style={{ display: 'none' }}
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLongTitle'>
              Thêm ...
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={handleFormReset}
            >
              <span aria-hidden='true'>×</span>
            </button>
          </div>
          <div className='modal-body'>
            <form>
              <Input
                type='date'
                label='Ngày sử dụng'
                name='date'
                onChange={handleInputChange}
              />
              <div className='form-group'>
                <label>Phòng</label>
                <select
                  className='form-control'
                  name='room'
                  onChange={handleInputChange}
                >
                  {renderRoom.map((room) => {
                    return <option key={room.id}>{room.t_phong}</option>;
                  })}
                </select>
              </div>
              <Input
                name='bc'
                type='text'
                label='Mục đích sử dụng'
                onChange={handleInputChange}
              />
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='check'
                  id='inlineRadio1'
                  value='b_sang'
                  onChange={handleInputChange}
                  checked
                />
                <label class='form-check-label' for='inlineRadio1'>
                  Buổi sáng
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='check'
                  id='inlineRadio2'
                  value='b_chieu'
                  onChange={handleInputChange}
                />
                <label class='form-check-label' for='inlineRadio2'>
                  Buổi chiều
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='check'
                  id='inlineRadio3'
                  value='b_toi'
                  onChange={handleInputChange}
                />
                <label class='form-check-label' for='inlineRadio3'>
                  Buổi tối
                </label>
              </div>
              {/* <Input type='time' label='Thời gian bắt đầu' />
              <Input type='time' label='Thời gian kết thúc' /> */}
            </form>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >
              Hủy
            </button>
            <button
              type='button'
              className='btn btn-primary'
              onClick={handleSave}
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
