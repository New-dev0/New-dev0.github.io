import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ЧМ мира 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ЧМ мира 2022"/>
        <meta name="description" content="Trending News about ЧМ мира 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ЧМ мира 2022</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/184/1840516/large.jpg" alt="ЧМ мира 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/world/2022/reviews/chempionat-mira-po-futbolu-2022-mnenie-o-atmosfere-chm-v-katare-chem-chm-2018-v-rossii-byl-luchshe-2003544/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«У вас на ЧМ было намного веселее и свободнее ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTY-UKPg1A9Tq8u959_qGF9LKFMJFQ_yJnXZu3D1hrYAdjhg8MzEZHAEEUhvLKmHSmhPpYqUgpC" alt="«У вас на ЧМ было намного веселее и свободнее ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Опасения оказались напрасными. Хорошая находка организаторов ЧМ-2022 — запуск автобусов-шаттлов для прессы не только через главный пресс-центр (то есть как&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}