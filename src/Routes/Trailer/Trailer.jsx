import React from "react";
import "./Trailer.css";

const Trailer = ({ dataDetail, setDialogTrailer }) => {
  console.log(dataDetail);
  return (
    <div onClick={() => setDialogTrailer(false)} className="Trailer">
      <dialog className="dialog-trailer" open>
        <iframe
          className="trailer-video"
          src={`https://www.youtube.com/embed/${dataDetail.videos.results[0].key}`}
        >
        </iframe>
      </dialog>
    </div>
  );
};

export default Trailer;
