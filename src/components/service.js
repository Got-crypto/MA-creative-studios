export default function Service({icon, text, header}){
    return(
        <div className="mx-auto h-auto flex-col flex items-center w-11/12">
            <img src={icon} alt='content creation' className="h-20 w-20" />
            <h1 className="my-4 font-bold font-regular">
                {header}
            </h1>
            <p className="font-regular">
                {text}
            </p>
        </div>
    )
}