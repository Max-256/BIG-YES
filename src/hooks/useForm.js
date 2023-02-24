import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Joi from "joi-browser";

const useForm = (formData, formSchema, doSubmit) => {
  const [data, setData] = useState(formData);

  let [errors, setErrors] = useState({});

  const schema = formSchema;

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const sch = { [name]: schema[name] };
    const { error } = Joi.validate(obj, sch);
    return error ? error.details[0].message : null;
  };

  const validate = () => {
    const result = Joi.validate(data, schema, { abortEarly: false });
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const error = {};
    const errorMessage = validateProperty({ name, value });
    if (errorMessage) error[name] = errorMessage;
    else delete error[name];
    setErrors(error);

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate() || {});

    if (validate()) return;

    doSubmit();
  };

  const renderInput = (name, label, type = "text") => {
    return (
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          className="input"
          name={name}
          value={data.name}
          type={type}
          onChange={handleChange}
        />
        {errors[name] && (
          <div className="alert alert-danger">{errors[name]}</div>
        )}
      </Form.Group>
    );
  };

  const renderButton = (label) => {
    return (
      <Button
        className="mb-4"
        disabled={validate()}
        variant="primary"
        type="submit"
      >
        {label}
      </Button>
    );
  };

  const renderTextarea = (name, label, placeholder) => {
    return (
      <FloatingLabel
        controlId="floatingTextarea2"
        label={label}
        className="mb-3"
      >
        <Form.Control
          name={name}
          value={data.name}
          placeholder={placeholder}
          onChange={handleChange}
          as="textarea"
          style={{ height: "100px" }}
        />
        {errors[name] && (
          <div className="alert alert-danger">{errors[name]}</div>
        )}
      </FloatingLabel>
    );
  };

  const renderSelect = (name, label, options) => {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select
          name={name}
          value={data.name}
          onChange={handleChange}
          id={name}
          className="form-control"
        >
          <option value="">select...</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors[name] && (
          <div className="alert alert-danger">{errors[name]}</div>
        )}
      </div>
    );
  };

  return {
    data,
    handleSubmit,
    renderInput,
    renderTextarea,
    renderSelect,
    renderButton,
  };
};

export default useForm;

//reserved keywords {name, data, schema}
