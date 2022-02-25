import React, { useState } from 'react';
import DroneCat from './DroneCat';
import DroneMenu from './DroneMenu';

const menuData = [{
    id: 1,
    title: 'Venom',
    img: '../images/shoot1.png',
    video: 'https://youtu.be/vbWT8el9Ffw',
    desc: 'Shoot with Mudassar khan',
    cat: 'Dancer'
}, {
    id: 2,
    title: 'Flora',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: '../images/shoot1.png',
    desc: 'Shoot with Mudassar khan',
    cat: 'SkateBoarders'
},
{
    id: 3,
    title: 'Fiana.',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: '../images/shoot1.png',
    desc: 'Shoot with Mudassar khan',
    cat: 'Freestyle Footballers'
},
{
    id: 4,
    title: 'Ralph',
    img: '../images/shoot1.png',
    video: 'https://youtu.be/vbWT8el9Ffw',
    desc: 'Shoot with Mudassar khan',
    cat: 'Rappers'
}, {
    id: 5,
    title: 'wild reppers',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: '../images/shoot1.png',
    desc: 'Shoot with Mudassar khan',
    cat: 'Singers'
},
{
    id: 6,
    title: 'Itrix crew.',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: '../images/shoot1.png',
    desc: 'Shoot with Mudassar khan',
    cat: 'brands'
}]

const allcategories = ["All", ...new Set(menuData.map((data) => data.cat))]


function Artist() {
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
                <h2 className="section-title mb-2">Gang Of Artist's</h2>
                <div>
                    <DroneCat categories={categories} filterItems={filterItems} />
                    <DroneMenu items={menuItems} />
                </div>
            </div>
        </div>
    )
}

export default Artist
