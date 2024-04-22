
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import MedicineCard from '../Components/MedicineCard';
// import SingleMedicine from '../Components/SingleMedicine';

// const SingleSingleMed = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   console.log(id);
 

//   useEffect(() => {
//     // Fetch product data using the ID
//     axios.get(`https://medishare-server-3.onrender.com/medicine/getmed/${id}`)
//       .then(response => {
//         setProduct(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching product:', error);
//       });
//   }, [id]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className='mt-10'>
//       <h1>{product.owner}</h1>
 
//       {/* <MedicineCard  key={product.id}
//                   id={product.id}
//                   name={product.name}
//                   description={product.illness}
//                   ownerName={product.owner}
//                   mfDate={product.mf_date}
//                   expiryDate={product.exp_date}
//                   quantity={product.quantity}
//                   appStatus={product.approval}
//                   createdAt={product.createdAt}/> */}
//                   <SingleMedicine
//                     id={product.id}
//                   name={product.name}
//                   description={product.illness}
//                   ownerName={product.owner}
//                   mfDate={product.mf_date}
//                   expiryDate={product.exp_date}
//                   quantity={product.quantity}
//                   appStatus={product.approval}
//                   createdAt={product.createdAt}
//                   />
//     </div>
//   );
// }

// export default SingleSingleMed;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import SingleMedicine from '../Components/SingleMedicine';

// const SingleSingleMed = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Fetch product data using the ID
//     axios.get(`https://medishare-server-3.onrender.com/medicine/getmed/${id}`)
//       .then(response => {
//         setProduct(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching product:', error);
//       });
//   }, [id]);

//   if (!product) return <div>Loading...</div>;

//   // Render SingleMedicine only if appStatus is approved
//   return (
//     <div className='mt-10'>
//       {product.approval && (
//         <SingleMedicine
//           id={product.id}
//           name={product.name}
//           description={product.illness}
//           ownerName={product.owner}
//           mfDate={product.mf_date}
//           expiryDate={product.exp_date}
//           quantity={product.quantity}
//           appStatus={product.approval}
//           createdAt={product.createdAt}
//         />
//       )}
//     </div>
//   );
// }

// export default SingleSingleMed;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import SingleMedicine from '../Components/SingleMedicine';
// import Modal from '../Components/Modal';

// const SingleSingleMed = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     // Fetch product data using the ID
//     axios.get(`https://medishare-server-3.onrender.com/medicine/getmed/${id}`)
//       .then(response => {
//         setProduct(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching product:', error);
//       });
//   }, [id]);

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   if (!product) return <div>Loading...</div>;

//   // Render SingleMedicine only if appStatus is approved
//   return (
//     <div className='mt-10'>
//       {product.approval ? (
//         <SingleMedicine
//           id={product.id}
//           name={product.name}
//           description={product.illness}
//           ownerName={product.owner}
//           mfDate={product.mf_date}
//           expiryDate={product.exp_date}
//           quantity={product.quantity}
//           appStatus={product.approval}
//           createdAt={product.createdAt}
//         />
//       ) : (
//         <>
//           <button onClick={() => setShowModal(true)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">View Medicine</button>
//           {showModal && <Modal handleClose={handleCloseModal} />}
//         </>
//       )}
//     </div>
//   );
// }

// export default SingleSingleMed;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SingleMedicine from '../Components/SingleMedicine';
import Modal from '../Components/Modal';

const SingleSingleMed = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data using the ID
    axios.get(`https://medishare-server-3.onrender.com/medicine/getmed/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  // Render SingleMedicine only if appStatus is approved
  return (
    <div className='mt-10'>
      {product.approval ? (
        <SingleMedicine
          id={product._id}
          name={product.name}
          description={product.illness}
          ownerName={product.donor.firstName+" "+product.donor.lastName}
          mfDate={product.mf_date}
          expiryDate={product.exp_date}
          quantity={product.quantity}
          appStatus={product.approval}
          createdAt={product.createdAt}
        />
      ) : (
        <Modal />
      )}
    </div>
  );
}

export default SingleSingleMed;

