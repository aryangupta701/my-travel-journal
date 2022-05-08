import React from 'react'

const Place = (props) => {

    let locName = ""
    const loc = props.item.location
    let n = loc.length
    for(let i=0; i<n; i++){
        if(i < n-1)
        locName += loc[i].toUpperCase() + " "
        else 
        locName += loc[i].toUpperCase()
    }

  return (
    <div className='place-box'>
        <img src={props.item.img} alt={`${props.item.title}-img`} className="place-img" />
        <div className='place-content'>
            <p className='location--para'>
                <img src="./images/locationIcon.png" alt="location-Icon" className='location-logo'/>
                <span className='place-location'>{locName}</span>
                <a href={props.item.locationLink} target='_blank' rel="noreferrer" className='location-link'>View on Google Maps</a>
            </p>
            <p className='place-title'>{props.item.title}</p>
            <p className='place-date'>{`${props.item.startDate}-${props.item.endDate}`}</p>
            <p className='place-des'>{props.item.description}</p>
        </div>
    </div>
  )
  }
export default Place