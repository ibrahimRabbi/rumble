
const Profile = () => {



    return (
        <section className='my-7 lg:mt-0'>
            <div>
                <div className="skeleton h-6 w-24"></div>
                <div className="skeleton h-4 w-36"></div>
            </div>


            {/* User Info */}
            <div className="lg:w-1/3 mx-auto text-center mt-10">
                <div className="skeleton h-20 w-20 shrink-0 rounded-full"></div>
                <div className="skeleton h-4 mt-4 w-16"></div>
                <div className="skeleton h-4 w-20"></div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-20 mt-10 lg:ml-0 ml-3'>
                <div>
                    <div className="skeleton w-8"></div>
                    <div className="skeleton w-14"></div>
                </div>

                <div>
                    <div className='flex items-center space-x-2'>
                        <div className="skeleton h-2 w-14"></div>
                    </div>
                    <div className="skeleton h-4 w-20"></div>
                </div>

                <div>
                    <div className='flex items-center space-x-2'>
                        <div className="skeleton h-2 w-14"></div>
                    </div>
                    <div className="skeleton h-4 w-20"></div>
                </div>

                <div>
                    <div className='flex items-center space-x-2'>
                        <div className="skeleton h-2 w-14"></div>
                    </div>
                    <div className="skeleton h-4 w-24"></div>
                </div>

                <div>
                    <div className='flex items-center space-x-2'>
                        <div className="skeleton h-2 w-14"></div>
                    </div>
                    <div className="skeleton h-4 w-20"></div>
                </div>


                <div>
                    <div className='flex items-center space-x-2'>
                        <div className="skeleton h-2 w-14"></div>
                    </div>
                    <div className="skeleton h-4 w-20"></div>
                </div>
            </div>

            <div className='mt-10'>
                <div className="skeleton h-5 lg:w-1/2 w-full"></div>
            </div>



        </section>




    );
};

export default Profile;