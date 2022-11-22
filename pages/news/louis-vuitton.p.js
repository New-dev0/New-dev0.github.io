import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Louis Vuitton</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Louis Vuitton"/>
        <meta name="description" content="Trending News about Louis Vuitton" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Louis Vuitton</h1>
            <Image width={800} height={500} src="https://pyxis.nymag.com/v1/imgs/eb1/fcc/9404a6e047d70f83f5864a722b8b3f3d61-img-0626.1x.rsocial.w1200.jpg" alt="Louis Vuitton"/>
            <h3>Recent News</h3>
            <a href='https://www.thecut.com/2022/11/louis-vuitton-perfumer-jacques-cavallier-belletrud-on-scents.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to Train Your Nose, According to Louis Vuitton&#39;s Head Perfumer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR6O-Vycu14bd92vizZGlysFdky1vqFuiSCvOB9Iwvb6Bzeo7yC2Qvp0nEmxvcJhcYXg35WHm4W" alt="How to Train Your Nose, According to Louis Vuitton&#39;s Head Perfumer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Plus: Jacques Cavallier-Belletrud on working with Frank Gehry on the bottle for his fragrance Symphony and his favorite scent.</p></div>
            </div>
        </a>
        </Template></>;
}