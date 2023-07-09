import { useState } from "react";

export interface ICounterProps {
    counterValue: number
}

export function Counter({counterValue}: ICounterProps) {
    const [likes, setLikes] = useState(counterValue)

    return (
        <>
            <div>
                likes: {likes}
            </div>

            <div>
                <button className="bg-yellow-50 rounded px-4 py-2" onClick={() => setLikes(likes + 1)}>++</button>
                <button className="bg-yellow-50 rounded px-4 py-2" onClick={() => setLikes(likes - 1)}>--</button>
            </div>
        </>
    )
}