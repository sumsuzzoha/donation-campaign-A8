import { BiDollar } from "react-icons/bi";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const ShowDonateCard = ({ card }) => {
    const {id, title, category, price, image, bg_color, text_color } = card;

    const styles = {
        contentColor: {
            backgroundColor: `${bg_color}`,
            color: `${text_color}`

        },
        btnColor: {
            backgroundColor: `${text_color}`,
            color: 'white'
        },
        titleColor: {
            color: 'black'
        }
    };

    return (
        <div>
            <div style={styles.contentColor} className="card card-side bg-base-100 max-h-48 shadow-xl">
                <figure><img className="max-h-48 max-w-max	" src={image} alt="Movie" /></figure>
                <div className="card-body pt-4">
                    <div className="card-actions justify-start">
                        <button style={styles.contentColor} className="btn btn-xs normal-case">{category}</button>
                    </div>
                    <h2 style={styles.titleColor} className="text-xl font-bold">{title}</h2>
                    <p className="flex items-center font-bold"><BiDollar></BiDollar>{price}.00</p>
                    <div className="card-actions justify-start">
                        <Link to={`/cardDetail/${id}`}>
                            <button style={styles.btnColor} className="btn btn-sm">View Details</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
ShowDonateCard.propTypes = {
    card: PropTypes.object
};

export default ShowDonateCard;