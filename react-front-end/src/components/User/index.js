import react from 'react'
import RecentViewList from './RecentViewList';
import UserInfo from './UserInfo';
import UserpageHeroContent from './UserpageHeroContent';

export default function User () {

  return (
    <div>
      <UserpageHeroContent />
      <div className="user-page-wrapper">
        <UserInfo />
        <RecentViewList />
      </div>
    </div>
  )
}