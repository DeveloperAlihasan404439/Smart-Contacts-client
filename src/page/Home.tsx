import React from "react";
// import VideoPlayer from "@/components/VideoPlayer";
import AllContacts from "@/components/AllContacts/AllContacts";
import ActiveUser from '../components/ActiveUser/ActiveUser.jsx'
import GroupManagement from '../components/GroupManagement/GroupManagement.jsx'
import Features from '../components/Features/Features.jsx'
import Banner from "../components/Banner.js";
function Home(): JSX.Element {
  return (
    <div>
      <Banner/>
      <ActiveUser />
      <GroupManagement/>
      <AllContacts />
      <Features/>
      
    </div>
  );
}

export default Home;

