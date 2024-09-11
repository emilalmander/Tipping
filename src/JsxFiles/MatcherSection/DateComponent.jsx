import React from 'react';

const DateComponent = ({ date }) => {
  const formattedDate = new Date(date).toLocaleString(); // Formats the date to local date string
  return (
    <div className="text-center mb-2 ">
      {formattedDate}
    </div>
  );
};

export default DateComponent;
