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
];

export const infoCardItems = [
  {
    id: '1',
    value: 'Giảng Viên',
    href: '/admin/info',
    icon: 'chalkboard-teacher',
    apiPath: '/teachers',
  },
  {
    id: '2',
    value: 'Phòng trống',
    href: '/admin/info',
    icon: 'border-none',
    apiPath: '/rooms',
  },
  {
    id: '3',
    value: 'Phòng sử dụng',
    href: '/admin/info',
    icon: 'border-all',
    apiPath: '/rooms',
  },
  {
    id: '4',
    value: 'Lịch sử',
    href: '/admin/info',
    icon: 'history',
    apiPath: '/logs',
  },
];

export const teacherColumns = [
  { name: 'id', title: 'Mã số' },
  { name: 'name', title: 'Họ tên' },
  { name: 'gender', title: 'Phái' },
  { name: 'subject', title: 'Bộ môn' },
  { name: 'degree', title: 'Học vị' },
];

export const roomColumns = [
  { name: 'name', title: 'Tên phòng' },
  { name: 'section', title: 'Khu' },
  { name: 'floor', title: 'Lầu' },
  { name: 'isEmpty', title: 'Trạng thái' },
];

export const logsColumns = [
  { name: 'inspectorName', title: 'Họ tên' },
  { name: 'inspectorId', title: 'Mã thanh tra' },
  { name: 'action', title: 'Hoạt động' },
  { name: 'at', title: 'Thời gian' },
];
