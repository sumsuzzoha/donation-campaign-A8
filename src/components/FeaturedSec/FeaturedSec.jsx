import { useEffect, useState } from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";

const FeaturedSec = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    // console.log(cards);
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

export default FeaturedSec;