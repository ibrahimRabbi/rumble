
const loading = () => {
    return (
        <div className="w-[80%] mt-10 min-h-screen mx-auto grid lg:grid-cols-2 grid-cols-1 gap-12">
            <div className="skeleton h-96"></div>
            <div className="skeleton h-96"></div>
        </div>
    );
};

export default loading;