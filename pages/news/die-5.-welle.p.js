import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Die 5. Welle</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Die 5. Welle"/>
        <meta name="description" content="Trending News about Die 5. Welle" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Die 5. Welle</h1>
            <Image width={800} height={500} src="https://static.kino.de/ed/6c/a3/c128f76700d35201c90b08e4b8_A2VjYzg2MDUxMDhi_die-fuenfte-welle-08.jpg#fp=8d117f52ffff" alt="Die 5. Welle"/>
            <h3>Recent News</h3>
            <a href='https://www.kino.de/artikel/heute-im-tv--45gfmmj8x4'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Heute im TV: Sci-Fi-Actionfilm, der im Kino jedoch völlig unterging</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpB7OtQ0Moqi2vjnbqmTjWluSRq5c-fBdAY5Jez4MEvzLtO_uh6dAo9NWjO4tLnxL99hoQjbi3" alt="Heute im TV: Sci-Fi-Actionfilm, der im Kino jedoch völlig unterging" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Es gibt Filme, die überrollen die Kinos wie eine Welle. Und es gibt Filme, die klanglos untergehen. Einen dieser Vertreter könnt ihr am Samstag im TV sehen.</p></div>
            </div>
        </a>
        </Template></>;
}