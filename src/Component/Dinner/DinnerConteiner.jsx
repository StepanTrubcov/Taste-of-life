import { connect } from "react-redux"
import Dinner from "./Dinner"


const mapStateToProps = (state) =>({
    dinner:state.dinner
})

export default connect(mapStateToProps)(Dinner)