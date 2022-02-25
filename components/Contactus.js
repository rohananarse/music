import React, { useRef, useState } from 'react'
import style from '@/styles/contact.module.scss';
import emailjs from 'emailjs-com';

export default function Contactus() {

    const formRef = useRef()
    const [done, setdone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_0wqldxt', 'template_gd39b6d', formRef.current, 'user_wfdVZBczk5doDsxkyYc3i')
            .then((result) => {
                console.log(result.text);
                setdone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="contactBg section-padd lightBg" id="contactus">
            <div className="container">
                <h2 className="about_bio_title__197IR"><strong>Lets Discuss Project..!!</strong></h2>
                <div className={style.map_pos}>
                    <div className="col-md-12">
                        <div className={style.contactinfo}>
                            <div className={style.map}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3763.2790958553364!2d72.83764921482715!3d19.400343486902596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGULMOHAR%20BLD%20VRINDAVAN%20COMPLEX%2C%20Evershine%20City%20Rd%2C%20Vasai%20East%2C%20Vasai-Virar%2C%20Maharashtra%20401208!5e0!3m2!1sen!2sin!4v1645770569692!5m2!1sen!2sin" width="100%" height="100%" loading="lazy"></iframe>
                            </div>

                        </div>
                    </div>
                    <div className={style.contact_form}>
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
                            <button className="btn w-100 btn-warning contact-btn">Submit</button>
                            {done && <div className="mt-4">Thank you for your Email we will revert Asap!!</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
