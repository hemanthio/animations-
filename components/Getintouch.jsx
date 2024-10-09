import React from 'react';

const Getintouch = () => {
  const handleCalendarOpen = () => {
    const calUrl = `https://cal.com/aryawebly-ltadci/30min`;
    window.open(calUrl, '_blank', 'width=800,height=600'); // Open calendar in a new window
  };

  return (
    <div className='h-screen w-full font-[helvetica] flex flex-col gap-12 justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='text-xl tracking-tight opacity-60 font-bold text-black'>Got a cool project in mind?</h1>
        <div className='flex flex-col justify-center items-center'>
          <div className='md:text-5xl text-2xl leading-tighter uppercase opacity-75'> Let's make it</div>
          <div className='md:text-5xl text-2xl leading-tighter uppercase opacity-75'>happen together!</div>
        </div>
      </div>

      <div>
        <button 
          className='px-6 py-4 text-xl rounded-full font-semibold inline bg-[#FCE61D] text-black'
          onClick={handleCalendarOpen} // Open calendar pop-up on button click
        >
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default Getintouch;
