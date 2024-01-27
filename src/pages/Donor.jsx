import React, { useState } from 'react'
import MediShare from '../Components/MediShare';
import UploadMed from './UploadMed';
import MedicineList from './MedicineList';

const Donor = () => {
    const [activeView, setActiveView] = useState('uploadmed');

    const handleSidebarLinkClick = (view) => {
        setActiveView(view);
    };
  return (
    <>
        <div className='sticky top-0 z-50 bg-white pb-4 shadow-md'>
                        {/* bg-[#B9F3FC] */}
                        <MediShare />
                    </div>
            <div className=''>
                <aside id="default-sidebar" className="pt-2 fixed top-24 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div className="h-full px-3 py-6 overflow-y-auto bg-[#a3e3ec]">
                        <ul className="space-y-2 font-semibold">
                            <li>
                                <a
                                    href="#"
                                    className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[#2cdfe880] group ${activeView === 'approvallist' ? 'bg-[#60daec]' : ''}`}
                                    onClick={() => handleSidebarLinkClick('uploadmed')}
                                >
                                    Upload Medicine
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[#2cdfe880] group ${activeView === 'requestlist' ? 'bg-[#60daec]' : ''}`}
                                    onClick={() => handleSidebarLinkClick('uploadedmedicine')}
                                >
                                    Medicine List
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main content */}
                <div className="sm:ml-64 pt-8">
                        {activeView === 'uploadmed' && <UploadMed/>}
                        {activeView === 'uploadedmedicine' && <MedicineList/>}
                </div>
            </div>
        </>
  )
}

export default Donor