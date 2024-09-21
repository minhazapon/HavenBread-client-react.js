import { useEffect, useState } from "react";




const Read = () => {
    
       

    const [users, setUsers] = useState([])


    useEffect( ()=>{
        fetch('http://localhost:5000/users')
        .then(res =>res.json())
        .then(data => setUsers(data))
    } , [])


    return (
        <div>

            <div className=" flex justify-center">
                 
    
              <div className=" grid  md:grid-cols-2  gap-5">

                   {

                      users.map( users => <p> <div>
                           
                           {/* <div className=" flex items-center gap-5">
                             <div>
                                <img  className=" h-[200px] rounded-xl" src="https://i.ibb.co.com/w6n2BfY/rustic-bread-updated3-500x375.webp" alt="" />
                             </div>
                             <div>
                                <li className=" text-2xl">{users.name}</li>
                                <br></br>
                                <li  className=" text-2xl" >{users.Taste}</li>
                                <br></br>
                                <li  className=" text-2xl">{users.Category}</li>
                                <br></br>
                                <li  className=" text-2xl">{users.Category}</li>
                             </div>

                           </div> */}
                           <div>
                           <div className="card flex items-center card-side bg-base-100 shadow-xl p-5">
                              <figure>
                                <img className=" h-[200px] w-[200px] rounded-xl"
                                  src={users.PhotoUrl}
                                  alt="Movie" />
                              </figure>
                              <div className="card-body">
                                <h2 className="card-title"> Name: {users.name} </h2>
                                <p> Chef: {users.Chef} </p>
                                <p className=" "> Supplier:  {users.Supplier} </p>
                              
                              </div>
                              <div className=" ">
                                <img className=" btn h-[30px]" src="https://cdn-icons-png.flaticon.com/128/17766/17766508.png" alt="" />
                                <br></br>
                                <img className=" btn mt-1 h-[30px]" src="https://cdn-icons-png.flaticon.com/128/2767/2767146.png" alt="" />
                                <br></br>
                                <img className=" btn mt-1 h-[30px]" src="https://cdn-icons-png.flaticon.com/128/14929/14929600.png" alt="" />
                                <br></br>
                               

                            </div>
                            </div>

                            


                            </div>
                        
                        
                        </div></p> )

                   }
                

              </div>




            </div>
            
        </div>
    );
};

export default Read;