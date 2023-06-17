import React, { useEffect, useState } from 'react'
import { findAllPageDP } from '../service/DonationProgramService';
import DonationPrograms from '../entity/DonationPrograms';
import './ListDonationPrograms.scss'

const ListDonationPrograms = (isTrue) => {
    const [listDP,setListDP] = useState([]);
    const [totalPages,setTotalPage] = useState(1);
    const findAllDP = async(page) => {
        const res = await findAllPageDP(page);
        if(res) {
            setListDP(res.content);
            setTotalPage(res.totalPages);
        }
    }

    useEffect(() => {
        findAllDP();
    },[isTrue])

  return (
    <div className='list-dp'>
      {listDP && listDP.length && listDP.map((item,index) => (
        <DonationPrograms
        key={index}
        id={item.id}
        name={item.name}
        total={item.totalNumberOfDonation}
        createdDate={item.createdDate}
        unitName={item.units.length > 0 ? item.units[0].unitName : ''}
        />
      ))}
    </div>
  )
}

export default ListDonationPrograms
