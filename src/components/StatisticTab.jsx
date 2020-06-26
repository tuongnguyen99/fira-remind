import React from 'react';
import TableContainer from './Common/TableContainer/TableContainer';
import Table from './Common/Table';

const StatisticTab = ({ data }) => {
  const columns = [
    { name: 'thu', title: 'Thứ' },
    { name: 't_bdau', title: 'Tiết bắt đầu' },
    { name: 's_tiet', title: 'Số tiết' },
    { name: 'phong', title: 'Phòng' },
    { name: 'lop', title: 'Lớp' },
    { name: 's_so', title: 'Sỉ số đăng ký' },
    { name: 'sisothucte', title: 'Sỉ số' },
    { name: 't_mhoc', title: 'Tên môn học' },
    { name: 't_gvien', title: 'Họ tên Giảng viên' },
    { name: 'ngay', title: 'Ngày' },
    { name: 'chitiet', title: 'Chi tiết' },
    { name: 'tuan', title: 'Tuần' },
    { name: 'bttCapNhat', title: 'BTT cập nhật' },
    { name: 'nghihoc', title: 'Nghỉ học' },
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
