import React from "react";
import SubServiceBox from "./SubServiceBox";


const ServiceBox = () => {
  return (
    <div className="flex flex-wrap justify-center" >
     <SubServiceBox
  s={require("../assets/donate.png")}
  head="Connecting Hearts, Not Just Medicines"
  content="Connecting hearts through the act of giving, one medicine at a time. Your contribution, their hope."
></SubServiceBox>

<SubServiceBox
  s={require("../assets/approval.png")}
  head="Privacy Shielded, Impact Magnified"
  content="Shielding privacy, magnifying impact. Because your generosity deserves to make a profound difference"
></SubServiceBox>

<SubServiceBox
  s={require("../assets/med_packet.png")}
  head="Empowering Generosity"
  content="Empower your unused medicines to make a difference. With MediShare, your generosity knows no bounds."
></SubServiceBox>

    </div>
  );
};

export default ServiceBox;
