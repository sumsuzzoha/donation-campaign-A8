import { useState } from "react";
import PropTypes from 'prop-types';


const Banner = ({ inputData }) => {
    const [data, setData] = useState(null);
    const handleSubmit = e => {
        e.preventDefault();
        setData(e.target.name.value);
        // console.log(e.target.name.value);
        // props.inputData(e.target.name.value);
        // console.log('from submit')
    }
    inputData(data)
    // console.log(data)

    return (
        <div className="text-center mt-12 md:mt-24">
            <h2 className="md:text-5xl text-2xl	font-bold mb-4 md:mb-10">I Grow By Helping People In Need</h2>
            <div className="join mb-48" >
                <form onSubmit={handleSubmit}>
                    <input className="input input-bordered join-item" placeholder="Search here..." type="text" name="name" />
                    <input style={{ backgroundColor: "#FF444A", color: 'white' }} className="btn join-item rounded-R normal-case" type="submit" value="Search" />
                </form>
            </div>
        </div>
    );

};
Banner.propTypes = {
    inputData: PropTypes.object
};

export default Banner;