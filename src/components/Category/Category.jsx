import { useEffect, useState } from "react";
import { httpGET } from "../../modules/api";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = ({ title, category, detail }) => {
  const [tvData, setTvData] = useState([]);

  useEffect(() => {
    httpGET(category).then((data) => setTvData(data.results));
  }, []);

  return (
    <div className="category">
      <h3 className="category-title">{title}</h3>
      <ul className="category-ul">
        {tvData.map((data) => (
          <Link
            className="link-film"
            to={`/tvdetails/${data.id}?detail=${detail}`}
          >
            <li id={data.id} className="category-li" key={data.id}>
              <div className="img-tv">
                <img
                  className="category-img"
                  src={`https://image.tmdb.org/t/p/w780${data.poster_path}`}
                />
                {(data.name && <h3>{data.name}</h3>) || <h3>{data.title}</h3>}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Category;
