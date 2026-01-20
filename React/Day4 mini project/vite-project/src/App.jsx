import { Bookmark } from "lucide-react";
import Card from "./components/card";
function App() {
  const jobs = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnm5CmL80RwspTM5fccqQGnp3IgQGMPDKgkA&s",
      name: "Amazon",
      days: "5 days ago",
      post: "Senior UI/UX Designer",
      type: "Part time",
      level: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      name: "Google",
      days: "2 days ago",
      post: "Frontend Engineer",
      type: "Full time",
      level: "Mid Level",
      salary: "$90/hr",
      location: "Bangalore, India",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      name: "Microsoft",
      days: "1 week ago",
      post: "Product Designer",
      type: "Contract",
      level: "Senior Level",
      salary: "$100/hr",
      location: "Hyderabad, India",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      name: "Apple",
      days: "3 days ago",
      post: "UI Designer",
      type: "Full time",
      level: "Junior Level",
      salary: "$60/hr",
      location: "Pune, India",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      name: "Amazon",
      days: "1 day ago",
      post: "UX Researcher",
      type: "Remote",
      level: "Mid Level",
      salary: "$85/hr",
      location: "Remote – India",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      name: "Netflix",
      days: "4 days ago",
      post: "Visual Designer",
      type: "Contract",
      level: "Senior Level",
      salary: "$110/hr",
      location: "Delhi, India",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      name: "IBM",
      days: "6 days ago",
      post: "UX Engineer",
      type: "Full time",
      level: "Mid Level",
      salary: "$75/hr",
      location: "Chennai, India",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/PayPal_2014_logo.svg",
      name: "PayPal",
      days: "2 weeks ago",
      post: "Interaction Designer",
      type: "Remote",
      level: "Senior Level",
      salary: "$95/hr",
      location: "Remote – India",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Adobe_Corporate_Logo.png",
      name: "Adobe",
      days: "8 days ago",
      post: "UX Writer",
      type: "Full time",
      level: "Mid Level",
      salary: "$70/hr",
      location: "Noida, India",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/48/LinkedIn_logo_initials.png",
      name: "LinkedIn",
      days: "10 days ago",
      post: "Product UX Designer",
      type: "Full time",
      level: "Senior Level",
      salary: "$105/hr",
      location: "Bangalore, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (obj, idx) {
        return (
          <Card
            key={idx}
            src={obj.src}
            name={obj.name}
            days={obj.days}
            post={obj.post}
            type={obj.type}
            level={obj.level}
            salary={obj.salary}
            location={obj.location}
          />
        );
      })}
    </div>
  );
}

export default App;
