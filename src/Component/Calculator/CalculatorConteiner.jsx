import React from "react";
import { connect } from "react-redux";
import CalorieCalculator from "./calculator";

const mapStateToProps = (state) =>({
    calculator:state.calculator
})

export default connect(mapStateToProps)(CalorieCalculator)