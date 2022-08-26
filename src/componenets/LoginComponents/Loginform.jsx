import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { signIn } from "../../store/actions/authactions";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Container,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import "./LoginForm.css";
export const Loginform = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(user.email, user.password));
    setUser({ email: "", password: "" });

    // console.log(user);
  };
  console.log(auth._id);
  if (auth._id) return <Navigate to="/" />;

  return (
    <>
      <Container style={{ minHeight: "100hv" }} className="login_form">
        <Row className="justify-content-md-center">
          <Col className="left_login_form" xs lg="5">
            <img
              className="svg_img"
              // src="../../../Image/loginpage.png"
              alt=""
            />
          </Col>
          <Col md="auto"> </Col>
          <Col className="right_login_form" xs lg="5">
            <h2 className="login_heading">User Login </h2>
            <Form onSubmit={handleSubmit}>
              <Form.Label>Email address</Form.Label>
              <InputGroup className="mb-3">
                <Button variant="outline-secondary" id="button-addon1">
                  <i class="fa-solid fa-envelope"></i>
                </Button>

                <FormControl
                  placeholder="email@gmail.com"
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  name="username"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </InputGroup>
              <Form.Label>Password</Form.Label>
              <InputGroup className="mb-3">
                <Button variant="outline-secondary" id="button-addon1">
                  <i class="fa-solid fa-lock"></i>
                </Button>

                <FormControl
                  placeholder="business@123"
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  name="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </InputGroup>
              <p>
                Haven't you account ?{" "}
                <a style={{ paddingLeft: "5px" }} href="/register">
                  Register
                </a>
              </p>
              <Button type="submit" variant="success">
                Login{" "}
              </Button>{" "}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
