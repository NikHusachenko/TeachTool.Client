import { SendOutlined } from '@ant-design/icons';
import Message from "@/components/message/message";
import { useEffect, useState } from "react";
import { FloatButton } from "antd";
import jwt from 'jsonwebtoken';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { app } from '/5 course/TeachTool.Client/teach-tool-client/firebas';

type MessageType = {
  id: number;
  sender: string;
  content: string;
};

type GroupBodyProps = {};

const GroupBody: React.FC<GroupBodyProps> = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const fetchData = async () => {
    let response = await fetch('groups.json');
    let data = await response.json();
    setMessages(data.messages);
  };

  useEffect(() => {
    fetchData();
  }, []);
// const GroupBody: React.FC<GroupBodyProps> = () => {
//   const [messages, setMessages] = useState<MessageType[]>([]);
//   const fetchData = async () => {
//     let response = await fetch('groups.json');
//     let data = await response.json();
//     setMessages(data.messages);
//   };

//   useEffect(() => {

//     const fetchData = async () => {
//       const db = getFirestore(app);
//       const messagesCollection = collection(db, 'messages'); // Replace 'messages' with your actual collection name

//       const querySnapshot = await getDocs(messagesCollection);
//       const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

//       setMessages(data);
//     };

//     fetchData();
//   }, []);

  async function sendMessage(message:MessageType) {
    setMessages([...messages, {
      content: 'Content',
      sender: 'Im sender',
      id: 100500,
    }])
    // const jsonMessage = JSON.stringify(message)
  
    // const response = await fetch('https://localhost:7155/api/message/sendMessage', {
    //   method: 'post',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Host': 'http://localhost:3000'
    //   },
    //   body: jsonMessage
    // })
  
    // const data = await response.json()
  }

  return (
    <div style={{ height: '90vh' }}>
      <div style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
        <nav style={{ borderBottom: '1px solid gray', padding: '5px', textAlign: 'center' }}>
          Hello world
        </nav>
        <div style={{ height: 'calc(75vh - 0px)', padding: '10px', overflowX: 'hidden', overflowY: 'auto', overflowInline: 'hidden', scrollbarWidth: 'none' }}>
          <div className="row">
            {messages.map((message) => (
              <div key={message.id} className="col-md-12">
                <Message sender={message.sender} content={message.content} float={1} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <FloatButton icon={<SendOutlined />} onClick={() => sendMessage({
            id: 123,
            content: 'Hello world',
            sender: 'I"m',
          })}
          type="primary" style={{ right: 50 }} />
          <textarea className="form-control" style={{backgroundColor: '#dedede', borderRadius: '0px'}} placeholder="Input here..." rows={5}></textarea>
        </div>
      </div>
  </div>
  
  );
};

export default GroupBody