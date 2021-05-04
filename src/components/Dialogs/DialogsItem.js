import { DialogsLink } from "./Dialogs.style";

const DialogsItem = ({ name, id }) => (
    <DialogsLink to={`/dialogs/${id}`}>{name}</DialogsLink>
);

export default DialogsItem;
