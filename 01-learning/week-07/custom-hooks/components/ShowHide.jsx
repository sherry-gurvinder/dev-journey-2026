import useToggle from "../hooks/useToggle"



const ShowHide = () =>
{
    const [value, toggle, setTrue, setFalse] = useToggle();
     console.log("useToggle",value);
    return(
        <div className="bg-gray-500 grid justify-center item-align min-h-screen">
            <button onClick={toggle}> {`${value?"Show":"Hide"}`} button </button>
            { !value &&<p>This is custom hook fdsgsdg</p>}
        </div>
    )
}
export default ShowHide;