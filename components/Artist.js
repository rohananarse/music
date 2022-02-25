import React, { useState } from 'react';
import DroneCat from './DroneCat';
import DroneMenu from './DroneMenu';

const menuData = [{
    cat: 'Dancer',
    id: 1,
    title: 'Venom',
    img: 'https://via.placeholder.com/400',
    video: 'https://youtu.be/vbWT8el9Ffw',
    desc: 'Shoot with Mudassar khan',

},
{
    id: 2,
    title: 'Flora',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: 'https://via.placeholder.com/400',
    desc: 'Shoot with Mudassar khan',
    cat: 'SkateBoarders'
},
{
    id: 3,
    title: 'Fiana.',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: 'https://via.placeholder.com/400',
    desc: 'Shoot with Mudassar khan',
    cat: 'Freestyle Footballers'
},
{
    id: 4,
    title: 'Ralph',
    img: 'https://via.placeholder.com/400',
    video: 'https://youtu.be/vbWT8el9Ffw',
    desc: 'Shoot with Mudassar khan',
    cat: 'Rappers'
},
{
    id: 5,
    title: 'wild reppers',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: 'https://via.placeholder.com/400',
    desc: 'Shoot with Mudassar khan',
    cat: 'Singers'
},
{
    id: 6,
    title: 'wild reppers',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: 'https://via.placeholder.com/400',
    desc: 'Shoot with Mudassar khan',
    cat: 'Singers'
},
{
    id: 6,
    title: 'wild reppers',
    video: 'https://youtu.be/vbWT8el9Ffw',
    img: 'https://via.placeholder.com/400',
    desc: 'Shoot with Mudassar khan',
    cat: 'SkateBoarders'
}
]

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
