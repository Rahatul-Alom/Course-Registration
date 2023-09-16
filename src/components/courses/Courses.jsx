import { useEffect, useState } from "react";
import { FiDollarSign } from 'react-icons/fi';
import { BiBookOpen } from 'react-icons/bi';


const Courses = () => {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-5 justify-between mt-10">
        {
            courses.map(course => ( 
                <div key={course.id} className="max-w-sm rounded-xl shadow-xl p-4">
                <img className="w-full" src={course.image} alt=""></img>
                <div className="py-4">
                    <h2 className="font-bold text-xl mb-2 text-center">{course.course_name}</h2>
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
                            <p>Credit: {course.credit}</p>
                        </div>
                    </div>
                    <div className="text-center">
                    <button className="bg-[#2F80ED] font-bold text-white px-32 py-3 rounded-xl mt-4">Select</button>
                    </div>
                </div>
              </div>
            ))
        }
        </div>
      <div className="bg-gray-500 rounded-xl p-4 mt-10">
      <h2 className="text-4xl font-bold">My card</h2>
      </div>  

   </div>
  );
};

export default Courses;
