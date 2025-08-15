import banner from "/images/Banner.webp";
import Card from "../components/Card.tsx";

export default ()=> {
    return <>
        <img src={banner} alt="Banner"/>
        <h1>Algorithm Explorer</h1>
        <p>Some random text</p>
        <div className="w-full h-full grid grid-cols-6 gap-4">
            <Card banner={banner} title="Flood Fill" description="A visualization of the floodfill algorithm" href="testy"/>
            <Card banner={banner} title="Flood Fill" description="A visualization of the floodfill algorithm" href="testy"/>
            <Card banner={banner} title="Flood Fill" description="A visualization of the floodfill algorithm" href="testy"/>
        </div>
    </>;
};