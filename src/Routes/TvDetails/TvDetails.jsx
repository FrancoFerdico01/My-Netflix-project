import { useEffect, useState } from "react";
import { httpGET } from "../../modules/api";
import { useParams, useSearchParams, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./TvDetails.css";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import Trailer from "../Trailer/Trailer";

const TvDetails = (dialog) => {
  useLockBodyScroll();
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [dialogTrailer, setDialogTrailer] = useState(false);

  const detail = searchParams.get("detail");

  useEffect(() => {
    httpGET(`/${detail}/${id}?&append_to_response=videos&api_key=API_KEY`).then(
      (data) => setDataDetail(data)
    );
  }, []);

  function handleTrailer() {
    setDialogTrailer(true);
  }

  return (
    <>
      {dialogTrailer && (
        <Trailer dataDetail={dataDetail} setDialogTrailer={setDialogTrailer} />
      )}

      <Navbar />

      <div className="TvDetails">
        <div className="gradient"></div>
        <img
          src={`https://image.tmdb.org/t/p/w780${dataDetail.backdrop_path}`}
        />
        <div className="TvDetails-text">
          {(dataDetail.name && <h1>{dataDetail.name}</h1>) || (
            <h1>{dataDetail.title}</h1>
          )}
          {(dataDetail.original_name && (
            <p className="TvDetails-title">{`${dataDetail.original_name}`}</p>
          )) || (
            <p className="TvDetails-title">{`${dataDetail.original_title}`}</p>
          )}
          <p className="TvDetails-genres">
            {" | " +
              `${dataDetail.genres?.map((genre) => genre.name).join(", ")}`}
          </p>
          <p>{dataDetail.overview}</p>
          <Link to="/">
            <button className="btn-home">Torna alla home</button>
          </Link>
          {dataDetail.videos?.results.length ? (
            <button onClick={handleTrailer} className="btn-trailer">
              Vai al trailer
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TvDetails;
