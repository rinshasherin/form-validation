import React, { useState } from 'react'

function Form() {

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState({});

    const validate = () => {
        const errors = {};
        if (!formValues.name.trim()) errors.name = "Name is required";
        if (!formValues.email.trim()) {
            errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
            errors.email = "Invalid email address";
        }
        if (!formValues.password.trim()) {
            errors.password = "Password is required";
        } else if (formValues.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
            setFormValues({ name: "", email: "", password: "" });
        }
    };

    return (
        <>
            <div className='mt-5 border p-3 rounded shadow' style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
                <h1 className='mb-3'>Registration Form</h1>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "15px" }}>
                        <input className='form-control' type="text" name="name" value={formValues.name} onChange={handleChange} placeholder="Name"/>
                        {formErrors.name && (
                            <p style={{ color: "red", margin: "5px 0" }}>{formErrors.name}</p>
                        )}
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                        <input className='form-control' type="email" name="email" value={formValues.email} onChange={handleChange} placeholder="Email"/>
                        {formErrors.email && (
                            <p style={{ color: "red", margin: "5px 0" }}>{formErrors.email}</p>
                        )}
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                        <input className='form-control' type="password" name="password" value={formValues.password} onChange={handleChange} placeholder="Password"/>
                        {formErrors.password && (
                            <p style={{ color: "red", margin: "5px 0" }}>{formErrors.password}</p>
                        )}
                    </div>
                    <button className='btn btn-success' type="submit" style={{ padding: "10px 20px" }}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Form