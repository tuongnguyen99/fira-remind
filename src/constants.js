import { getCurrentDate } from './utils/time';

export const API_URL = 'http://localhost:4000';

export const selectFileItems = [
  { id: '1', value: 'Liên kết Edusoft' },
  { id: '2', value: 'File excel' },
];

export const loginType = [
  { id: '1', value: 'Giảng viên', nameInDb: 'TEACHER', href: '/teacher' },
  { id: '2', value: 'Sinh viên', nameInDb: 'STUDENT', href: '/student' },
  { id: '3', value: 'Thanh tra', nameInDb: 'INSPECTOR', href: '/inspect' },
  { id: '4', value: 'Admin', nameInDb: 'ADMIN', href: '/admin' },
];

export const semesterItems = [
  { id: '1', value: 'Học kỳ 1' },
  { id: '2', value: 'Học kỳ 2' },
  { id: '3', value: 'Học kỳ 3' },
];

export const adminListGroupItems = [
  { id: '1', value: 'Thông tin', href: '/admin/info', icon: 'info-circle' },
  { id: '2', value: 'Xếp phòng', href: '/admin/room', icon: 'sitemap' },
  { id: '3', value: 'File', href: '/admin/file', icon: 'file' },
];

export const infoCardItems = [
  {
    id: '1',
    value: 'Giảng Viên',
    href: '/admin/info',
    icon: 'chalkboard-teacher',
    apiPath: '/data/teacher',
    defaultSearchAttr: 'm_gvien',
  },
  {
    id: '2',
    value: 'Phòng trống',
    href: '/admin/info',
    icon: 'border-none',
    apiPath: '/room/emptyroom/' + getCurrentDate(),
    defaultSearchAttr: 't_phong',
  },
  {
    id: '3',
    value: 'Phòng sử dụng',
    href: '/room/info',
    icon: 'border-all',
    apiPath: '/room/roomuse/' + getCurrentDate(),
    defaultSearchAttr: 't_phong',
  },
  {
    id: '4',
    value: 'Lịch sử',
    href: '/admin/info',
    icon: 'history',
    apiPath: '/logs',
    defaultSearchAttr: 'inspectorName',
  },
];

export const teacherColumns = [
  { name: 'm_gvien', title: 'Mã số' },
  { name: 't_gvien', title: 'Họ tên' },
  { name: 'n_sinh', title: 'Ngày sinh' },
  { name: 'phai', title: 'Phái' },
  { name: 'khoa', title: 'Bộ môn' },
  { name: 't_do', title: 'Học vị' },
];

export const roomColumns = [
  { name: 't_phong', title: 'Tên phòng' },
  { name: 't_mon', title: 'Tên môn' },
  { name: 't_bdau', title: 'Tiết bắt đầu' },
  { name: 't_kthuc', title: 'Tiết kết thúc' },
];

export const emptyRoomColumns = [
  { name: 't_phong', title: 'Tên phòng' },
  { name: 'khu', title: 'Khu' },
];

export const logsColumns = [
  { name: 'inspectorName', title: 'Họ tên' },
  { name: 'inspectorId', title: 'Mã thanh tra' },
  { name: 'action', title: 'Hoạt động' },
  { name: 'at', title: 'Thời gian' },
];

export const tsColumns = [
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
