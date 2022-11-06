import { createContext } from "react";
import { useState, useEffect, useContext } from "react";
import { SystemContext } from "./SystemContext";
import {spreadsheet} from "../utils/query";

export const UserDataContext = createContext();
export function UserDataContextProvider(props) {

    const [ isLatest, setIsLatest ] = useState(false);
    const { logged, setLoading } = useContext(SystemContext);
    const [ cards, setCards ] = useState([]);
    const addCard = (card) => {
        let oldCards = [...cards];
        setCards([card, ...oldCards]);
    };
    const updateCard = (card) => {
        let oldCards = [...cards];
        let take = oldCards.findIndex((e) => e["_id"] === card["_id"]);
        oldCards.splice(take, 1);
        setCards([card, ...oldCards]);
    }

    // make almost the same with comments

    useEffect(() => {
        async function fetchData() {
            await new Promise(r => setTimeout(r, 10));
            setLoading(true);
            try {
                const res  = await spreadsheet(); 
                setCards(res);
            } catch (err) {
                console.log(err);
            }
        }
        if (logged) {
            fetchData();
        }
    }, [logged]);

    useEffect(() => {
        setLoading(false);
    }, [cards]);

    return (
        <UserDataContext.Provider value={({
            isLatest,
            cards,
            addCard,
            updateCard,
            setCards,
            setIsLatest,
        })}>
            {props.children}
        </UserDataContext.Provider>
    )
}