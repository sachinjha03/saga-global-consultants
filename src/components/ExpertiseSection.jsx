import React , {useState , useEffect} from 'react'
import "../css/component css/ExpertiseSection.css"
import ExpertiseCard from './ExpertiseCard'
import expertise1 from "../images/expertise1.jpg"
import expertise2 from "../images/expertise2.jpg"
import expertise3 from "../images/expertise3.jpg"
import { Link } from 'react-router-dom'
export default function ExpertiseSection() {
  const [serviceData , setServiceData] = useState([])

  useEffect(() => {
    const fetchServiceData = async() => {
        try{
            const response = await fetch("https://saga-global-backend.onrender.com/api/read-service" , {
                method:'GET',
                headers:{
                    'content-type':'application/json'
                }
            })
            const json = await response.json()
            if(json.success){
                setServiceData(json.data)
            }else{
                console.log("failed to fetch service data");
            }
        }catch(err){
            console.log(err);
        }
    }

    fetchServiceData()

} , [])


  return (
    <div className='expertise-section'>
        <div className="expertise-section-header">
            <h2>What <span> We Offer</span></h2>
            <p>Our services cover exploration & production, refining, refinery expansions, pre-commissioning, commissioning & green-field projects and marketing & distribution of petroleum products.</p>
            <div className="scrollable-section">
              {
                serviceData.map((elem) => {
                  const words = elem.description.split(' ');
                  const truncatedDescription = words.slice(0, 30).join(' ');
                  return(
                    <ExpertiseCard key={elem._id} image={elem.image} title={elem.name} description={truncatedDescription}/>
                  )
              })
              }
            </div>
            <div className="expertise-section-bottom">
                <Link to="/services" className="btn-a">View All Services</Link>
            </div>
        </div>
    </div>
  )
}
