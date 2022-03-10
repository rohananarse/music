import React, { useState } from 'react';
import DroneCat from './DroneCat';
import DroneMenu from './DroneMenu';

const menuData = [{
    id: 1,
    title: 'www Rippinwww',
    img: '../images/celebs/8.png',
    video: 'https://youtu.be/vbWT8el9Ffw',
    desc: 'Shoot with Mudassar khan',
    cat: 'Celebrities'
}, {
    id: 2,
    title: 'ww Zieme',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: '../images/celebs/34.jpg',
    desc: 'Shoot with Mudassar khan',
    cat: 'Celebrities'
},
{
    id: 3,
    title: 'ww Ruecker Sr.',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: '../images/celebs/1.jpg',
    desc: 'Shoot with Mudassar khan',
    cat: 'Celebrities'
},
{
    id: 4,
    title: 'www Rippinwww',
    img: '../images/celebs/5.jpg',
    video: 'https://youtu.be/vbWT8el9Ffw',
    desc: 'Shoot with Mudassar khan',
    cat: 'Celebrities'
}, {
    id: 5,
    title: 'ww Zieme',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: '../images/celebs/6.jpg',
    desc: 'Shoot with Mudassar khan',
    cat: 'Celebrities'
},
{
    id: 6,
    title: 'ww Ruecker Sr.',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: '../images/celebs/19.png',
    desc: 'Shoot with Mudassar khan',
    cat: 'Celebrities'
},
{
    id: 7,
    title: 'ww Ruecker Sr.',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: '../images/celebs/20.png',
    desc: 'Shoot with Mudassar khan',
    cat: 'Celebrities'
},
{
    id: 8,
    title: 'ww Ruecker Sr.',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: 'https://via.placeholder.com/400',
    desc: 'Shoot with Mudassar khan',
    cat: 'Brands'
},
{
    id: 9,
    title: 'ww Ruecker Sr.',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: 'https://via.placeholder.com/400',
    desc: 'Shoot with Mudassar khan',
    cat: 'Real Estate'
},
{
    id: 10,
    title: 'ww Ruecker Sr.',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: 'https://via.placeholder.com/400',
    desc: 'Shoot with Mudassar khan',
    cat: 'Real Estate'
}
]

const allcategories = ["All", ...new Set(menuData.map((data) => data.cat))]

export default function Drone() {

    const [menuItems, setMenuItems] = useState(menuData);
    const [categories, setCategories] = useState(allcategories)


    const filterItems = (category) => {

        if (category === 'All') {
            setMenuItems(menuData);
            return;
        }

        const newItems = menuData.filter((item) => item.cat === category)
        setMenuItems(newItems)
    }


    return (
        <div className='section-padd'>
            <div className="container">
                <h2 className="section-title mb-2">Chekout Our Portfolio..</h2>
                <div>
                    <DroneCat categories={categories} filterItems={filterItems} />
                    <DroneMenu items={menuItems} />
                </div>
            </div>
        </div>
    )
}
