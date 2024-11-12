import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) =>({
nav:state.navbar
})

export default connect(mapStateToProps)(Navbar)