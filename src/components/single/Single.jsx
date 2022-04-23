import Sidebar from "../sidebar/Sidebar";
import SingleArticle from "../singlearticle/SingleArticle";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SingleArticle />
      <Sidebar />
    </div>
  );
}
