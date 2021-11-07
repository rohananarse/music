import React from 'react'
import style from '@/styles/services.module.scss';

export default function Services() {
    return (
        <div className="service-bg section-padd">
            <div className="container">
                <div className="row text-center">
                    <div className="eight">
                        <h2 className="section-title">Services</h2>
                    </div>
                    <div className="col-md-4">
                        <div className={style.service_img}>
                            <img src="../images/services/drone.jpg" />
                        </div>
                        <h4>Drone Videography</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-4">

                        <div className={style.service_img}>
                            <img src="../images/services/ps-marriage.jpg" />
                        </div>
                        <h4>Photoshoot</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-4">

                        <div className={style.service_img}>
                            <img src="../images/services/production.jpg" />
                        </div>
                        <h4>Production House</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
