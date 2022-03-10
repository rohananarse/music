import React, { Component } from "react";
import { Modal, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy'


export default function ModalBlog({ item, show, onHide, backdrop }) {
    return (
        <div>
            <Modal centered size="lg" show={show} onHide={onHide} keyboard={false}>
                <Modal.Header closeButton>
                    <div className="text-right closex"></div>
                </Modal.Header>
                {item.video &&
                    <div className='player-wrapper'>
                        <ReactPlayer
                            url={item.video}
                            className='react-player'
                            width="100%"
                            height="100%"
                            controls
                            playing={true}
                        />
                    </div>
                }


            </Modal>
        </div>
    )
}
