import { useEffect, useState } from "react";
import { FiDollarSign } from 'react-icons/fi';
import { BiBookOpen } from 'react-icons/bi';
import Cart from "../cart/Cart";


const Courses = () => {
  const [courses, setCourse] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([])
  const [remainig, setRemainig] = useState([])

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  const handleSelectCourse = (course) =>{
    const isExist = selectedCourse.find((item) => item.id === course.id)
    let count = course.credit
    if(isExist){
      alert('eta ase')
    }
    else{
      selectedCourse.forEach((item) => {
        count = count + item.credit
      });
      console.log(count)
      const totalRemainig = 20-count;
      setRemainig(totalRemainig);
      console.log(totalRemainig);
      setSelectedCourse([...selectedCourse, course])
    }
  }
  
  return (
    <div className="flex flex-col lg:flex-row gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-5 justify-between mt-10">
        {
            courses.map(course => ( 
                <div key={course.id} className=" rounded-xl shadow-xl p-4">
                <img className="w-full" src={course.image} alt=""></img>
                <div className="py-4">
                    <h2 className=" font-bold text-lg mb-2">{course.course_name}</h2>
                    <p className="text-gray-700 text-base text-justify">
                        {course.description}
                    </p>
                    <div className="flex justify-between mt-4">
                        <div className="flex items-center gap-2 mt-2">
                            <FiDollarSign/> 
                            <p>Price: {course.price}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <BiBookOpen/>
                            <p>Credit: {course.credit}hr</p>
                        </div>
                    </div>
                    <div className="text-center">
                    <button onClick={() => handleSelectCourse (course)} className="bg-[#2F80ED] font-bold text-white px-28 py-3 rounded-xl mt-4">Select</button>
                    </div>
                </div>
              </div>
            ))
        }
        </div>
      <div className="bg-gray-500 rounded-xl p-2 mt-10 w-[700px]">
      <Cart selectedCourse = {selectedCourse} remainig = {remainig}></Cart>
      </div>  

   </div>
  );
};

export default Courses;
