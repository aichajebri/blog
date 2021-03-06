import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
