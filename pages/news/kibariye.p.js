import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kibariye</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kibariye"/>
        <meta name="description" content="Trending News about Kibariye" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kibariye</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/EVGrIUc-4USFJ65aQLXW-Q.jpg?width=1080&mode=crop&scale=both" alt="Kibariye"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/galeri/n-life/magazin/dogu-demirkol-ile-alelade-showa-katilan-kibariye-seda-sayani-nasil-kesfettigini-anlatti,JQQqUpGg2km4TEMWvT-xFQ'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alelade Show&#39;a katılan Kibariye, Seda Sayan&#39;ı nasıl keşfettiğini anlattı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSVArZSoPWcUdTCUI86qVG76grbnG4E2juq7fDLLd1bMe3Docfc-76NOVupfHMqUYg5o8bLFINa" alt="Alelade Show&#39;a katılan Kibariye, Seda Sayan&#39;ı nasıl keşfettiğini anlattı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gerçek adı Bahriye Tokmak olan şarkıcı Kibariye, Star TV&#39;de yayınlanan &#39;Doğu Demirkol ile Alelade Show&#39;un son bölümüne konuk oldu. Ünlü isim, programda uzun&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberler.com/haberler/kibariye-kimdir-gercek-adi-ne-kac-yasinda-15440196-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kibariye kimdir, gerçek ismi ne? Kaç yaşında, nereli, mesleği ne, evli ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR6X_61rf1OTRFPtaHbk9_edQxMk8uGz7fKbVkBnZkfy4YktvjUj6FIsDjenhN5F2MZc6deEnXF" alt="Kibariye kimdir, gerçek ismi ne? Kaç yaşında, nereli, mesleği ne, evli ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kibariye&#39;nin kariyeri ve biyografisi merak edilmektedir. Kibariye&#39;nin gerçek adı nedir? Kibariye kimdir, kaç yaşında, doğum tarihi kaç, aslen nereli?</p></div>
            </div>
        </a><a href='https://www.gaziantepinhabercisi.com/haber/12572017/kibariyenin-gercek-adi-nedir-kac-yasinda-nereli-meslegi-ne-evli-mi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kibariye&#39;nin gerçek adı nedir? Kaç yaşında, nereli, mesleği ne, evli mi?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRXJKJyyMaWSkI9lBwPyCV158HejSuLWE4qc4hXvTehLZcR0hPFf823Ad86_q_w9eSdB29AW-7k" alt="Kibariye&#39;nin gerçek adı nedir? Kaç yaşında, nereli, mesleği ne, evli mi?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>KİBARİYE KİMDİR? Bahriye Tokmak ya da bilinen adıyla Kibariye (d. 10 Ağustos 1960, Manisa), Türk Arabesk-pop müzik şarkıcısı. Kibariye doğum tarihi : 10 Ağustos&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mardinlife.com/dogu-demirkol-ile-alelade-show-konugu-kibariye-kimdir-nerelidir-kac-yasinda-kibariyenin-gercek-adi-nedir-kibariye-esi-kim.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doğu Demirkol İle Alelade Show Konuğu Kibariye kimdir, nerelidir ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRELso6EfiXcZx5R23L8oPww7HKByWZR_io3gs0nPednBL7Pf1P2QwFjnzGAeTLSaWIaynCib5o" alt="Doğu Demirkol İle Alelade Show Konuğu Kibariye kimdir, nerelidir ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>KİBARİYE KİMDİR? 10 Ağustos 1960 yılında Manisa&#39;nın Akhisar ilçesi Kapaklı köyünde düyaya gelen Kibariye, Asıl adı Bahriye Tokmak&#39;tır. 8 kardeşi olan, Ailesi&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}