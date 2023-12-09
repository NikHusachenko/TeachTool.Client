import ViewGroup from "./viewGroup"

type GroupViewBoxProps = {

}

const GroupViewBox : React.FC<GroupViewBoxProps> = () => {
    return(
        <div style={{height: '100em', overflowY: 'auto', overflowX: 'hidden'}}>
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
    )
}

export default GroupViewBox