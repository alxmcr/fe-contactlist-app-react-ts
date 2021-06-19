import { ContactProps } from "../../types/AppTypes/AppTypes"

export const Contact = ({ contact }: ContactProps) => {
    return (
        <div>
            {JSON.stringify(contact)}
        </div>
    )
}