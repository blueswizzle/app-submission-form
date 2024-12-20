'use client';
import React, { useState } from 'react';

const ListingForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        businessName: '',
        muslimOwned: false,
        muslimOperated: false,
        servingMuslimCommunity: false,
        additionalInfo: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/listing', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });



            const responseData = await res.json();
            if (responseData.error) {
                alert(responseData.error)
            } else {
                console.log(responseData)
                alert(responseData.message)
            }


            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                businessName: '',
                muslimOwned: false,
                muslimOperated: false,
                servingMuslimCommunity: false,
                additionalInfo: '',
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };



    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-red-600 font-bold text-2xl mb-4">JOIN THE REVOLUTION</h1>
            <form className="mt-6 w-full max-w-lg" onSubmit={handleSubmit}>
                {/* Personal Information Section */}

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
                        value={formData.firstName}
                        onChange={handleChange}
                        required
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
                        value={formData.lastName}
                        onChange={handleChange}
                        required
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
                        value={formData.email}
                        onChange={handleChange}
                        required
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
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Business Information Section */}

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
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Business Type Section */}
                <h1 className="font-bold text-xl mb-4">Tell us if your business is:</h1>
                <div className="mt-6">
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            name="muslimOwned"
                            id="muslimOwned"
                            className="border border-gray-300 rounded mr-2"
                            checked={formData.muslimOwned}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="muslimOwned"
                            className="font-medium"
                        >
                            Muslim Owned
                        </label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            name="muslimOperated"
                            id="muslimOperated"
                            className="border border-gray-300 rounded mr-2"
                            checked={formData.muslimOperated}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="muslimOperated"
                            className="font-medium"
                        >
                            Muslim Operated
                        </label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            name="servingMuslimCommunity"
                            id="servingMuslimCommunity"
                            className="border border-gray-300 rounded mr-2"
                            checked={formData.servingMuslimCommunity}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="servingMuslimCommunity"
                            className="font-medium"
                        >
                            Serving the Muslim Community
                        </label>
                    </div>
                </div>

                {/* Additional Information Section */}

                <div className="flex flex-col items-center mb-4">
                    <label
                        htmlFor="additionalInfo"
                        className="text-right pr-4 font-medium"
                    >
                        Tell us more about your business (optional)
                    </label>
                    <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        rows="5"
                        className="w-full max-w-lg border border-gray-300 rounded p-2"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ListingForm;
