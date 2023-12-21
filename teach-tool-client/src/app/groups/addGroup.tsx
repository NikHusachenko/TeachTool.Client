type AddGroupProp = {
    addGroupHandler: () => void
}

const AddGroup : React.FC<AddGroupProp> = ({addGroupHandler}) => {
    return(
        <div style={{height: '70px', marginRight: '8px', backgroundColor: 'blue', borderColor: 'blue', justifyContent: 'center', alignItems: 'center', display: 'flex', cursor: 'pointer'}} onClick={() => addGroupHandler()} className="alert alert-success">
            <h5>Create group</h5>
        </div>
    )
}

export default AddGroup