import style from "./ChatRoom.module.scss"
import { useState, useEffect } from "react"
import ChatInput from "../ChatInput/ChatInput"
import avatar from "../../assets/icons/avatar.svg"
import ChatBody from "../ChatBody/ChatBody"
import { useChat } from '../../context/ChatContext';

import { useAuth } from "../../context/AuthContext"
import { chatTimeFormat } from "../../apis/data"


const ChatRoom = ({ headerContext, roomId }) => {
  const [message, setMessage] = useState([])
  const [historyMessage, setHistoryMessage] = useState([])
  const { user } = useAuth() || {}
  const socket = useChat()
  console.log(roomId)
  useEffect(() => {
    const handleServerJoin = (res) => {
      setMessage((prevState) => [...prevState, { isChat: false, message: res }]);
    };

    const handleServerLeave = (res) => {
      setMessage((prevState) => [...prevState, { isChat: false, message: res }]);
    };

    const handleServerRecord = (res) => {
      console.log('server-record', res)
      if (roomId !== res[0].roomId) return

      const history = res.map(({ message, timestamp, User }) => ({ text: message, time: chatTimeFormat(timestamp), avatar: User.avatar, isOwner: User.id === user.id }))

      setHistoryMessage((prevState) => {

        const isDuplicate = prevState.some((item) => item.message?.every((msg) => history.some((h) => h.text === msg.text)))

        if (isDuplicate) {
          return prevState;
        }
        return [...prevState, history]
      })

    }

    if (socket && roomId === 4) {
      socket.on('server-join', handleServerJoin);
      socket.on('server-leave', handleServerLeave);
    }

    if (socket) {
      console.log(`${socket} mounted`)
      console.log(roomId)
      socket.emit('client-record', roomId)
      socket.on('server-record', handleServerRecord)
    }

    return () => {
      // 重整進入cleanup     
      console.log(`${socket} unmounted`)
      socket?.off('server-record', handleServerRecord)
      socket?.off('server-join', handleServerJoin);
      socket?.off('server-leave', handleServerLeave);
    };
  }, [socket?.connected]);

  // 獨立監聽server-message
  useEffect(() => {
    const handleServerMessage = (res) => {
      console.log('server-message', res)
      if (roomId !== Number(res.room)) return

      const other = { text: res.message, time: chatTimeFormat(res.timestamp), avatar: res.user.avatar, isOwner: res.user.id === user.id }
      setMessage((preState) => [...preState, { isChat: true, message: other }])

    }

    if (socket) {
      console.log('im lisening')
      socket.on('server-message', handleServerMessage);
    }

    return () => {
      console.log('not lisening')
      socket?.off('server-message', handleServerMessage);
    }
  }, [socket])

  // 接收來自ChatInput的props
  const handleSelfSend = (text, time) => {
    const self = { text, time: chatTimeFormat(time), avatar, isOwner: true }
    setMessage((preState => [...preState, { isChat: true, message: self }]))
  }


  return (
    <>
      <div className={style.HeaderContainer}>
        {headerContext}
      </div>
      <ChatBody message={message} historyMessage={historyMessage} />
      <ChatInput onSelfSend={handleSelfSend} roomId={roomId} />
    </>
  )
}
export default ChatRoom





