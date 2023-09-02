import React, { useState, useEffect } from "react";
import styles from './Card.module.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; 
import { aFav, rFav } from '../../redux/actions.js';

function Card({ id, name, origin, status, image, onClose }) {

   const dispatch = useDispatch(); // Obtener la función de despacho
   const favorites = useSelector(state => state.favorites); // Obtener los favoritos del estado

   const [isFav, setFav] = useState(false);

   const handleFav = () => {
      if (isFav) {
         console.log('es favorito, vamos a quitarlo');
         setFav(false);
         dispatch( rFav(id) ); // Utilizar la función de despacho para eliminar de favoritos
      } else {
         console.log('no es favorito, vamos a agregarlo');
         setFav(true);
         dispatch( aFav ({ id, name, origin, status, image })); // Utilizar la función de despacho para agregar a favoritos
         console.log('favorites: ', favorites);
      }
   };
   
   useEffect(() => {
      if (Array.isArray(favorites)) {
         const isFavorite = favorites.some(fav => fav.id === id);
         setFav(isFavorite);
      }
   }, [favorites, id]);
   

   return (
      <div className={styles.Card}>
         <button className={styles.btn} onClick={onClose}>X</button>
         {
            isFav ? (
               <button className={styles.fav1} onClick={handleFav}>Fav</button>
            ) : (
               <button className={styles.fav2} onClick={handleFav}>Fav</button>
            )
         }
         <h2 className={styles.name}>{name}</h2>
         <div className={styles.info}>
            <div className='info.item'> Origin: {origin.name}</div>
            {name.length <= 16 && origin.name.length <= 18 ? <div className='info.item'>Status: {status}</div> : null}
         </div>
         <Link className={styles.link} to={`/Detail/${id}`}>
            <h2 className={styles.image}>{image}</h2>
            <img src={image} alt="" />
         </Link>
      </div>
   );
}

export default Card;
