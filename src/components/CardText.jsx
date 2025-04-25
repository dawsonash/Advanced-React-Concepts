import { useEffect, useState } from "react";
import { getBaconText } from "../services/baconApi";

function CardText({}){
    const [bacon, setBacon] = useState([]);
    useEffect(() => {
        let isMounted = true;
        const fetchBacon = async () => {
          const fetched = [];
          for (let i = 0; i < 3; i++) {
            try {
              const result = await getBaconText(2); 
              if (isMounted) {    
                fetched.push(Array.isArray(result) ? result[0] : result);
              }
            } catch (err) {
              console.error(err);
            }
          }
          if (isMounted) {
            setBacon(fetched);
          }
        };
        fetchBacon();
        return () => {
          isMounted = false;
        };
      }, []);
return (
    <>
    <div className='flex h-16 p-4 flex-col justify-center items-start gap-2 '>
      <h3 className='font-heading '>categ</h3>
        <p className='font-body'>{bacon[0]}</p>
    </div>
    <div className='flex h-16 p-4 flex-col justify-left items-start gap-2 '>
      <h3 className='font-heading '>categ</h3>
        <p className='font-body'>{bacon[1]}</p>
    </div>
    <div className='flex h-16 p-4 flex-col justify-center items-start gap-2 '>
      <h3 className='font-heading '>categ</h3>
        <p className='font-body'>{bacon[2]}</p>
    </div>

    </>  
);
} export default CardText