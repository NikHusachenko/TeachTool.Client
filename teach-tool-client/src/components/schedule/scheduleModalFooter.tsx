import { ReactNode } from "react";

type ModalFooterProps = {
    children: ReactNode;
}

const ScheduleModalFooter : React.FC<ModalFooterProps> = ({children}) => {
    return(
        <div>
            {children}
        </div>
    )
}

export default ScheduleModalFooter