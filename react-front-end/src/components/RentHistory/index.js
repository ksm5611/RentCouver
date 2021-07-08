import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import {
  Container,
  ListItem,
  List,
  Button,
  makeStyles,
  Avatar
} from "@material-ui/core";
// import useVisualMode from '../RefReqList/RefReqItem/useVisualMode';
import Status from './status';


const useStyles = makeStyles((theme) => {
  return {
    root: {
      border: "1px solid black",
      marginBottom: "16px",
      display: "flex",
      justifyContent: "space-between"
    },
    btn: {
      backgroundColor: '#f1a177',
      color: 'white',
      "&:hover": {
        backgroundColor: 'rgb(7, 177, 77, 0.42)'
      }
    }
  };
});

export default function RentHistory() {

  const classes = useStyles();

  // const [pending, setPending] = useState(true);
  // {pending && <div>Please wait</div>}

  const [history, setHistory] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get("http://localhost:8000/api/rentHistories");
        setHistory(result.data)
      } catch (error) {
        setError("Your server is broken")
      }
    }
    fetchData();
  }, [])



  // const historyList = history.map((record) => {
  //   return (

  //     <ListItem className={classes.root} >
  //       {/* <Address /> */}
  //       <div className="history-info">
  //         <p className="req-landlord address">{record.Property.street}, {record.Property.unit && <>#{record.Property.unit}</>} {record.Property.city} {record.Property.province} {record.Property.postal_code}</p>
  //         <p className="req-landlord">{record.start_date} - {record.end_date}</p>
  //         <span>{record.Property.User.name}</span>
  //       </div>
  //       <div className="option-btn">
  //         {mode === DEFAULT && (
  //           record.is_requested === false ? (
  //             <Button className={classes.btn} variant="contained" onClick={() => { refRequested(record) }}>Request Reference</Button>) : (<p>REQUESTED</p>))}
  //         {mode === REQUESTED && (<p>REQUESTED</p>)}
  //       </div>
  //     </ListItem>

  //   )
  // })


  // return (

  //   <ListItem className={classes.root} >
  //     <div className="history-info">
  //       <p className="req-landlord address">{record.Property.street}, {record.Property.unit && <>#{record.Property.unit}</>} {record.Property.city} {record.Property.province} {record.Property.postal_code}</p>
  //       <p className="req-landlord">{record.start_date} - {record.end_date}</p>
  //       <span>{record.Property.User.name}</span>
  //     </div>
  //     <div className="option-btn">
  //       {mode === DEFAULT && (
  //         record.is_requested === false ? (
  //           <Button className={classes.btn} variant="contained" onClick={() => { refRequested(record) }}>Request Reference</Button>) : (<p>REQUESTED</p>))}
  //       {mode === REQUESTED && (<p>REQUESTED</p>)}
  //     </div>
  //   </ListItem>

  // )



  return (
    <div>
      <section className="hero-container second-hero-container">
        <div>
          <h2>My Rent History</h2>
        </div>
      </section>
      <Container>
        {error && <div>Error Loading data</div>}
        <ListItem className={classes.root} id="listitem-head">
          <div className="rent-history-info">
            <h5 className="rent-historty-address">Property Address</h5>
            <h5>Rent Period</h5>
            <h5>Owner Name</h5>
          </div>
        </ListItem>
        <List>
          {history.map((record) => {
            return (
              <ListItem className={classes.root}>
                <Status record={record} />
              </ListItem>
            )
          })}
        </List>
      </Container>

    </div>
  )
  
}



{/* {record.is_requested === false ? (
mode === DEFAULT && (
<Button
className={classes.btn}
variant="contained"
onClick={() => {
refRequested(record);
transition(REQUESTED);
}}
>
Request Reference
</Button>
)) : (
mode === REQUESTED && (<p>REQUESTED</p>)
)} */}




// {history.map((record) => {
//   return (
//     <ListItem className={classes.root} >
//       {/* <Address /> */}
//       <div className="history-info">
//         <p className="req-landlord address">{record.Property.street}, {record.Property.unit && <>#{record.Property.unit}</>} {record.Property.city} {record.Property.province} {record.Property.postal_code}</p>
//         <p className="req-landlord">{record.start_date} - {record.end_date}</p>
//         <span>{record.Property.User.name}</span>
//       </div>
//       <div className="option-btn">
//         {mode === REQUESTED && (<p>REQUESTED</p>)}
//         {mode === DEFAULT && (
//           record.is_requested === false ? (
//             <Button
//               className={classes.btn}
//               variant="contained"
//               onClick={() => {
//                 refRequested(record);
//               }}
//             >
//               Request Reference
//             </Button>
//           ) : (
//             REQUESTED
//           )
//         )}

//         {/* {record.is_requested === false ? (
//           mode === DEFAULT && (
//             <Button
//               className={classes.btn}
//               variant="contained"
//               onClick={() => {
//                 refRequested(record);
//                 transition(REQUESTED);
//               }}
//             >
//               Request Reference
//             </Button>
//           )) : (
//           mode === REQUESTED && (<p>REQUESTED</p>)
//         )} */}


//       </div>
//     </ListItem>
//   )
// })}