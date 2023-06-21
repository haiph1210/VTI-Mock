import React, { useEffect, useState } from 'react'
import { findAllDonate } from '../../service/DonationService';
import Donation from '../../entity/Donation';
import './TableDonation.scss'
import { NumberFormat } from 'intl';
import 'intl/locale-data/jsonp/en';
import { format } from 'date-fns';
const TableDonation = ({data}) => {
    const [donations,setDonations] = useState([]);
    const formatPrice = (price) => {
        const formatter = new NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
        return formatter.format(price);
    };
    const formatCreatedDate = (createdDate) =>{   
     return format(new Date(createdDate), 'dd/MM/yyyy');
    }
    const findAll = async() => {
        const res = await findAllDonate();
        if(res) {
        setDonations(res);
        data(donations);
        }
    }

    useEffect(() =>{
        findAll();
    },[])
  return (
    <div className='table-config'>
      <table>
        <thead>
        <tr>
            <th>STT</th>
            <th>Tên Nhà Hảo Tâm</th>
            <th>Số Tiền</th>
            <th>Ngày Quyên Góp</th>
        </tr>
        </thead>
        <tbody>
            {donations &&
            donations.length >0 &&
            donations.map((item,index) => (
                <Donation
                index={index+1}
                lastName={item.lastName}
                phone={'0979015430'}
                price={formatPrice(item.donatePrice)}
                createdDate = {formatCreatedDate(item.createDate)}
                />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableDonation
