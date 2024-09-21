import { Link } from "react-router-dom";


const AddButton = () => {


    return (

        <div className=" mb-10 mt-10 ml-5 mr-5">
             
             <p className=" text-center">--- Sip & Savor ---</p>
             <p className=" text-3xl font-mono text-center mt-5 ">Our Popular Products</p>
             <div className=" mt-5 flex justify-center">

                <Link to="/addBreads" >
                <button className="  flex items-center bg-white border-[1px] border-[#1cf6fd] font-mono btn">AddBreads <span><img className=" h-[30px]" src="https://cdn-icons-gif.flaticon.com/12706/12706894.gif" alt="" /></span> </button>
                </Link>
                
             </div>

            
        </div>
    );
};

export default AddButton;

