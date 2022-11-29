import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mehmet Oğuz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mehmet Oğuz"/>
        <meta name="description" content="Trending News about Mehmet Oğuz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mehmet Oğuz</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/27/2006713/kapak_222848.jpeg" alt="Mehmet Oğuz"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/spor/buyuk-mehmet-lakapli-mehmet-oguz-hayatini-kaybetti-2006713'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Büyük Mehmet&#39; lakaplı Mehmet Oğuz hayatını kaybetti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRdpv4Ap3qfAxCd5YNGJ0BejHe9LRMfzIj-T3xIMRIz04ASh-gsRgqlQoXlco0Ajo7hs5rM8ixb" alt="&#39;Büyük Mehmet&#39; lakaplı Mehmet Oğuz hayatını kaybetti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türkiye A Milli Futbol Takımı, Fenerbahçe ve Galatasaray&#39;da forma giyen Büyük Mehmet lakaplı Mehmet Oğuz yaşamını yitirdi.</p></div>
            </div>
        </a><a href='https://www.haberler.com/haberler/mehmet-oguz-kimdir-buyuk-mehmet-mehmet-oguz-15457423-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mehmet Oğuz kimdir? Büyük Mehmet, Mehmet Oğuz neden öldü ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR75WSr6nW1VQUMryZnoUGyU7TPHxMEy2OlmgH_X4kAHsqGQJMNxk-YoakBRpgVB0HwgvwzyqPJ" alt="Mehmet Oğuz kimdir? Büyük Mehmet, Mehmet Oğuz neden öldü ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bunun üzerine devreye giren ve Mehmet Oğuz&#39;un yakın arkadaşı olan Cemil Turan&#39;ın çabaları sonucu Fenerbahçe&#39;ye transfer oldu. Galatasaray&#39;da oynadığı dönem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fenerbahce.org/haberler/kulup/2022/11/eski-milli-futbolcumuz-mehmet-oguz-u-kaybettik'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eski milli futbolcumuz Mehmet Oğuz&#39;u kaybettik - Fenerbahçe SK</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpjDg_juZr3LlvffvQe4aPkyukic9E7Gkebu29t-HMn0IJELXhpmlGt7mxOQWFWJTVo5Zlx4F2" alt="Eski milli futbolcumuz Mehmet Oğuz&#39;u kaybettik - Fenerbahçe SK" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1979-1980 sezonunda formamızı giyen eski milli futbolcularımızdan Mehmet Oğuz&#39;un vefatını derin bir üzüntüyle öğrendik. Merhumun cenazesi 29 Kasım Salı günü&nbsp;...</p></div>
            </div>
        </a><a href='https://www.galatasaray.org/haber/kulup/mehmet-oguzu-kaybettik/52192'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mehmet Oğuz&#39;u kaybettik</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQtafOTtIsAfOaW3eeH72dxazJql1wSW0tuu1jICATtGzn8uus_EdZLxtNr5Hz_RPnVJiSkuzIF" alt="Mehmet Oğuz&#39;u kaybettik" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kulübümüzde uzun yıllar forma giyerek takım kaptanlığı yapan, “Büyük Mehmet&quot; lakabıyla bilinen, Türk futbolunun değerli isimlerinden Mehmet Oğuz&#39;un vefat&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}