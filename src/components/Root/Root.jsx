import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { createContext, useState } from "react";

export const DonationContext = createContext(0);


const Root = () => {

    const [donation, setDonation] = useState(0);

    return (
        <div>
            <DonationContext.Provider value={[donation, setDonation]}>
                <section>
                    <Header></Header>
                    <Outlet></Outlet>
                </section>
            </DonationContext.Provider>

        </div>
    );
};

export default Root;