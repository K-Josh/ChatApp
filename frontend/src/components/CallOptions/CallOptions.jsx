import PropTypes from 'prop-types'

function CallOptions({icon}){
    return (
        <div>
            <span className="material-symbols-outlined">
                {icon}
            </span>
        </div>
    )
}

CallOptions.propTypes = {
    icon: PropTypes.string
}

export default CallOptions