import { useEffect, useState } from "react";
import { ContactType } from "types/AppTypes/AppTypes";

export const useContacts = () => {
    const [contacts, setContacts] = useState<ContactType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setIsLoading(true);
        const contactList: ContactType[] = [
            {
                id: "contact-001",
                name: "Adam Gates",
                phone: "+89 45648971",
            },
            {
                id: "contact-002",
                name: "Julia Hedges",
                phone: "+45 82121554",
            },
            {
                id: "contact-003",
                name: "Victor Mattz",
                phone: "+87 76576543",
            },
            {
                id: "contact-004",
                name: "Jennifer Fretz",
                phone: "+25 36898795",
            }
        ]
        setContacts(contactList);
        setError(null);
        setIsLoading(false);
    }, [])

    return { contacts, setContacts, isLoading, error }
}