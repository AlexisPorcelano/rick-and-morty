import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "./Detail.module.css"
import { Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [ChDet, setChDet] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setChDet(data);
        console.log(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setChDet({});
  }, [id]);

  return (
    <div className={styles.container} >
    <div className={styles.detail}>
              <Link className= {styles.home} to='/home'>
        {ChDet.image && <img src={ChDet.image} alt={ChDet.name} className= {styles.image} />}
        </Link>
        <div className= {styles.info} >
      <h1 className= {styles.item} >Name = {ChDet.name}</h1>
      <h1 className= {styles.item} >Origin = {ChDet.origin?.name}</h1>
      <h1 className= {styles.item} >Species = {ChDet.species}</h1>
      <h1 className= {styles.item} >Gender = {ChDet.gender}</h1>
      <h1 className= {styles.item} >Status = {ChDet.status}</h1>
      </div>

    </div>
    </div>
  );
}


/*
[]montaje
[id] update
return desmon
*/