import React from 'react';
import "./Item.css";

export default function Item(props) { 
    const {data} = props;
    return ( 
            <div className="_33ly3o09_0">
                <div className="_6Gc2XI7H_0">
                    <img src={data.image} alt=""/>
                </div>
                <div className="_1yQOkMHx_0">
                    <h3 className="TsqvfD9D_0 NYryeJ04_0">{data.teach_title}</h3>
                    <div className="YRXVEB34_0">
                        <span className="TsqvfD9D_0 vMl92iDh_0">{data.teacher}</span>
                        <span className="TsqvfD9D_0 _2eQVglGQ_0">{data.status}</span>
                    </div>
                    <div className="_3vYaOmbL_0">
                        
        {data.lessons} | 
      
      {data.learners}
    
                    </div>
                    <div className="_1bM8SW2e_0">
                        <div>
                            <div className="_1IaV9ida_0">
                                <span className="_2K16-eHK_0 Yn8dN-Vi_0">
                                    <span className="GAUFEvc3_0">新人首单</span>
                                </span>
                                <span className="_7ImCoNnW_0">{data.price}</span>
                                <span className="orhJ42Kl_0">{data.cost}</span>
                            </div>
                        </div>
                        <div className="vUKD9DKA_0">{data.provide}</div>
                    </div>
                </div>
            </div> 
    )
};
