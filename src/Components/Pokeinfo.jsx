import React from "react";
import { Typography, Chip, Paper } from "@mui/material";

function Pokeinfo({ data }) {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    backgroundColor: "	#FFCC99",
    borderRadius: "30px",
    boxShadow: "2px 8px 16px rgba(0, 0, 0, 0.1)",
    border: "3px solid grey",
  };

  const imageStyle = {
    maxWidth: "80%",
    marginBottom: "8px",
  };

  const abilitiesStyle = {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  };

  const statStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  };
  
  return (
    <Paper elevation={3} style={containerStyle}>
      {data && (
        <>
          <Typography variant="h4" style={{textTransform: "uppercase", fontWeight: "bold",fontSize: "30px", marginBottom: "10px",}}>
            {data.name}
          </Typography>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
            style={imageStyle}
          />
          <div style={abilitiesStyle}>
            {data.abilities.map((poke) => (
              <Chip
                key={poke.ability.name}
                label={poke.ability.name}
                color="primary"
                variant="outlined"
              />
            ))}
          </div>
          <div style={statStyle}>
            {data.stats.map((poke) => (
              <Typography key={poke.stat.name}>
                <strong>{poke.stat.name}:</strong> {poke.base_stat}
              </Typography>
            ))}
          </div>
        </>
      )}
    </Paper>
  );
}

export default Pokeinfo;
