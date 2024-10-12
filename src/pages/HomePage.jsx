import { data } from "../../data/api";
import Comments from "../components/Comments";
import DownloadApp from "../components/DownloadApp";
import Offers from "../components/Offers";
import QuestionAnsewer from "../components/QuestionAnsewer";
import Services from "../components/Services";
import ThemeOption from "../components/ThemeOption";
import TravelBox from "../components/TravelBox";
import UserSearching from "../components/UserSearching";

function HomePage() {
  return (
    <div>
      {/* <div style={{ display: "flex", gap: "10px" }}>
        <ThemeOption theme="dark" />
        <ThemeOption theme="light" />
        <ThemeOption theme="blue" />
      </div> */}
      <br />
      <TravelBox />
      <br />
      {/* <UserSearching /> */}
      <br />
      <Offers />
      <br />

      {/* <DownloadApp /> */}
      <br />
      {/* <Services /> */}
      <br />
      <QuestionAnsewer />
      <br />
      <Comments/>
    </div>
  );
}

export default HomePage;
