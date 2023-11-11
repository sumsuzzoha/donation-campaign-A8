import { Link } from "react-router-dom";

const FeaturedCard = (card) => {
    const {id, title, category, image, bg_color, text_color } = card.card;
    
    const styles = {
        bgColor: {
            backgroundColor: `${bg_color}`,
            color: `${text_color}`
            
        },
        textColor: {
            color: `${text_color}`

        },

    };

    return (
        <div >
            
            <Link to={`/cardDetail/${id}`}>
            <div style={styles.bgColor} className="card card-compact bg-base-100 shadow-xl ">
                <figure className=""><img src={image} alt="notfound" /></figure>
                <div  className="card-body">
                    <div className="card-actions justify-start">
                        <button style={styles.bgColor }  className="btn btn-sm normal-case">{category}</button>
                    </div>
                    <h2 className="text-xl font-bold">{title}</h2>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default FeaturedCard;