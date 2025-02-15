import React, { useState } from "react";
import MatchTabelRow from "./MatchTableRow";

import ballIcon from "@assets/icons/ball.png";

const DashboardFootballMatch = () => {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div className="flex flex-col gap-6 max-md:gap-4 border-b-2 border-solid border-border pb-6 max-md:pb-4">
      <h5 className="flex gap-2 items-center text-xl">
        <img src={ballIcon} className="w-5 h-5" alt="Section Icon" /> Football
        Match
      </h5>
      <div className="flex w-full justify-center border-b-2 border-solid border-border">
        <button
          onClick={() => setTabIndex(1)}
          className={`px-4 py-3 border-0 border-b-2 border-solid text-base font-medium transition-all -mb-0.5 ${
            tabIndex === 1 ? "border-purple" : "border-border"
          }`}
        >
          Latest Match
        </button>
        <button
          onClick={() => setTabIndex(2)}
          className={`px-4 py-3 border-0 border-b-2 border-solid text-base font-medium transition-all -mb-0.5 ${
            tabIndex === 2 ? "border-purple" : "border-border"
          }`}
        >
          Coming Match
        </button>
        <button
          onClick={() => setTabIndex(3)}
          className={`px-4 py-3 border-0 border-b-2 border-solid text-base font-medium transition-all -mb-0.5 ${
            tabIndex === 3 ? "border-purple" : "border-border"
          }`}
        >
          Pre-season
        </button>
        <button
          onClick={() => setTabIndex(4)}
          className={`px-4 py-3 border-0 border-b-2 border-solid text-base font-medium transition-all -mb-0.5 ${
            tabIndex === 4 ? "border-purple" : "border-border"
          }`}
        >
          Live Games
        </button>
        <button
          onClick={() => setTabIndex(5)}
          className={`px-4 py-3 border-0 border-b-2 border-solid text-base font-medium transition-all -mb-0.5 ${
            tabIndex === 5 ? "border-purple" : "border-border"
          }`}
        >
          Fun Football
        </button>
      </div>
      <div className="flex flex-col">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <MatchTabelRow
            key={`match-list-row-${index}`}
            data={item}
            odd={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardFootballMatch;
