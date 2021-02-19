import React from 'react'
import '../../css/DashboardPannel.css'
import DescriptionIcon from '@material-ui/icons/Description';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DataUsageIcon from '@material-ui/icons/DataUsage';
function Services() {
    return (
        <div>
            <div className="services">
              <div className="item"><AssignmentTurnedInIcon /> <strong>Advices</strong><p>Get access to guides and resources</p></div>
              <div className="item"> <DescriptionIcon /><strong>Providers</strong><p>Signin in access our services</p></div>
              <div className="item"><DataUsageIcon /><strong>Data analysis</strong><p>Analytical statistics</p></div>
              <div className="item"> <KeyboardArrowUpIcon /><strong>About us</strong><p>Corparate information and press</p></div>    
            </div>
        </div>
    )
}

export default Services
