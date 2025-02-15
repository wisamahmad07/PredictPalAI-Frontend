import React from "react";
import LeagueSelector from "@components/LeagueSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import UserRankingTable from "./UserRankingTable";

import cupIcon from "@assets/icons/cup.png";

const DashboardLeagueStanding = () => {
  return (
    <div className="flex flex-col gap-6 max-md:gap-4 border-b-2 border-solid border-border pb-6 max-md:pb-4">
      <h5 className="flex gap-2 items-center text-xl">
        <img src={cupIcon} className="w-5 h-5" alt="Section Icon" /> Football
        Standings
      </h5>
      <div className="flex justify-between items-center">
        <LeagueSelector />
        <button className="flex items-center h-6 hover:text-coldWhite transition-all">
          View All
          <div className="flex justify-center items-center w-6 h-6">
            <FontAwesomeIcon
              icon={faAngleRight}
              width={12}
              height={12}
              className="w-3 height-w-3"
            />
          </div>
        </button>
      </div>
      <UserRankingTable />
    </div>
  );
};

export default DashboardLeagueStanding;
