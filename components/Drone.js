import React, { useState } from 'react';
import DroneCat from './DroneCat';
import DroneMenu from './DroneMenu';

const menuData = [{
    id: 1,
    title: 'www Rippinwww',
    img: '../images/shoot1.png',
    video: 'https://youtu.be/vbWT8el9Ffw',
    desc: 'Shoot with Mudassar khan',
    cat: 'wedding'
}, {
    id: 2,
    title: 'ww Zieme',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: '../images/shoot1.png',
    desc: 'Shoot with Mudassar khan',
    cat: 'realestate'
},
{
    id: 3,
    title: 'ww Ruecker Sr.',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: '../images/shoot1.png',
    desc: 'Shoot with Mudassar khan',
    cat: 'brands'
},
{
    id: 4,
    title: 'www Rippinwww',
    img: '../images/shoot1.png',
    video: 'https://youtu.be/vbWT8el9Ffw',
    desc: 'Shoot with Mudassar khan',
    cat: 'wedding'
}, {
    id: 5,
    title: 'ww Zieme',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: '../images/shoot1.png',
    desc: 'Shoot with Mudassar khan',
    cat: 'realestate'
},
{
    id: 6,
    title: 'ww Ruecker Sr.',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: '../images/shoot1.png',
    desc: 'Shoot with Mudassar khan',
    cat: 'brands'
}]

const allcategories = ["all", ...new Set(menuData.map((data) => data.cat))]

export default function Drone() {

    const [menuItems, setMenuItems] = useState(menuData);
    const [categories, setCategories] = useState(allcategories)


    const filterItems = (category) => {

        if (category === 'all') {
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
