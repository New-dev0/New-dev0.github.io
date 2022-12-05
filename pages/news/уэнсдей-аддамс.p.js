import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Уэнсдей Аддамс</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Уэнсдей Аддамс"/>
        <meta name="description" content="Trending News about Уэнсдей Аддамс" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Уэнсдей Аддамс</h1>
            <Image width={800} height={500} src="" alt="Уэнсдей Аддамс"/>
            <h3>Recent News</h3>
            <a href='https://meduza.io/feature/2022/12/04/uensdey-pervyy-serial-tima-bertona-posvyaschennyy-naslednitse-semeyki-addams'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Уэнсдэй» — первый сериал Тима Бертона, посвященный ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR9YFo3Tfnc1Omch876ZqK_hb782RrOKhv8XhueFbkv4tIz-K_HgeQas3jyXevhjArdjZv6Sg4B" alt="«Уэнсдэй» — первый сериал Тима Бертона, посвященный ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На стриминг-сервисе Netflix вышел первый сезон «Уэнсдэй» — нового сериала во вселенной «Семейки Аддамс», в котором дочь монструозного клана учится в&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}