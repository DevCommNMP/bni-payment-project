import React, { useState } from 'react';
import './form.css';

const BNIPaymentForm = () => {
  const [formData, setFormData] = useState({
    region: '',
    chapter: '',
    memberName: '',
    email: '',
    renewalYear: '',
    category: '',
    mobileNumber: '',
    address: '',
    company: '',
    gstin: '',
    paymentType: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.region) errors.region = 'BNI Region is required';
    if (!formData.chapter) errors.chapter = 'BNI Chapter is required';
    if (!formData.memberName) errors.memberName = 'Member Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.renewalYear) errors.renewalYear = 'Renewal Year is required';
    if (!formData.category) errors.category = 'Category is required';
    if (!formData.mobileNumber) errors.mobileNumber = 'Mobile Number is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.company) errors.company = 'Company is required';
    if (!formData.paymentType) errors.paymentType = 'Payment Type is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>BNI NEW MEMBER PAYMENT</h1>
      </div>
<div style={{display:'flex',flexDirection:'row',justifyContent:"space-around"}}>
<form className="form-content" onSubmit={handleSubmit}>
        <div className="form-left">
          <div className="form-group">
            <label htmlFor="region">BNI Region :</label>
            <select
              id="region"
              name="region"
              value={formData.region}
              onChange={handleChange}
              className={errors.region ? 'error' : ''}
            >
              <option value="">Enter Organization Name</option>
              <option value="Region 1">Region 1</option>
              <option value="Region 2">Region 2</option>
            </select>
            {errors.region && <small className="error-text">{errors.region}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="memberName">Member Name :</label>
            <input
              type="text"
              id="memberName"
              name="memberName"
              value={formData.memberName}
              onChange={handleChange}
              className={errors.memberName ? 'error' : ''}
            />
            {errors.memberName && <small className="error-text">{errors.memberName}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="renewalYear">Renewal Year :</label>
            <select
              id="renewalYear"
              name="renewalYear"
              value={formData.renewalYear}
              onChange={handleChange}
              className={errors.renewalYear ? 'error' : ''}
            >
              <option value="">Select Renewal Year</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
            {errors.renewalYear && <small className="error-text">{errors.renewalYear}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number :</label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className={errors.mobileNumber ? 'error' : ''}
            />
            {errors.mobileNumber && <small className="error-text">{errors.mobileNumber}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="company">Company :</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={errors.company ? 'error' : ''}
            />
            {errors.company && <small className="error-text">{errors.company}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="paymentType">Payment Type :</label>
            <select
              id="paymentType"
              name="paymentType"
              value={formData.paymentType}
              onChange={handleChange}
              className={errors.paymentType ? 'error' : ''}
            >
              <option value="">CREDIT / DEBIT / NET BANKING</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
              <option value="netBanking">Net Banking</option>
            </select>
            {errors.paymentType && <small className="error-text">{errors.paymentType}</small>}
          </div>
        </div>

        <div className="form-right">
          <div className="form-group">
            <label htmlFor="chapter">BNI Chapter :</label>
            <select
              id="chapter"
              name="chapter"
              value={formData.chapter}
              onChange={handleChange}
              className={errors.chapter ? 'error' : ''}
            >
              <option value="">Select Chapter</option>
              <option value="Chapter 1">Chapter 1</option>
              <option value="Chapter 2">Chapter 2</option>
            </select>
            {errors.chapter && <small className="error-text">{errors.chapter}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <small className="error-text">{errors.email}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="category">Category :</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={errors.category ? 'error' : ''}
            />
            {errors.category && <small className="error-text">{errors.category}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address :</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? 'error' : ''}
            />
            {errors.address && <small className="error-text">{errors.address}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="gstin">GSTIN No. :</label>
            <input
              type="text"
              id="gstin"
              name="gstin"
              value={formData.gstin}
              onChange={handleChange}
            />
          </div>
        </div>
 
      </form>
<div className="summary-container">
          <div className="summary">
            <p>Total Amount: ₹1001</p>
            <p>Late Fee: ₹0</p>
            <p>GST: ₹50</p>
            <p className="total">Total Amount (Including GST): ₹1051</p>
          </div>
          <button type="submit" className="pay-now-button">PAY NOW</button>
        </div>
</div>
      

      <div className="form-note">
        <p>NOTE: All the payment done on this page will directly go through the HDFC payment gateway.</p>
      </div>

      <div className="form-footer">
        <p>© 2024 BNI All Right Reserved</p>
      </div>
    </div>
  );
};

export default BNIPaymentForm;
