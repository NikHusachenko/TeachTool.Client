'use client'

import React from 'react';
import GroupBody from './groupBody';
import GroupViewBox from './groupViewBox';

const boxStyle: React.CSSProperties = {
    width: '100%',
    height: '100vh',
};

const Groups : React.FC = () => {
    return (
        <div style={boxStyle}>
            <div className='card'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <GroupViewBox />
                        </div>
                        <div className='col-md-9'>
                            <div style={{backgroundColor: '#001529', borderRadius: '5px', padding: '10px', marginBottom: '2px', height: '100%', maxHeight: '100%'}}>
                                <GroupBody />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Groups