const CourseReq = ({ RequestedArray }) => {
    return (
       <div className="ReqArray">
        <p>{RequestedArray.id}</p>
       { RequestedArray.requestedCourses&& RequestedArray.requestedCourses.map(course=>(
           <p>{course.title}</p>
       ))}
       </div>
    )
}

      
  export default CourseReq