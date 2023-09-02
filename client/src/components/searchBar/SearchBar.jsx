import React, { useState } from 'react';
import styles from './searchBar.module.css'

export default function SearchBar(props) {

   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   };
   

   return (
      <div className={styles.searchBar}>
         <input className={styles.input} type='search' value={id} onChange={handleChange} />
         <button className={styles.boton} onClick={() => props.onSearch(id)}>Add</button>
      </div>
   );
}
