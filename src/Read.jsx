import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReadDetails from "./ReadDetails";




const Read = () => {
    
       

    const [users, setUsers] = useState([])


    const [breads, setBreads] = useState(users)


    useEffect( ()=>{
        fetch('https://haven-server-bvwo7e7l0-minhazapons-projects.vercel.app/users')
        .then(res =>res.json())
        .then(data => setUsers(data))
    } , [])


    return (
        <div> 
            <div className=" mb-10 mt-10 ml-5 mr-5">
             
             <p className=" text-center">--- Sip & Savor ---</p>
             <p className=" text-3xl font-mono text-center mt-5 ">Our Popular Products</p>
             <div className=" mt-5 flex justify-center">

                <Link to="/addBreads" >
                <button className="  flex items-center bg-white border-[1px] border-[#1cf6fd] font-mono btn">AddBreads <span><img className=" h-[30px]" src="https://cdn-icons-gif.flaticon.com/12706/12706894.gif" alt="" /></span> </button>
                </Link>
                
             </div>
             </div>

            <div className=" flex justify-center">
                 
    
              <div className=" grid  md:grid-cols-2  gap-5">

                   {

                      users.map( users => <ReadDetails users={users} breads={breads} setBreads={breads} ></ReadDetails> )

                   }
                

              </div>




            </div>
            
        </div>
    );
};

export default Read;



// {

//   users.map( users => <p> <div>
       
//        <div>
//        <div className="card flex items-center card-side bg-base-100 shadow-xl p-5">
//           <figure>
//             <img className=" h-[200px] w-[200px] rounded-xl"
//               src={users.PhotoUrl}
//               alt="Movie" />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title"> Name: {users.name} </h2>
//             <p> Chef: {users.Chef} </p>
//             <p className=" "> Supplier:  {users.Supplier} </p>
          
//           </div>
//           <div className=" ">
//             <img className=" btn h-[30px]" src="https://cdn-icons-png.flaticon.com/128/17766/17766508.png" alt="" />
//             <br></br>
//             <img className=" btn mt-1 h-[30px]" src="https://cdn-icons-png.flaticon.com/128/2767/2767146.png" alt="" />
//             <br></br>
//             <img className=" btn mt-1 h-[30px]" src="https://cdn-icons-png.flaticon.com/128/14929/14929600.png" alt="" />
//             <br></br>
//         </div>
//         </div>
//         </div>
    
    
//     </div></p> )

// }