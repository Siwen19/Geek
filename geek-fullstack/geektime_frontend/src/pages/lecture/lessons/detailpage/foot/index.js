import React from 'react';
import { FootWrap } from './style';
import Scroll from '../../../../../components/scroll/Scroll';

function Foot() {
    return (
        <FootWrap>
            <div>
                <div>
                    <div>
                        <span>¥</span>
                        <span>29.9</span>
                    </div>
                    <div>
                        <span>¥</span>129
                        <div></div>
                    </div>
                </div>
                <div>
                    <div>单独订阅</div>
                    <div>
                        <span>¥</span>
                        <span>29.9</span>
                    </div>
                </div>
                <div>
                    <div>去开团</div>
                    <div>
                        <span>¥</span>
                        <span>99</span>
                    </div>
                </div>
            </div>
        </FootWrap>
    )
}

export default Foot;