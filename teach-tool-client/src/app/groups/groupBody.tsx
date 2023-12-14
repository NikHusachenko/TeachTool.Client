import Message from "@/components/message/message";
import { useEffect, useState } from "react";

type MessageType = {
  id: number;
  sender: string;
  content: string;
};

type GroupBodyProps = {};

const GroupBody: React.FC<GroupBodyProps> = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const fetchData = async () => {
    try {
      let response = await fetch('data.json');
      let data = await response.json();
      setMessages(data.messages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
      <nav className="text-center" style={{ borderBottom: '1px solid gray', padding: '5px' }}>
        Hello world
      </nav>
      <div style={{ height: '100em', overflowX: 'hidden', overflowY: 'auto' }}>
        <div className="row">
          {messages.map((message) => (
            <div key={message.id} className="col-md-12">
              <Message sender={message.sender} content={message.content} float={1} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupBody