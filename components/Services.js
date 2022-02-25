import React from 'react'
import style from '@/styles/services.module.scss';

export default function Services() {
    return (
        <div className="service-bg lightBg section-padd">
            <div className="container">
                <div className="row">
                    <div className="eight">
                        <h2 className="section-title">Services</h2>
                    </div>
                    <div className="col-md-4">
                        <div className='service-block'>
                            <img src="../images/icons/wedding.png" />
                            <h4>WEDDINGS</h4>
                        </div>

                    </div>
                    <div className="col-md-4">

                        <div className='service-block'>
                            <img src="../images/icons/estate.png" />
                            <h4>REAL-ESTATE</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='service-block'>
                            <img src="../images/icons/photo.png" />
                            <h4>PHOTOSHOOT</h4>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className='service-block'>
                            <img src="../images/icons/music-video.png" />
                            <h4>MUSIC VIDEO</h4>
                        </div>
                    </div>
                    <div className="col-md-4">

                        <div className='service-block'>
                            <img src="../images/icons/dancing.png" />
                            <h4>ARTIST MANAGEMENT</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='service-block'>
                            <img src="../images/icons/house.png" />
                            <h4>Production House</h4>
                        </div>
                    </div>
                    {/* <div className="col-md-3">
                        <div className='service-block'>
                            <img src="../images/icons/bolly.png" />
                            <h4>Production House</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='service-block'>
                            <img src="../images/icons/bolly.png" />
                            <h4>Production House</h4>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
