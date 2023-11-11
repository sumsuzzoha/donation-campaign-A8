import { useState } from "react";
import Banner from "../Banner/Banner";
import FeaturedSec from "../FeaturedSec/FeaturedSec";

const Home = () => {
    const [data, setData] =useState({})
    const inputDataHandler = (data) =>{
        setData(data)
    }
    // console.log(data);
    return (
        <div>
            <Banner inputData={inputDataHandler}></Banner>
            <FeaturedSec inputText={data}></FeaturedSec>
        </div>
    );
};

export default Home;