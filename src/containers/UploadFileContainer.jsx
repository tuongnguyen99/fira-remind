import React, { useState } from 'react';
import Select from '../components/Common/Select';
import Input from '../components/Common/Input';
import File from '../components/Common/File';
import { toast } from 'react-toastify';
import { selectFileItems, semesterItems } from '../constants';
import Container from '../components/Common/Container';
import Row from '../components/Common/Row';
import axios from 'axios';
import ProgressStriped from '../components/Common/ProgressStriped';

const UploadFileContainer = () => {
  const [formState, setFormState] = useState({
    importTypeId: '1',
    teacherList: { name: '' },
    schedule: { name: '' },
  });

  const [uploadProgress, setUploadProgress] = useState({
    value: 0,
  });

  const handleInputChange = (e) => {
    const el = e.target;
    const importTypeId = el.options[el.selectedIndex].dataset.id;
    setFormState({ ...formState, importTypeId });
  };

  const handleFileChange = ({ target }) => {
    console.log(target.files[0]);
    console.log(target.name);

    setFormState({ ...formState, [target.name]: target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', formState.teacherList, formState.teacherList.name);
    formData.append('file', formState.schedule, formState.schedule.name);
    axios
      .post('http://localhost:4000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progress) => {
          const value = Math.round((progress.loaded / progress.total) * 100);
          setUploadProgress({
            value,
          });
        },
      })
      .then((res) => {
        toast.success('Upload file thành công');
      })
      .catch((err) => {
        toast.success('Lỗi upload file, vui lòng thử lại sau');
      });
  };

  return (
    <Container className='mt-5'>
      {/* <Row className='h-80'> */}
      {/* <div className='col-md-6 m-auto'>
          <img
            className='img-thumbnail'
            src='./img-upload.svg'
            alt='upload illustrator'
          />
        </div> */}
      {/* <div className='col-md-6 my-auto'> */}
      <form onSubmit={handleSubmit}>
        <Select
          name='importType'
          label='Hình thức nhập liệu'
          labelIcon='fa-tools text-success'
          items={selectFileItems}
          onChange={handleInputChange}
        />
        {formState.importTypeId === '1' ? (
          <Input
            name='edusoftLink'
            label='Liên kết'
            labelIcon='fa-link text-success'
            placeholder='https://sv.bdu.edu.vn/default.aspx?page=nhapmasv&flag=ThoiKhoaBieu'
          />
        ) : (
          <React.Fragment>
            <File
              fileName={formState.teacherList.name}
              name='teacherList'
              label='Danh sách giảng viên'
              labelIcon='fa-chalkboard-teacher text-success'
              onChange={handleFileChange}
            />

            <File
              name='schedule'
              label='Thời khóa biểu'
              fileName={formState.schedule.name}
              labelIcon='fa-calendar text-success'
              onChange={handleFileChange}
            />
            <Select
              name='schedule'
              label='Học kỳ'
              labelIcon='fa-tools text-success'
              items={semesterItems}
            />
          </React.Fragment>
        )}

        <ProgressStriped
          valueNow={uploadProgress.value}
          valueMax='100'
          valueMin='0'
        />
        <button type='submit' className='btn btn-primary'>
          Hoàn tất
        </button>
        <button className='btn btn-outline-danger ml-2'>
          <i className='fas fa-question-circle mr-2'></i>
          Trợ giúp
        </button>
      </form>
      {/* </div> */}
      {/* </Row> */}
      {/* {' '} */}
    </Container>
  );
};

export default UploadFileContainer;
