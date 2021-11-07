import React, { useRef, useState } from 'react'
import style from '@/styles/contact.module.scss';
import emailjs from 'emailjs-com';

export default function Contactus() {

    const formRef = useRef()
    const [done, setdone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_9acikdn', 'template_jcrz5vt', formRef.current, 'user_e49JZIUe7zpJtstAfjs0h')
            .then((result) => {
                console.log(result.text);
                setdone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="contactBg section-padd" id="contactus">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className={style.contactinfo}>
                            <h2 className="mb-4">HEY, LET'S TALK</h2>
                            <p className="mb-3">Ready to start project with us..? Please get in touch on below details or fill in the form :)</p>

                            <strong><h4>Mumbai</h4></strong>

                            <div className="address">
                                <p>
                                    179  Clinton Street, Little Rock San Francisco, SF 32671
                                </p>
                            </div>
                            <div className="phone">
                                096994 71049
                            </div>
                            <div className="email">
                                eyethetalent@gmail.com
                            </div>

                            <div className="direction mt-4">
                                <button className="btn btn-warning">
                                    Get Directions
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                            <div>
                                <input type="text" name="user_name" placeholder="Name" />
                            </div>
                            <div>
                                <input type="text" name="user_subject" placeholder="Subject" />
                            </div>
                            <div>
                                <input type="text" name="user_email" placeholder="Email" />
                            </div>
                            <div>
                                <input type="text" name="phone_number" placeholder="Enter Number"></input>
                            </div>
                            <div>
                                <textarea rows="3" placeholder="message" name="message"></textarea>
                            </div>
                            <button className="btn btn-warning contact-btn">Send</button>
                            {done && <div className="mt-4">Thank you for your Email we will revert Asap!!</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
