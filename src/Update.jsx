import { useLoaderData } from "react-router-dom";

import Swal from 'sweetalert2'



const Update = () => {

    const load = useLoaderData();

    const { _id, name, Chef, Supplier, PhotoUrl, Taste, Category, Details} = load

    const handleUp = e =>{
      
        e.preventDefault();
  
        const form = e.target 
        const name = form.name.value 
        const Chef = form.Chef.value
        const Supplier = form.Supplier.value 
        const Taste = form.Taste.value 
        const Category = form.Category.value 
        const Details = form.Details.value 
        const PhotoUrl = form.PhotoUrl.value 
        const UpUsers = {name, Chef, Supplier, Taste, Category, Details, PhotoUrl}
        console.log(UpUsers)
        fetch(`http://localhost:5000/users/${_id}`, {
          method: 'PUT',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(UpUsers)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.modifiedCount > 0){
            Swal.fire({
                title: 'Successfully Updated',
                text: 'Breads are a Updated done',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            form.reset();
          }
        })
  
  
      }
    




    return (
        <div className=" mt-16 mb-10 ml-5 mr-5">
             <div>

               
               <div className=" flex justify-center">
                <div className=" flex items-center gap-3">
                <img className=" h-[100px]" src="https://cdn-icons-gif.flaticon.com/12817/12817632.gif" alt="" />
                <p className=" text-center font-mono text-6xl">Update Breads</p>

                </div>
               </div>
               
               <div className=" flex justify-center" >




               <div className=" border-[1px] border-[#6d3200]  w-[800px] p-20 rounded-xl ">
            <div>
                <p className=" text-center font-mono text-[#6d3200] text-6xl font-semibold">UpdateBreads</p>
                <p className=" text-center text-xl text-[#6d3200] font-mono mt-3 ">"There is not a thing that is more positive than bread."</p>
            </div>
            <div className=" flex justify-center mt-10">
                <form onSubmit={handleUp} className=" grid  md:grid-cols-2 gap-3 ">
                    <input placeholder=" Name " type="text" name="name" defaultValue={name} className=" p-2 h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <input placeholder=" Chef " type="text" name="Chef" defaultValue={Chef} className=" p-2  h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <input placeholder=" Supplier " type="text" name="Supplier" defaultValue={Supplier} className=" p-2  h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <input placeholder=" Taste " type="text" name="Taste" defaultValue={Taste} className=" p-2  h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <input placeholder=" Category " type="text" name="Category" defaultValue={Category} className=" p-2  h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <input placeholder=" Details " type="text" name="Details" defaultValue={Details} className=" p-2  h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <input placeholder="PhotoUrl" defaultValue={PhotoUrl} className=" p-2  h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] "  type="url" name="PhotoUrl" id="" />       
                    <input className=" btn border-[1px] border-[#1cf6fd] bg-white w-full" type="submit" value="Update" />           
                </form>
            </div>
            </div>









               </div>













             </div>
        </div>
    );
};

export default Update;