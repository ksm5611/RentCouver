import react from 'react'
import HeroContent from '../HeroContent';
import FavouritesList from './FavouritesList';
import UserInfo from './UserInfo';

export default function User () {

  return (
    <div>
      <HeroContent />
      <div className="user-page-wrapper">
        <FavouritesList />
        <UserInfo />
      </div>
    </div>
  )
}