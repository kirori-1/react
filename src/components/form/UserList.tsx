import { List, Avatar, Card } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
}

const UserListPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("https://68415e0cd48516d1d35b4398.mockapi.io/api/v1/kirori")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("加载失败", err));
  }, []);

  return (
    <Card title="用户列表" style={{ margin: 24 }}>
      <List
        itemLayout="horizontal"
        dataSource={users}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={user.avatar} />}
              title={user.name}
              description={`注册时间: ${new Date(
                user.createdAt
              ).toLocaleString()}`}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default UserListPage;
