import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Grid from "./components/Grid/Grid.jsx"

import './App.css'

function App(props) {
  //DARK MODE
  const [theme, setTheme] = useState("light");

  const handleDark = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }
  //API SEARCH
  const API_KEY = "g4FgqpLBAv5phmEHXtcSt2FuIilGf156"
  const limit = 12
  const urlSearch = "https://api.giphy.com/v1/gifs/search"

  //API AUTOCOMPLETE
  const urlAutocomplete = "https://api.giphy.com/v1/gifs/search/tags"

  let [gifs, setGifs] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [search, setSearch] = useState("");
  let [sugestions, setSugestions] = useState([]);
  let [error, setError] = useState(false);
  let [reset, setReset] = useState(false);

  //MANEJAR API AUTOCOMPLETE
  useEffect(() => {
    let autocomplete = fetch(`${urlAutocomplete}?api_key=${API_KEY}&q=${search}`);
    autocomplete.then((res) => { return res.json() })
      .then((dato) => {
        console.log("Autocomplete", dato.data);
        setSugestions(dato.data);
      })
  }, [search]);

  //MANEJAR INPUT DE BÚSQUEDA
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  //MANEJAR BOTON DE BÚSQUEDA
  const handleSubmit = () => {
    setError(false);
    setIsLoading(true);
    let peticion = fetch(
      `${urlSearch}?api_key=${API_KEY}&q=${search}&limit=${limit}`
    );
    peticion
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        console.log(data.data)
        setGifs(data.data);
        setIsLoading(false)
        if (data.data.length === 0) {
          setError(true)
        }
      })
      .catch((err)=>{
        setError(true)
      })
  }

  //MENAJR RESET DE BÚSQUEDA
  const handleReset = ()=>{
    setReset(true);
    setGifs([]);
    setSearch("");
  }
  //MANEJAR BÚSQUEDA AL PRESIONAR ENTER
  const handleKey = (e) => {
    if (e.key === 'Enter') {
      setError(false);
      setIsLoading(true);
      let peticion = fetch(
        `${urlSearch}?api_key=${API_KEY}&q=${search}&limit=${limit}`
      );
      peticion
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((data) => {
          console.log(data.data)
          setGifs(data.data);
          setIsLoading(false)
          if (data.data.length === 0) {
            setError(true)
          }
        })
        .catch((err)=>{
          setError(true)
        })
    }
  }

  //MANEJAR SUGERENCIAS
  const handleSugestions = (e) => {
    setSearch(e.target.getAttribute("value"));
    setError(false);
    setIsLoading(true);

      let peticion = fetch(
        `${urlSearch}?api_key=${API_KEY}&q=${search}&limit=${limit}`
      );
      peticion
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((data) => {
          console.log(data.data)
          setGifs(data.data);
          setIsLoading(false)
          if (data.data.length === 0) {
            setError(true)
          }
        })
        .catch((err)=>{
          setError(true)
        })
  }
  return (
    <div className={`${theme}`}>
      <div className="container">
        <Header handleDark={handleDark} theme={theme === "light" ? "dark" : "light"} />
        <Hero handleSearchChange={handleSearchChange} 
        search={search} 
        handleSubmit={handleSubmit}
        handleKey={handleKey} 
        sugestions={sugestions} 
        handleSugestions={handleSugestions} 
        tam={sugestions.length}
        handleReset={handleReset} />
        <Grid isLoading={isLoading} gifs={gifs} gifTam={gifs.length} error={error} search={search}  />
        
      </div>
    </div>
  );
}

export default App;
