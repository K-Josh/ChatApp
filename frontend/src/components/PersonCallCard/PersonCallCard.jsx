
import PropTypes from 'prop-types'
import './PersonCallCard.css'

function PersonCallCard({name, isOnVolume}){

    const displayVolume = <span className="material-symbols-outlined">
                            volume_up
                          </span>
    return (
        <>
            <div className="person_call_card">
                <h3>{name}</h3>
                {isOnVolume && displayVolume}
            </div>
        </>
    )
}

PersonCallCard.propTypes = {
    name: PropTypes.string.isRequired,
    isOnVolume: PropTypes.bool.isRequired
};

export default PersonCallCard