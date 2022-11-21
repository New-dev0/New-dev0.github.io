import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Al Pease</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Al Pease"/>
        <meta name="description" content="Trending News about Al Pease" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Al Pease</h1>
            <Image width={800} height={500} src="https://iasbh.tmgrup.com.tr/762244/650/344/0/1/800/421?u=https://isbh.tmgrup.com.tr/sbh/2022/11/20/1668966321310.jpg" alt="Al Pease"/>
            <h3>Recent News</h3>
            <a href='https://www.sabah.com.tr/yasam/al-pease-formula-1-tarihinde-hangi-sebepten-dolayi-yaristan-diskalifiye-edilen-ilk-ve-tek-surucudur-6246923'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Al Pease, Formula 1 tarihinde, hangi sebepten dolayı yarıştan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSBUBpqrjmlNoctsvkKvzcJvWM-P28XFyKxILFVAz1Lu0NuOmWHvZTw5_Se9OixKQyKNAY10c57" alt="Al Pease, Formula 1 tarihinde, hangi sebepten dolayı yarıştan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ATV ekranlarının uzun soluklu yarışma programı “Kim Milyoner Olmak İster?” yarışması Kenan İmirzalıoğlu sunuculuğunda 20 Kasım 2022 Pazar günü yeni bölümle&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}