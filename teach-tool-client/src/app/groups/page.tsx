'use client'

import React from 'react';
import GroupBody from './groupBody';
import GroupViewBox from './groupViewBox';
import BootModal from '@/components/modal/BootModal';

const boxStyle: React.CSSProperties = {
    width: '100%',
    maxHeight: '80vh',
};

const Groups : React.FC = () => {
    return (
        <div style={boxStyle}>
            <BootModal open={true} onClose={() => { }} onSave={() => { }} title={'This is title'}>
            <div>
              
            </div>
          </BootModal>
            <div className='card'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div style={{backgroundColor: '#001529', borderRadius: '5px', padding: '10px', marginBottom: '2px', height: '100%', maxHeight: '100%'}}>
                                <GroupViewBox />
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <div style={{backgroundColor: '#001529', borderRadius: '5px', marginBottom: '2px', height: '100%', maxHeight: '100%'}}>
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