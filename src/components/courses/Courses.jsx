import { useEffect, useState } from "react";
import { FiDollarSign } from 'react-icons/fi';
import { BiBookOpen } from 'react-icons/bi';
import Cart from "../cart/Cart";
import Swal from 'sweetalert2'



const Courses = () => {
  const [courses, setCourse] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([])
  const [remainig, setRemainig] = useState([])
  const [totalCredit, setTotalCredit] = useState([])

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  const handleSelectCourse = (course) =>{
    const isExist = selectedCourse.find((item) => item.id === course.id)
    let count = course.credit
    if(isExist){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have already added this course in your cart!',
        footer: '<a href="">Please select another one.</a>'
      })
    }
    else{
      selectedCourse.forEach((item) => {
        count = count + item.credit
      });
      const totalRemainig = 20-count;
      if(count > 20){
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You do not have enough credit for select this course',
          footer: '<a href="">Please contact our support team for increase your credit.</a>'
        })
      }
      else{
        setRemainig(totalRemainig);
        setTotalCredit(count)
        setSelectedCourse([...selectedCourse, course])
      }
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
      <Cart selectedCourse = {selectedCourse} remainig = {remainig} totalCredit ={totalCredit}></Cart>
      </div>  

   </div>
  );
};

export default Courses;
