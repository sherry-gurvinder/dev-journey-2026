const Badge = ({text,color="blue"}) =>
{   
    const styles = {
    blue:  "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    red:   "bg-red-100 text-red-800",
}
    return(
        <div>
            <span className={`${styles[color]} rounded-full text-xs font-medium px-3 py-1`}>
                {text}
            </span>
        </div>
    )
}

export default Badge;