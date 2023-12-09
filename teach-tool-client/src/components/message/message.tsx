import { Flex } from "antd"

enum MessageFloat {
    start = 1,
    end = 2,
}

type MessageProps = {
    sender: string,
    content: string,
    float: MessageFloat
}

const Message : React.FC<MessageProps> = ({sender, content, float}) => {
    return(
        <Flex style={{height: 'auto', flex: '1', border: '1px solid gray', borderRadius: '5px', margin: '5px', padding: '5px', maxWidth: '30%'}} className={(float == MessageFloat.start ? 'float-start' : 'float-end text-end')} >
            <div className="row">
                <label className="col-md-12">{sender}</label>
                <div className="col-md-12">
                    <p>{content}</p>
                </div>
            </div>
        </Flex>
    )
}

export default Message