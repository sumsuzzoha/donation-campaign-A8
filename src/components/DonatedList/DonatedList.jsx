import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utilities/localstorages";
import ShowDonateCard from "../ShowDonateCard/ShowDonateCard";
import { DonationContext } from "../Root/Root";

const DonatedList = () => {

    const cards = useLoaderData();
    const [dataLength, setDatalength] = useState(4);
    const [applyDonate, setApplyDonate] = useState([]);

    const [,setDonation] = useContext(DonationContext);
    // console.log(donation);
 
    useEffect(() => {
        const storedDonationId = getStoredDonation();
        if (cards.length > 0) {
            const allDonation = [];
            for (const id of storedDonationId) {
                // console.log(id);
                const card = cards.find(card => card.id === id);
                if (card) {
                    allDonation.push(card);
                }
            }
            setApplyDonate(allDonation);
            setDonation(allDonation.length);
        }

    }, [])

    return (
        <div className="mx-40 mb-10">
            <div className="grid grid-cols-2 gap-4">
                {
                    applyDonate.slice(0, dataLength).map(card => <ShowDonateCard key={card.id} card={card}></ShowDonateCard>)
                }
            </div>
            <div className={dataLength === cards.length ? "hidden" : ""}>
                <div className="flex justify-center mt-10">
                    <button onClick={() => setDatalength(cards.length)} className="btn normal-case my-4" style={{ color: "white", backgroundColor: "#009444" }}>See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default DonatedList;