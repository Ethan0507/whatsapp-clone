import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import './Chat.css'
import db from './firebase';


function Chat() {

    const [seed, setSeed] = useState('');

    const [roomName, setRoomName] = useState('');

    const [input, setInput] = useState('');

    const { roomId } = useParams();


    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name);
            })
        }
    }, [roomId]);
    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);


    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >>> ", input);
        setInput('');
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={true ? "chat__message chat__receiver" : "chat__message"}>
                    <span className="chat__name">Ethan</span>
                    Hey guys!

                    <span className="chat__timestamp">4:46pm</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Ethan</span>
                    Hey guys!

                    <span className="chat__timestamp">4:46pm</span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                
                <form>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>

                <Mic />
            </div>
        </div>
    )
}

export default Chat
