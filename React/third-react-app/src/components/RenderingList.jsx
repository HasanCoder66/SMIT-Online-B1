import React from 'react'

const RenderingList = () => {

    let items = [

        {
            name: "Car",
            color: "red",
            id: 1
        },
        {
            name: "bike",
            color: "black",
            id: 2
        },
        {
            name: "mobile",
            color: "gray",
            id: 3
        }
    ]


    return (

        <div>
            {items.map((item) => (
              <ItemCard data={item} key={item.id}/>
                ))}
        </div>

    )
}

export default RenderingList



const ItemCard = ({data}) => {
    return(
        <div key={data.id} className='p-5 shadow-md '>

        <div>
            <p>{data.name}</p>
            <p>{data.color}</p>
        </div>
    </div>
    )
}