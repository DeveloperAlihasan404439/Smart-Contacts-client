import React, { useState } from "react";
import "./Navber.css";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navber: React.FC = () => {
  const [addCssClass, setAddCssClass] = useState<string>("all contacts");

  return (
    <div className="header">
      <a href="#" className="logo">
        Smart <span>Contacts</span>
      </a>
      <input type="checkbox" name="" id="check" />
      <label htmlFor="check" className="icons">
        <IoMenu id="menu-icon" />
        <IoCloseSharp id="close-icon" />
      </label>
      <nav className="navbers">
        <Link
          to="/"
          className={addCssClass === "all contacts" ? "active_navber" : ""}
          style={{ "--i": 0 } as React.CSSProperties}
          onClick={() => setAddCssClass("all contacts")}
        >
          All Contacts
        </Link>
        <Link
          to="/add/contacts"
          className={addCssClass === "add contacts" ? "active_navber" : ""}
          style={{ "--i": 1 } as React.CSSProperties}
          onClick={() => setAddCssClass("add contacts")}
        >
          Add Contacts
        </Link>
      </nav>
    </div>
  );
};

export default Navber;
