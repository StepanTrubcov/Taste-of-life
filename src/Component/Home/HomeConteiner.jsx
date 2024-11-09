import React from "react";
import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = (state) => ({
home:state.home,
})

export default connect(mapStateToProps)(Home)