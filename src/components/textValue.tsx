import { useState } from "react";

export interface ITextValueProps {
    initialTextValue: string
}

export function TextValue({initialTextValue}: ITextValueProps) {
    const [textValue, setTextValue] = useState(initialTextValue)

    return (
        <>
            <div className="border mx-auto max-w-2xl">
                textValue: {textValue}
            </div>
            <div><input placeholder='enter some text value' onChange={(event) => setTextValue(event.target.value)}></input></div>
        </>
    )
}