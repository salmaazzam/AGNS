

const ReportDetails = ({ report }) => {
    return (
      
      <div className="course-details">
        <h4>{report.courseid}</h4>
        <p><strong>Type: </strong>{report.type}</p>
        <br />
        <p><strong>User ID : </strong>{report.userID}
        <br />
        </p>
        <p> <strong>Problem : </strong>{report.problem}</p>
      </div>
    )
 
  }
  
  export default ReportDetails