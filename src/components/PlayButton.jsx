import { Link } from "react-router";

function PlayButton() {
  return (
    <Link to="/play" className="btn btn-success">
      Play!
    </Link>
  );
}

export default PlayButton;
