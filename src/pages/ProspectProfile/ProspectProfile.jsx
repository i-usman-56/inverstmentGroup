import phonecall from "../../assets/svg/ic_round-local-phone.svg";
import email from "../../assets/svg/carbon_email.svg"
import googlemeet from "../../assets/svg/flat-color-icons_google.svg"
import phone2 from "../../assets/svg/phone2.svg"
import deleteIcon from "../../assets/svg/delete.svg"
import exportIcon from "../../assets/svg/export.svg"
import profileIcon from "../../assets/svg/profileIcon.svg"


const ProspectProfile = () => {
    return (
        <div className="container mx-auto my-8 p-4 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center border-b pb-4">
                <h1 className="text-2xl font-semibold text-[#0250E6]">Tommy Fury</h1>
                <div className="flex">
                    <button className="text-black px-4 py-2 rounded-lg  flex items-center justify-center">Mark as Closed
                        <input
                            type="radio"
                            name="radio"
                            className="w-[18px] h-[18px] ml-2 items-center justify-center"
                        />
                        <img src={exportIcon} alt="Export" className="ml-2 w-4 h-4" />
                        <img src={deleteIcon} alt="Delete" className="ml-2 w-4 h-4" />

                    </button>

                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                {/* Prospect Details */}
                <div className="col-span-2 pr-4 border-r-2">
                    <div className="flex justify-between border-b py-2">
                        <div className="lg:flex lg:items-center lg:justify-between lg:w-4/12">
                            <span className="text-[#0250E6] font-bold">Prospect Phone:<br /></span>
                            <span className="text-sm">+1 (333)-234-5068</span>
                        </div>
                        <button className="bg-[#00B860] text-white px-4 py rounded flex items-center ">CALL NOW <img src={phonecall} alt="phonecall" className="ml-2" /></button>
                    </div>
                    <div className="flex justify-between border-b py-2">
                        <div className="lg:flex lg:items-center lg:justify-between lg:w-4/12">
                            <span className="text-[#0250E6] font-bold break-normal	">Prospect Email:<br /></span>
                            <span className="text-sm">Tommyfury@gmail.com</span>
                        </div>
                        <button className="bg-[#0250E6] text-white px-2 py rounded flex items-center">EMAIL NOW <img src={email} alt="email" className="ml-4" /></button>
                    </div>
                    <div className="flex justify-between border-b py-2">
                        <div className="lg:flex lg:items-center lg:justify-between lg:w-4/12">
                            <span className="text-[#0250E6] font-bold">Prospect Source:<br /></span>
                            <span className="font-semibold bg-[#479090] py text-white rounded-sm px-2">Typeform/TikTok</span>
                        </div>
                    </div>
                    <div className="flex justify-between border-b py-2">
                        <div className="lg:flex lg:items-center lg:justify-between lg:w-4/12">
                            <span className="text-[#0250E6] font-bold">Interested In:<br /></span>
                            <span className="text-sm">FUNDING</span>
                        </div>
                        <button className="flex items-center justify-center px-4 py border border-gray-400 rounded text-gray-800 hover:bg-gray-100">
                            ADD INTEREST
                            <span className="ml-2">+</span>
                        </button>

                    </div>
                    <div className="flex justify-between border-b py-2">
                        <div className="lg:flex lg:items-center lg:justify-between lg:w-4/12">
                            <span className="text-[#0250E6] font-bold">Assigned To:<br></br></span>
                            <span className="font-semibold text-[#00B860]">Sam Jay</span>
                        </div>
                    </div>
                    <div className="flex justify-between border-b py-2">
                        <div className="lg:flex lg:items-center lg:justify-between lg:w-4/12">
                            <span className="text-[#0250E6] font-bold">Payment Amount:<br /></span>
                            <span className="font-semibold bg-[#39AB74] px-2 py text-white rounded-sm">$2,000.00</span>
                        </div>
                        <button className="flex items-center justify-center px-5 py border border-gray-400 rounded text-gray-800 hover:bg-gray-100">
                            ADD AMOUNT
                            <span className="ml-2">+</span>
                        </button>                    </div>
                    <div className="flex justify-between border-b py-2">
                        <div className="lg:flex lg:items-center lg:justify-between lg:w-4/12">
                            <span className="text-[#0250E6] font-bold">Prospect Status:<br /></span>
                            <span className="font-semibold text-sm">ASSIGNED TO YOU</span>
                        </div>
                    </div>
                    <div className="flex justify-between border-b py-2">
                        <div className="lg:flex lg:items-center lg:justify-between lg:w-4/12">
                            <span className="text-[#0250E6] font-bold">Closing Status:<br /></span>
                            <span className="font-semibold bg-[#F5D29C] px-2 py rounded-sm text-white">First Call</span>
                        </div>
                        <button className="flex items-center justify-center px-3 py border border-gray-400 rounded text-gray-800 hover:bg-gray-100">
                            SELECT STATUS
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>                        </button>

                    </div>
                    <div className="flex justify-between border-b py-2">
                        <div className="lg:flex lg:items-center lg:justify-between lg:w-4/12">
                            <span className="text-[#0250E6] font-bold">Scheduled Tasks:<br /></span>
                            <span className="font-semibold">N/A</span>
                        </div>
                    </div>
                    <div className="flex justify-between border-b py-2">
                        <div className="flex items-center justify-between w-4/12">
                            <span className="text-[#0250E6] font-bold">Create Action:</span>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:space-y-0 space-y-3 gap-3 mt-3">
                        <button className="text-white px-2 py-2 rounded items-center justify-center flex" style={{ background: 'linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)' }}>
                            <span className="flex items-center font-semibold">
                                SCHEDULE GOOGLE MEETS
                                <img src={googlemeet} alt="Google Meet" className="ml-2 h-5 w-5" />
                            </span>
                        </button>

                        <button className=" text-white lg:px-6 px-12 py-2 rounded flex items-center" style={{ background: 'linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)' }}>

                            <span className="flex items-center font-semibold">
                                SCHEDULE CALL
                            </span>
                            <img src={phonecall} alt="Google Meet" className="ml-2 h-5 w-5" />

                        </button>
                        <button className=" text-white lg:px-6 px-9 py-2 rounded  flex items-center" style={{ background: 'linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)' }}>
                            <span className="flex items-center font-semibold">
                                CALL NOW IN DIALER
                            </span>

                            <img src={phone2} alt="Google Meet" className="ml-2 h-3 w-3" />

                        </button>
                    </div>
                </div>

                {/* Notes Section */}
                <div className="hidden lg:block col-span-1">
                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-[#0250E6]">NOTES</h2>
                        <div className="border-b py-2">
                            <span className="font-semibold flex">Me:
                                <img src={profileIcon} alt="profileIcon" className="ml-2" />
                            </span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisi nec suscipit fermentum.</p>
                        </div>
                        <div className="border-b py-2">
                            <span className="font-semibold flex">Me:
                                <img src={profileIcon} alt="profileIcon" className="ml-2" />
                            </span>                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisi nec suscipit fermentum.</p>
                        </div>
                        <textarea placeholder="Add Notes Here" className="w-full p-2 mt-4 border rounded-lg"></textarea>
                        <div className="flex justify-center">
                            <button className="text-white px-4 py-2 rounded-lg mt-2 text-center flex"
                                style={{ background: 'linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)' }}
                            >ADD NOTE</button>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProspectProfile;
