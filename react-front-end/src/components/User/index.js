import RecentView from './RecentView';
import UserInfo from './UserInfo';
import UserpageHeroContent from './UserpageHeroContent';
import Fade from "react-reveal/Fade";

export default function User() {

  return (
    <div>
      <UserpageHeroContent />
      <div className="about-me"></div>
      <div className="wrapper">
        <Fade>
          <div className="user-page-container">
            <UserInfo />
            <div className="recent-view-container">
              <div className="view-title"><h5>Recently viewed properties</h5></div>
              <RecentView />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}