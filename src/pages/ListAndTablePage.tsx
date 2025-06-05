
// pages/ListAndTablePage.tsx
import { Divider, Card } from "antd";
import UserTable from "../components/form/UserTable";
import UserList from "../components/form/UserList"; // 你之前的 List 页面重命名为 UserList.tsx

const ListAndTablePage = () => {
  return (
    <div style={{ padding: 24 }}>
      <Card title="用户列表（List）" style={{ marginBottom: 32 }}>
        <UserList />
      </Card>

      <Divider />

      <Card title="用户表格（Table）">
        <UserTable />
      </Card>
    </div>
  );
};

export default ListAndTablePage;
