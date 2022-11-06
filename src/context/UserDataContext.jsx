import { createContext } from "react";
import { useState, useEffect, useContext } from "react";
import { SystemContext } from "./SystemContext";
import { spreadsheet, getUserComm } from "../utils/query.js";

export const UserDataContext = createContext();
export function UserDataContextProvider(props) {
    let username, setUsername;
    let localName = localStorage.getItem("username");
    if (localName) {
        [ username, setUsername ] = useState(localName);
    } else {
        [ username, setUsername ] = useState("");
    }
    const [ isLatest, setIsLatest ] = useState(false);
    const { logged, setLoading } = useContext(SystemContext);
    const [ cards, setCards ] = useState([]);
    const [ comments, setComments ] = useState([]);
    
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

    useEffect(() => {
        async function fetchData() {
            await new Promise(r => setTimeout(r, 10));
            setLoading(true);
            try {
                const res  = await spreadsheet(); 
                setCards(res);
                const res2  = await getUserComm(); 
                setComments(res2);
            } catch (err) {
                console.log(err);
            }
        }
        if (logged) {
            let localSaved = JSON.parse(sessionStorage.getItem("saved"));
            if (localSaved) {
                setCards(JSON.parse(localSaved.cards));
                setComments(JSON.parse(localSaved.comments));
            } else {
                fetchData();
            }
        }
    }, [logged]);

    useEffect(() => {
        setLoading(false);
        let saved = ({
            cards: JSON.stringify(cards),
            comments: JSON.stringify(comments),
        });
        sessionStorage.setItem("saved", JSON.stringify(saved));
    }, [cards, comments]);

    useEffect(() => {
        if (username != "") {
            localStorage.setItem("username", username);
        } else {
            localStorage.removeItem("username");
        }
    }, [username]);

    return (
        <UserDataContext.Provider value={({
            isLatest,
            cards,
            username,
            comments,
            setComments,
            setUsername,
            addCard,
            updateCard,
            setCards,
            setIsLatest,
        })}>
            {props.children}
        </UserDataContext.Provider>
    )
}