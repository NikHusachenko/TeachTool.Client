import Message from "@/components/message/message"

type GroupBodyProps ={ 

}

const GroupBody : React.FC<GroupBodyProps> = () => {
    return(
        <div style={{color: 'rgba(255, 255, 255, 0.65)'}}>
            <nav className="text-center" style={{borderBottom: '1px solid gray', padding: '5px'}}>
                Hello world
            </nav>
            <div style={{height: '100em', overflowX: 'hidden', overflowY: 'auto'}}>
                <div className="row">
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={1} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={2} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={2} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={2} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={1} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={2} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={2} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={1} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={1} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={1} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={1} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={1} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={1} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={1} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={1} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={1} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={1} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={1} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={1} /></div>
                    <div className="col-md-12"><Message sender={"Sender"} content={"Content Content Content Content Content Content Content Content Content Content Content Content "} float={1} /></div>
                </div>
            </div>
        </div>
    )
}

export default GroupBody