import React from 'react'
import style from '@/styles/showcase.module.scss';
import { Button } from 'react-bootstrap'

export default function Showcase() {
    return (
        <div className="hero-video-container" id="home">
            <div className="video-block-fw">
                <video src="../banner-video.mp4" className={style.video} autoPlay loop playsInline muted></video>
                <div className="container">
                    <div className={style.blockCaptions}>
                        <h1 className="mb-4">Eye the talent production</h1>
                        <h5>
                            We are visual production company, specializing in Aerial Drone Videographt and Photography
                        </h5>
                        <div className="cta-btn mt-5">
                            <Button variant="warning" className="me-2" href="#contactus">Contact Now</Button>{' '}
                            <Button variant="outline-warning" href="#portfolio">View Portfolio</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
