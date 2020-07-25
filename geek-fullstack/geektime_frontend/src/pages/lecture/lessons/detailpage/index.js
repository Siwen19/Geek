import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container } from './style';

function Page() {
    console.log(useParams());
    return (
        <Container> 
            hhh
        </Container>
    )
}
export default Page;