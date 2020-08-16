import React, { useEffect } from 'react';
import { FootWrap } from './style';
import Scroll from '../../../../../components/scroll/Scroll';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionCreators';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'; 


function Foot(props) {    
    const { titleContent, id } = props;
    const { getTitleDataDispatch, getOrderTypeDispatch } = props; 
    const currentId = useParams();
    useEffect(() => { 
        if (id !== currentId) getTitleDataDispatch(currentId)
    }, []);  
    return (
        <FootWrap> 
            <div>
                <div>
                    <div>
                        <span>¥</span>
                        <span>{Object.keys(titleContent).length && (titleContent.extra.first_promo.price / 100)}</span>
                    </div>
                    <div>
                        <span>¥</span>{Object.keys(titleContent).length && (titleContent.price.market / 100)}
                        <div></div>
                    </div>
                </div>
                <div>
                <Link to="/payment" onClick={() => getOrderTypeDispatch(0)}>
                <div style={{color: "#fa8919", fontSize: "16px", marginTop: "5px", marginBottom: "-5px"}}>单独订阅</div>
                    <div>
                    <span style={{color: "#fa8919", fontSize: "12px", marginLeft: "10px"}}>¥</span>
                    <span style={{color: "#fa8919", fontSize: "12px"}}>{Object.keys(titleContent).length && (titleContent.extra.first_promo.price / 100)}</span>
                    </div>
                </Link>
                </div>
                <div>
                <Link to="/payment" onClick={() => getOrderTypeDispatch(1)}>
                    <div style={{color: "#fff", fontSize: "16px", marginTop: "5px", marginBottom: "-5px"}}>去开团</div>
                    <div>
                        <span style={{color: "#fff", fontSize: "12px", marginLeft: "10px"}}>¥</span>
                        <span style={{color: "#fff", fontSize: "12px"}}>{Object.keys(titleContent).length && (titleContent.price.market / 100)}</span>
                    </div>
                </Link>
                </div>
            </div>
        </FootWrap>
    )
}
const mapStateToProps = (state) => {
    return {
        titleContent: state.personColumn.titleContent,
        route: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTitleDataDispatch() {
            dispatch(actionTypes.getTitleContent());
        },
        getOrderTypeDispatch(type) {
            dispatch(actionTypes.changeOrderType(type))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Foot));