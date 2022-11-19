import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Femicide</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Femicide"/>
        <meta name="description" content="Trending News about Femicide" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Femicide</h1>
            <Image width={800} height={500} src="https://oc-media.org/app/uploads/2022/11/70a9ad2700d2f525a526629a6c966d56_north-ossetian-jailed-for-femicide-allegedly-released-to-fight-in-ukraine-1.jpg" alt="Femicide"/>
            <h3>Recent News</h3>
            <a href='https://oc-media.org/north-ossetian-jailed-for-femicide-allegedly-released-to-fight-in-ukraine/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>North Ossetian jailed for femicide allegedly released to fight in Ukraine</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTiAe-XWxc9Ic71gOLZUgJ2U7BT0yX2QM3vAS0IoL7-PmeC_vgu2MDPPEIg71Jx-NHGp15EIZ1Z" alt="North Ossetian jailed for femicide allegedly released to fight in Ukraine" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A North Ossetian serving a 16-year sentence for the murder of his ex-wife is alleged to have been sent to Ukraine as part of a Russian army regiment.</p></div>
            </div>
        </a>
        </Template></>;
}