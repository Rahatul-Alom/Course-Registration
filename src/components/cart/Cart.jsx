// eslint-disable-next-line react/prop-types
const Cart = ({selectedCourse}) => {
    console.log(selectedCourse)
    
    return (
        <div>
            <h2 className="text-xl font-bold mb-3 text-blue-500">Credit Hour Remaining </h2>
            <hr />
            <h2 className="text-xl font-bold my-3">Course Name</h2>
            <ol className="list-decimal list-inside px-2 text-sm">
            {
            // eslint-disable-next-line react/prop-types
            selectedCourse.map((course,keys) =>(
                // eslint-disable-next-line react/jsx-key
                    <li key={keys} className="py-2">{course.course_name}</li>
            ))
            }
            </ol>
            <hr className="mt-3" />
        </div>
    );
};

export default Cart;