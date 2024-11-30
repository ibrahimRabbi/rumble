import React from 'react';

const Profile = () => {
    return (
        <div className="p-8">
            <h2 className="text-xl font-semibold mb-4">User Profile</h2>
            <p className="text-gray-500 mb-6">
                Manage your details, view your tier status and change your
                password.
            </p>

            <div className="flex space-x-6">
                {/* User Info */}
                <div className="w-1/3 border text-center">
                    <img
                        src="https://via.placeholder.com/100"
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full mx-auto"
                    />
                    <h3 className="mt-4 text-lg font-semibold">Faraz Akhtar</h3>
                    <p className="text-gray-500">+965 1234 5678</p>
                </div>

                {/* General Information */}
                <div className="w-2/3 space-y-4">
                    <h3 className="text-lg font-semibold">General Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-500 text-sm mb-1">
                                First name
                            </label>
                            <input
                                type="text"
                                value="Faraz"
                                className="w-full border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-500 text-sm mb-1">
                                Last name
                            </label>
                            <input
                                type="text"
                                value="Akhtar"
                                className="w-full border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Update
                    </button>
                </div>
            </div>

            {/* Security Section */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Security</h3>
                <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 items-center">
                        <label className="text-gray-500">Email</label>
                        <input
                            type="text"
                            value="address@email.com"
                            className="col-span-2 w-full border-gray-300 rounded-md p-2"
                            disabled
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4 items-center">
                        <label className="text-gray-500">Password</label>
                        <input
                            type="password"
                            value="••••••••"
                            className="col-span-2 w-full border-gray-300 rounded-md p-2"
                            disabled
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4 items-center">
                        <label className="text-gray-500">Phone number</label>
                        <input
                            type="text"
                            value="+965 1234 5678"
                            className="col-span-2 w-full border-gray-300 rounded-md p-2"
                            disabled
                        />
                    </div>
                    <div className="flex space-x-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Change password
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Change phone number
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;