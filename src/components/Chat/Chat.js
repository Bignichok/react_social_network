const messageData = [
    { id: 1, message: "Nikita" },
    { id: 2, message: "Nazar" },
    { id: 3, message: "Anna" },
    { id: 4, message: "Oleg" },
    { id: 5, message: "Nikita" },
];

const ChatItem = ({ message }) => {
    <li>{message}</li>;
};

const Chat = () => {
    return (
        <ul>
            {messageData.map(({ message, id }) => (
                <ChatItem key={id} message={message} />
            ))}
        </ul>
    );
};

export default Chat;
