import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bruce Springsteen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bruce Springsteen"/>
        <meta name="description" content="Trending News about Bruce Springsteen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bruce Springsteen</h1>
            <Image width={800} height={500} src="https://guitar.com/wp-content/uploads/2022/11/sam-fender-bruce-springsteen@2000x1500.jpg" alt="Bruce Springsteen"/>
            <h3>Recent News</h3>
            <a href='https://guitar.com/news/music-news/sam-fender-to-support-bruce-springsteen-on-upcoming-summer-2023-shows/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sam Fender to support Bruce Springsteen on upcoming summer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQqJoJRLAt3xWgce914Sv99Y70nvlO8SgLLrKQ8AF-usEuXakvoNjPJghC865FMYd6C0dssk99r" alt="Sam Fender to support Bruce Springsteen on upcoming summer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indie artist Sam Fender has announced he will support Bruce Springsteen and The E Street Band for two upcoming shows in Italy next year.</p></div>
            </div>
        </a><a href='https://www.1057thepoint.com/music-news/seventeen-going-thunder-road-sam-fender-opening-bruce-springsteen-italy-shows/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seventeen Going Thunder (Road): Sam Fender opening Bruce ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTX4SzQRSPgKSHmd-3OYZm8WJpyapt4aU6mjHN7tlqfksvJ27ywQ7gmnPXC9RuftyoO0tg_-i2y" alt="Seventeen Going Thunder (Road): Sam Fender opening Bruce ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sam Fender will be opening for Bruce Springsteen in Europe. The &quot;Seventeen Going Under&quot; artist is supporting The Boss for two shows in Italy, taking place&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}