import React from 'react'

export default function DroneMenu({ items }) {
    return (
        <div className="section row">
            {

                items.map((menuItem) => {
                    const { id, title, cat, desc, img } = menuItem;
                    return (
                        <div className="col-md-4 mb-4 img-box" key={id}>
                            <img className="img-fluid" src={img} />
                        </div>
                    )
                })
            }
        </div>
    )
}
