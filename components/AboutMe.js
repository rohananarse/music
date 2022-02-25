import React from 'react'
import style from '@/styles/about.module.scss';

export default function AboutMe() {
    return (
        <div className="section-padd pt-5" id="process">
            {/* <h2 className="section-title mb-2 text-center">About Us</h2> */}
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-7">
                        <div className="mb-4">
                            <h2 className={style.bio_title}>Hello <strong> <span>i'm Ashish S Kanoujiya.</span></strong></h2>
                            <p>
                                I started my career as a dance but always have been visionary person.
                                As working in Bollywood industry for more than 10 yrs .
                                I worked with many celebrity as a dance and also a personal trainer .
                                I have dance more than 100 Bollywood movies and performed more the 100 tv commercial adds .
                                Trained Actor’s like Sir.Salman khan, Ashmit Patel, Bipasha Basu etc.
                                I also performed in many reality shows like
                                Entertainment ke liye kuch bhi karega,
                                India’s got talent season 3 winner with group
                                Bindass street dance winner etc and many more .
                                But as a visionary person also had something in my mind ..
                                To create something that will help people remember me ..
                                As its been more than 10yrs I have also directed and shot music video .
                                So in dec 2018 I started my own media production.
                                And wanted to us in most of the fields (exploring all the fields which has video)
                                People who work with my are already working for Bollywood industry
                                (As cinematographer,photographer ,choreographer etc)</p>

                            {/* Fields we are expert In
                            <li>WEDDINGS / ENGAGMENTS</li>
                            <li>PRE-WEDDINGS</li>
                            <li>REAL-ESTATE</li>
                            <li>TRAVEL FILMS</li>
                            <li>REEL VIDEOS</li>
                            <li>PHOTOSHOOT FOR ALL TYPES OF EVENT</li>
                            <li>MUSIC VIDEO</li>
                            <li>MUSIC LIVE CONCERT</li>
                            <li>ARTIST MANAGEMENT</li> */}
                            {/* 
                            <div class="d-flex text-center flex-wrap">
                                <div class="flex-fill service-block">
                                    <a class="service-icon" href="#">
                                        <img src="../images/icons/clock.png" />
                                    </a>
                                    <div class="service-content">
                                        <h5 class="service-title">
                                            <a href="#">WEDDINGS / ENGAGMENTS
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                                <div class="flex-fill service-block">
                                    <a class="service-icon" href="#">
                                        <img src="../images/icons/clock.png" />
                                    </a>
                                    <div class="service-content">
                                        <h5 class="service-title">
                                            <a href="#">REAL-ESTATE
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                                <div class="flex-fill service-block">
                                    <a class="service-icon" href="#">
                                        <img src="../images/icons/clock.png" />
                                    </a>
                                    <div class="service-content">
                                        <h5 class="service-title">
                                            <a href="#">PHOTOSHOOT
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                                <div class="flex-fill service-block">
                                    <a class="service-icon" href="#">
                                        <img src="../images/icons/clock.png" />
                                    </a>
                                    <div class="service-content">
                                        <h5 class="service-title">
                                            <a href="#">MUSIC VIDEO
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                                <div class="flex-fill service-block">
                                    <a class="service-icon" href="#">
                                        <img src="../images/icons/clock.png" />
                                    </a>
                                    <div class="service-content">
                                        <h5 class="service-title">
                                            <a href="#">ARTIST MANAGEMENT
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                                <div class="flex-fill service-block">
                                    <a class="service-icon" href="#">
                                        <img src="../images/icons/clock.png" />
                                    </a>
                                    <div class="service-content">
                                        <h5 class="service-title">
                                            <a href="#">Funny Videos
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* <div>
                            <p>   OUR MAIN MOTO - TO GIVE A SATISFACTORY PRODUCT TO OUR CLIENT .
                                WE BELIVE IN LONG TERM RELATIONSHIP .</p>
                        </div> */}
                        {/* <div>
                            <strong><h6>TELL US ABOUT YOUR PROJECT</h6></strong>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                            <strong><h6>WE'LL SCHEDULE A MEETING</h6></strong>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                            <strong><h6>COMMENCEMENT OF WORK</h6></strong>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div> */}
                        <div className='social-handle'>
                            <div className='d-flex'>
                                <a href=""><img src="../images/icons/facebook.png" /></a>
                                <a href='#'><img src="../images/icons/instagram.png" /></a>
                                <a href='#'><img src="../images/icons/youtube.png" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={style.aboutimg}>
                            <img src="../images/team/ashish.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
