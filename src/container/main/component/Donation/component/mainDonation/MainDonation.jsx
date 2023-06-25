import React, { useEffect, useState } from 'react'
import TableDonation from '../table/TableDonation'
import DonationCard from '../cart/DonationCart'
import './MainDonation.scss'
import { countDonation, totalPriceDonation } from '../../service/DonationService'

const MainDonation = () => {
    const [count,setCount] = useState(0);
    const [price,setPrice] = useState(0);
    const totalCount = async () => {
        try {
          const res = await countDonation();
          if (res) {
            setCount(res);
          }
        } catch (error) {
          console.error('Error:', error);
          // Hiển thị thông báo lỗi cho người dùng hoặc thực hiện các xử lý khác tùy theo yêu cầu của bạn
        }
      };
      
      const totalPrice = async () => {
        try {
          const res = await totalPriceDonation();
          if (res) {
            setPrice(res);
          }
        } catch (error) {
          console.error('Error:', error);
          // Hiển thị thông báo lỗi cho người dùng hoặc thực hiện các xử lý khác tùy theo yêu cầu của bạn
        }
      };
      
    const handleData = (value) => {
        console.log(value);
    }

    useEffect(() => {
        totalCount();
        totalPrice();
    },[])
    console.log(count);
    return (
        <div className='donation-config'>
            <div className='main-table'>
                <div className='title-config'><h2>Nhà Hảo Tâm</h2></div>
                <div className='table-donation'>
                    <TableDonation
                    data = {(value) => handleData(value)}
                /></div>
            </div>

            <div className='card-donation'>
                <DonationCard
                count={count}
                totalPrice={price}
             /></div>
        </div>
    )
}

export default MainDonation
