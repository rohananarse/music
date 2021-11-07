import React from 'react'
import style from '@/styles/about.module.scss';

export default function AboutMe() {
    return (
        <div className="lightBg section-padd" id="process">
            <h2 className="section-title mb-2 text-center">OUR PROCESS</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="mb-4">
                            <h4>HASSLE-FREE DRONE PHOTOGRAPHY</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div>
                            {/* <h4 className="mb-3">Why choose us</h4> */}
                            <strong><h6>TELL US ABOUT YOUR PROJECT</h6></strong>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                            <strong><h6>WE'LL SCHEDULE A MEETING</h6></strong>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                            <strong><h6>COMMENCEMENT OF WORK</h6></strong>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={style.aboutimg}>
                            <img src="../images/about/about.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
