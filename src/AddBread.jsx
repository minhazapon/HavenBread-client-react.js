import Swal from "sweetalert2";





const AddBread = () => {


    const handleAdd = e =>{
      
      e.preventDefault();

      const form = e.target 
      const name = form.name.value 
      const Chef = form.Chef.value
      const Supplier = form.Supplier.value 
      const Taste = form.Taste.value 
      const Category = form.Category.value 
      const Details = form.Details.value 
      const PhotoUrl = form.PhotoUrl.value 
      const users = {name, Chef, Supplier, Taste, Category, Details, PhotoUrl}
      console.log(users)
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(users)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId){
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
        <div className=" flex justify-center p-20 bg-no-repeat bg-cover "
        style={{
            backgroundImage: "url( https://img.freepik.com/premium-photo/golden-croissants-bread-leaves-white-background_451997-7084.jpg?w=740  )",
          }}
        
        >

            <div className=" border-[1px] border-[#6d3200]  w-[800px] p-20 rounded-xl ">
            <div>
                <p className=" text-center font-mono text-[#6d3200] text-6xl font-semibold">AddBreads</p>
                <p className=" text-center text-xl text-[#6d3200] font-mono mt-3 ">"There is not a thing that is more positive than bread."</p>
            </div>
            <div className=" flex justify-center mt-10">
                <form onSubmit={handleAdd} className=" grid  md:grid-cols-2 gap-3 ">
                    <input placeholder=" Name " type="text" name="name" className=" p-2 h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <input placeholder=" Chef " type="text" name="Chef" className=" p-2  h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <input placeholder=" Supplier " type="text" name="Supplier" className=" p-2  h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <input placeholder=" Taste " type="text" name="Taste" className=" p-2  h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <input placeholder=" Category " type="text" name="Category" className=" p-2  h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <input placeholder=" Details " type="text" name="Details" className=" p-2  h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <input placeholder="PhotoUrl" className=" p-2  h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] "  type="url" name="PhotoUrl" id="" />       
                    <input className=" btn border-[1px] border-[#1cf6fd] bg-white w-full" type="submit" value="ADD" />           
                </form>
            </div>
            </div>

        </div>
    );
};

export default AddBread;