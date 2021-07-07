// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Address() {

//   const [address, setAddress] = useState([])
//   console.log(address);

//   useEffect(() => {
//     axios.get("http://localhost:8000/api/propertyLists")
//       .then((result) => {
//         setAddress(result.data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       })
//   }, []);

//   const addressList = address.map((addy) => {
//     console.log(addy);
//     return <p>{addy.street}{addy.unit}{addy.city}{addy.province}{addy.postal_code}</p>
//   })

//   return { addressList }
// }