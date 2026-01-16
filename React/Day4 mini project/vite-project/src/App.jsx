import { Bookmark } from "lucide-react";
function App() {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnm5CmL80RwspTM5fccqQGnp3IgQGMPDKgkA&s"
            alt=""
          />
          <button>
            Save
            <Bookmark className="bookmark" />
          </button>
        </div>
        <div className="center">
          <h2>
            Amazon
            <span>5 days ago</span>
          </h2>
          <h3>Senior UI/UX designer</h3>
          <div>
            <h4>Part time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
