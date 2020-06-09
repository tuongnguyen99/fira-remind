import React, { useState } from "react";
import { Link } from "react-router-dom";
import InfoCardGroup from "../components/InfoCardGroup";
import { infoCardItems } from "../constants";
import CardWithHeader from "../components/Common/CardWithHeader";
import Table from "../components/Common/Table";

const InfoContainer = () => {
  const [infoActive, setInfoActive] = useState(infoCardItems[0]);
  const onItemChange = (item) => {
    setInfoActive(item);
  };

  const columns = [
    { name: "id", title: "Mã số" },
    { name: "name", title: "Họ tên" },
    { name: "gender", title: "Phái" },
    { name: "subject", title: "Bộ môn" },
    { name: "degree", title: "Học vị" },
  ];

  const data = [
    {
      id: "90011",
      name: "Nguyen Van A",
      gender: "Nam",
      subject: "Nhập môn lập trình",
      degree: "Thạc sĩ",
    },
    {
      id: "90011",
      name: "Nguyen Van A",
      gender: "Nam",
      subject: "Nhập môn lập trình",
      degree: "Thạc sĩ",
    },
    {
      id: "90011",
      name: "Nguyen Van A",
      gender: "Nam",
      subject: "Nhập môn lập trình",
      degree: "Thạc sĩ",
    },
    {
      id: "90011",
      name: "Nguyen Van A",
      gender: "Nam",
      subject: "Nhập môn lập trình",
      degree: "Thạc sĩ",
    },
    {
      id: "90011",
      name: "Nguyen Van A",
      gender: "Nam",
      subject: "Nhập môn lập trình",
      degree: "Thạc sĩ",
    },
    {
      id: "90011",
      name: "Nguyen Van A",
      gender: "Nam",
      subject: "Nhập môn lập trình",
      degree: "Thạc sĩ",
    },
    {
      id: "90011",
      name: "Nguyen Van A",
      gender: "Nam",
      subject: "Nhập môn lập trình",
      degree: "Thạc sĩ",
    },
    {
      id: "90011",
      name: "Nguyen Van A",
      gender: "Nam",
      subject: "Nhập môn lập trình",
      degree: "Thạc sĩ",
    },
  ];

  return (
    <div>
      <InfoCardGroup
        items={infoCardItems}
        activeItem={infoActive}
        onItemChange={onItemChange}
      />
      <CardWithHeader title={infoActive.value} className="mt-4">
        <Table
          tableType="striped"
          theadType="dark"
          columns={columns}
          data={data}
        />
      </CardWithHeader>
    </div>
  );
};

export default InfoContainer;
