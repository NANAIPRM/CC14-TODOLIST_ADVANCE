import { useState } from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import UserPhoto from "../assets/user.jpg";
// import Avatar  from '@mui/material/Avatar';
import { Avatar } from "@mui/material";

import { useTodo } from "../hooks/useTodo";

// Function Component
export function Header() {
  // React HOOK
  const { searchTodo } = useTodo(); // *3
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    searchTodo(e.target.value); // *edit
  };
  return (
    <header className="header">
      {/* Icon */}
      <span className="header__icon">
        <FaHome size={25} color="white" />
      </span>
      {/* App Name */}
      <h1>NANINE TODOLIST</h1>
      {/* Search bar */}
      <div className="header__search__container">
        <span className="header__search__icon">
          <FaSearch />
        </span>
        <input
          type="text"
          className="header__search__input"
          placeholder="search"
          onChange={handleChange}
          value={searchValue}
        />
      </div>
      {/* Avatar */}
      <div>
        <Avatar //เหมือน function component ที่รับ prop พวกนี้ได้
          src={UserPhoto}
          alt="user-profile"
          sx={{ width: 40, height: 40, cursor: "pointer" }}
        />
      </div>
    </header>
  );
}
