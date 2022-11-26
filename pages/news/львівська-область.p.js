import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Львівська область</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Львівська область"/>
        <meta name="description" content="Trending News about Львівська область" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Львівська область</h1>
            <Image width={800} height={500} src="https://portal.lviv.ua/wp-content/uploads/2022/11/285.jpg" alt="Львівська область"/>
            <h3>Recent News</h3>
            <a href='https://portal.lviv.ua/news/2022/11/25/na-lvivshchyni-pratsevlashtuvaly-majzhe-1400-pereselentsiv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Львівщині працевлаштували майже 1400 переселенців</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR7_Kj7Dbvx9r7hY93ENl2r3jcqsdNDuAdwWnU6dQODD_QWA51LcCKzssH2mUKZ2fHunkt9Moo9" alt="На Львівщині працевлаштували майже 1400 переселенців" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Понад пів тисячі суб&#39;єктів господарювання Львівщини забезпечили роботою 1368 внутрішньо переміщених осіб. Працедавці отримають компенсації. Про це ....</p></div>
            </div>
        </a>
        </Template></>;
}