import { useState,useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../lib/api";
import DisplayProducts from "../components/DisplayProducts"


function Leather (){
    const [leather,setLeather] = useState<any[]>([])
    const [originalData, setOriginalData] = useState<any[]>([]); // keep original

    useEffect(()=>{
        const FetchMetal =async()=>{
            try {
                let link = await axios.get(apiUrl("/products"));
                let data = link.data;
                let metalData = data.filter((p:any)=>p.type === 'Leather')
                setLeather(metalData); 
                setOriginalData(metalData)               
            }
            catch (error) {
                alert('something wrong in data')
            }
        }
        FetchMetal();
    },[])
    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
    
        if (value === "low") {
            setLeather([...leather].sort((a, b) => a.price - b.price));
        } else if (value === "high") {
            setLeather([...leather].sort((a, b) => b.price - a.price));
        } else if (value === "Choose"){
            setLeather(originalData); // reset if "choose"
        }
      };    


    return(
        <section>
        <h1 className="text-center font-[600] py-10 text-4xl font-helvetica">Leather</h1>
        <div className="border border-1 py-3 px-20 mb-5">
        <div className="flex justify-between items-center">
            <div>
            <label htmlFor="list" className="text-sm cursor-pointer">SORT BY</label>
            <select onChange={handleSort} id="list" name="list" defaultValue="Choose" className="ml-3 cursor-pointer text-md font-semibold p-2">
                <option value="Choose" disabled>Choose an option</option>
                <option className="cursor-pointer" value="low">Price,low to high</option>
                <option className="cursor-pointer" value="high">Price,high to low</option>
            </select>
            </div>
            <span>{leather.length} products</span>
        </div>
        </div>
        {leather && (<DisplayProducts Data={leather} />)}
   </section>    )
}
export default Leather