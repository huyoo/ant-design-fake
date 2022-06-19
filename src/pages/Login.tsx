import {Button, Form, Input} from "antd";
import React from "react";
import style from "./Login.less";
import logo from "../assets/logo.svg";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import { observer } from "mobx-react";
import {useStores} from "../stores";

export interface LoginProp {
}

const Login: React.FC<LoginProp> = (props) => {
  const {} = props;

  const store = useStores();
  console.log(store);

  const handleSubmit = () => {
    window.location.href = window.location.href.replace("/login", '');
  };

  return (
    <div className={style.Login}>
      <div>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Ant Design Fake</h1>
          <div className="desc">使用 React 原生态架构模拟的 Ant Design Pro</div>
        </div>
        <Form size="large">
          <Form.Item name="username">
            <Input prefix={<UserOutlined />} placeholder="用户名: admin or user" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password prefix={<LockOutlined />} placeholder="密码: ant.design" />
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
