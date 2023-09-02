import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import Card from "../card/Card";
import styles from "../Favs/Favs.module.css";
import { ORDER_CARDS, FILTER_CARDS } from "../../redux/actions";


const Favs = () => {

   const favorites = useSelector((state) => state.favorites);
   const dispatch = useDispatch();

   const [boolean, setBoolean] = useState(false)

   function handleOrder(event){
      dispatch(ORDER_CARDS(event.target.value))
      setBoolean(!boolean)
   }

   function handleFilter(event){
      dispatch(FILTER_CARDS(event.target.value))
   }

   return (
      <div className= {styles.Favs}>
         {/* <div className="selectsContainer" >
         <select name= "order">
            <option value="A">Ascendant</option>
            <option value="D">Descendant</option>
         </select>
         <select name="gender" id="">
            <option value="unknown">Unknown</option>
            <option value="genderless">Genderless</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
         </select>
         </div> */}
         {favorites.map((character) => (
            <Card
               key={character.id}
               id={character.id}
               name={character.name}
               origin={character.origin}
               status={character.status}
               image={character.image}
            />
         ))}

      </div>
   );
};

export default Favs;
