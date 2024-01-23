import React from 'react'


const SubServiceBox = (props) => {
  console.log(props.head);
  return (
    <div  ><div className="max-w-sm  ps-6 pe-6 mx-4 my-4" style={{width:"19rem",height:"20rem",boxShadow:"rgba(0, 0, 0, 0.18) 4px 4px 4px",backgroundColor:"white",borderRadius:"15px"}}>
    <div className='h-36 '><img className="pb-4 pt-4 " src={props.s}  alt="" style={{width:"6.5rem"}}/></div>
   <h2 className='font-bold pb-2 '>{props.head}</h2>
   {/* <hr className=' pb-3' style={{width:"6.9rem"}} /> */}
   <hr className=' pb-3' style={{ width: '7rem', borderTop:"3.8px solid #1CB5BD" }} />

    <h5 className=''>{props.content}  </h5>
  </div></div>
  )
}

export default SubServiceBox;