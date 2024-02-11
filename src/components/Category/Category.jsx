import { useEffect, useState } from "react";
import { httpGET } from "../../modules/api";
import './Category.css';

const Category = ({ title, category }) => {
  const [tvData, setTvData] = useState([]);

  useEffect(() => {
    httpGET(category).then((data) => setTvData(data.results));
  }, []);

  return (
    <div className="category">
      <h3 className="category-title">{title}</h3>
      <ul className="category-ul">
        {tvData.map((data) => (
          <li className="category-li" key={data.id}>
            <img className="category-img"src={`https://image.tmdb.org/t/p/w780${data.poster_path}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
