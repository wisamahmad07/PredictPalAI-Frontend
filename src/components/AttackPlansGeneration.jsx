import React, { useState, useEffect } from "react";
import { Tabs, Tab, Box } from "@mui/material";

import ballImg from "@assets/icons/ball.png";
import tacticMapSvg from "@assets/playerground/tactic.svg";

const AttackPlansGeneration = ({ plans, teams }) => {
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0);
  const [currentPassIndex, setCurrentPassIndex] = useState(0);
  const [ballPosition, setBallPosition] = useState({ top: 0, left: 0 });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (plans[selectedTeamIndex]) {
      const playerId = plans[selectedTeamIndex].pass[currentPassIndex];
      const player = teams[0].players.find(
        (player) => player.player === playerId
      );
      if (player) {
        setBallPosition({
          top: `${player.start_position[1]}%`,
          left: `${player.start_position[0]}%`,
        });
      }
    }
  }, [currentPassIndex, selectedTeamIndex, plans, teams]);

  useEffect(() => {
    if (isPlaying) {
      const playInterval = setInterval(() => {
        setCurrentPassIndex((prevIndex) =>
          prevIndex < plans[selectedTeamIndex].pass.length - 1
            ? prevIndex + 1
            : prevIndex
        );
      }, 1000);

      return () => clearInterval(playInterval);
    }
  }, [isPlaying, selectedTeamIndex, plans]);

  const handleNextPass = () => {
    setCurrentPassIndex((prevIndex) =>
      prevIndex < plans[selectedTeamIndex].pass.length - 1
        ? prevIndex + 1
        : prevIndex
    );
  };

  const handlePrevPass = () => {
    setCurrentPassIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleReset = () => {
    setCurrentPassIndex(0);
    setIsPlaying(false);
  };

  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTeamIndex(newValue);
    setCurrentPassIndex(0);
    setIsPlaying(false);
  };

  return (
    <div className="relative flex flex-col gap-2 mt-8 w-full h-full overflow-scroll text-slate-300 bg-slate-800 rounded-lg bg-clip-border">
      <h2 className="text-xl font-bold">Attack Plans</h2>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={selectedTeamIndex} onChange={handleTabChange}>
          {plans.map((team, index) => (
            <Tab key={index} label={team.plan} sx={{ color: "var(--text)" }} />
          ))}
        </Tabs>
      </Box>
      {plans.map((plan, index) => (
        <div
          role="tabpanel"
          hidden={selectedTeamIndex !== index}
          key={index}
          aria-labelledby={`tab-${index}`}
        >
          <div className="flex justify-center mb-4">
            <div className="flex flex-col justify-center">
              <div className="relative inline-flex">
                <img
                  src={tacticMapSvg}
                  className="object-contain w-full h-full"
                  alt="Player Ground Tactic Map"
                />
                {teams.map((team, teamIndex) => (
                  <React.Fragment key={`team-${teamIndex}`}>
                    {team.players.map((player, playerIndex) => (
                      <div
                        key={`team-${teamIndex}-${playerIndex}`}
                        className="absolute flex justify-center items-center w-6 h-6 rounded-full text-white -translate-x-1/2 -translate-y-1/2"
                        style={{
                          top: `${player.start_position[1]}%`,
                          left:
                            teamIndex === 0
                              ? `${player.start_position[0]}%`
                              : undefined,
                          right:
                            teamIndex !== 0
                              ? `${player.start_position[0]}%`
                              : undefined,
                          backgroundColor: teamIndex === 0 ? "red" : "blue",
                        }}
                      >
                        {player.player.split("_")[1]}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
                <img
                  src={ballImg}
                  className="absolute w-4 h-4 bg-accent rounded-full"
                  style={{ ...ballPosition, transition: "all 1000ms" }}
                  alt="Ball"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2">
            <button
              className="border border-text border-solid p-1 rounded-lg fill-text hover:fill-accent hover:border-accent transition-all"
              onClick={handlePrevPass}
            >
              Previous Pass
            </button>
            <button
              className="border border-text border-solid p-1 rounded-lg fill-text hover:fill-accent hover:border-accent transition-all"
              onClick={handleNextPass}
            >
              Next Pass
            </button>
            <button
              className="border border-text border-solid p-1 rounded-lg fill-text hover:fill-accent hover:border-accent transition-all"
              onClick={handlePlay}
              disabled={isPlaying}
            >
              Play
            </button>
            <button
              className="border border-text border-solid p-1 rounded-lg fill-text hover:fill-accent hover:border-accent transition-all"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
          <div className="py-4 text-center flex flex-col gap-4">
            <p>{plan.explanation}</p>

            <ol>
              {plan.pass.map((item, index) => (
                <li key={`pass-${index}`} className="py-2">
                  <b>{index + 1}.</b> From:{" "}
                  <span className="capitalize">
                    {plan.pass[index].replace("_", " ")}
                  </span>{" "}
                  To:{" "}
                  <span className="capitalize">
                    {index + 1 < plan.pass.length
                      ? plan.pass[index + 1].replace("_", " ")
                      : "Goal!"}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AttackPlansGeneration;
