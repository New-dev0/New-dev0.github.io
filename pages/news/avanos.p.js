import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Avanos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Avanos"/>
        <meta name="description" content="Trending News about Avanos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Avanos</h1>
            <Image width={800} height={500} src="https://static.daktilo.com/sites/685/uploads/2022/11/24/large/fb-img-1669305769558-1669306377.jpg" alt="Avanos"/>
            <h3>Recent News</h3>
            <a href='https://www.nevsehirkenthaber.com/haber/12600485/avanos-cevre-yolunda-kaza-meydana-geldi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Avanos çevre yolunda kaza meydana geldi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTAvGnZh13dqbePOv3vIZ2CDfu8UAijkFWxbpWpmWyMLPmhWO5lGJdCxJ8uENUe7JE8-ao3VF69" alt="Avanos çevre yolunda kaza meydana geldi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kazada araç sürücüsü hafif şekilde yaralandı. Olay yerine çağrılan sağlık ekipleri tarafından ilk müdahalenin ardıdan hastaneye kaldırıldı. Arac çekici marifeti&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}