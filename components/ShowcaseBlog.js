import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button, Modal } from 'react-bootstrap';
import Slider from 'react-slick';
import ModalBlog from './shared-components/modal';


export default function ShowcaseBlog() {

    const handleClose = () => {
        setSelectedIndex(null)
    };

    const [selectedIndex, setSelectedIndex] = useState(null)

    const myObject = [
        {
            id: 1,
            title: 'Shoot with Mudassar khan',
            img: '../images/shoot1.png',
            video: 'https://youtu.be/vbWT8el9Ffw',
            desc: ''
        }
    ];


    return (
        <div className='section-padd'>
            <div className="container">
                <div className="row text-center">
                    <h2 className="section-title mb-2">Video Hub</h2>
                    <div className="d-flex recent-work">
                        {myObject.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <div className="blog-img" onClick={() => setSelectedIndex(index)}>
                                        <img src={item.img} width="100%" />
                                        <div className="blog-title">
                                            <h5 className="mt-3">{item.title}</h5>
                                        </div>
                                        <div className="desc">{item.desc}</div>
                                        <img className='play' src='images/play.png'></img>

                                    </div>
                                    <ModalBlog onHide={handleClose} show={index == selectedIndex} item={item} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

