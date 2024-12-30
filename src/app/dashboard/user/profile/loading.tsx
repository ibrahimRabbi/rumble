
const Profile = () => {



    return (
        <section className="my-7 lg:my-4">
            <div>
                <h2 className="text-2xl font-semibold">Profile</h2>
                <p className="text-sm text-zinc-700">Manage your details</p>
            </div>

            {/* User Info Skeleton */}
            <div className="lg:w-1/3 mx-auto text-center mt-10">
                <div className="w-24 h-24 rounded-full mx-auto bg-gray-200 animate-pulse"></div>
                <div className="h-4 mt-4 bg-gray-200 animate-pulse rounded w-1/2 mx-auto"></div>
                <div className="h-3 bg-gray-200 animate-pulse rounded w-1/3 mx-auto mt-2"></div>
            </div>

            {/* Profile Details Skeleton */}
            <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-6 mt-10 lg:ml-0 ml-3">
                {Array(6)
                    .fill(0)
                    .map((_, idx) => (
                        <div key={idx}>
                            <div className="h-4 bg-gray-200 animate-pulse rounded w-1/3 mb-2"></div>
                            <div className="h-3 bg-gray-200 animate-pulse rounded w-3/4"></div>
                        </div>
                    ))}
            </div>

            {/* Edit Profile Button Skeleton */}
            <div className="mt-10">
                <div className="bg-green-500 h-10 w-full lg:w-1/2 mx-auto rounded animate-pulse"></div>
            </div>
        </section>

    );
};

export default Profile;