import { Form, Input, Button, message } from "antd";

const FormComponents = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    message.success(`提交成功: ${JSON.stringify(values)}`);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item label="用户名" name="username" rules={[{ required: true }]}>
        <Input placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item label="密码" name="password" rules={[{ required: true }]}>
        <Input.Password placeholder="请输入密码" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormComponents;
