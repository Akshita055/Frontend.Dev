import React, { useState } from 'react';
import './Form.css';

export default function Form() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    gender: 'female',
    message: '',
    agree: false,
  });
  const [submitted, setSubmitted] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Name is required';
    if (!form.email.trim()) err.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = 'Email is invalid';
    if (!form.message.trim()) err.message = 'Message is required';
    if (!form.agree) err.agree = 'You must agree to terms';
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted({ ...form });
      setForm({ name: '', email: '', gender: 'female', message: '', agree: false });
    }
  };

  return (
    <div className="form-wrap">
      <form className="simple-form" onSubmit={handleSubmit} noValidate>
        <h2>Contact Us</h2>

        <label>
          <span>Name</span>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
          {errors.name && <small className="err">{errors.name}</small>}
        </label>

        <label>
          <span>Email</span>
          <input name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
          {errors.email && <small className="err">{errors.email}</small>}
        </label>

        <label>
          <span>Gender</span>
          <select name="gender" value={form.gender} onChange={handleChange}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          <span>Message</span>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your message" />
          {errors.message && <small className="err">{errors.message}</small>}
        </label>

        <label className="agree">
          <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
          <span>I agree to the terms</span>
        </label>
        {errors.agree && <small className="err">{errors.agree}</small>}

        <div className="actions">
          <button type="submit">Send</button>
          <button type="button" className="reset" onClick={() => setForm({ name: '', email: '', gender: 'female', message: '', agree: false })}>Reset</button>
        </div>
      </form>

      {submitted && (
        <div className="result">
          <h3>Submitted</h3>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
