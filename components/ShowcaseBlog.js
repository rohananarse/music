import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button, Modal } from 'react-bootstrap';
import Slider from 'react-slick';
import ModalBlog from './shared-components/modal';


export default function ShowcaseBlog() {
    var settings = {
        className: "center",
        centerMode: false,
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        centerMode: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2,
                    slidesPerRow: 1,
                    centerPadding: "20px",
                }
            }
        ]
    };

    const handleClose = () => {
        setSelectedIndex(null)
    };

    const [selectedIndex, setSelectedIndex] = useState(null)

    const myObject = [
        {
            id: 1,
            title: 'Victor Rippin',
            img: '../images/shoot1.png',
            video: 'https://youtu.be/vbWT8el9Ffw',
            desc: 'Shoot with Mudassar khan'
        }, {
            id: 2,
            title: 'Jamey Zieme',
            video: 'https://youtu.be/vbWT8el9Ffw',
            img: '../images/shoot1.png',
            desc: 'Shoot with Mudassar khan'
        },
        {
            id: 3,
            title: 'Madelyn Ruecker Sr.',
            video: 'https://youtu.be/vbWT8el9Ffw',
            img: '../images/shoot1.png',
            desc: 'Shoot with Mudassar khan'
        }
    ];


    return (
        <div className='section-padd'>
            <div className="container">
                <div className="row text-center">
                    <h2 className="section-title mb-2">Notable work with celebrities</h2>
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

