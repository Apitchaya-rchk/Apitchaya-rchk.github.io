import walk from '../../../images/activity-walk.png';
import run from '../../../images/activity-run.png';
import bicycle from '../../../images/activity-bicycle.png';
import hike from '../../../images/activity-hike.png';
import swim from '../../../images/activity-swimming.png';
import yoga from '../../../images/activity-yoga.png';
import badminton from '../../../images/activity-badminton.png';
import treadmil from '../../../images/activity-treadmill.png';
import React, { useState } from 'react';

export default function SelectBox(props) {

    const [sportPic, setSportPic] = useState(walk);

    const handleChange = (e) => {
        props.setState(e.target.value);
        switch (e.target.value) {
            case 'Walk':
                setSportPic(walk);
                break;
            case 'Run':
                setSportPic(run);
                break;
            case 'Bicycle ride':
                setSportPic(bicycle);
                break;
            case 'Hike':
                setSportPic(hike);
                break;
            case 'Swim':
                setSportPic(swim);
                break;
            case 'Badminton':
                setSportPic(badminton);
                break;
            case 'Treadmil running':
                setSportPic(treadmil);
                break;
            case 'Yoga':
                setSportPic(yoga);
                break;
            default:
                break;
        }
    }

    return (
        <div className="flex-col items-center ">
            <label className="h-8 w-full ">Activity</label>
            <div className="flex rounded-md border-2 border-gray-300 outline-gray-500 focus:shadow-md items-center">
                <img src={sportPic} className="h-14 mx-2" />
                <select required onClick={handleChange} className="h-16 w-full pl-2  outline-none">
                    <option value='Walk'>Walk</option>
                    <option value='Run'>Run</option>
                    <option value='Bicycle ride'>Bicycle ride</option>
                    <option value='Hike'>Hike</option>
                    <option value='Swim'>Swim</option>
                    <option value='Badminton'>Badminton</option>
                    <option value='Treadmil running'>Treadmil running</option>
                    <option value='Yoga'>Yoga</option>
                </select>
            </div>
        </div>
    );
}