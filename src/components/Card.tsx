interface IProps {
    banner: string,
    title: string,
    description: string
    href: string
}

export default ({banner, title, description, href}: IProps) => {
    return <>
        <button className="border-solid" onClick={() => {}}>
            <img src={banner} alt={banner} className="aspect-4/3 object-cover w-full rounded-t-[8px]"/>
            <h2>{title}</h2>
            <p>{description}</p>
        </button>
    </>;
};