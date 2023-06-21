import React from 'react'

const Donation = ({ index, lastName, phone, price,createdDate }) => {
    return (
        <tr key={index-1}>
            <td>{index}</td>
            <td><div>
                <div>{lastName}</div>
                <div>{phone}</div>
            </div></td>
            <td>{price}</td>
            <td>{createdDate}</td>
        </tr>
    )
}

export default Donation
