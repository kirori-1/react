import React from "react";
import { Form, Input, Button, message, Card } from "antd";
import FormComponents from "../components/form/FormComponents.tsx";

const FormPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    message.success(`提交成功: ${JSON.stringify(values)}`);
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error("提交失败，请检查输入");
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "64px" }}
    >
          <Card title="登录表单" style={{ width: 400 }}>
              <FormComponents></FormComponents>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{ username: "", password: "" }}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default FormPage;
