# React + Vite
- Answer to the question No.1

    This project is made by react JS.  There are three features of this project:

- Course Selection:

    Users can browse and select courses from a list of available courses.
    When a user clicks the "Select" button on a course card, the course is added to their selected courses list if they have enough remaining credits.

- Credit Limit Check:

    The project implements a credit limit check to ensure that users do not select courses that exceed a total of 20 credits.
    If a user attempts to select a course that would exceed the credit limit, an error message is displayed, and the user is informed that they need to contact the support team to increase their credit limit.

- Visual Representation:

    The project provides a visual representation of courses using course cards, including course name, description, price, and credit hours.
    Users can see the course details and make selections by clicking the "Select" button.
    The selected courses and their total credits are displayed in a cart component for easy reference.
    These features collectively create an interactive educational platform where users can explore and select courses within a credit limit. The project includes error handling for credit limit violations and provides a visually appealing interface for course selection.

- Answer to the question NO.2

In this project, state management is primarily handled using React's built-in `useState` hook. The main state variables and their management are as follows:

1. `courses` State:
   - This state variable holds the list of courses fetched from a JSON file.
   - It is initialized as an empty array and populated with course data using the `setCourse` function in the `useEffect` hook.
   - Example: `const [courses, setCourse] = useState([]);`

2. `selectedCourse` State:
   - This state variable stores the courses selected by the user.
   - It starts as an empty array and is updated when a user clicks the "Select" button on a course card.
   - Example: `const [selectedCourse, setSelectedCourse] = useState([]);`

3. `remaining` State:
   - This state variable keeps track of the remaining credit hours that a user can select.
   - It starts as an empty array and is updated when a user selects or deselects a course.
   - Example: `const [remaining, setRemainig] = useState([]);`

4. `totalCredit` State:
   - This state variable stores the total number of credit hours of all selected courses.
   - It starts as an empty array and is updated when a user selects or deselects a course.
   - Example: `const [totalCredit, setTotalCredit] = useState([]);`

    


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
