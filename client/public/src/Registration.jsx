import React, { useState } from "react";
import axios from "axios"; // Import axios

function Registration() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [regdate, setRegdate] = useState("");
    const [status, setStatus] = useState("");

    // State for alert message
    const [alert, setAlert] = useState({ show: false, message: '', type: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            firstname,
            lastname,
            email,
            gender,
            phonenumber,
            regdate,
            status
        };

        console.log(userData); // Log data before sending

        axios.post("http://localhost:3001/register", userData)
            .then(result => {
                console.log(result);
                // Set success alert message
                setAlert({ show: true, message: 'Thanks for contacting! Our team will reach out to you in 8hours', type: 'success' });
            })
            .catch(err => {
                console.log(err);
                // Set error alert message
                setAlert({ show: true, message: 'Registration failed. Please try again.', type: 'error' });
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Welcome Wesend Work From Employee</h1>
                <label htmlFor="firstname">First Name:</label>
                <input type="text" id="firstname" name="firstname" required onChange={(e) => setFirstname(e.target.value)} />

                <label htmlFor="lastname">Last Name:</label>
                <input type="text" id="lastname" name="lastname" required onChange={(e) => setLastname(e.target.value)} />

                <label htmlFor="email">Email ID:</label>
                <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" required onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                </select>

                <label htmlFor="phonenumber">Phone Number:</label>
                <input type="tel" id="phonenumber" name="phonenumber" required onChange={(e) => setPhonenumber(e.target.value)} />

                <label htmlFor="regdate">Registration Date:</label>
                <input type="date" id="regdate" name="regdate" required onChange={(e) => setRegdate(e.target.value)} />

                <label htmlFor="status">Employee Status:</label>
                <select id="status" name="status" required onChange={(e) => setStatus(e.target.value)}>
                    <option value="">Select status</option>
                    <option value="Student">Student</option>
                    <option value="Employed">Employed</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Self-employed">Self-employed</option>
                </select>
                <button type="submit">Register</button>
            </form>

            {alert.show && (
                <div className={`alert ${alert.type}`}>
                    {alert.message}
                </div>
            )}
        </div>
    );
}

export default Registration;
