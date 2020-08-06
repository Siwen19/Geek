import React, { useEffect } from 'react';
import { FootWrap } from './style';
import Scroll from '../../../../../components/scroll/Scroll';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionCreators';
import { useParams } from 'react-router';

function Foot(props) {  
    const { titleContent, id } = props;
    const { getTitleDataDispatch } = props;
    console.log(titleContent)
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
                        <span>{Object.keys(titleContent).length && (titleContent.price.sale / 100)}</span>
                    </div>
                    <div>
                        <span>¥</span>{Object.keys(titleContent).length && (titleContent.price.market / 100)}
                        <div></div>
                    </div>
                </div>
                <div>
                    <div>单独订阅</div>
                    <div>
                        <span>¥</span>
                        <span>{Object.keys(titleContent).length && (titleContent.price.sale / 100)}</span>
                    </div>
                </div>
                <div>
                    <div>去开团</div>
                    <div>
                        <span>¥</span>
                        <span>{Object.keys(titleContent).length && (titleContent.price.market / 100)}</span>
                    </div>
                </div>
            </div>
        </FootWrap>
    )
}
const mapStateToProps = (state) => {
    return {
        titleContent: state.personColumn.titleContent
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTitleDataDispatch() {
            dispatch(actionTypes.getTitleContent());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Foot));