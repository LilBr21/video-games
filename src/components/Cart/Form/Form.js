import { useFormik } from 'formik';
import { useState } from 'react';

import'./form.styles.scss';

const Form = () => {
    const [isOrdered, setIsOrdered] = useState(false);

    const validate = values => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.length < 3 || values.firstName.length > 15) {
            errors.firstName = 'Must be between 3 and 15 characters';
        }

        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (values.lastName.length < 3 || values.lastName.length > 20) {
            errors.lastName = 'Must be between 3 and 20 characters';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.phoneNum) {
            errors.phoneNum = 'Required';
        } else if (!/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(values.phoneNum)) {
            errors.phoneNum = 'Invalid phone number';
        }

        if (!values.street) {
            errors.street = 'Required';
        }

        if (!values.houseNum) {
            errors.houseNum = 'Required';
        } else if (values.houseNum.length > 5 || values.houseNum === '0') {
            errors.houseNum = 'Invalid house number';
        }

        if (!values.postCode) {
            errors.postCode = 'Required';
        }

        if (!values.city) {
            errors.city = 'Required';
        }

        if (!values.country) {
            errors.country = 'Required';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNum: '',
            street: '',
            houseNum: 0,
            flatNum: 0,
            postCode: '',
            city: '',
            country: '',
        },
        validate,
        onSubmit: () => {
            //alert(JSON.stringify(values, null, 2));
            setIsOrdered(true);
        },
    });
    return (
        <div>
            <div className="form-title-container">
                <h2>Delivery informations:</h2>
            </div>
            {!isOrdered && 
            <form className="form" onSubmit={formik.handleSubmit}>
                <div className="form-row">
                    <div className="form-pair">
                        <label className="form-label" htmlFor="firstName">First Name</label>
                        <input
                            className="form-input"
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? 
                            <div className="form-error">{formik.errors.firstName}</div> 
                        : null}
                    </div>

                    <div className="form-pair">
                        <label className="form-label" htmlFor="lastName">Last Name</label>
                        <input 
                            className="form-input"
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? 
                            <div className="form-error">{formik.errors.lastName}</div> 
                        : null}
                    </div>
                </div>
                

            <label className="large-form-label" htmlFor="email">Email Address</label>
            <input
                className="large-form-input" 
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? 
                <div className="form-error">{formik.errors.email}</div> 
            : null}

            <label className="large-form-label" htmlFor="phoneNum">Phone Number</label>
            <input
                className="large-form-input" 
                id="phoneNum"
                name="phoneNum"
                type="tel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNum}
            />
            {formik.touched.phoneNum && formik.errors.phoneNum ? 
                <div className="form-error">{formik.errors.phoneNum}</div> 
            : null}

            <div className="form-row">
                <div className="form-pair">
                    <label className="form-label" htmlFor="street">Street</label>
                    <input 
                        className="form-input"
                        id="street"
                        name="street"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.street}
                    />
                    {formik.touched.street && formik.errors.street ? 
                        <div className="form-error">{formik.errors.street}</div> 
                    : null}
                </div>
                <div className="form-pair">
                    <label className="small-form-label" htmlFor="houseNum">House Number</label>
                    <input
                        className="small-form-input" 
                        id="houseNum"
                        name="houseNum"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.houseNum}
                    />
                    {formik.touched.houseNum && formik.errors.houseNum ? 
                        <div className="form-error">{formik.errors.houseNum}</div> 
                    : null}
                </div>
                <div className="form-pair">
                    <label className="small-form-label" htmlFor="flatNum">Flat Number</label>
                    <input
                        className="small-form-input"
                        id="flatNum"
                        name="flatNum"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.flatNum}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-pair">
                    <label className="form-label" htmlFor="postCode">Postal Code</label>
                    <input 
                        className="form-input"
                        id="postCode"
                        name="postCode"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.postCode}
                    />
                    {formik.touched.postCode && formik.errors.postCode ? 
                        <div className="form-error">{formik.errors.postCode}</div> 
                    : null}
                </div>
                <div className="form-pair">
                    <label className="form-label" htmlFor="city">City</label>
                    <input
                        className="form-input" 
                        id="city"
                        name="city"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                    />
                    {formik.touched.city && formik.errors.city ? 
                        <div className="form-error">{formik.errors.city}</div> 
                    : null}
                </div>
            </div>
            <label className="large-form-label" htmlFor="country">Country</label>
            <input
                className="large-form-input" 
                id="country"
                name="country"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
            />
            {formik.touched.country && formik.errors.country ? 
                <div className="form-error">{formik.errors.country}</div> 
            : null}


            <button className="submit-btn" type="submit">Order</button>
        </form> }
        <div className="ordered-container">
            {isOrdered && <h3 className="ordered-title">Ordered!</h3>}
        </div>
        </div>
    )

}

export default Form;