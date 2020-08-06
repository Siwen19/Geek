import React, { useEffect } from 'react';
import { connect } from "react-redux"; 
import * as actionTypes from '../../store/actionCreators'

function Category(props) {  
    const { catalogContent, id } = props
    const { getCatalogDataDispatch } = props
    console.log(props)
    useEffect(() => {
        if (!catalogContent.length) getCatalogDataDispatch(id) 
    }, [])
    return (
        <div>CategoryContainer</div>
    )
}
const mapStateToProps = (state) => {
    return {
      catalogContent: state.personColumn.catalogContent,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getCatalogDataDispatch() {
        dispatch(actionTypes.getCatalogContent());
      },
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(React.memo(Category));
  