import React, { ReactNode, useEffect, useState } from 'react';

interface BootModalProps {
  title: string;
  body: ReactNode;
  footer: ReactNode;
  open: boolean;
}

const BootModal: React.FC<BootModalProps> = ({ title, open, body, footer }) => {

    let isFirstRender : boolean = true;

    useEffect(() => {
        if (!isFirstRender) {
            document.getElementById('open-event-info-modal')?.click()
        }
        else {
            isFirstRender = false
        }

        console.log("Effected")
    }, [ open ])

    return (
        <div>
            <input type="hidden" id='open-event-info-modal' data-bs-toggle="modal" data-bs-target="#exampleModal" />

            <div className="modal fade" id="exampleModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            { body }
                        </div>
                        <div className="modal-footer">
                            {footer}
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BootModal;