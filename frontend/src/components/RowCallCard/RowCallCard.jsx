import PropTypes from 'prop-types'
import PersonCallCard from "../PersonCallCard/PersonCallCard"
import './RowCallCard.css'

function RowCallCard({personOneName, personTwoName,personOneisOnVolume, personTwoisOnVolume}){

    return (
        <div className="row">
            <PersonCallCard name={personOneName} isOnVolume={personOneisOnVolume}/>
            <PersonCallCard name={personTwoName} isOnVolume={personTwoisOnVolume}/>
        </div>
    )
}

RowCallCard.propTypes = {
    personOneName: PropTypes.string,
    personTwoName: PropTypes.string,
    personOneisOnVolume: PropTypes.bool,
    personTwoisOnVolume: PropTypes.bool,
}

export default RowCallCard