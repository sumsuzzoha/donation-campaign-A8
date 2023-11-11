import { useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import FeaturedCard from "../FeaturedCard/FeaturedCard";

const FeaturedSec = () => {
    const [cards, setCards] = useState([]);
    // const [filterCard, setFilterCard]=useState([]);
    // if(inputText === cards.map(card => card.category)){
    //     console.log('matched')
    // }
    // else console.log('not matched')
    // const setFilterCard(inputText);
    
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:mx-40 mb-10">
                {
                    cards.map(card => <FeaturedCard key={card.id} card={card}></FeaturedCard>)
                }
            </div>

        </div>
    );
};
FeaturedSec.propTypes = {
    inputText: PropTypes.object
};


export default FeaturedSec;