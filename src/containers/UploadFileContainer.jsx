import React, { useState } from 'react';
import Select from '../components/Common/Select';
import Input from '../components/Common/Input';
import File from '../components/Common/File';
import { toast } from 'react-toastify';

const UploadFileContainer = () => {
  const selectFileItems = [
    { id: '1', value: 'Liên kết Edusoft' },
    { id: '2', value: 'File excel' },
  ];

  const semesterItems = [
    { id: '1', value: 'Học kỳ 1' },
    { id: '2', value: 'Học kỳ 2' },
    { id: '3', value: 'Học kỳ 3' },
  ];

  const [formState, setFormState] = useState({});

  const handleIputChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Submitted!');
  };

  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-md-6'>
          <img
            className='img-thumbnail'
            src='./img-upload.svg'
            alt='upload illustrator'
          />
        </div>
        <div className='col-md-6 my-auto'>
          <form onSubmit={handleSubmit}>
            <Select
              name='inputType'
              label='Hình thức nhập liệu'
              labelIcon='fa-tools text-success'
              items={selectFileItems}
            />
            <Input
              name='edusoftLink'
              label='Liên kết'
              labelIcon='fa-link text-success'
              placeholder='https://sv.bdu.edu.vn/default.aspx?page=nhapmasv&flag=ThoiKhoaBieu'
            />
            <File
              name='teacherList'
              label='Danh sách giảng viên'
              labelIcon='fa-chalkboard-teacher text-success'
            />
            <File
              name='teacherList'
              label='Thời khóa biểu'
              labelIcon='fa-calendar text-success'
            />
            <Select
              name='inputType'
              label='Học kỳ'
              labelIcon='fa-tools text-success'
              items={semesterItems}
            />
            <button type='submit' class='btn btn-primary'>
              Hoàn tất
            </button>
            <button className='btn btn-outline-danger ml-2'>
              <i class='fas fa-question-circle mr-2'></i>
              Trợ giúp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadFileContainer;
