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

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
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
        } finally {
            setLoading(false)
        }
    };



    return (
        <div className="flex flex-col items-center p-6">
            <h1 className="text-red-600 font-bold text-2xl mb-4">JOIN THE REVOLUTION</h1>
            <h2>List Your:</h2>
            <p>Muslim Owned Businesses</p>
            <p>Muslim Operated Businesses</p>
            <p>Businesses Serving The Muslim Community</p>
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
                            Serving The Muslim Community
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
                <div className="flex justify-center my-10">
                    <button
                        type="submit"
                        className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
                    >
                        {loading ? (
                            <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                ></path>
                            </svg>
                        ) : (
                            'Submit'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ListingForm;
