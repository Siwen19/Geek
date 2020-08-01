import React, { useEffect } from 'react';
import { FootWrap } from './style';
import Scroll from '../../../../../components/scroll/Scroll';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionCreators';
import { useParams } from 'react-router';

function Foot(props) { 
    console.log(props)
    const { introContent, id } = props;
    const { getIntroDataDispatch } = props;
    const currentId = useParams();
    useEffect(() => { 
        if (id !== currentId) getIntroDataDispatch(currentId)
    }, []);
    return (
        <FootWrap>
            <div>
                <div>
                    <div>
                        <span>¥</span>
                        <span>{introContent.length && (introContent[0].first_promo.price / 100)}</span>
                    </div>
                    <div>
                        <span>¥</span>{introContent.length && (introContent[0].column_price / 100)}
                        <div></div>
                    </div>
                </div>
                <div>
                    <div>单独订阅</div>
                    <div>
                        <span>¥</span>
                        <span>{introContent.length && (introContent[0].first_promo.price / 100)}</span>
                    </div>
                </div>
                <div>
                    <div>去开团</div>
                    <div>
                        <span>¥</span>
                        <span>{introContent.length && (introContent[0].groupbuy.price / 100)}</span>
                    </div>
                </div>
            </div>
        </FootWrap>
    )
}
const mapStateToProps = (state) => {
    return {
        introContent: state.personColumn.introContent
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getIntroDataDispatch() {
            dispatch(actionTypes.getIntroContent());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Foot));