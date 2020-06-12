import React from 'react';
import TableContainer from './Common/TableContainer/TableContainer';
import Table from './Common/Table';

const StatisticTab = ({ data }) => {
  const columns = [
    { name: 'thu', title: 'Thứ' },
    { name: 'tietBd', title: 'Tiết bắt đầu' },
    { name: 'soTiet', title: 'Số tiết' },
    { name: 'phong', title: 'Phòng' },
    { name: 'lop', title: 'Lớp' },
    { name: 'siSoDk', title: 'Sỉ số đăng ký' },
    { name: 'siSo', title: 'Sỉ số' },
    { name: 'tenMh', title: 'Tên môn học' },
    { name: 'hoTenGv', title: 'Họ tên Giảng viên' },
    { name: 'ngay', title: 'Ngày' },
    { name: 'bttCapNhat', title: 'BTT cập nhật' },
    { name: 'nghiHoc', title: 'Nghỉ học' },
  ];
  return (
    <div
      className='tab-pane fade'
      id='profile'
      role='tabpanel'
      aria-labelledby='profile-tab'
    >
      <TableContainer>
        <Table columns={columns} data={data} theadType='dark' />
      </TableContainer>
    </div>
  );
};

export default StatisticTab;
