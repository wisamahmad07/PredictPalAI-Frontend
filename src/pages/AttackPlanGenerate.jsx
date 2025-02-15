import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OpenAI from "openai";

import Spring from "@components/Spring";
import PageHeader from "@layout/PageHeader";
import PlayerSkillTable from "@components/PlayerSkillTable";
import AttackPlansGeneration from "@components/AttackPlansGeneration";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const formationPos = {
  "4-4-2": [
    [5, 50],
    [20, 20],
    [20, 40],
    [20, 60],
    [20, 80],
    [30, 20],
    [30, 40],
    [30, 60],
    [30, 80],
    [40, 33],
    [40, 67],
  ],
  "4-3-3": [
    [5, 50],
    [20, 20],
    [20, 40],
    [20, 60],
    [20, 80],
    [30, 25],
    [30, 50],
    [30, 75],
    [40, 25],
    [40, 50],
    [40, 75],
  ],
  "4-2-3-1": [
    [5, 50],
    [14, 20],
    [14, 40],
    [14, 60],
    [14, 80],
    [23, 33],
    [23, 67],
    [32, 25],
    [32, 50],
    [32, 75],
    [41, 50],
  ],
  "3-5-2": [
    [5, 50],
    [20, 25],
    [20, 50],
    [20, 75],
    [30, 20],
    [30, 35],
    [30, 50],
    [30, 65],
    [30, 80],
    [40, 33],
    [40, 67],
  ],
  "5-3-2": [
    [5, 50],
    [20, 20],
    [20, 35],
    [20, 50],
    [20, 65],
    [20, 80],
    [30, 25],
    [30, 50],
    [30, 75],
    [40, 44],
    [40, 67],
  ],
  "4-1-4-1": [
    [5, 50],
    [14, 20],
    [14, 40],
    [14, 60],
    [14, 80],
    [23, 50],
    [32, 20],
    [32, 40],
    [32, 60],
    [32, 80],
    [41, 50],
  ],
  "4-3-2-1": [
    [5, 50],
    [14, 20],
    [14, 40],
    [14, 60],
    [14, 80],
    [23, 25],
    [23, 50],
    [23, 75],
    [32, 33],
    [32, 67],
    [41, 50],
  ],
  "3-4-3": [
    [5, 50],
    [20, 25],
    [20, 50],
    [20, 75],
    [30, 20],
    [30, 40],
    [30, 60],
    [30, 80],
    [40, 25],
    [40, 50],
    [40, 75],
  ],
  "4-4-1-1": [
    [5, 50],
    [14, 20],
    [14, 40],
    [14, 60],
    [14, 80],
    [23, 20],
    [23, 40],
    [23, 60],
    [23, 80],
    [32, 50],
    [41, 50],
  ],
  "4-2-2-2": [
    [5, 50],
    [14, 20],
    [14, 40],
    [14, 60],
    [14, 80],
    [23, 33],
    [23, 67],
    [32, 33],
    [32, 67],
    [41, 33],
    [41, 67],
  ],
  "4-3-1-2": [
    [5, 50],
    [14, 20],
    [14, 40],
    [14, 60],
    [14, 80],
    [23, 25],
    [23, 50],
    [23, 75],
    [32, 50],
    [41, 33],
    [41, 67],
  ],
  "4-5-1": [
    [5, 50],
    [20, 20],
    [20, 40],
    [20, 60],
    [20, 80],
    [30, 20],
    [30, 35],
    [30, 50],
    [30, 65],
    [30, 80],
    [40, 50],
  ],
  "3-6-1": [
    [5, 50],
    [20, 25],
    [20, 50],
    [20, 75],
    [30, 15],
    [30, 29],
    [30, 43],
    [30, 57],
    [30, 71],
    [30, 85],
    [40, 50],
  ],
};

const AttackPlanGenerate = () => {
  const [teams, setTeams] = useState([]);
  const [attackPlans, setAttackPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [predictLoading, setPredictLoading] = useState(false);
  const [winnerPrediction, setWinnerPrediction] = useState(null);

  const location = useLocation();
  const { plan } = location.state;

  const getPlayerDataJson = async (plan) => {
    setLoading(true);
    const prompt = `Please generate abilities mockup table of both teams 22 players and match team formation. Player's name should be follow this format: player_1. 
      I want to generate 5 attack plans base on that players abilities table. Direct Assault, Flank Attack, Combination Play, Quick Transition and Cross-Field Move. 
      These 5 main attack plans I want to make. Provide it like this format. ["player_1", "player_4", "player_3", "player_2", "player_4"]. This plan is for team A so it have to use team 1 players for passing ball. Attack plan length is bigger than 4.
      Available team formation like this. [4,4,2], [4,3,3], [4,2,3,1], [3,5,2], [5,3,2], [4,1,4,1], [4,3,2,1], [3,4,3], [4,4,1,1], [4,2,2,2], [4,3,1,2], [4,5,1], [3,6,1] Choose one of these for each team.
      Player position can be "Goalkeeper", "Defender", "Midfielder", "Attacker". Each player must choose one from this.
      So each team players should be 11 including goalkeeper.
      In response, Players abilities table should include all 11 players skill points for each team. Each players position should be matched with team formation.
      Provide these kinds of mockup data as json format. Response json format should follow like this format. {
        "teams": [
          {
            "teamname": "teamA",
            "formation": ,
            "players": [
              {
                "player": ,
                "position": ,
                "start_position"
                "speed": ,
                "passing": ,
                "shooting": ,
                "dribbling": ,
                "defense": ,
                "stamina": 
              },
              ...
            ]
          },
          {
            "teamname": "teamB",
            "formation": ,
            "players": [
              {
                "player": ,
                "position": ,
                "speed": ,
                "passing": ,
                "shooting": ,
                "dribbling": ,
                "defense": ,
                "stamina": 
              },
              ...
            ]
          }
        ],
        "attack_plans": [
          {
            "plan": "Direct Assault",
            "explanation": ,
            "pass": 
          },
          {
            "plan": "Flank Attack",
            "explanation": ,
            "pass": 
          },
          {
            "plan": "Combination Play",
            "explanation": ,
            "pass": 
          },
          {
            "plan": "Quick Transition",
            "explanation": ,
            "pass": 
          },
          {
            "plan": "Cross-Field Move",
            "explanation": ,
            "pass": 
          },
        ]
      }
      This data should be random data and it only returns json format content without any explantion.
      `;

    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      });

      const extractedText = chatCompletion.choices[0].message.content || "{}";
      let extractedData;
      try {
        extractedData = JSON.parse(extractedText);
      } catch (error) {
        extractedData = {};
      }
      console.log(extractedData);
      if (extractedData) {
        extractedData.attack_plans &&
          setAttackPlans(extractedData.attack_plans);
        if (extractedData.teams) {
          let tmp = [...extractedData.teams];

          tmp = tmp.map((item) => {
            let formation = item.formation,
              players = [...item.players];
            players = players.map((player, index) => ({
              ...player,
              start_position: formationPos[formation.join("-")][index],
            }));

            return {
              ...item,
              players,
            };
          });
          console.log(tmp);
          setTeams(tmp);
        }
      }
      return extractedData;
    } finally {
      setLoading(false);
    }
  };

  const predictWinnerTeam = useCallback(async () => {
    setPredictLoading(true);
    const prompt = `Please predict winning team name base on metrics table of all players in both team of soccer match.
      This metrics table contains position and skill points of speed, passing, shooting, dribbling, defense and stamina of each player.
      Here is the player info as json format.
      ${JSON.stringify(teams)}
      Base on this info, please predict football match winning team and provide it as JSON format like this.
      {
        "winner": "Team A" #Value of this attribute of json can be the name of team.
      }
      `;

    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      });

      const extractedText = chatCompletion.choices[0].message.content || "{}";
      let extractedData;
      try {
        extractedData = JSON.parse(extractedText);
      } catch (error) {
        extractedData = {};
      }
      setWinnerPrediction(extractedData);
    } finally {
      setPredictLoading(false);
    }
  }, [teams]);

  useEffect(() => {
    getPlayerDataJson(plan);
  }, [plan]);

  return (
    <>
      <PageHeader title="Video Analysis" />
      <div className="md:flex gap-4 p-6">
        <div className="relative flex-1">
          <Spring className="card card-padded gap-4">
            <PlayerSkillTable teams={teams} setTeams={setTeams} />
            <AttackPlansGeneration
              plans={attackPlans}
              teams={teams}
              setPlans={setAttackPlans}
            />
          </Spring>
          {loading && (
            <>
              <div className="absolute w-full h-full top-0 left-0 bg-widget opacity-75" />
              <div className="absolute w-full h-full flex justify-center items-center top-0 left-0">
                Please wait while we generate your attack plan...
              </div>
            </>
          )}
        </div>
        <div className="hidden md:block w-64 lg:w-80 h-full">
          <div className="sticky top-4 flex flex-col gap-4">
            <Spring className="card card-padded !p-4">
              <h3 className="text-lg text-center py-4">
                Winning Team Prediction
              </h3>
              {winnerPrediction ? (
                <>
                  <p className="mb-4"><b>Winner:</b> <span className="text-lg font-bold text-accent">{winnerPrediction?.winner}</span><span className="text-2xl capitalize">🏆</span></p>
                  <button
                    onClick={predictWinnerTeam}
                    className={`h-10 w-full px-4 border border-solid border-border rounded ${
                      loading || !teams || predictLoading
                        ? "pointer-events-none"
                        : "hover:bg-accent hover:border-accent"
                    } transition-all`}
                    disabled={loading || !teams || predictLoading}
                  >
                    {predictLoading ? <>Calculating...</> : <>Predict Again</>}
                  </button>
                </>
              ) : (
                <button
                  onClick={predictWinnerTeam}
                  className={`h-10 w-full px-4 border border-solid border-border rounded ${
                    loading || !teams || predictLoading
                      ? "pointer-events-none"
                      : "hover:bg-accent hover:border-accent"
                  } transition-all`}
                  disabled={loading || !teams || predictLoading}
                >
                  {predictLoading ? <>Calculating...</> : <>Predict Winner</>}
                </button>
              )}
            </Spring>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttackPlanGenerate;
