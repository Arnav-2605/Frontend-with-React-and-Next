"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault()
        if(email.trim() === "admin@gmail.com" && password.trim() == "1234") {
            localStorage.setItem("isLoggedin", "true");

            router.push("./students");
        }

        else{
            alert("Incorrect Email or Password");
        }
    }

    return (
        <div>
            <form>
                <h2>Login to access Student Dashboard</h2>
                <br/>
                
                <label htmlFor="email">User Email :</label>
                <input type="email" placeholder="Enter your Email" onChange={(e) => {setEmail(e.target.value)}}/>
                
                <br/>
               
                <label htmlFor="password">Password :</label>
                <input type="password" placeholder="Enter Password" onChange={(e) => {setPassword(e.target.value)}}/>

                <br/>
                <br/>

                <button onClick={handleLogin}>Submit</button>
                             
            </form>
        </div>
    )
}