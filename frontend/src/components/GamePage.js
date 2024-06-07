import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import GameBoard from "./GameBoard";
import { useNavigate } from "react-router-dom";

const GamePage = ({ setScores }) => {
  const [currentScore, setCurrentScore] = useState(0);
  const navigate = useNavigate();

  const handleGameEnd = () => {
    // Create a new score and navigate to the scoreboard
    const newScore = {
      id: Date.now(), // Temporary ID, ideally should be generated by backend
      username: "currentUser",
      score: currentScore,
      date: new Date().toISOString(),
    };
    setScores((prevScores) => [...prevScores, newScore]);
    navigate("/scoreboard");
  };

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Card Flip Game
      </Typography>
      <GameBoard
        setCurrentScore={setCurrentScore}
        handleGameEnd={handleGameEnd}
      />
    </Container>
  );
};

export default GamePage;
