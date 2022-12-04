import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pele</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pele"/>
        <meta name="description" content="Trending News about Pele" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pele</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/12/3/2008636/kapak_174214.jpg" alt="Pele"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/spor/peleden-kotu-haber-2008636'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pele&#39;den kötü haber!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSYGkGeCzCI8ln09G9IDWgWzDy8RTBBWJvgK1ITJO1GTbf8mUixt6ETEqPYfjEQGuygxaYaq_Ym" alt="Pele&#39;den kötü haber!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brezilyalı futbol efsanesi Pele&#39;nin kemoterapiye olumlu yanıt vermediği ve kendisi için endişe verici saatlere girildiği belirtildi.</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/futbol/2022/12/03/peleden-uzen-haber-geldi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pele&#39;den üzen haber geldi!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQZigFy0SR_jPcA2Ug0caoCCeAaR0Q9KfOTbblDh7u4BwHJ65I_uWTvtuTyJXBfM_Hks-SzGfM4" alt="Pele&#39;den üzen haber geldi!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Futbol efsaneleri arasında yer alan Pele ile ilgili endişe veren haberler geliyor. Son olarak 82 yaşındaki eski yıldızın kemoterapiya olumlu yanıt vermediği&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/pele-kemoterapiye-yanit-vermiyor-3544389-spor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pele, kemoterapiye yanıt vermiyor!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR0AR-89G7Eav6iXwt2T2bhKHO7c2aRqBgubLhuznHDl5RbvTYGx81wpJF042RHH68FxEVKXrGZ" alt="Pele, kemoterapiye yanıt vermiyor!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kanser tedavisi gören efsane futbolcu Pele&#39;nin kemoterapiye cevap vermediği açıklandı.</p></div>
            </div>
        </a><a href='https://www.ntvspor.net/futbol/pele-den-kotu-haber-endise-veren-saatler-638b570f66db228e5cb02c37'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pele&#39;den kötü haber: Endişe veren saatler...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-cpODAtGIPBN0EznxzH4TxAFISz6jIGmf2OJMiudUftiX7adXOVuIP2aAP0xDYJqAQ49_TQyb" alt="Pele&#39;den kötü haber: Endişe veren saatler..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pele&#39;nin sağlık durumuyla ilgili endişe verici bilgiler gelmeye başladı. Brezilya basınına göre, 82 yaşındaki futbol efsanesi kemoterapiye olumlu yanıt&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fanatik.com.tr/peleden-kotu-haber-geldi-2312141'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pele&#39;den kötü haber geldi!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSJ2ncxjgREt29jn1SfPt-xua5tW_W4beZ3crG-Das1_6C9DS7VLDpoiGXkCWglmQvXYVosWydo" alt="Pele&#39;den kötü haber geldi!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Futbol efsaneleri arasında yer alan Pelenin sağlık durumuyla ilgili endişe verici bilgiler gelmeye başladı. Brezilya basınına göre, 82 yaşındaki futbol&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aydinlik.com.tr/haber/pele-palyatif-bakima-alindi-353960'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pele, palyatif bakıma alındı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRE9I8n9YatGk2-u5pFLSFwWUmPqSwaJFibYUB8Pp8lcQV1XO2K0d8bHqOE8IJkWMnONR3Kf0bu" alt="Pele, palyatif bakıma alındı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brezilyalı futbol efsanesi Pele, Salı günü yaşadığı &quot;kalp rahatsızlığı&quot; sonrasında Sao Paulo&#39;daki Albert Einstein Hastanesi&#39;ne kaldırılmıştı.</p></div>
            </div>
        </a><a href='https://onedio.com/haber/futbol-efsanesi-pele-den-kotu-haber-yogun-bakima-alindi-1111729'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Futbol Efsanesi Pele&#39;den Kötü Haber: Yoğun Bakıma Alındı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTe4hEHqPenfcB6iBcKD8pfKRcgzS2y2wHif3BYT4M2BRiH4iQQ-G7BCRCG6rsIYUwaDqEvLm3W" alt="Futbol Efsanesi Pele&#39;den Kötü Haber: Yoğun Bakıma Alındı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünya futbolunun en büyük efsanelerinden biri olarak bilinen Brezilyalı Pele&#39;nin sağlık durumu ile ilgili gelen haberler kötü.</p></div>
            </div>
        </a>
        </Template></>;
}