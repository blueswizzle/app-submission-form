import React from 'react';

const ListingForm = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-red-600 font-bold text-2xl mb-4">JOIN THE REVOLUTION</h1>
            <h2 className="text-xl">List Your:</h2>
            <p>Muslim Owned Businesses</p>
            <p>Muslim Operated Businesses</p>
            <p>Businesses Serving the Muslim Community</p>

            <form className="mt-6 w-full max-w-lg">
                <div className="flex items-center mb-4">
                    <label
                        htmlFor="firstName"
                        className="w-1/3 text-right pr-4 font-medium"
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="w-2/3 border border-gray-300 rounded p-2"
                    />
                </div>
                <div className="flex items-center mb-4">
                    <label
                        htmlFor="lastName"
                        className="w-1/3 text-right pr-4 font-medium"
                    >
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="w-2/3 border border-gray-300 rounded p-2"
                    />
                </div>
                <div className="flex items-center mb-4">
                    <label
                        htmlFor="email"
                        className="w-1/3 text-right pr-4 font-medium"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-2/3 border border-gray-300 rounded p-2"
                    />
                </div>
                <div className="flex items-center mb-4">
                    <label
                        htmlFor="phoneNumber"
                        className="w-1/3 text-right pr-4 font-medium"
                    >
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        className="w-2/3 border border-gray-300 rounded p-2"
                    />
                </div>
                <div className="flex items-center mb-4">
                    <label
                        htmlFor="businessName"
                        className="w-1/3 text-right pr-4 font-medium"
                    >
                        Business Name
                    </label>
                    <input
                        type="text"
                        name="businessName"
                        id="businessName"
                        className="w-2/3 border border-gray-300 rounded p-2"
                    />
                </div>

            </form>

            <h1 className='font-bold text-xl'>Tell us if your business is:</h1>

            <div>
                <form className="mt-6 w-full max-w-lg">
                    <div className="flex items-center mb-4 ">

                        <input
                            type='checkbox'
                            name="muslim-owned-check"
                            id="muslim-owned-check"
                            className=" border border-gray-300 rounded mr-2"
                        />
                        <label
                            htmlFor="muslim-owned-check"
                            className="text-right pr-4 font-medium"
                        >
                            Muslim Owned
                        </label>

                    </div>

                    <div className="flex items-center mb-4">

                        <input
                            type='checkbox'
                            name="muslim-operated-check"
                            id="muslim-operated-check"
                            className=" border border-gray-300 rounded mr-2"
                        />
                        <label
                            htmlFor="muslim-operated-check"
                            className="text-right pr-4 font-medium"
                        >
                            Muslim Operated
                        </label>
                    </div>

                    <div className="flex items-center mb-4">

                        <input
                            type='checkbox'
                            name="serving-muslim-check"
                            id="serving-muslim-check"
                            className=" border border-gray-300 rounded mr-2"
                        />
                        <label
                            htmlFor="serving-muslim-check"
                            className="text-right pr-4 font-medium"
                        >
                            Serving the Muslim Community
                        </label>
                    </div>

                    <div className="flex flex-col items-center mb-4">

                        <label
                            htmlFor="tell-us-more"
                            className="text-right pr-4 font-medium"
                        >
                            Tell us more about your business (optional)
                        </label>
                        <textarea
                            id="tell-us-more"
                            name="tell-us-more"
                            rows="5"
                            className="w-full max-w-lg border border-gray-300 rounded p-2"

                        ></textarea>
                    </div>

                </form>

            </div>







            <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default ListingForm;
