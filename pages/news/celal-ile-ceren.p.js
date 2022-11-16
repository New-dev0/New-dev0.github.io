import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Celal ile Ceren</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Celal ile Ceren"/>
        <meta name="description" content="Trending News about Celal ile Ceren" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Celal ile Ceren</h1>
            <Image width={800} height={500} src="https://i4.hurimg.com/i/hurriyet/75/1200x675/63738e6a7af5071a4483df28.jpeg" alt="Celal ile Ceren"/>
            <h3>Recent News</h3>
            <a href='https://www.hurriyet.com.tr/kelebek/televizyon/celal-ile-ceren-oyunculari-arasinda-kimler-var-celal-ile-ceren-ne-zaman-ve-nerede-cekildi-42171331'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Celal ile Ceren oyuncuları arasında kimler var? Celal ile Ceren ne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSm9zaO8oxR7nhf9r_7P9ELrnqPAZrXVDuepYWieTgD1sInt3u5VM5GFDLg3n4YbxX6_a72V3dJ" alt="Celal ile Ceren oyuncuları arasında kimler var? Celal ile Ceren ne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Celal ile Ceren oyuncu kadrosu, filmi izleyen izleyiciler dolayısıyla merak konusu oldu. Televizyon kanallarında zaman zaman ekrana gelen romantik komedi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/celal-ile-ceren-filminin-konusu-nedir-oyunculari-kimlerdir-televizyonda-yayinlanacak-mi-3538907-magazin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Celal ile Ceren filminin konusu nedir, oyuncuları kimlerdir, film ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTn7Ud1p8uKWwk1Z329lV4QRV90PA3ax67yhzQqePmvIXzS_98s5wUS7FIiCSSUSbbJMOBEpHvV" alt="Celal ile Ceren filminin konusu nedir, oyuncuları kimlerdir, film ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>15 Kasım Salı akşamı Fox ekranlarında olacak romantik komedi türündeki Celal ile Ceren filmi, 2013 yılında vizyona girmişti. Başrollerini Ezgi Mola ve Şahan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mynet.com/celal-ile-ceren-filmi-ne-zaman-cekildi-celal-ile-ceren-filmi-konusu-ve-oyuncu-kadrosu-190101276221'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Celal ile Ceren filmi ne zaman çekildi? Celal ile Ceren filmi konusu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRpbBuiCDaDydFBwXNLMG3JA6o_57jQ7K-fghXmk2zQrJZ_t2tBDpVVtJ02TwaoLaEo0YCjMSmR" alt="Celal ile Ceren filmi ne zaman çekildi? Celal ile Ceren filmi konusu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Celal ile Ceren filmi ara ara ekranlara geliyor. Bu akşam Fox Tv&#39;de yayınlanacak olan Celal ile Ceren filminin konusu ve oyuncu kadrosu gibi detaylar film&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sondakikaizmir.com/m/tv-magazin/celal-ile-ceren-filmi-kac-yilinda-cekildi-nerede-cekildi-cekim-yeri-h17194.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Celal ile Ceren filmi kaç yılında çekildi nerede çekildi çekim yeri ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSY2yKP-Dj3hRgEf6aPw-JXCZH1KPUzlNHTMNy4Et0YuOLJoHqQ_1ynGmzo60phLLsJXFfA-vRu" alt="Celal ile Ceren filmi kaç yılında çekildi nerede çekildi çekim yeri ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Celal ile Ceren filmi ne zaman çekildi, çekim yılı, çekildiği yer, oyuncu kadrosu isimleri soruları yanıt buldu.</p></div>
            </div>
        </a>
        </Template></>;
}