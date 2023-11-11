
const Banner = () => {
    return (
        <div className="text-center mt-12 md:mt-24">
            <h2 className="md:text-5xl text-2xl	font-bold mb-4 md:mb-10">I Grow By Helping People In Need</h2>
            <div className="join mb-48">
                <input className="input input-bordered join-item" placeholder="Search here..." />
                <button style={{backgroundColor:"#FF444A", color: 'white'}} className="btn join-item rounded-R normal-case">Search</button>
            </div>
        </div>
    );
};

export default Banner;