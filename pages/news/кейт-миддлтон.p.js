import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Кейт Миддлтон</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Кейт Миддлтон"/>
        <meta name="description" content="Trending News about Кейт Миддлтон" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Кейт Миддлтон</h1>
            <Image width={800} height={500} src="https://n1s2.hsmedia.ru/ee/68/45/ee6845e6f3fb1674c87e28e77ebf044a/1200x629_0xac120003_789552961669302238.png" alt="Кейт Миддлтон"/>
            <h3>Recent News</h3>
            <a href='https://www.elle.ru/celebrities/novosty/brillianty-knyagin-romanovykh-3-russkie-broshi-elizavety-ii-kotorye-unasledovala-keit-middlton/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бриллианты княгинь Романовых: 3 русские броши Елизаветы II ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ6LqDi-DIpOmjoxeEFaLQMpRuL0qKovdNWrTiiW1F8gd0VbBajO1J19AYpsT-a682Ir4ExuI7g" alt="Бриллианты княгинь Романовых: 3 русские броши Елизаветы II ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Роскошные украшения, принадлежавшие российскому императорскому дому, которые теперь может носить принцесса Уэльская | ELLE.</p></div>
            </div>
        </a>
        </Template></>;
}