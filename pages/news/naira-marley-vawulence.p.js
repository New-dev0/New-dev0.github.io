import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Naira Marley Vawulence</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Naira Marley Vawulence"/>
        <meta name="description" content="Trending News about Naira Marley Vawulence" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Naira Marley Vawulence</h1>
            <Image width={800} height={500} src="https://www.clashmusic.com/wp-content/uploads/2022/11/naira-marley.jpg" alt="Naira Marley Vawulence"/>
            <h3>Recent News</h3>
            <a href='https://www.clashmusic.com/live/naira-marley-links-with-backroad-gee-for-vawulence/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Naira Marley Links With BackRoad Gee For &#39;Vawulence&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSm0XTNxUpKdLAeRgf5HAkWHtaNwDT3rLpjzbqqtezOA_4eoxtcGLoldyeY6xL99s9eGHKT59Ya" alt="Naira Marley Links With BackRoad Gee For &#39;Vawulence&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Naira Marley teams up with BackRoad Gee for new single &#39;Vawulence&#39;. Naira is the living embodiment of the link between the UK and Nigeria, his music.</p></div>
            </div>
        </a><a href='https://grmdaily.com/naira-marley-backroad-gee-vawulence/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Naira Marley enlists Backroad Gee for new banger &quot;Vawulence ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSZF-7E0vz6P-rgFQpIkhAz96Vi1uHpy5fn-By9GLaI8gxG609I58H4AiK8lNCcoilk0_fcYT_w" alt="Naira Marley enlists Backroad Gee for new banger &quot;Vawulence ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Naira Marley is back with a brand new collaborative single, as he links up with Backroad Gee for his latest offering, a track called &quot;Vawulence&quot;.</p></div>
            </div>
        </a>
        </Template></>;
}