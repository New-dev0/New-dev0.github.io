import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Артилерія</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Артилерія"/>
        <meta name="description" content="Trending News about Артилерія" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Артилерія</h1>
            <Image width={800} height={500} src="https://24tv.ua/resources/photos/news/202212/2214771.jpg?v=1670596523000&w=1200&h=675" alt="Артилерія"/>
            <h3>Recent News</h3>
            <a href='https://24tv.ua/rosiyska-artileriya-netochna-chomu-golovna-prichina_n2214771'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чому російська артилерія неточна: наші бійці назвали головну ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRCbrAstOvuTsZgSAGtX9my___F4tzAFBE4QG6LfYyM-nUZ3wuX2aYoLL1wbqdjysxLIvVqP1tj-Q" alt="Чому російська артилерія неточна: наші бійці назвали головну ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У 10 окремій гірсько-штурмовій бригаді ЗСУ розповіли, що російські артилеристи неточні. Це тому, що вони погано підготовлені та ще через низку причини - 24&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}