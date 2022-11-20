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
            <Image width={800} height={500} src="http://galinfo.com.ua/media/gallery/intxt/p/o/posivna.jpg" alt="Львівська область"/>
            <h3>Recent News</h3>
            <a href='https://galinfo.com.ua/news/lvivska_oblast_bula_odniieyu_z_nebagatoh_yaki_zbilshyly_posivni_ploshchi_tsogorich_392036.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новини Львова: Львівська область була однією з небагатьох, які ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSoyEAXKn1vf3uBKIsM-pIN5cRErrepFrcvfht1B-1FI0QUknfSrem6JOGiaX5pJh_2Qv9aq2g3" alt="Новини Львова: Львівська область була однією з небагатьох, які ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Як змінився аграрний сектор області від початку повномасштабного вторгнення росії на територію України – про це під час брифінгу у медіацентрі Україна&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}