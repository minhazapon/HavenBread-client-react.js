



const AddBread = () => {


    return (
        <div className=" flex justify-center p-20 bg-no-repeat bg-cover "
        style={{
            backgroundImage: "url( https://img.freepik.com/premium-photo/golden-croissants-bread-leaves-white-background_451997-7084.jpg?w=740  )",
          }}
        
        >

            <div className=" border-[1px] border-gray-400  w-[800px] p-20 rounded-xl ">

            
            <div>
                <p className=" text-center font-mono text-amber-400  text-6xl font-semibold">AddBreads</p>
                <p className=" text-center text-xl font-thin mt-3 ">"There is not a thing that is more positive than bread."</p>
            </div>


            <div className=" flex justify-center mt-10">

                <form className=" grid  md:grid-cols-2 gap-3 ">
                    <input placeholder=" Name " type="text" name="name" className=" p-2 h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <input placeholder=" Chef " type="text" name="name" className=" p-2  h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <input placeholder=" Supplier " type="text" name="name" className=" p-2  h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <input placeholder=" Taste " type="text" name="name" className=" p-2  h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <input placeholder=" Category " type="text" name="name" className=" p-2  h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <input placeholder=" Details " type="text" name="name" className=" p-2  h-[50px] w-[300px] rounded-xl border-[#1cf6fd] border-[1px] " />
                    <div className=" flex justify-center"> 
                    <input className=" btn border-[1px] border-[#1cf6fd] bg-white w-full" type="submit" value="Add" />
                    </div>
                  
                </form>


            </div>









            </div>

        </div>
    );
};

export default AddBread;