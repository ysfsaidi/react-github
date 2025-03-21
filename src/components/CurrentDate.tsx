import { useEffect, useState } from "react"

export default function CurrentDate() {
    const [CurrentDate, setCurrentDate] = useState<string>("")

    useEffect(() => {
        const tmpDate = new Date().toLocaleString();
        const timerId = setInterval(() => {
            setCurrentDate(tmpDate)
        }, 1000)

        return () => {
            clearInterval(timerId)
        }
    }, [CurrentDate])

    return <>
        <h1>1s github test</h1>
        <h2>{CurrentDate}</h2>
    </>

}