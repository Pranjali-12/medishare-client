import React from 'react'
import MedicineCard from './MedicineCard'

const MainMedCard = () => {
  return (
    <div>
      <MedicineCard name="Dolo-650" description="Medicine to relieve symptoms of fever, nerve pain, and pain during periods, backache, toothache, sore throat, muscle aches, strains and sprains, common colds" ownerName="Rohini Patil" expiryDate="28/10/2025" appStatus="Approved" imgSrc={require("../assets/correct.png")} updated="2 " />
      <MedicineCard name="Tretiva 20 Capsule " description="Tretiva 20 Capsule helps treat acne by reducing the production of sebum (a natural substance) that causes acne. " ownerName="Rohini Patil" expiryDate="28/10/2025" appStatus="Pending" imgSrc={require("../assets/pending.png")} updated="5 " />
      <MedicineCard name="Tretiva 20 Capsule " description="Tretiva 20 Capsule helps treat acne by reducing the . " ownerName="Rohini Patil" expiryDate="28/10/2025" appStatus="Pending" imgSrc={require("../assets/pending.png")} updated="5 " />

    </div>
  )
}

export default MainMedCard
