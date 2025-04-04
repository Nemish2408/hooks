import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";
import {
  Form,
  Row,
  Col,
  Card,
  CardFooter,
  CardBody,
  CardHeader,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";

export default function SimpleForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a 10-digit phone number";
    if (formData.password.length < 6)
      newErrors.password = "At least 6 characters required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.terms) newErrors.terms = "You must agree to the terms";

    setErrors(newErrors);
    console.log(Object.keys(newErrors).length === 0);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newEntry = { ...formData };
      delete newEntry.confirmPassword;
      setSubmittedData([...submittedData, newEntry]);

      console.log("Submitted Data:", [...submittedData, newEntry]);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });
    }
  };

  return (
    <div className="form-container">
      <Card style={{ width: "36rem" }}>
        <CardHeader className="text-center">
          {" "}
          <img
            src="/nemish-high-resolution-logo-transparent.svg"
            alt="Logo"
            style={{ width: "100px", height: "100px", padding: "10px" }}
          />
          <img
            src="/nemish-high-resolution-logo-transparent-_3_.svg"
            alt="Logo 2"
            style={{ width: "240px" }}
          />
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit} noValidate>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    invalid={!!errors.firstName}
                  />
                  <FormFeedback>{errors.firstName}</FormFeedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    invalid={!!errors.lastName}
                  />
                  <FormFeedback>{errors.lastName}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                invalid={!!errors.email}
              />
              <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label>Phone</Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                invalid={!!errors.phone}
              />
              <FormFeedback>{errors.phone}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                invalid={!!errors.password}
              />
              <FormFeedback>{errors.password}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label>Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                invalid={!!errors.confirmPassword}
              />
              <FormFeedback>{errors.confirmPassword}</FormFeedback>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                invalid={!!errors.terms}
              />
              <Label check>I agree to the terms</Label>
              {errors.terms && (
                <FormFeedback className="d-block">{errors.terms}</FormFeedback>
              )}
            </FormGroup>
            <CardFooter className="text-center">
              <Button color="primary" type="submit">
                Sign Up
              </Button>
            </CardFooter>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}