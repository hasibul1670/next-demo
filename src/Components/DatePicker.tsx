'use client'
import React from 'react';
import DatePicker from 'react-multi-date-picker';
import "react-multi-date-picker/styles/layouts/prime.css"


interface CommonDatePickerProps {
  datePickerRef?: React.RefObject<any>; // Change the type to match your ref if needed
  required?: boolean;
  value?: string; // Change the type to match your date value if needed
  disabled?: boolean;
  className: string; // Specify the type as string for CSS class name
  title: string;
}

export default function CommonDatePicker({
  datePickerRef,
  required,
  value,
  disabled,
  className,
  title,
}: CommonDatePickerProps) {
  return (
    <div className='cursor-pointer rounded-tl-md rounded-bl-md w-full border pb-3 text-sm'>
      <DatePicker
        inputClass='w-full'
       
        required={required}
        value={value}
        disabled={disabled}
        showOtherDays
        format='DD MMMM'
        onChange={(date) => {
         
        }}
        render={(value, openCalendar) => {
          return (
            <div className='ps-3 pt-3' onClick={openCalendar}>
              <p className={className}>{title}</p>
              <span className='font-bold'> {value}</span>
            </div>
          );
        }}
      />
    </div>
  );
}
