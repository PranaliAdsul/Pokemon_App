import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@mui/material";

function Sidebar({ pokemon, loading, selectPokemon }) {
  const drawerStyle = {
    width: 100,
    flexShrink: 100,
    backgroundColor: "#1762ad",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px 60px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    color: "black",
  };

  const listItemTextStyle = {
    marginLeft: "10px",
    fontfamily:"Georgia (serif)",
    fontSize: "18px",
    fontWeight: "Bold",
    letterSpacing: "0.2px",
  };

  return (
    <Drawer
      className="drawer"
      variant="permanent"
      anchor="left"
      classes={{
        paper: "drawerPaper",
      }}
      style={drawerStyle}
    >
      <List>
        {loading ? (
          <div
            className="loadingContainer"
            style={{ ...listItemStyle, justifyContent: "center" }}
          >
            <CircularProgress style={{ color: "Black" }} />
          </div>
        ) : (
          <>
            {pokemon.map((item) => (
              <ListItem
                button
                key={item.id}
                onClick={() => selectPokemon(item)}
                style={listItemStyle}
              >
                <ListItemText
                  primary={item.name.toUpperCase()}
                  style={listItemTextStyle}
                />
              </ListItem>
            ))}
          </>
        )}
      </List>
    </Drawer>
  );
}

export default Sidebar;
