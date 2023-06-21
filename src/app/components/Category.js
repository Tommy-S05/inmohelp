export default function Category({image, name}) {
    
    return (
        <article className={"flex flex-col lg:space-y-1 md:space-y-0 relative"}>
            <img
                className={'object-cover w-full h-full'}
                src={image}
                alt={name}
            />
            <label
                className={"md:static md:flex md:flex-col md:text-black md:bg-inherit md:p-0 absolute text-white bg-black right-0 top-3/4 pl-8 pr-3 py-1"}>
                {name}
            </label>
            {/*<label*/}
            {/*    className={"md:flex md:flex-col md:text-black md:-bottom-5 md:-left-1 md:w-24 md:bg-inherit  absolute right-0 top-3/4 md:top-auto text-white bg-black px-2"}>*/}
            {/*    Departamentos*/}
            {/*</label>*/}
        </article>
    );
}