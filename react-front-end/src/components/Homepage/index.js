import SearchBar from './SearchBar';
import '../../App.css';
import Fade from 'react-reveal/Fade';

export default function Homepage() {
  return (
    <div className="homepage-wrapper">
      <div>
        <Fade top>
          <div>
            <SearchBar />
          </div>
        </Fade>
      </div>
    </div>
  )
}
