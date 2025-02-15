import React, { useState } from "react";
import { Tabs, Tab, Box, TextField } from "@mui/material";

const PlayerSkillTable = ({ teams, setTeams }) => {
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTeamIndex(newValue);
  };

  const handleSkillChange = (teamIndex, playerIndex, skill, value) => {
    const updatedTeams = [...teams];
    updatedTeams[teamIndex].players[playerIndex][skill] = value;
    setTeams(updatedTeams);
  };

  return (
    <div className="relative flex flex-col gap-2 w-full overflow-scroll text-slate-300 bg-slate-800 rounded-lg bg-clip-border">
      <h2 className="text-xl font-bold">Player Skills Table</h2>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={selectedTeamIndex} onChange={handleChange}>
          {teams.map((team, index) => (
            <Tab key={index} label={team.teamname} />
          ))}
        </Tabs>
      </Box>
      {teams.map((team, index) => (
        <>
          <div
            role="tabpanel"
            hidden={selectedTeamIndex !== index}
            key={index}
            aria-labelledby={`tab-${index}`}
          >
            <p className="py-4">
              Team Formation: {teams[selectedTeamIndex].formation.join("-")}
            </p>
            {selectedTeamIndex === index && (
              <Box>
                <table className="w-full text-left table-auto min-w-max">
                  <thead>
                    <tr>
                      <th className="p-4 border-b border-slate-600 bg-slate-700">
                        <p className="text-sm font-normal leading-none text-slate-300">
                          Player
                        </p>
                      </th>
                      <th className="p-4 border-b border-slate-600 bg-slate-700">
                        <p className="text-sm font-normal leading-none text-slate-300">
                          Position
                        </p>
                      </th>
                      <th className="p-4 border-b border-slate-600 bg-slate-700">
                        <p className="text-sm font-normal leading-none text-slate-300">
                          Speed
                        </p>
                      </th>
                      <th className="p-4 border-b border-slate-600 bg-slate-700">
                        <p className="text-sm font-normal leading-none text-slate-300">
                          Passing
                        </p>
                      </th>
                      <th className="p-4 border-b border-slate-600 bg-slate-700">
                        <p className="text-sm font-normal leading-none text-slate-300">
                          Shooting
                        </p>
                      </th>
                      <th className="p-4 border-b border-slate-600 bg-slate-700">
                        <p className="text-sm font-normal leading-none text-slate-300">
                          Dribbling
                        </p>
                      </th>
                      <th className="p-4 border-b border-slate-600 bg-slate-700">
                        <p className="text-sm font-normal leading-none text-slate-300">
                          Defense
                        </p>
                      </th>
                      <th className="p-4 border-b border-slate-600 bg-slate-700">
                        <p className="text-sm font-normal leading-none text-slate-300">
                          Stamina
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {team.players.map((player, playerIndex) => (
                      <tr key={playerIndex} className="hover:bg-slate-700">
                        <td className="p-2 border-b border-slate-700 bg-slate-900">
                          <p className="text-sm text-slate-100 font-semibold">
                            {player.player}
                          </p>
                        </td>
                        <td className="p-2 border-b border-slate-700 bg-slate-800">
                          <p className="text-sm text-slate-300">
                            {player.position}
                          </p>
                        </td>
                        <td className="p-2 border-b border-slate-700 bg-slate-900">
                          <TextField
                            variant="outlined"
                            size="small"
                            value={player.speed}
                            onChange={(e) =>
                              handleSkillChange(
                                index,
                                playerIndex,
                                "speed",
                                e.target.value
                              )
                            }
                            sx={{
                              maxWidth: "120px",
                              "& .MuiInputBase-input": {
                                color: "var(--text)",
                              },
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border)",
                              },
                            }}
                          />
                        </td>
                        <td className="p-2 border-b border-slate-700 bg-slate-800">
                          <TextField
                            variant="outlined"
                            size="small"
                            value={player.passing}
                            onChange={(e) =>
                              handleSkillChange(
                                index,
                                playerIndex,
                                "passing",
                                e.target.value
                              )
                            }
                            sx={{
                              maxWidth: "120px",
                              "& .MuiInputBase-input": {
                                color: "var(--text)",
                              },
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border)",
                              },
                            }}
                          />
                        </td>
                        <td className="p-2 border-b border-slate-700 bg-slate-800">
                          <TextField
                            variant="outlined"
                            size="small"
                            value={player.shooting}
                            onChange={(e) =>
                              handleSkillChange(
                                index,
                                playerIndex,
                                "shooting",
                                e.target.value
                              )
                            }
                            sx={{
                              maxWidth: "120px",
                              "& .MuiInputBase-input": {
                                color: "var(--text)",
                              },
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border)",
                              },
                            }}
                          />
                        </td>
                        <td className="p-2 border-b border-slate-700 bg-slate-800">
                          <TextField
                            variant="outlined"
                            size="small"
                            value={player.dribbling}
                            onChange={(e) =>
                              handleSkillChange(
                                index,
                                playerIndex,
                                "dribbling",
                                e.target.value
                              )
                            }
                            sx={{
                              maxWidth: "120px",
                              "& .MuiInputBase-input": {
                                color: "var(--text)",
                              },
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border)",
                              },
                            }}
                          />
                        </td>
                        <td className="p-2 border-b border-slate-700 bg-slate-800">
                          <TextField
                            variant="outlined"
                            size="small"
                            value={player.defense}
                            onChange={(e) =>
                              handleSkillChange(
                                index,
                                playerIndex,
                                "defense",
                                e.target.value
                              )
                            }
                            sx={{
                              maxWidth: "120px",
                              "& .MuiInputBase-input": {
                                color: "var(--text)",
                              },
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border)",
                              },
                            }}
                          />
                        </td>
                        <td className="p-2 border-b border-slate-700 bg-slate-800">
                          <TextField
                            variant="outlined"
                            size="small"
                            value={player.stamina}
                            onChange={(e) =>
                              handleSkillChange(
                                index,
                                playerIndex,
                                "stamina",
                                e.target.value
                              )
                            }
                            sx={{
                              maxWidth: "120px",
                              "& .MuiInputBase-input": {
                                color: "var(--text)",
                              },
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border)",
                              },
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Box>
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default PlayerSkillTable;
