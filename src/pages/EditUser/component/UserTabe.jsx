const NewUser = () => {
    return (
        <div className="w-full lg:w-10/12 p-5 bg-white rounded-lg shadow">
            <div className="flex justify-between">
                <h1 className="lg:text-xl font-semibold  lg:text-left text-left text-blue-700">
                    <span className="mr-2 text-2xl text-center">&lt;</span>
                    EDIT NEW USER
                </h1>
                <button className="text-sm  lg:text-base lg:w-auto mb-4 lg:mb-0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                    style={{ background: 'linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)' }}>
                    ADD NEW USER +
                </button>
            </div>
            <form className="mt-4 p-4 lg:p-20 xl:mx-40">
                <div className="flex flex-col lg:flex-row justify-between gap-4 xl:gap-20 mb-4 lg:mb-10">
                    <div className="w-full lg:w-1/2">
                        <input type="text" placeholder="First Name" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <input type="text" placeholder="Last Name" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-4 xl:gap-20 mb-4 lg:mb-10">
                    <div className="w-full lg:w-1/2">
                        <input type="email" placeholder="User Email" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <input type="tel" placeholder="User Phone" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-4 xl:gap-20 mb-4 lg:mb-10">
                    <div className="w-full lg:w-1/2">
                        <select className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>Access Level</option>
                            <option>Admin</option>
                            <option>User</option>
                        </select>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <select className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>Live Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                </div>
                <div className="mb-4 lg:mb-10">
                    <textarea placeholder="Notes" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"></textarea>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-6">
                    <button
                        className="text-sm w-7/12 lg:text-base lg:w-auto mb-4 lg:mb-0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
                        type="button"
                        style={{ background: 'linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)' }}
                    >
                        SAVE DETAILS
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white"
                            strokeWidth="2"

                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </button>

                    <button className="text-sm w-7/12 lg:text-base lg:w-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                        style={{ background: 'linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)' }}>
                        RE-SEND ACCESS EMAIL
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewUser;
