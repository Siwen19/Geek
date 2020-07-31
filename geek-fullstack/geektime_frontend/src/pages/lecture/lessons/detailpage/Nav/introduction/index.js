import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { IntroductionWrap, Content } from './style';
import * as actionTypes from '../../store/actionCreators';
import Scroll from '../../../../../../components/scroll/Scroll';


function Introduction(props) {
    console.log(props);
    const { introContent, id } = props;
    const { getIntroDataDispatch } = props;
    useEffect(() => { 
        if (!introContent.length) getIntroDataDispatch(id)
    }, []);
    console.log(introContent);
    return (
        <IntroductionWrap> 
                <div dangerouslySetInnerHTML={{ __html: introContent.length && introContent[0].column_intro }}></div>
        </IntroductionWrap>
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
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Introduction));