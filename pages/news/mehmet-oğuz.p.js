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
                <p style={{marginLeft: "15px"}}>Türkiye Futbol Federasyonu&#39;ndan yapılan açıklamada, &quot;Türk futbolunun değerli isimlerinden, A Milli Takımımızın eski oyuncusu Mehmet Oğuz&#39;un vefat ettiğini derin&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/galatasaray/2022/11/27/galatasaray-ve-fenerbahcede-forma-giyen-eski-milli-futbolcu-mehmet-oguz-vefat-etti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Galatasaray ve Fenerbahçe&#39;de forma giyen eski milli futbolcu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS9fX8Q3UoE_ddhcrSjxUes0lnwoj3NVpJsfLn-hOC9PclKJv2ZikptpsQFg_a3Xn-KEvJ8FddM" alt="Galatasaray ve Fenerbahçe&#39;de forma giyen eski milli futbolcu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Galatasaray ve Fenerbahçe&#39;de de forma giyen A Milli Takım&#39;ın eski oyuncularından Mehmet Oğuz 73 yaşında vefat etti.</p></div>
            </div>
        </a><a href='https://www.galatasaray.org/haber/kulup/mehmet-oguzu-kaybettik/52192'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mehmet Oğuz&#39;u kaybettik</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQtafOTtIsAfOaW3eeH72dxazJql1wSW0tuu1jICATtGzn8uus_EdZLxtNr5Hz_RPnVJiSkuzIF" alt="Mehmet Oğuz&#39;u kaybettik" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kulübümüzde uzun yıllar forma giyerek takım kaptanlığı yapan, “Büyük Mehmet&quot; lakabıyla bilinen, Türk futbolunun değerli isimlerinden Mehmet Oğuz&#39;un vefat&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fenerbahce.org/haberler/kulup/2022/11/eski-milli-futbolcumuz-mehmet-oguz-u-kaybettik'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eski milli futbolcumuz Mehmet Oğuz&#39;u kaybettik - Fenerbahçe SK</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpjDg_juZr3LlvffvQe4aPkyukic9E7Gkebu29t-HMn0IJELXhpmlGt7mxOQWFWJTVo5Zlx4F2" alt="Eski milli futbolcumuz Mehmet Oğuz&#39;u kaybettik - Fenerbahçe SK" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1979-1980 sezonunda formamızı giyen eski milli futbolcularımızdan Mehmet Oğuz&#39;un vefatını derin bir üzüntüyle öğrendik. Merhumun cenazesi 29 Kasım Salı günü&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/spor/futbol/buyuk-mehmet-lakapli-eski-futbolcu-mehmet-oguz-vefat-etti-mehmet-oguz-kimdir'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Büyük Mehmet lakaplı eski futbolcu Mehmet Oğuz vefat etti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTeGRYdUzg-Ytwb4BTehu6Eaxhe_mMLnnOJAoCtL7oZAvnxCwzpYVClV37yOhT0-bcXt5KnEFR8" alt="Büyük Mehmet lakaplı eski futbolcu Mehmet Oğuz vefat etti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Galatasaray&#39;dan yapılan açıklamada, &quot;Kulübümüzde uzun yıllar forma giyerek takım kaptanlığı yapan, “Büyük Mehmet&quot; lakabıyla bilinen, Türk futbolunun değerli&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}