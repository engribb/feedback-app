 import {Link} from 'react-router-dom'
 import Card from "../components/Shared/Card"
 function AboutPage() { 
     return <Card>
     <div className="about">
     <h1>About this Project</h1>
      <p>This is a react app to leave feedback for a product and service</p>
      <p>version: 1.0.0</p>


      <p>
         <Link to="/">Back to Home</Link>
      </p>
      </div>
    </Card>
 }

 export default AboutPage
