import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function Card({ product }) {
  const starRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const star =
        i < rating ? (
          <FontAwesomeIcon icon={solidStar} />
        ) : (
          <FontAwesomeIcon icon={regularStar} />
        );
      stars.push(star);
    }

    return stars;
  };
  return (
    <>
      <div className="card m-1">
        <div className="total-card">
          <div className="card-text">
            <ul key={product.id}>
              <li>{`TITOLO: ${product.title}`}</li>
              <li>{`TITOLO ORIGINALE: ${product.originalTitle}`}</li>
              <li>{`LINGUA: ${product.language}`}</li>
              <li>
                Bandiera: <img className="flag" src={product.languageFlag} />
              </li>
              {/* <li>{`VOTO: ${movie.rating}`}</li> */}
              <li>
                <div className="d-flex">
                  <p> Voto: </p>
                  <div className="text-warning">
                    {" "}
                    {starRating(product.rating)}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="card-poster">
            <img src={product.poster} />
          </div>
        </div>
      </div>
    </>
  );
}
