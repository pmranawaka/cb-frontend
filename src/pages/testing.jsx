import { useState } from "react";

export default function Testing(){

    const [number, setNumber] = useState(0)
    const[status , setState] = useState("Pending")

    // let number = 0;

    function increment(){
        let newValue = number + 1;
        setNumber(newValue)
        // number = number + 1;
        // console.log(number);
    }
    function decrement(){
        let newValue = number - 1;
        setNumber(newValue)
        // number = number - 1;
        // console.log(number);
    }
     

    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center">
             <span className="text-white text-3xl font-bold ">{number}</span>
             <div className="w-full flex justify-center">
               <button onClick={increment} className="bg-blue-500 text-white rounded-lg w-[60px] curser-pointer">+</button>
               <button onClick={decrement} className="bg-blue-500 text-white rounded-lg w-[60px] curser-pointer">-</button>
             </div>

             <span className="text-white text-3xl font-bold ">{status}</span>
             <div className="w-full flex justify-center">
               <button onClick={()=>{
                     setState("Passed")
               }} className="bg-blue-500 text-white rounded-lg w-[60px] curser-pointer">Pass</button>
               <button onClick={()=>{
                     setState("Fail")
               }} className="bg-blue-500 text-white rounded-lg w-[60px] curser-pointer">Fail</button>
             </div>
        </div>
    )

    

}