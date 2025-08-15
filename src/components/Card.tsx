import {useNavigate} from "react-router";

interface IProps {
    banner: string,
    title: string,
    description: string
    href: string
}

export default ({banner, title, description, href}: IProps) => {
    let navigate = useNavigate();

    return <>
        <button className="border-solid" onClick={() => {navigate(href)}}>
            <img src={banner} alt={banner} className="aspect-4/3 object-cover w-full rounded-t-[8px]"/>
            <h2>{title}</h2>
            <p>{description}</p>
        </button>
    </>;
};