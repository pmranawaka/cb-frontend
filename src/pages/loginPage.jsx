import { useState } from "react"
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

      function handleLogin(){
        console.log("email", email)
        console.log("password", password)
        console.log("login")

       axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login",{
        email: email,
        password: password
       }).then(
        (Response)=>{
            console.log(Response.data);
            toast.success("Login Success");
            localStorage.setItem("token", Response.data.token);
            
            const user = Response.data.user;
            if(user.role === "admin"){
                //goto admin page
                navigate("/admin")
        }else{
            //goto user page
            navigate("/")
        
        }
        }

    ).catch(
        (error)=>{
            console.log(error);

  const message =
    error.response?.data?.error || "Login Failed. Please try again.";

  toast.error(message); }
    )
         console.log("login");
      }

    return(
        <div className="w-screen bg-red-900 h-screen bg-[url(/loginbg.jpg)] bg-cover bg-center flex">
            <div className="   w-[50%] h-full" >

            </div> 
            <div className=" w-[50%] h-full flex items-center justify-center">
                    <div className="w-[300px] h-[400px] backdrop-blur-md  shadow-xl rounded-xl flex flex-col items-center justify-center" >
                       <input onChange={
                        (e)=>{
                            //console.log(e.target.value)
                            setEmail(e.target.value)
                        }  
                       } className ="w-[270px] h-[50px] border border-black rounded-xl text-center m-[7px]" type="email" placeholder = "Email"/>
                       <input onChange={
                        (e)=>{
                              setPassword(e.target.value)
                        }
                       } className ="w-[270px] h-[50px] border border-black rounded-xl text-center m-[7px]" type="password" placeholder = "Password"/>
                       <button  onClick={handleLogin} className="w-[270px] h-[50px] border border-black rounded-xl text-center m-[7px] bg-black-500 text-white cursor-pointer" >Login</button>
                    </div>
            </div>
        </div>
    )
}


          