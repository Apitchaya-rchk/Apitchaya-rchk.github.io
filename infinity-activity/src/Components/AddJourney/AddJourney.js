import React, { useState } from 'react';
import './AddJourney.css';
import SelectBox from './SelectBox/SelectBox';
import InputBox from './InputBox/InputBox';
import TextareaBox from './TextareaBox/TextareaBox';



export default function AddJourney(props) {
    //tailwindcss
    const styleComponent = "flex justify-center items-center bg-gradient-to-r from-sky-100 to-red-100";
    const styleForm = "bg-white block round-xl shadow-md p-7 my-16 w-5/6 sm:w-2/3 md:w-1/2 rounded-lg";
    const styleButton = "w-full bg-gray-400 hover:bg-gray-600 text-white rounded shadow-md py-2 px-4 my-4";

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('')
    const [activity, setActivity] = useState('Walk');
    const [location, setLocation] = useState('');
    const [durationHour, setDurationHour] = useState('');
    const [durationMin, setDurationMin] = useState('');
    const [description, setDescription] = useState('');

    console.log(title);
    console.log(date);
    console.log(activity);
    console.log(location);
    console.log(durationHour);
    console.log(durationMin);
    console.log(description);
    // alert( {
    //     title: {title},
    //     activity: {activity},
    //     location: {location},
    //     date: {date},
    //     duration: {duration},
    //     description: {description}
    // });

    const handleSubmit = (e) => {
        e.preventDefault();
        let testData = {
            title: title ,
            activity:  activity ,
            location:  location ,
            date:  date ,
            duration:  {hour: durationHour, mins: durationMin},
            description:  description 
        };
        alert(JSON.stringify(testData));
    }

    return (
        <div className={styleComponent}>
            <div id="form" className={styleForm}>
                <form onSubmit={handleSubmit}>
                    <h2 className='text-4xl my-4 '>Add Journey📝</h2>
                    {/* Activity Type */}
                    <SelectBox setState={setActivity} />
                    {/* Title */}
                    <InputBox label='Title' type='text' setState={setTitle}
                    errMessage='*Title should not be empty' pattern='${1,}'/>
                    {/* Date */}
                    <InputBox label='Date' type='date' setState={setDate} 
                    errMessage='*Please select a date' pattern='${1,}'/>
                    {/* Duration */}
                    <InputBox label='hour' type='text' setState={setDurationHour}
                    errMessage='*Duration should not be empty (0-9)' pattern='^[0-9]{1}' />
                    <InputBox label='minute' type='text' setState={setDurationMin}
                    errMessage='*Duration should not be empty (0-59)' pattern='^([1-5]?[0-9])$'/>
                    {/* Location */}
                    <InputBox label='Location' type='text' setState={setLocation} 
                    errMessage='*Location should not be empty' pattern='${1,}'/>
                    {/* Description*/}
                    <TextareaBox setState={setDescription} 
                    errMessage='Please, take down some note so it becomes memorable 😢💭'/>

                    {/* SUBMIT BUTTON */}
                    <input type="submit" name="" id="" className={styleButton} />
                </form>
            </div >

        </div >
    );
}


