import { connect } from "react-redux"
import Breakfast from "./Breakfast"


const mapStateToProps = (state) =>({
breakfast:state.breakfast
})

export default connect(mapStateToProps)(Breakfast)