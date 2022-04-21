import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/store/actions/counterAction";

interface Props {
    name: string
}

const Counter: React.FC<Props> = ({ name }) => {
    const dispatch = useDispatch();
    const [vote, setVote] = useState<number>(0);

    const handleIncrement = () => {
        dispatch(increment());
        setVote(vote + 1);
    }

    const handleDecrement = () => {
        dispatch(decrement());
        setVote(vote - 1);
    }

    return (
        // <div>{name}</div>
        <div style={{ backgroundColor: "grey", margin: "10px" }}>
            <h2> {name} </h2>
            <h3> {`Votes: ${vote}`} </h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={handleIncrement}> Increment </button>
                <button onClick={handleDecrement}> Decrement </button>
            </div>
        </div>
    )
}

export default Counter;