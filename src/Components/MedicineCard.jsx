// // import React from 'react'
// // import MainMedCard from './MainMedCard'

// // const MedicineCard = (props) => {
// //   return (
// //     <div class="" style={{margin:"1rem auto",width:"80%"}}>
      
// // <div class="max-w-sm w-full lg:max-w-full lg:flex justify-center " >
  
// //   <div class=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal " style={{boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"}}>
// //     <div class="mb-4">
    
// //       <div class="px-6 py-2 ">
// //     <div class="font-bold text-2xl text-[#1CB5BD] mb-2">{props.name}</div>
// //     <p class="text-gray-900 text-md mb-2">
// //       {props.description}
// //     </p>
// //     {/* <div class="font-bold text-lg text-gray-800 mb-2"></div> */}
// //     <div >
// //     <h2 class="text-gray-900 mb-2"> <span class="font-semibold text-lg ">Owner's Name: </span>{props.ownerName}</h2>
// //     <h2 class="text-gray-900 mb-2"> <span class="font-semibold text-lg ">Expiry Date: </span>{props.expiryDate}</h2>
// //   </div> 
// //   <div class="flex justify-between flex-wrap">
// //     <h2 class="text-black flex  text-xl font-bold  mt-2"> {props.appStatus} <img className="ml-2" src={props.imgSrc} style={{ width: "1.7rem", height:"1.7rem"}} /></h2>
// //     <h2 class="text-gray-900  mt-2"> {props.updated} </h2>
// //   </div> 
// //   </div>
// //     </div>
// //   </div>
// // </div>
// //     </div>
// //   )
// // }

// // export default MedicineCard

// import React from 'react';
// import MainMedCard from './MainMedCard';

// const MedicineCard = (props) => {
//   return (
//     <div className="" style={{ margin: "1rem auto", width: "90%" }}>
//       <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center">
//         <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px" }}>
//           <div className="mb-4">
//             <div className="px-6 py-2">
//               <div className="font-bold text-2xl text-[#1CB5BD] mb-2">{props.name}</div>
//               <p className="text-gray-900 text-md mb-2" >
//                 {props.description}
//               </p>
//               <div>
//                 <h2 className="text-gray-900 mb-2"><span className="font-semibold text-lg">Owner's Name: </span>{props.ownerName}</h2>
//                 <h2 className="text-gray-900 mb-2"><span className="font-semibold text-lg">Expiry Date: </span>{props.expiryDate}</h2>
//               </div>
//               <div className="flex justify-between flex-wrap">
//                 <h2 className="text-black flex text-xl font-bold mt-2"> {props.appStatus} <img className="ml-2" src={props.imgSrc} style={{ width: "1.7rem", height: "1.7rem" }} /></h2>
//                 <h2 className="text-gray-900 mt-2"> {props.updated} days Ago</h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MedicineCard;

import React from 'react';
import MainMedCard from './MainMedCard';

const MedicineCard = (props) => {
  return (
    <div className="" style={{ margin: "1rem auto", width: "90%" }}>
      <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center">
        <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px" }}>
          <div className="mb-4">
            <div className="px-6 py-2">
              <div className="font-bold text-2xl text-[#1CB5BD] mb-2">{props.name}</div>
              <p className="text-gray-900 text-md mb-2" style={{ minWidth: "200px", maxWidth: "700px" }}>
                {props.description}
              </p>
              <div>
                <h2 className="text-gray-900 mb-2"><span className="font-semibold text-lg">Owner's Name: </span>{props.ownerName}</h2>
                <h2 className="text-gray-900 mb-2"><span className="font-semibold text-lg">Expiry Date: </span>{props.expiryDate}</h2>
              </div>
              <div className="flex justify-between flex-wrap">
                <h2 className="text-black flex text-xl font-bold mt-2"> {props.appStatus} <img className="ml-2" src={props.imgSrc} style={{ width: "1.7rem", height: "1.7rem" }} /></h2>
                <h2 className="text-gray-900 mt-2"> {props.updated} days Ago</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
