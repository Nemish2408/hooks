import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import CardComponent from "../components/CardComponent";
import "../assets/style.css";
const allSubmissions = [];

export default function SignUp() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        if (!data.firstName) newErrors.firstName = "First name is required";
        if (!data.lastName) newErrors.lastName = "Last name is required";
        if (!/^\S+@\S+\.\S+$/.test(data.email)) newErrors.email = "Invalid email";
        if (!/^\d{10}$/.test(data.phone))
            newErrors.phone = "Enter a 10-digit phone number";
        if (data.password.length < 6)
            newErrors.password = "At least 6 characters required";
        if (data.password !== data.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";
        if (!data.terms) newErrors.terms = "You must agree to the terms";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const submissionData = {
                id: allSubmissions.length + 1,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                password: data.password,
                agreedToTerms: data.terms,
            };

            allSubmissions.push(submissionData);

            console.log("All submissions:", allSubmissions);

            setData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: "",
                terms: false,
            }); // for clear the form
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData({
            ...data,
            [name]: type === "checkbox" ? checked : value
        });
    };

    return (
        <div className="form-container">
            <CardComponent title="Sign Up">
                <Form onSubmit={handleSubmit} noValidate>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="firstName">First Name</Label>
                                <Input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={data.firstName}
                                    onChange={handleChange}
                                    invalid={!!errors.firstName}
                                />
                                <FormFeedback>{errors.firstName}</FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="lastName">Last Name</Label>
                                <Input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={data.lastName}
                                    onChange={handleChange}
                                    invalid={!!errors.lastName}
                                />
                                <FormFeedback>{errors.lastName}</FormFeedback>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            invalid={!!errors.email}
                        />
                        <FormFeedback>{errors.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={data.phone}
                            onChange={handleChange}
                            invalid={!!errors.phone}
                        />
                        <FormFeedback>{errors.phone}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            invalid={!!errors.password}
                        />
                        <FormFeedback>{errors.password}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirmPassword">Confirm Password</Label>
                        <Input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={data.confirmPassword}
                            onChange={handleChange}
                            invalid={!!errors.confirmPassword}
                        />
                        <FormFeedback>{errors.confirmPassword}</FormFeedback>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            checked={data.terms}
                            onChange={handleChange}
                            invalid={!!errors.terms}
                        />
                        <Label for="terms" check>
                            I agree to the terms and conditions
                        </Label>
                        {errors.terms && (
                            <div className="text-danger small">{errors.terms}</div>
                        )}
                    </FormGroup>
                    <Button color="primary" type="submit" className="mt-3">
                        Sign Up
                    </Button>
                </Form>
            </CardComponent>
        </div>
    );
}