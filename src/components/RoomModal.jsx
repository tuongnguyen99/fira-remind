import React from 'react';
import Input from './Common/Input';

const RoomModal = () => {
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
            >
              <span aria-hidden='true'>×</span>
            </button>
          </div>
          <div className='modal-body'>
            <form>
              <Input type='date' label='Ngày sử dụng' />
              <div className='form-group'>
                <label>Phòng</label>
                <select className='form-control'>
                  <option>AI.1</option>
                  <option>B2.4</option>
                  <option>C0.2</option>
                  <option>...</option>
                </select>
              </div>
              <Input type='text' label='Mục đích sử dụng' />
              <Input type='time' label='Thời gian bắt đầu' />
              <Input type='time' label='Thời gian kết thúc' />
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
            <button type='button' className='btn btn-primary'>
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
