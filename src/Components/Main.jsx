import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Pokeinfo from "./Pokeinfo";
import "./Main.css"; 

function Main() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url] = useState("https://pokeapi.co/api/v2/pokemon/");

  useEffect(() => {
    const fetchPokeData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        const pokemonResults = response.data.results;
        const pokemonDetailsPromises = pokemonResults.map(async (result) => {
          const detailsResponse = await axios.get(result.url);
          return detailsResponse.data;
        });
        const detailedPokemonData = await Promise.all(pokemonDetailsPromises);
        setPokeData(detailedPokemonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setLoading(false);
      }
    };

    fetchPokeData();
  }, [url]);

  return (
    <div className="main-container">
      <Sidebar
        pokemon={pokeData}
        loading={loading}
        selectPokemon={setSelectedPokemon}
      />
      <div className="content-container">
        <div className="left-content">
        </div>
        <div className="right-content">
          <Pokeinfo data={selectedPokemon} />
        </div>
      </div>
    </div>
  );
}

export default Main;
