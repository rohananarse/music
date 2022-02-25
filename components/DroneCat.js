import React from 'react'

export default function DroneCat({ categories, filterItems }) {

    return (
        <div className="text-center m-3">
            {categories.map((category, index) => {
                return (
                    <button className="btn"
                        key={index}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>

                )
            })}
        </div>
    )
}
