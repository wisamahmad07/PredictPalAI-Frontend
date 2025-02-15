// components
import PageHeader from "@layout/PageHeader";
import AppGrid from "@layout/AppGrid";
import WelcomeBanner from "@widgets/Dashboard/WelcomeBanner";
import UpcomingMatch from "@widgets/Dashboard/UpcomingMatch";
import UserStatusCard from "@widgets/Dashboard/UserStatusCard";
import DashboardFootballMatch from "@widgets/Dashboard/DashboardFootballMatch";
import DashboardLeagueStanding from "@widgets/Dashboard/DashboardLeagueStanding";
import DashboardFollowClub from "@widgets/Dashboard/DashboardFollowClub";
import DashboardShoppingProducts from "@widgets/Dashboard/DashboardShoppingProducts";
import DashboardMobileAds from "@widgets/Dashboard/DashboardMobileAds";
import DashboardSportNews from "@widgets/Dashboard/DashboardSportNews";
import PageFooter from "@layout/PageFooter";
import VideoUploaderByAiM1 from "@components/aiModel/VideoUploader-M1";
import VideoUploaderByAiM2 from "@components/aiModel/VideoUploader-M2";

const widgets = {
  welcome_banner: <WelcomeBanner />,
  upcoming_match: <UpcomingMatch />,
  user_status_card: <UserStatusCard />,
};

const ClubSummary = () => {
  return (
    <>
      <PageHeader title="Club summary" />
      <AppGrid id="club_summary" widgets={widgets} />
      <div className="dashboard-wrapper flex flex-col gap-6 max-md:gap-4 px-6 max-md:px-4 font-inter max-md:mt-4">
        <DashboardFootballMatch />
        <DashboardLeagueStanding />
        <DashboardFollowClub />
        <DashboardShoppingProducts />
        <DashboardMobileAds />
        <DashboardSportNews />
        <VideoUploaderByAiM1 />
        <VideoUploaderByAiM2 />
      </div>
      <PageFooter />
    </>
  );
};

export default ClubSummary;
