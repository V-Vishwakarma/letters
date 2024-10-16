import React from 'react';

const ExperienceLetter = ({ title, name, designation, employeeId, date, fromDate, toDate }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 font-poppins">
            {/* A4 sized page */}
            <div className="w-[210mm] h-[297mm] bg-white shadow-xl p-10 border border-gray-300 relative">

                {/* Logo and Title Section */}
                <div className="flex justify-between items-start mb-6">
                    {/* Logo */}
                    <div className="w-[120px] absolute top-[20px]">
                        <img src="/src/assets/Screenshot_2024-08-24_105053-removebg-preview 1.png" alt="Company Logo" className="w-full h-full object-contain" />
                    </div>
                    {/* Title */}
                    <div className="text-center flex-1">
                        <h1 className="font-bold text-3xl">Experience Letter</h1>
                    </div>
                </div>

                {/* Blue line below the logo and heading */}
                <div className="absolute top-[130px] left-0 w-full border-b-4 border-blue-300"></div>


                {/* Header Section */}
                <div className="flex justify-between p-6 align-top mt-14">
                    <div>
                        <h2 className="font-bold text-lg">{title}{name}</h2>
                        <p className="font-bold text-lg">{designation}</p>
                        <p className="font-bold text-lg">{employeeId}</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg">{date}</p>
                    </div>
                </div>

                {/* Letter Body */}
                <div className="p-6">
                    <p className="mb-0">
                        Dear,
                    </p>
                    <p className="mb-4">
                        To whom it may concern,
                    </p>
                    <p className="mb-4">
                        This is to certify that <strong>{name}</strong> was employed with <strong>Placement Plaza</strong> as a <strong>{designation}</strong> from <strong>{fromDate}</strong> to <strong>{toDate}</strong>.
                    </p>
                    <p className="mb-4">
                        During their tenure, <strong>{name}</strong> performed their duties with diligence and professionalism. They were responsible for Social Media Handle, Designing, and other tasks. Their ability to handle tasks efficiently, their positive attitude, and their commitment to achieving the organization's goals were highly appreciated.
                    </p>
                    <p className="mb-4">
                        We found <strong>{name}</strong> to be a dedicated and reliable employee who consistently delivered results. Their conduct during their time with us was exemplary, and they were always willing to go the extra mile to ensure the completion of projects on time.
                    </p>
                    <p className="mb-4">
                        We wish <strong>{name}</strong> all the best in their future endeavors and are confident they will excel in any role they take on.
                    </p>
                </div>

                {/* Footer */}
                <div className="mt-8 p-6">
                    <p className='font-bold text-lg'>for Placement Plaza</p>
                    <br />
                    <p>____________________________</p>
                    <p className='font-bold text-lg'>(Authorized Signatory)</p>
                    <p className='font-bold text-lg'>Name: Lavika Sharma</p>
                    <p className='font-bold text-lg'>Designation: HR HEAD</p>
                </div>

                {/* Blue line above the contact info */}
                <div className="absolute bottom-[60px] left-0 w-full border-b-4 border-blue-300 my-8"></div>

                {/* Contact Info */}
                <div className="flex justify-between mt-28 text-lg font-bold">
                    <p>+91-9572745274</p>
                    <p>hr@placementplaza.com</p>
                    <p>New Delhi, India</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceLetter;

