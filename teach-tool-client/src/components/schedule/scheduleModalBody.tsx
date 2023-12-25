import { ReactNode } from "react";

export enum EventStatus {
    Waiting = 1,
    InProcess = 2,
    InAction = 3,
    Fail = 4,
    Completed = 5
}

type ModalBodyProps = {
    scheduledDate: Date;
    type: EventStatus;
    description: string;
}

const ScheduleModalBody : React.FC<ModalBodyProps> = ({ scheduledDate, type, description }) => {
    return(
        <div className="row">
            <div className="col-md-8">
                <p>{description}</p>
            </div>
            <div className="col-md-4">
                <label>{EventStatus[type]}</label>
                <br />
                <label>{scheduledDate.toDateString()}</label>
            </div>
        </div>
    )
}

export default ScheduleModalBody