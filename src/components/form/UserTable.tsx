// components/form/UserTable.tsx
import { Table, Avatar } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
}

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("https://68415e0cd48516d1d35b4398.mockapi.io/api/v1/kirori")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("加载失败", err));
  }, []);

  const columns: ColumnsType<User> = [
    {
      title: "头像",
      dataIndex: "avatar",
      key: "avatar",
      render: (url) => <Avatar src={url} />,
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "注册时间",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (val) => new Date(val).toLocaleString(),
    },
  ];

  return (
    <Table
      rowKey="id"
      dataSource={users}
      columns={columns}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default UserTable;
