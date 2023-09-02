import SearchBar from "../searchBar/SearchBar.jsx";
import styles from './nav.module.css'
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
import { GET_FAV, gFav } from "../../redux/actions.js";
import { useState } from "react";


export default function Nav(props) {

  const [selectedLink, setSelectedLink] = useState(window.location.pathname)

  const springs = useSpring({
    from: {
      transform: 'translateY(-100%)',
      opacity: 0,
      backgroundColor: 'white'
    },
    to: {
      transform: 'translateY(0)',
      opacity: 1,
      backgroundColor: '#09efff73'
    },
    config: config.molasses,
  });

  return (
    <animated.div className={styles.Nav} style={springs}>
    <div className="links">
      <Link
      className={`${styles.logout} ${selectedLink === "/" && styles.selected}`}
      to="/"
      onClick={() => setSelectedLink("/")}
    >
    LogOut
   </Link>
   <Link
    className={`${styles.about} ${selectedLink === "/about" && styles.selected}`}
    to="/about"
    onClick={() => setSelectedLink("/about")}
  >
    About
  </Link>
  <Link
    className={`${styles.favs} ${selectedLink === "/favorites" && styles.selected}`}
    to="/favorites"
    onClick={() => setSelectedLink("/favorites")}
  >
    Favs
  </Link>
  <SearchBar className={styles.search} onSearch={props.onSearch} />
  <Link
    className={`${styles.home} ${selectedLink === "/home" && styles.selected}`}
    to="/home"
    onClick={() => setSelectedLink("/home")}
  >
    Home
  </Link>
</div>

    </animated.div>
  );
}
