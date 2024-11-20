import React from "react";
import { connect } from "react-redux";
import Recipes from "./Recipes";

const mapStateToProps = (state) => ({
recipes:state.recipes
})

export default connect(mapStateToProps)(Recipes)