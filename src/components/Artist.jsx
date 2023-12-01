import Link from "next/link";
import "../styles/Artist.css";

import SecondaryBtn from "./SecondaryBtn";

function Artist(props) {
  return (
    <Link href="/ArtistSingleView/page" className="artist-container">
      <div className="artist">
        <h3>{props.artistName}</h3>
        <h5>{props.artistDay}</h5>
        <h5>{props.artistTime}</h5>
      </div>
      <SecondaryBtn href="/ArtistSingleView/page" secbtntext="View more"></SecondaryBtn>
    </Link>
  );
}

export default Artist;
