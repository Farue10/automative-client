import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import swal from 'sweetalert'

const Cart = () => {
    const {user} = useContext(AuthContext)

    const loader= useLoaderData()
    const [users,setuser]=useState(loader)

    const [email,setEmail] = useState('')

    useEffect(()=>{
        fetch(`https://assignment-10-server-xi-three.vercel.app/deatils?user=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setEmail(data);
          
        })
    },[user])


    console.log(email);
   const handleClick=(_id)=>{
    fetch(`https://assignment-10-server-xi-three.vercel.app/deatils/${_id}`,{
        method: 'DELETE',
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount>0){
            const remaing =user && users.filter(user=> user._id !==_id)
            setuser(remaing)
            swal("deleted!", "succfully!", "success");
        }
        
    })
   }
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-8" >
          {email && email.map((user) => (
            <div  key={user.id}  className="card w-96 bg-base-100 shadow-xl ">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {user.name}</h2>
                <h2 className="card-title">Brand Name: {user.brand}</h2>
              </div>
              <button onClick={()=>handleClick(user._id)} className="btn btn-primary">Delete</button>
            </div>
          ))}

        </div>
        </div>
    );
};

export default Cart;