import { useState } from "react";
import icon from "./assets/icon.png";
import slack from "./assets/slack.png";
import profileimage from "./assets/profile.png";

import "./App.css";

function App() {
  const [Links, setLinks] = useState([
    { name: "Twitter Link", link: "https://www.twitter.com" },
    { name: "KodeCamp Team", link: "https://www.twitter.com" },
    { name: "KodeCamp Books", link: "https://www.twitter.com" },
    { name: "Phython Books", link: "https://www.twitter.com" },
    { name: "Background Check For Coders", link: "https://www.twitter.com" },
    { name: "Design Books", link: "https://www.twitter.com" },
  ]);

  return (
    <>
      <section className="profile-section">
        <img src={profileimage} alt="Profile Image" className="p-center" />
        <p className="fs-name p-center f-inter">John Doe</p>
        <section className="link-section">
          {Links.map((item) => (
            <div className="link">
              <a href={item.link} className="p-center f-inter link-name">
                {" "}
                {item.name}
              </a>
            </div>
          ))}
        </section>
        <div className="flex">
          <div className="icon">
            <img src={icon} alt="" />
            <img src={slack} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
