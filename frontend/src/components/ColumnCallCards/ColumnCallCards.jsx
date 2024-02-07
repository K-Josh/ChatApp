import RowCallCard from "../RowCallCard/RowCallCard"
import PropTypes from 'prop-types'

function ColumnCallCards({className}){
    return (
        <div className={className}>
            <RowCallCard personOneName="Paulina" personTwoName={"Angela"} personOneisOnVolume={true} personTwoisOnVolume={false}/>
            <RowCallCard personOneName="Silas" personTwoName={"Andria"} personOneisOnVolume={false} personTwoisOnVolume={true}/>
            <RowCallCard personOneName="Trump" personTwoName={"Clinton"} personOneisOnVolume={true} personTwoisOnVolume={false}/>
            <RowCallCard personOneName="Edge" personTwoName={"Matunga"} personOneisOnVolume={false} personTwoisOnVolume={true}/>
            <RowCallCard personOneName="Samuella" personTwoName={"Ami"} personOneisOnVolume={true} personTwoisOnVolume={false}/>
            <RowCallCard personOneName="Cobby" personTwoName={"Sefah"} personOneisOnVolume={false} personTwoisOnVolume={true}/>
        </div>
    )
}

ColumnCallCards.propTypes = {
    className: PropTypes.string
}

export default ColumnCallCards