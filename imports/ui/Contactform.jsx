import React,{useState} from "react";
import { contactcollection } from "../api/contactcollection";
export const Contactform=()=>{
  const [name,setName]=useState(""); 
  const [email,setEmail]=useState("");
  const [imageurl,setImageurl]=useState("");
  const saveContact=()=>{
    console.log({name,email,imageurl});
    contactcollection.insert({name,email,imageurl});
    setName("");
    setEmail("")
    setImageurl("");
  }
  return (
    <form>
    <div>
      <label htmlFor="name">
        Name
      </label>
      <input value={name} id="name" onChange={(e)=>setName(e.target.value)} type="text" />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <input value={email} type="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div>
      <label htmlFor="imageurl">Image URL</label>
      <input value={imageurl} type="text" id="imageurl" onChange={(e)=>setImageurl(e.target.value)}/>
    </div>
    <div>
      <button type="button" onClick={saveContact}>save contact</button>
    </div>
  </form>
    );
};