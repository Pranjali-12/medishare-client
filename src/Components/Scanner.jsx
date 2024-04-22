import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import '.././App.css'

const Scanner=({ onScan })=>{
  const [scanResult,setScanResult]=useState(null)

  useEffect(()=>{
    const scanner=new Html5QrcodeScanner('reader',{
      qrbox:{
        width:250,
        height:250
      },
      fps:5,
    })
  
    scanner.render(success,error);
  
    function success(result){
  
      scanner.clear();
      // setScanResult(result)
      onScan(result);
    }
  
    function error(){
      console.log(error)
    }
  },[])

  

  return(
    <div className="">
      {
        scanResult?
        <div>Success:{scanResult}</div>
        :
        <div id="reader"></div>
      }
    </div>
  )
}

export default Scanner;