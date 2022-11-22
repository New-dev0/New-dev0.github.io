import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ticaret Bakanlığı</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ticaret Bakanlığı"/>
        <meta name="description" content="Trending News about Ticaret Bakanlığı" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ticaret Bakanlığı</h1>
            <Image width={800} height={500} src="https://iasbh.tmgrup.com.tr/a40147/650/344/0/32/864/486?u=https://isbh.tmgrup.com.tr/sbh/2022/11/21/ticaret-bakanligi-ekimde-440-firmaya-dahilde-isleme-izin-belgesi-verdi-1669024787516.jpg" alt="Ticaret Bakanlığı"/>
            <h3>Recent News</h3>
            <a href='https://www.sabah.com.tr/ekonomi/ticaret-bakanligi-ekimde-440-firmaya-dahilde-isleme-izin-belgesi-verdi-6247567'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ticaret Bakanlığı ekimde 440 firmaya dahilde işleme izin belgesi verdi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRwua1DLjQIov1MzRmN0w5dDOkoUUbNDc5t_ecyuKJCefvvXJs3CNYt-nhr6EXIKSl0Yk05gEczaw" alt="Ticaret Bakanlığı ekimde 440 firmaya dahilde işleme izin belgesi verdi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bakanlığın ekim ayına ilişkin dahilde işleme izin, yurt içi satış ve teslim, hariçte işleme izin ile firma talebine istinaden iptal edilen dahilde işleme&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}