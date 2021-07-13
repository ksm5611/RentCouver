import RecentView from './RecentView';
import UserInfo from './UserInfo';
import UserpageHeroContent from './UserpageHeroContent';

export default function User() {

  return (
    <div>
      <UserpageHeroContent />
        <div className="about-me"></div>
      <div className="wrapper">
        <div className="user-page-container">
          <UserInfo />
          <RecentView />
        </div>
      </div>
    </div>
  )
}