import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>LUKA MODRIC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,LUKA MODRIC"/>
        <meta name="description" content="Trending News about LUKA MODRIC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>LUKA MODRIC</h1>
            <Image width={800} height={500} src="https://www.the-sun.com/wp-content/uploads/sites/6/2022/11/luka-modric-vanja-bosnic-attend-419166309.jpg?strip=all&quality=100&w=1920&h=1080&crop=1" alt="LUKA MODRIC"/>
            <h3>Recent News</h3>
            <a href='https://www.the-sun.com/sport/5444109/luka-modric-wife-vanja-bosnic-children-real-madrid/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is Luka Modric&#39;s wife Vanja Bosnic, when did Croatia star get ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS5m05aaZb1l3Atkn5OFRhE2E5iqFSSWoo71X99824yUHfWwMhbnQcxMJkzu-qDaaDxLKk71ek4" alt="Who is Luka Modric&#39;s wife Vanja Bosnic, when did Croatia star get ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LUKA MODRIC is a key figure for Croatia in the World Cup and Real Madrid - having lifted his FIFTH Champions League title in 2022.And he has been insp.</p></div>
            </div>
        </a>
        </Template></>;
}