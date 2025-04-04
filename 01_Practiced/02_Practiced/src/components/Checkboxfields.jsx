import React from "react";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CheckboxField({ name, checked, setValue, error }) {
  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [name]: e.target.checked }));
  };

  return (
    <FormGroup check>
      <Input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <Label check>I agree to the terms</Label>
      {error && <FormFeedback className="d-block">{error}</FormFeedback>}
    </FormGroup>
  );
}
