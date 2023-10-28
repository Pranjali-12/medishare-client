import React from "react";
import SubServiceBox from "./SubServiceBox";


const ServiceBox = () => {
  return (
    <div className="mt-8 flex flex-wrap justify-center" >
     <SubServiceBox
  s={require("../assets/donate.png")}
  head="Donate Medicine"
  content="Donate medicine rather than discarding them."
></SubServiceBox>

<SubServiceBox
  s={require("../assets/approval.png")}
  head="Admin’s Approval"
  content="Doctor’s approval on every medicine. 
Consultation available as well "
></SubServiceBox>

<SubServiceBox
  s={require("../assets/med_packet.png")}
  head="Donate Medicine"
  content="Donate medicine rather than discarding them."
></SubServiceBox>

    </div>
  );
};

export default ServiceBox;
