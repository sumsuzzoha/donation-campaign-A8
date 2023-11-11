import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../utilities/localstorages";
const CardDetails = () => {

    const cards = useLoaderData();
    const { id } = useParams();
    const card = cards.find(card => card.id === id);

    const { title, description, image, price, text_color } = card;

    const handleDonation = () => {
        saveDonation(id);
        toast('You have Donate Successfully')
    }

    const styles = {
        container: {
            width: "920px",
            margin: "0 auto"
        },
        main: {
            backgroundImage: `url(${image})`,
            height: '487px',
        },
        content: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            width: "920px",
            height: '92px',
        },
    };



    return (
        <div className="md:mx-40">
            <div style={styles.container}>
                <div className="bg-no-repeat bg-cover rounded-2xl relative " style={styles.main}>
                    <div className="rounded-b-2xl absolute bottom-0 left-0" style={styles.content}>
                        <button style={{backgroundColor:`${text_color}`, color:'white'}} onClick={handleDonation} className="btn mt-6 ms-6 normal-case">Donate ${price}</button>
                    </div>
                </div>
                <div className="mb-10">
                    <h2 className="mt-10 mb-4 text-3xl font-bold">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CardDetails;