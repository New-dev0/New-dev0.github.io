import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Міжнародний День чоловіків</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Міжнародний День чоловіків"/>
        <meta name="description" content="Trending News about Міжнародний День чоловіків" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Міжнародний День чоловіків</h1>
            <Image width={800} height={500} src="https://images.glavred.info/2022_11/thumb_files/620x324/1668852729-4789.jpeg" alt="Міжнародний День чоловіків"/>
            <h3>Recent News</h3>
            <a href='https://news.glavred.net/mezhdunarodnyy-muzhskoy-den-prikolnye-kartinki-i-pozdravleniya-10426778.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Міжнародний чоловічий день: прикольні картинки і привітання</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQiNjJAjUKouolNZ4n0N7rLVk9Y-6N9nda1GoTcMpTUrYjBZwiZndHVSv1o8AZeGY60UeC52-al" alt="Міжнародний чоловічий день: прикольні картинки і привітання" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Міжнародний чоловічий день 2022-листівки, картинки, прикольні поздоровлення у віршах і прозі для найсильніших і коханих чоловіків, а також історія.</p></div>
            </div>
        </a>
        </Template></>;
}