import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Autoimmune disease</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Autoimmune disease"/>
        <meta name="description" content="Trending News about Autoimmune disease" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Autoimmune disease</h1>
            <Image width={800} height={500} src="https://i0.wp.com/asianatimes.com/wp-content/uploads/2022/10/myositis-feature-image-1-Harvard-Medical-School-Harvard-University.jpg" alt="Autoimmune disease"/>
            <h3>Recent News</h3>
            <a href='https://asianatimes.com/myositis-a-rare-autoimmune-disease/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Myositis: A Rare Autoimmune Disease - Asiana Times</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSckSG7a--VrlDhYTt5X5nIga8hdtztFkchyLa8KelpCZu9L-GdPSVfzq33TcHUriVuOYCLXERE" alt="Myositis: A Rare Autoimmune Disease - Asiana Times" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Autoimmune diseases are the reactions of the immune system towards the healthy or normal cells of the body. This usually causes incurable diseases that.</p></div>
            </div>
        </a>
        </Template></>;
}