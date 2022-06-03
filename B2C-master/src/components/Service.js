import React,{useState} from 'react'

const Service = () => {
    const [itemDetails, setItemDetails] = useState({
        "itemCode": "1",
        "category": "mobiles",
        "imgLink": [""],
        "title": "",
        "location": "",
        "owner": "",
        "used": "",
        "price": 8000,
        "description": [{}]
    });

    const getItem = async () => {
        const response = await fetch(`http://localhost:8000/api/auth/getorders`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();
        setItemDetails(json[0]);
        // len = Object.keys(json[0].description[0].para)[0].length;
    }



  return (
    <div className='border-[3px] border-gray-300 mx-1 rounded-md'>Service
       {itemDetails.map((i)=>{
           return(
               <div>
                   <li className='text-sm' key={i.price}>{i.owner} : {i.description[0]}</li>
               </div>
           )
       })}
    </div>
  )
}
export default Service;
