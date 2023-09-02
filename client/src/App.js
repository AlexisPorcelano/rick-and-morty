import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/nav.jsx";
import Detail from "./components/detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favs from "./components/Favs/Favs.jsx";
import About from "./components/About/About.jsx"
import axios from "axios";
import styles from "./App.module.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  // const defaultEmail = "alexisporcelano@gmail.com";
  // const defaultPassword = "maradona86";

  const logIn = (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(true);
       access && navigate('/home');
    });
 }


  // const logIn = (userData) => {
  //   if (userData.email === defaultEmail && userData.password === defaultPassword) {
  //     setAccess(true);
  //     console.log("despues de comparar" + access);
  //     navigate("/home");
  //   }
  // };

  useEffect(() => {
    if (!access) {
      navigate("/");
    }
  }, [access, navigate]);

  // async / await => 

  async function onSearch (id) {

    try {

      const response = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
      const data = response.data;

      if (data.name) setCharacters((oldChars) => [...oldChars, data]);

    } catch (error){

      window.alert (error.message)
      
    }
  } 
  

  // express / promises => 

  // function onSearch(id) {
  //   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
  //     if (data.name) {
  //       setCharacters((oldChars) => [...oldChars, data]);
  //     } else {
  //       window.alert("¡No hay personajes con este ID!");
  //     }
  //   });
  // }

  function onClose(id) {
    setCharacters((oldChars) => oldChars.filter((character) => character.id !== id));
  }

  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Form logIn={logIn} />} />
        <Route
          path="/*"
          element={
            <React.Fragment>
              {access && <Nav onSearch={onSearch} />}
              <Routes>
                <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
                <Route path="/about" element={<About/>} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/favorites" element={<Favs />} />
              </Routes>
            </React.Fragment>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
