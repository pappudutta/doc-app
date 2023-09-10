import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

import "../styles/RegisterStyles.css";

const Login = () => {
  //form handler
  const onfinishHandler = values => {
    console.log(values);
  };
  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Login form</h3>
          <Form.Item label="Email" name="email">
            <Input type="email" required placeholder="pappu@mail.com" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required placeholder="password" />
          </Form.Item>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
        <p className="mt-3">
          Don't have an account!
          <Link to="/register" className="px-1">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
