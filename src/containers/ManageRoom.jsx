import React from "react";
import Table from "../components/Common/Table";
import RoomModal from "../components/RoomModal";
import MiniInput from "../components/Common/MiniInput";
import SearchBox from "../components/Common/SearchBox";
const ManageRoom = () => {
  const columns = [
    { name: "room", title: "Phòng" },
    { name: "weekday", title: "Thứ" },
    { name: "subjectName", title: "Tên môn học" },
    { name: "startSlot", title: "Tiết bắt đầu" },
    { name: "numberOfSlots", title: "Số tiết" },
    { name: "teacher", title: "Giảng viên" },
  ];
  return (
    <div className="Mange-Room">
      <div className="head">
        <MiniInput type="date" dark />
        <SearchBox position="float-left" />
        <button
          type="button"
          className="btn btn-primary float-right mb-2"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          <i className="fas fa-plus mr-2"></i>
          Thêm
        </button>
      </div>
      <div className="my-2">
        <Table theadType="dark" columns={columns} data={[]}></Table>
      </div>
      <RoomModal />
    </div>
  );
};

export default ManageRoom;
