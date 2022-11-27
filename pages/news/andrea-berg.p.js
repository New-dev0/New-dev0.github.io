import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Andrea Berg</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Andrea Berg"/>
        <meta name="description" content="Trending News about Andrea Berg" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Andrea Berg</h1>
            <Image width={800} height={500} src="https://images.live.dumontnext.de/2022/06/25/79adbc24-6e50-4fb3-9b43-15b2594a7133.jpeg?w=4000&auto=format&q=75&format=auto&s=2ff86d9b0f33499afb1343efdc6a6e32" alt="Andrea Berg"/>
            <h3>Recent News</h3>
            <a href='https://www.express.de/promi-und-show/schlager/maite-kelly-spricht-klartext-ueber-verhaeltnis-zu-andrea-berg-100744'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maite Kelly spricht Klartext über das Verhältnis zu Andrea Berg</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSwKcn9iYgl5uiRFV98DfC-_sy9p-g4wsig1GjmxP1fF8hiEgwdpDwan6790OAp2eV99eLBbm6f" alt="Maite Kelly spricht Klartext über das Verhältnis zu Andrea Berg" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gibt es die heile Welt nur in ihren Liedern? Auch in der Schlagerwelt tobt ein Konkurrenzkampf. Jetzt hat Maite Kelly mit einem Vorurteil aufgeräumt.</p></div>
            </div>
        </a>
        </Template></>;
}