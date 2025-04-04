import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import CardComponent from "../components/common/CardComponent.jsx";
import "../assets/style.css";
const allSubmissions = [];

export default function Registration() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        country: "",
        state: "",
        city: "",
        terms: false,
    });

    const [errors, setErrors] = useState({});
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const API_KEY = "QVBhajhRQ2Rwd0ZxVDJxZHR0RjFSWjhTamd1TWlYRXJPQUhxcGF3Tw==";

    useEffect(() => {
        // Fetch countries when component mounts
        fetchCountries();
    }, []);

    useEffect(() => {
        // Fetch states when country changes
        if (data.country) {
            fetchStates(data.country);
        } else {
            setStates([]);
            setData(prev => ({ ...prev, state: "", city: "" }));
        }
    }, [data.country]);

    useEffect(() => {
        // Fetch cities when state changes
        if (data.state) {
            fetchCities(data.country, data.state);
        } else {
            setCities([]);
            setData(prev => ({ ...prev, city: "" }));
        }
    }, [data.state]);

    const fetchCountries = async () => {
        try {
            const response = await fetch("https://api.countrystatecity.in/v1/countries", {
                method: "GET",
                headers: {
                    "X-CSCAPI-KEY": API_KEY
                }
            });
            const data = await response.json();
            setCountries(data);
        } catch (error) {
            console.error("Error fetching countries:", error);
        }
    };

    const fetchStates = async (countryCode) => {
        try {
            const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states`, {
                method: "GET",
                headers: {
                    "X-CSCAPI-KEY": API_KEY
                }
            });
            const data = await response.json();
            setStates(data);
        } catch (error) {
            console.error("Error fetching states:", error);
        }
    };

    const fetchCities = async (countryCode, stateCode) => {
        try {
            const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`, {
                method: "GET",
                headers: {
                    "X-CSCAPI-KEY": API_KEY
                }
            });
            const data = await response.json();
            setCities(data);
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    };

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
        if (!data.country) newErrors.country = "Country is required";
        if (!data.state) newErrors.state = "State is required";
        if (!data.city) newErrors.city = "City is required";
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
                country: data.country,
                state: data.state,
                city: data.city,
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
                country: "",
                state: "",
                city: "",
                terms: false,
            });
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
                            <FormGroup floating>
                                <Input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={data.firstName}
                                    onChange={handleChange}
                                    invalid={!!errors.firstName}
                                />
                                <Label for="firstName">First Name</Label>
                                <FormFeedback>{errors.firstName}</FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup floating>
                                <Input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={data.lastName}
                                    onChange={handleChange}
                                    invalid={!!errors.lastName}
                                />
                                <Label for="lastName">Last Name</Label>
                                <FormFeedback>{errors.lastName}</FormFeedback>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup floating>
                        <Input
                            type="email"
                            id="email"
                            name="email"                                                                                    
                            placeholder="Email"
                            value={data.email}
                            onChange={handleChange}
                            invalid={!!errors.email}
                        />
                        <Label for="email">Email</Label>
                        <FormFeedback>{errors.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup floating>
                        <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            value={data.phone}
                            onChange={handleChange}
                            invalid={!!errors.phone}
                        />
                        <Label for="phone">Phone</Label>
                        <FormFeedback>{errors.phone}</FormFeedback>
                    </FormGroup>
                    
                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="country">Country</Label>
                                <Input
                                    type="select"
                                    id="country"
                                    name="country"
                                    value={data.country}
                                    onChange={handleChange}
                                    invalid={!!errors.country}
                                >
                                    <option value="">Select Country</option>
                                    {countries.map(country => (
                                        <option key={country.iso2} value={country.iso2}>
                                            {country.name}
                                        </option>
                                    ))}
                                </Input>
                                <FormFeedback>{errors.country}</FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="state">State</Label>
                                <Input
                                    type="select"
                                    id="state"
                                    name="state"
                                    value={data.state}
                                    onChange={handleChange}
                                    disabled={!data.country}
                                    invalid={!!errors.state}
                                >
                                    <option value="">Select State</option>
                                    {states.map(state => (
                                        <option key={state.iso2} value={state.iso2}>
                                            {state.name}
                                        </option>
                                    ))}
                                </Input>
                                <FormFeedback>{errors.state}</FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="city">City</Label>
                                <Input
                                    type="select"
                                    id="city"
                                    name="city"
                                    value={data.city}
                                    onChange={handleChange}
                                    disabled={!data.state}
                                    invalid={!!errors.city}
                                >
                                    <option value="">Select City</option>
                                    {cities.map(city => (
                                        <option key={city.id} value={city.id}>
                                            {city.name}
                                        </option>
                                    ))}
                                </Input>
                                <FormFeedback>{errors.city}</FormFeedback>
                            </FormGroup>
                        </Col>
                    </Row>
                    
                    <FormGroup floating>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={handleChange}
                            invalid={!!errors.password}
                        />
                        <Label for="password">Password</Label>
                        <FormFeedback>{errors.password}</FormFeedback>
                    </FormGroup>
                    <FormGroup floating>
                        <Input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={data.confirmPassword}
                            onChange={handleChange}
                            invalid={!!errors.confirmPassword}
                        />
                        <Label for="confirmPassword">Confirm Password</Label>
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
                    <Button color="primary" type="submit" className="mt-3 w-100">
                        Sign Up
                    </Button>
                </Form>
            </CardComponent>
        </div>
    );
}