import { Bookmark } from "lucide-react";

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="top">
        <img src={props.src} alt="" />
        <button>
          Save
          <Bookmark className="bookmark" />
        </button>
      </div>
      <div className="center">
        <h2>
          {props.name}
          <span>{props.days}</span>
        </h2>
        <h3>{props.post}</h3>
        <div>
          <h4>{props.type}</h4>
          <h4>{props.level}</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.salary}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  );
}

export default Card;
