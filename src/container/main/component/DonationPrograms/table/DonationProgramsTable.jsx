import React, { useEffect } from 'react';
import './DonationProgramTable.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectDP } from '../redux/DonationProgramSelect';
import TableDP from './TableDP';
import { findAllDPAction } from '../redux/DonationProgramsAction';
import { selectAuth } from '../../user/redux/auth/AuthSelector';

const DonationProgramsTable = () => {
    const dispatch = useDispatch();
    const listDp = useSelector(selectDP);
    const tokenRes = useSelector(selectAuth);
    console.log(tokenRes);
    useEffect(()=> {
        dispatch(findAllDPAction())
    },[])
    console.log(listDp);
    return (
        <div>
            <div className='table-config'>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Chương Trình Quyên Góp</th>
                            <th>Tên Đơn Vị </th>
                            <th>Tổng Số Quà Tặng</th>
                            <th>Ngày Quyên Góp</th>
                            {tokenRes.role === "Manager"
            ?
            <th>Action</th>
            :
            null
          }
                           
                        </tr>
                    </thead>
                    <tbody>
                        {listDp &&
                            listDp.length > 0 &&
                            listDp.map((item, index) => (
                                <TableDP
                                    id={item.id}
                                    index={index + 1}
                                    name={item.name}
                                    total={item.totalNumberOfDonation}
                                    units={item.units}
                                    createDate={item.createdDate}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DonationProgramsTable

