import React, { useState } from 'react';
import walk from '../../images/activity-walk.png';
import run from '../../images/activity-run.png';
import bicycle from '../../images/activity-bicycle.png';
import hike from '../../images/activity-hike.png';
import swim from '../../images/activity-swimming.png';
import yoga from '../../images/activity-yoga.png';
import badminton from '../../images/activity-badminton.png';
import treadmil from '../../images/activity-treadmill.png';
import location from '../../images/icon-location.png';
import editIcon from '../../images/icon-edit.png';
import deleteIcon from '../../images/icon-delete.png';

export default function Card(props) {
    let pic;
    switch (props.data.activity) {
        case 'Walk': pic =
            <img src={walk} className='h-20' />
            break;
        case 'Run':
            pic = <img src={run} className='h-20' />
            break;
        case 'Bicycle ride':
            pic = <img src={bicycle} className='h-20' />
            break;
        case 'Hike':
            pic = <img src={hike} className='h-20' />
            break;
        case 'Swim':
            pic = <img src={swim} className='h-20' />
            break;
        case 'Badminton':
            pic = <img src={yoga} className='h-20' />
            break;
        case 'Treadmil running':
            pic = <img src={badminton} className='h-20' />
            break;
        case 'Yoga':
            pic = <img src={treadmil} className='h-20' />
            break;
        default:
            break;
    }

    return (
        <div className='card bg-gray-400 shadow-lg flex m-9 w-auto rounded-lg flex-col pb-5'>

            {/* Title */}
            <div className="titleCard p-4 flex justify-between">
                <label className='text-xl font-semibold text-white '>{props.data.title}</label>
                <div className='flex justify-end'>
                    <img src={editIcon} className='h-6 w-auto mr-3' />
                    <img src={deleteIcon} className=' h-6 w-auto' />
                </div>
            </div>

            {/* detail */}
            <div className='bg-blue-100 '>
                {/* activity detail */}
                <div className='p-4 flex'>
                    {pic}
                    <div className='flex flex-col'>
                        <div className='flex items-end  '>
                            <label className='text-2xl'>{props.data.activity}</label>
                            <img src={location} className='h-4 mb-2 ml-3' />
                            <label className='mb-px'>{props.data.location}</label>
                        </div>
                        <label className=' '>Date : {props.data.date}</label>
                        <label>Duration : {props.data.duration}</label>
                    </div>
                </div>

                {/* journal */}
                <div className='bg-white p-4 ' >
                    <p>{props.data.description}</p>
                </div>
            </div>


        </div>
    );
}
