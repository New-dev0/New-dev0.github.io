import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sebastian Böhm</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sebastian Böhm"/>
        <meta name="description" content="Trending News about Sebastian Böhm" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sebastian Böhm</h1>
            <Image width={800} height={500} src="https://image.gala.de/22962728/t/bs/v3/w1440/r1.7778/-/sebastian-boehm.jpg" alt="Sebastian Böhm"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.de/stars/news/sebastian-boehm--der-frisoer-von-andrea-berg-und-co--ist-tot-22962726.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sebastian Böhm: Der Frisör von Andrea Berg und Co. ist tot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSbkS6CqeFBjYsTQRowTncnTZDulsOL2du-Q6QIyVTIc4ktbr9fJMkwmzCljB0inraUgeXBlzYn" alt="Sebastian Böhm: Der Frisör von Andrea Berg und Co. ist tot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erst im November 2021 hat Star-Friseur Sebastian Böhm publik gemacht, dass der Blutkrebs zurückgekommen sei. Nun ist der Hairstylist den Folgen seiner&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stern.de/lifestyle/leute/sebastian-boehm--star-friseur-stirbt-mit-36-jahren-32914836.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sebastian Böhm: Star-Friseur stirbt mit 36 Jahren</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRGdnzkmYmLcyVtmyrItduHE-I7OnkcpcmjHAgw_sgqnW5GHLEq3dxnWEzl5pv729ZHhBdezmjv" alt="Sebastian Böhm: Star-Friseur stirbt mit 36 Jahren" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Star-Friseur Sebastian Böhm ist mit 36 Jahren gestorben. Das teilte sein Team auf Social Media mit.</p></div>
            </div>
        </a><a href='https://www.focus.de/kultur/stars/sebastian-boehm-36-der-promi-friseur-starb-an-leukaemie_id_179791378.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Star-Friseur Sebastian Böhm (†36) ist tot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQD9gK0Lx-itIP5CjO6LCYn8IB_8Sa4SN59PURkJhM7iKdcPoKZHhvV6m_qlv2SjvSR2FABkZpI" alt="Star-Friseur Sebastian Böhm (†36) ist tot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seinen Händen vertrauten viele Stars und Sternchen, darunter „Tokio Hotel“-Star Bill Kaulitz. Jetzt ist Sebastian Böhm im Alter von 36 Jahren verstorben.</p></div>
            </div>
        </a><a href='https://www.bunte.de/stars/star-news/sebastian-boehm-36-der-promi-friseur-starb-an-leukaemie.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sebastian Böhm (†36): Der Promi-Friseur starb an Leukämie</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGfpMfkC4KNF7Ays-oWw4CnJqcLfPTMpB1z-8SG6RFd1Ss5sPzHaoI4rf4JIIuEVNrhEBDOmnU" alt="Sebastian Böhm (†36): Der Promi-Friseur starb an Leukämie" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seinen Händen vertrauten viele Stars und Sternchen, darunter &quot;Tokio Hotel&quot;-Star Bill Kaulitz. Jetzt ist Sebastian Böhm im Alter von 36 Jahren verstorben.</p></div>
            </div>
        </a><a href='https://www.abendzeitung-muenchen.de/promis/promi-friseur-sebastian-boehm-mit-36-jahren-an-leukaemie-gestorben-art-858510'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Promi-Friseur Sebastian Böhm mit 36 Jahren an Leukämie gestorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQdzgFTy7Ah9A2gHkI-Qn8Nlt9FBYF4ku00WVODKxfJLTnCyFQScvzqFTFSp3s73TK0gRCA30nR" alt="Promi-Friseur Sebastian Böhm mit 36 Jahren an Leukämie gestorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Er machte die Haare der Stars. Jetzt ist Promi-Friseur Sebastian Böhm an den Folgen seiner Krebserkrankung gestorben. Im vergangenen Jahr wurde seine&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mdr.de/nachrichten/sachsen-anhalt/magdeburg/magdeburg/friseur-sebastian-boehm-tokio-hotel-gestorben-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Star-Friseur Sebastian Böhm aus Magdeburg gestorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSi1-4z9TuPhrZhCyLoioFx2TNHdohBJc1iE49HwgpQKN7HDtbdkawQaSV4X8VndFe491e9V7vD" alt="Star-Friseur Sebastian Böhm aus Magdeburg gestorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Promi-Friseur Sebastian Böhm aus Magdeburg ist im Alter von 36 Jahren gestorben. Er hatte vergangenes Jahr eine akute Leukämie-Erkrankung öffentlich&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}