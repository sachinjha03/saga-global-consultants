import React from 'react'
import "../css/component css/QualitySection.css"
import SecurityIcon from '@mui/icons-material/Security';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
export default function QualitySection() {
  return (
    <div className='quality-section'>
        <div className="quality">
            <SecurityIcon className='quality-icon'/>
            <h4>Precision Learning</h4>
        </div>
        <div className="quality">
            <AcUnitIcon className='quality-icon'/>
            <h4>Expert Guidance</h4>
        </div>
        <div className="quality">
            <AddLocationAltIcon className='quality-icon'/>
            <h4>Tailored Excellence</h4>
        </div>
        <div className="quality">
            <AssuredWorkloadIcon className='quality-icon'/>
            <h4>Global Insight</h4>
        </div>
    </div>
  )
}
