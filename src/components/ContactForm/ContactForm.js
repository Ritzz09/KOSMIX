import React, { useState } from 'react';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';
// import axios from 'axios';
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  mobile: "",
  interest: "",
  message: "",
  appointmentDate: "",
};
const ContactForm = () => {
    const navigate = useNavigate(); // Initialize navigation
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Clear form data
  const clearState = () => setFormData({ ...initialState });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        clearState();
        navigate("/thankyou"); // Navigate to Thank You page
      } else {
        alert(result.error || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending appointment request");
    } finally {
      setLoading(false);
    }
  };

    return (
        <form onSubmit={handleSubmit}>
            <div id='contact-form' className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            className="form-control" 
                            placeholder="Enter your name..." 
                            required 
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>E-mail Address</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className="form-control" 
                            placeholder="Enter email address..." 
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                          
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Phone Number</label>
                        <div className="phone-input-group">
                            <input 
                                type="number" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                className="form-control phone-input" 
                                placeholder="Enter phone number..." 
                                pattern="[0-9]" 
                                required 
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Appointment Date</label>
                        <div className="phone-input-group">
                            <input 
                                type="date" 
                                name="appointmentDate" 
                                value={formData.appointmentDate} 
                                onChange={handleChange} 
                                className="form-control" 
                                placeholder="Select Appointment Date" 

                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Service</label>
                        <select 
                            name="service" 
                            value={formData.service} 
                            onChange={handleChange} 
                            className="form-control" 
                          
                        ><option value="">Choose Your Treatment</option>
                        <option value="Root canal ">Root Canal </option>
                        <option value="Dental Implants ">Dental Implants </option>
                        <option value="Dental Veneers ">Dental Veneers </option>
                        <option value="Aligners ">Aligners </option>
                        <option value="Crown & Bridges">Crown & Bridges </option>
                        <option value="Teeth Whitening">Teeth Whitening</option>
                        <option value="Teeth Cleaning">Teeth Cleaning</option>
                        <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Messages</label>
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            className="form-control" 
                            placeholder='Enter your messages...' 
                            rows="3" 
                           
                        ></textarea>
                    </div>
                </div>

                <div className="col-lg-8">
                    <button type="submit" style={{fontWeight:'bold'}} className="btn appointment-btn">Book An Appointment</button>
                </div>
                <div className="col-lg-4">
                    <div className="appointment-call">
                        <div className='icon'>
                            <img src={icon} alt="icon" />
                        </div>
                        <div className='call-text'>
                            {/* <p>Dental 24H Emergency</p> */}
                            <h6><a href="tel:+919035383984">90353 83984</a></h6>
                            <h6><a href="tel:080 4208 3115">080 4208 3115</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
