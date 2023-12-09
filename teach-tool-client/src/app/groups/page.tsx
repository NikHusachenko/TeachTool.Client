import React, { useEffect, useState } from 'react';
import ViewGroup from './viewGroup';

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
                            <ViewGroup />
                            <ViewGroup />
                            <ViewGroup />
                            <ViewGroup />
                            <ViewGroup />
                            <ViewGroup />
                            <ViewGroup />
                            <ViewGroup />
                            <ViewGroup />
                            <ViewGroup />
                        </div>
                        <div className='col-md-9'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Groups