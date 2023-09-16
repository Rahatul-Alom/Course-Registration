// eslint-disable-next-line react/prop-types
const Cart = ({selectedCourse, remainig}) => {
    return (
        <div className="px-2">
            <h2 className="text-xl font-bold mb-3 text-blue-900">Credit Hour Remaining {remainig} hr </h2>
            <hr />
            <h2 className="text-xl font-bold my-3">Course Name</h2>
            <ol className="list-decimal list-inside text-sm">
            {
            // eslint-disable-next-line react/prop-types
            selectedCourse.map((course,keys) =>(
                // eslint-disable-next-line react/jsx-key
                    <li key={keys} className="py-2">{course.course_name}</li>
            ))
            }
            </ol>
            <hr className="mt-3" />
            <p className="my-4">Total Credit Hour : </p>
        </div>
    );
};

export default Cart;