import React from "react";
import Input from "./Input";
import { reduxForm, Field } from "redux-form";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, fetchDataInitiate } from "./actions";

const options = [
  { name: "Dhaka", value: "dh" },
  { name: "Rajshahi", value: "raj" },
];

const createRenderer = (render) => ({
  input,
  label,
  meta: { error, touched, active },
  ...rest
}) => (
  <div
    className={[
      "input-group",
      error && touched ? "error" : "",
      active ? "active" : "",
    ].join(" ")}
  >
    <label className="label" className="label">
      {label}
    </label>
    {render(input, label, rest)}
    {error && touched && <span className="errorMessage">{error}</span>}
  </div>
);

const renderInput = createRenderer((input, label) => (
  <input {...input} placeholder={label} />
));
const renderSelect = createRenderer((input, label, { children }) => (
  <select {...input}>{children} </select>
));

const getFormValues = (values) => console.log(values);

const required = (v) => {
  if (!v || v === "") {
    return "This field is required!";
  }
};

const length = (v) => {
  if (v.length >= 40) {
    return "it's too long";
  }
};

const CustomerForm = (props) => {
  const count = useSelector((state) => state.counter.count);
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={props.handleSubmit(getFormValues)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Redux form</h2>
      <Field
        name="name"
        component={renderInput}
        label="Customer Name"
        validate={[required, length]}
      />
      <Field
        name="email"
        component={renderInput}
        label="Customer Email"
        validate={[required, length]}
        type="email"
      />
      <Field
        name="city"
        component={renderSelect}
        label="Select City"
        validate={required}
      >
        <option />
        {options.map((option) => (
          <option key={option.name} value={option.value}>
            {option.name}
          </option>
        ))}
      </Field>
      <button type="submit">Submit</button>
      <p>counter {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {user && <p>{user.first_name}</p>}
      <button onClick={() => dispatch(fetchDataInitiate(1))}>Fetch user</button>
    </form>
  );
};

export default reduxForm({
  form: "customer-name-form",
})(CustomerForm);
