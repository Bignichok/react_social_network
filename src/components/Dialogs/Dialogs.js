import Chat from "components/Chat";

import DialogsItem from "./DialogsItem";

import DialogsWrapper, { DialogsHolder } from "./Dialogs.style";

const dialogsData = [
    { id: 1, name: "Nikita" },
    { id: 2, name: "Nazar" },
    { id: 3, name: "Anna" },
    { id: 4, name: "Oleg" },
    { id: 5, name: "Nikita" },
];

const Dialogs = () => {
    console.log("dialogs component");
    return (
        <>
            <h2>Dialogs</h2>
            <DialogsWrapper>
                <DialogsHolder>
                    {dialogsData.map(({ id, name }) => (
                        <DialogsItem name={name} id={id} key={id} />
                    ))}
                </DialogsHolder>
                <Chat />
            </DialogsWrapper>
        </>
    );
};

export default Dialogs;
