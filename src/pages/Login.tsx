import {Button, Form, Input, message} from "antd";
import React from "react";
import style from "./Login.less";
import logo from "../assets/logo.svg";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {observer} from "mobx-react";
import {useStores} from "../stores";
import {useNavigate} from "react-router-dom";

const Login: React.FC = () => {
  const [form] = Form.useForm();

  const {login} = useStores();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const value = await form.validateFields();

      const res = await login.login(value);
      if (!res) {
        message.error('用户名或密码不正确');
      } else {
        message.success('登录成功');
        navigate('/');
      }
    } catch (e) {}
  };

  return (
    <div className={style.Login}>
      <div>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Ant Design Fake</h1>
          <div className="desc">使用 React 原生态架构模拟的 Ant Design Pro</div>
        </div>
        <Form size="large" form={form}>
          <Form.Item name="username" rules={[{required: true, message: '不能为空'}]}>
            <Input prefix={<UserOutlined />} placeholder="用户名: admin or user" />
          </Form.Item>
          <Form.Item name="password" rules={[{required: true, message: '不能为空'}]}>
            <Input.Password prefix={<LockOutlined />} placeholder="密码: 123456" />
          </Form.Item>
          <Form.Item>
            <Button onClick={handleSubmit} type="primary" size="large" style={{width: '100%'}}>登录</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default observer(Login);
