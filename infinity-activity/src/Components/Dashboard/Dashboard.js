import React, { useState } from 'react';
import Card from '../Card/Card';
import './Dashboard.css';
import profilePic from '../../images/user-profile.png';
import exampleActivitylist from './exampleActivitylist';

export default function Dashboard() {

    const cards = exampleActivitylist.map((card) => <Card data={card} />);

    return (
        <div className='dashboard flex justify-center'>
            <div className='md:flex  md:w-5/6 it '>
                {/* profile user */}
                <div className='flex md:flex-col md:w-1/3 justify-center md:justify-start'>
                    {/* name and pic */}
                    
                    <div className='profileUser flex flex-col items-center mr-11 md:mr-0 '>
                    <label className='text-4xl m-5'>Dashboard</label>
                        <img src={profilePic}
                            className=' h-56 md:h-full w-auto object-cover' />
                        <label className='fullname m-3 text-lg'>Tom Holland</label>
                    </div>

                    <div className='sort my-8 flex flex-col justify-center space-y-4 items-center'>
                        <button className='rounded-full w-40 px-3 py-3 bg-gray-500 text-lg text-white'>Daily</button>
                        <button className='rounded-full w-40 px-3 py-3 bg-gray-500 text-lg text-white'>Weekly</button>
                        <button className='rounded-full w-40 px-3 py-3 bg-gray-500 text-lg text-white'>Monthly</button>
                    </div>
                </div>
                {/* Dashboard */}
                <div className='cards md:w-2/3'>
                    {cards}
                </div>
            </div>
        </div>
    );
}
