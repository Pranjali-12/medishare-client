import React,{useState,useEffect} from 'react'
import NgoIntro from '../Components/NgoIntro'
import MediShare from '../Components/MediShare'
import axios from 'axios'

const SearchNgo = () => {
  
  const [receiver,setReceiver]=useState('');
  const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:2000/donor/getAllReceivers`)
            .then(res => {
                console.log(res.data.receivers);
                setReceiver(res.data.receivers);

            }).catch(error => {
                console.log(error);
            })
    }, [])

    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };
  
  return (
    <>
      <div className='h-screen'>

        <div className='h-2/5 bg-[#B9F3FC] flex flex-col'>
         <MediShare/>
          <div className='text-4xl px-4 sm:px-40 py-2 sm:py-10 mt-auto font-custom font-semibold'>Search for NGO's near-by</div>

        </div>


        <div>
          <div className=" sm:mx-36 sm:w-[30%] my-6 mx-3">
            <div class="relative mb-4 flex items-stretch border-2  h-10 pl-4 border-solid border-teal-500 rounded-md"
            >
              <input
                type="search"
                className='w-11/12 border-none outline-none'
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2" 
                value={searchQuery} 
            onChange={handleSearch}/>
              <img src={require("../assets/Search.png")} alt="" className='p-1' />
            </div>
          </div>

          <div className='sm:h-3/5 flex flex-col sm:flex-row gap-4'>

            <div className='my-2 w-full sm:w-4/7 flex flex-col items-center justify-center'>
            {receiver && receiver
              .filter(
                (ngo) =>
                  ngo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  ngo.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  ngo.email.toLowerCase().includes(searchQuery.toLowerCase())
              )

              
              .map((ngo) => (
                <NgoIntro name={ngo.name} email={ngo.email} location={ngo.location} />
              ))}
            </div>

            <div className='w-full sm:w-3/7 sm:-mt-52 px-6'>
              <img src={require("../assets/searchngo.png")} alt=""
                style={{ position: "sticky", top: "20px", zIndex: 1 }}
              />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default SearchNgo