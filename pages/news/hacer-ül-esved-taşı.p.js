import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hacer-ül Esved taşı</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hacer-ül Esved taşı"/>
        <meta name="description" content="Trending News about Hacer-ül Esved taşı" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hacer-ül Esved taşı</h1>
            <Image width={800} height={500} src="https://iasbh.tmgrup.com.tr/76c3e3/650/344/0/0/627/330?u=https://isbh.tmgrup.com.tr/sbh/2022/11/21/hacer-ul-esved-nedir-hacer-ul-esved-ne-anlama-gelir-1669055739108.jpg" alt="Hacer-ül Esved taşı"/>
            <h3>Recent News</h3>
            <a href='https://www.sabah.com.tr/yasam/hacer-ul-esved-nedir-hacer-ul-esved-ne-anlama-gelir-6248146'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hacer-ül Esved nedir? Hacer-ül Esved ne anlama gelir?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRYZAygDSrYv2fmwnJ6tggIG9yVxWqNKEZrnMTjz86LR8s9g7LnR6zO52HQlakp-4799QdUGH2r" alt="Hacer-ül Esved nedir? Hacer-ül Esved ne anlama gelir?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hacer-ül Esved kelime anlamını ilk kez duyanlar Hacer-ül Esved nedir, ne demektir sorusuna yanıt arıyor. el-Hacerü&#39;l-esved terkibi Arapça&#39;da &#39;siyah taş&#39;&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}