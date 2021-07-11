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




// class FadeExample extends React.Component {
//   render() {
//     return (
//       <div>
//         <Fade top cascade>
//           <div>
//             <h2>React Reveal</h2>
//             <h2>React Reveal</h2>
//             <h2>React Reveal</h2>
//           </div>
//         </Fade>
//       </div>
//     );
//   }
// }

// export default FadeExample;