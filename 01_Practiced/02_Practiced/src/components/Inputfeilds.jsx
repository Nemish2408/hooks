import { FormGroup, Input, Label, FormFeedback } from "reactstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Inputfeilds({
  label,
  name,
  type,
  value,
  setValue,
  error,
}) {
  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [name]: e.target.value }));
  };

  return (
    <FormGroup floating>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        invalid={!!error}
      />
      <Label>{label}</Label>
      <FormFeedback>{error}</FormFeedback>
    </FormGroup>
  );
}
