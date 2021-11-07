import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { ButtonGroup, Button, Modal } from 'react-bootstrap';
import Slider from 'react-slick';

export default function Portfolio() {
    var settings = {
        className: "center",
        centerMode: false,
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        variableWidth: true,
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
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);


    return (

        <div className="container section-padd" id="portfolio">
            <div className="row text-center">
                <h2 className="section-title mb-2">Recent Work</h2>
                <div>
                    <Slider {...settings}>
                        <div onClick={handleShow}>
                            <img src="https://scontent.fbom36-1.fna.fbcdn.net/v/t1.6435-9/p960x960/235891918_233526725440702_6505244663712393449_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=vJWXxHzY09kAX9mVWJN&_nc_oc=AQmhNZBgRdK65sI-dx0yi8LbTMzZIDAbJCbwBTTEBP84Oh9YJ5cecVznZ7CrG2Hn-9s&_nc_ht=scontent.fbom36-1.fna&oh=7515269fce0fad0fe3f516ff3a81de9f&oe=61AEC62C" ></img>
                        </div>
                        <div>
                            <img src="https://scontent.fbom36-1.fna.fbcdn.net/v/t1.6435-9/p960x960/155770145_2851187465168880_911805227963926399_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=RWUQ5RDtSq0AX-H_YlC&_nc_ht=scontent.fbom36-1.fna&oh=6bb014e9fde1f14f294b703b922da652&oe=61AC942D"></img>
                        </div>
                        <div>
                            <img src="https://scontent.fbom36-1.fna.fbcdn.net/v/t1.6435-9/240782402_245049550955086_9071336924006012864_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=UIu_d1vVvsUAX-HsYOX&tn=sVBmdOwnfinXqB7v&_nc_ht=scontent.fbom36-1.fna&oh=f511b425f950c5f8dcfcb83d9be67c4d&oe=61AE6437"></img>
                        </div>
                        <div>
                            <img src="https://scontent.fbom36-1.fna.fbcdn.net/v/t1.6435-9/105185962_2629920200628942_5663428109067922960_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=jU7dZf2EMScAX_QyCZT&_nc_ht=scontent.fbom36-1.fna&oh=900af2c4a49139f137cfde825b5129be&oe=61AC12FD"></img>
                        </div>
                        <div>
                            <img src="https://scontent.fbom36-1.fna.fbcdn.net/v/t1.6435-9/122913147_2745102109110750_8164032254628959939_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=X0MBaB8sC7IAX_UdPq5&_nc_ht=scontent.fbom36-1.fna&oh=779297e414f4e0eedb839b222550e3f2&oe=61AB4FE3"></img>
                        </div>
                        <div>
                            <img src="https://scontent.fbom36-1.fna.fbcdn.net/v/t1.6435-9/85082887_2522567431364220_8867152208148299776_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=tRGC_8McEaEAX9mqdC0&_nc_ht=scontent.fbom36-1.fna&oh=1873e960200e46f66d7e9e666a7fba01&oe=61ADD353"></img>
                        </div>
                        <div>
                            <img src="https://scontent.fbom36-1.fna.fbcdn.net/v/t1.6435-9/93880115_2580145388939757_5127602777127649280_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=8S3NPC1luyQAX_bAIze&_nc_ht=scontent.fbom36-1.fna&oh=4310ce4ed3620530864e19d1727a7583&oe=61AC70F7"></img>
                        </div>
                        <div>
                            <img src="https://scontent.fbom36-1.fna.fbcdn.net/v/t1.6435-9/s1080x2048/87214894_2531360050484958_457313682292998144_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=scG5bM8pnsoAX-2SWlK&_nc_ht=scontent.fbom36-1.fna&oh=b7784b055d9bfc5580d2c4844ef13398&oe=61AE3005"></img>
                        </div>
                        <div>
                            <img src="https://scontent.fbom36-1.fna.fbcdn.net/v/t1.6435-9/85082887_2522567431364220_8867152208148299776_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=tRGC_8McEaEAX9mqdC0&_nc_ht=scontent.fbom36-1.fna&oh=1873e960200e46f66d7e9e666a7fba01&oe=61ADD353"></img>
                        </div>
                        <div>
                            <img src="../images/sample/event1.jpg"></img>
                        </div>
                        <div>
                            <img src="../images/sample/event1.jpg"></img>
                        </div>
                        <div>
                            <img src="../images/sample/event1.jpg"></img>
                        </div>
                        <div>
                            <img src="../images/sample/event1.jpg"></img>
                        </div>
                        <div>
                            <img src="../images/sample/event1.jpg"></img>
                        </div>
                        <div>
                            <img src="../images/sample/event1.jpg"></img>
                        </div>
                        <div>
                            <img src="../images/sample/event1.jpg"></img>
                        </div>
                    </Slider>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            </Modal>
        </div>

    )
}
