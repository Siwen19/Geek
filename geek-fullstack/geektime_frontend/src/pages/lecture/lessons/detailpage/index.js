import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Head, Content,  } from './style';
import Scroll from '../../../../components/scroll/Scroll';
import TabHead from './head/Head';

function Page() {
    console.log(useParams());
    const onBack = useCallback(() => {
        window.history.back();
      }, []);
    return ( 
        <>
            <Head>
            <svg width="42" height="42" style={{marginLeft: '-2vw'}} onClick={onBack}>
                    <polyline points="25, 13 16, 21 25, 29"
                        stroke="#ccc"
                        strokeWidth="2"
                        fill="none" />
            </svg>
                <img src="/asserts/star.png" className="star" /> 
                <img src="asserts/send.png" /> 
            </Head>
        <Container> 
            <TabHead />
        </Container>
        </> 
    )
}
export default Page;