import { Flex, Image } from "antd"

type ViewGroupProps ={ 

}

const ViewGroup : React.FC<ViewGroupProps> = () => {
    return(
        <div style={{backgroundColor: '#001529', borderRadius: '5px', padding: '5px', marginBottom: '2px'}}>
            <div className="row">
                <div style={{width: 'auto'}}>
                    <Image alt="grop" src={'next.svg'} preview={false} style={{background: '#fafafa', width: '50px', height: '50px', borderRadius: '25px', border: '1px solid #dedede' }} />
                </div>
                <div className="col-md row">
                    <label className="col-md-12" style={{color: 'rgba(255, 255, 255, 0.65)', cursor: 'pointer'}}><b>This is title</b></label>
                    <label className="col-md-12" style={{color: 'rgba(255, 255, 255, 0.65)'}}>This is messagex</label>
                </div>
            </div>
        </div>
    )
}

export default ViewGroup