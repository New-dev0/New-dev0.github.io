import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dark</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dark"/>
        <meta name="description" content="Trending News about Dark" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dark</h1>
            <Image width={800} height={500} src="https://physics.aps.org/assets/27d56441-5b14-497b-be79-79f41d63d604/e180_1_thumb.png" alt="Dark"/>
            <h3>Recent News</h3>
            <a href='https://physics.aps.org/articles/v15/180'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dark Matter as an Intergalactic Heat Source</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQd8IICa14oJTIlQ9my5wdb2pzF_eylINedKx6l1Gv6cTRrPlYc59F_IGeC4yv7MPnEFAoOWzyo" alt="Dark Matter as an Intergalactic Heat Source" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spectra from quasars suggest that intergalactic gas may have been heated by a form of dark matter called dark photons.</p></div>
            </div>
        </a>
        </Template></>;
}