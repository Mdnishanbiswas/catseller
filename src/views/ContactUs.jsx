import React from 'react';

export default function ContactUs() {
    return (
        <div className="contact-us">
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" required />
                    </label>
                </div>
                <div>
                    <label>
                        Phone:
                        <input type="tel" name="phone" required />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}