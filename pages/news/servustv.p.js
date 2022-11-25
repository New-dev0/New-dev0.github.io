import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ServusTV</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ServusTV"/>
        <meta name="description" content="Trending News about ServusTV" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ServusTV</h1>
            <Image width={800} height={500} src="https://backend.servustv.com/tachyon/sites/12/2022/11/FO-2DAEHP7A21511-stv_cover_landscape.jpeg" alt="ServusTV"/>
            <h3>Recent News</h3>
            <a href='https://www.servustv.com/sport/v/aamn37g3dri6zkxin9je/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal-Torschütze Joao Felix: &quot;Ein Traum, der wahr wird&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ3HBYrj0RaJvpyR4YIXFhp0P2Ockbkvm24MsoFgBT9GKM99TRIguEaXLWrpkOe5QDQcw6-lmVE" alt="Portugal-Torschütze Joao Felix: &quot;Ein Traum, der wahr wird&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bei Portugals Auftakt-Erfolg gegen Ghana brachte Joao Felix die Iberer mit seinem Treffer zum zwischenzeitlichen 2:1 auf die Siegerstraße.</p></div>
            </div>
        </a>
        </Template></>;
}