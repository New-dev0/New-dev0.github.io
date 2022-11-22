import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rußland Ukraine Krieg</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rußland Ukraine Krieg"/>
        <meta name="description" content="Trending News about Rußland Ukraine Krieg" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rußland Ukraine Krieg</h1>
            <Image width={800} height={500} src="https://www.zdf.de/assets/wladimir-putin-368~1280x720?cb=1669038931725" alt="Rußland Ukraine Krieg"/>
            <h3>Recent News</h3>
            <a href='https://www.zdf.de/nachrichten/politik/putin-propaganda-blogger-kritik-ukraine-krieg-russland-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Putins Problem mit den Propaganda-Bloggern</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRF8ljAwHRFjk-Uj_Ii4lTBX0MFgjsGf-PnaXRjT6pD3VB7ydLU5Y4ru-JI0PDOcH8lDxmFE5Xg" alt="Putins Problem mit den Propaganda-Bloggern" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Russlands Militärblogger sollten den Krieg in der Ukraine mit Propaganda am Laufen halten. Angesichts zahlloser russischer Niederlagen äußern sie immer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fr.de/politik/ukraine-news-krieg-russland-selenskyj-putin-militaer-truppen-nato-news-zr-91930072.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>++ Ukraine-News: Macron verurteilt Beschuss von AKW ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTzNJQrAnh_IPnI4wm2C3mlFDt7XyvhqSiSuF_dzVKk0eKUR5omMAfnlfaFdKSrShLPnqKEza67" alt="++ Ukraine-News: Macron verurteilt Beschuss von AKW ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Während im Osten des Landes die Gefechte toben, äußert sich Präsident Wolodymyr Selenskyj zum Ukraine-Krieg. Der News-Ticker.</p></div>
            </div>
        </a><a href='https://www.welt.de/debatte/plus242248603/Ukraine-Krieg-Weder-die-Osteuropaeer-noch-die-Ostdeutschen-wissen-wie-Russland-tickt.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ukraine-Krieg: Weder die Osteuropäer noch die Ostdeutschen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR1fiUZyZEwy9RpBH6_dLwZZ_1CctZ0kJH1lXzXBfqjFycsjazsy_1nBBxqNVqqh1b8QQtxvNst" alt="Ukraine-Krieg: Weder die Osteuropäer noch die Ostdeutschen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Niemand hierzulande weiß, wie im Kreml wirklich gedacht wird. Seit dem Raketeneinschlag in Polen ist klar, dass noch nicht mal die Osteuropäer besser&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tagesspiegel.de/politik/ukraine-krieg-tag-271-steht-moskau-vor-einem-engpass-bei-den-drohnen-8902897.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ukraine-Krieg Tag 271: Steht Moskau vor einem Engpass bei den ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSVtVAX9RcVJ1qTSW-94lBfV3sMecMROi7rF7NgaPDlBUCvgABJEPaiKgfidAeOlU6eBS-YWBKr" alt="Ukraine-Krieg Tag 271: Steht Moskau vor einem Engpass bei den ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Berlin bietet Polen Patriot-Raketenabwehrsystem an + Ukrainische Ermittler entdecken wohl Folterstätten in Cherson. Der Überblick am Abend.</p></div>
            </div>
        </a><a href='https://www.spiegel.de/ausland/ukraine-update-am-montag-russland-von-sanktionen-deutlich-getroffen-a-19def690-0f33-46d2-9035-577f6204c3a1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>+++ Krieg in der Ukraine +++: Russland von Sanktionen »deutlich ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRTXsAl1sioBQNuPLUwBcpSVNRTxzJwhO4r0DvebAEA8FvaIlS0yQGgosEfHxNKwLZvWuGLXivn" alt="+++ Krieg in der Ukraine +++: Russland von Sanktionen »deutlich ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gerade die Technologieabhängigkeit der Invasoren ist Experten zufolge für den Westen das »schärfste Schwert«. Und: Moskau konzentriert sich aktuell offenbar&nbsp;...</p></div>
            </div>
        </a><a href='https://www.welt.de/politik/ausland/article242246461/Ukraine-Krieg-Kiew-gibt-Entdeckung-von-vier-russischen-Folterstaetten-in-Cherson-bekannt.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ukraine-Krieg ++ Kiew gibt Entdeckung von vier russischen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSA-45oVVfK8PHGFsHfVcxAhXIVs-VEZr_KtfXgzQ_JAXBOke695zeXScGh5ehdHGqZEKi3kYI9" alt="Ukraine-Krieg ++ Kiew gibt Entdeckung von vier russischen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Während ihrer achtmonatigen Besatzung Chersons sollen die Russen laut ukrainischen Angaben vier Gebäude als Folterstätten genutzt haben.</p></div>
            </div>
        </a><a href='https://www.noen.at/in-ausland/ukraine-krieg-kiew-entdeckt-folterstaetten-in-cherson-konflikte-krieg-kaempfe-russland-ukraine-344230289'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kiew entdeckt &quot;Folterstätten&quot; in Cherson</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRq12GwM-t2IiQw7YUGiPKVLV_-u40MPa2rVf_7R2pVy8vsW19eJ8B1UiNRsTjJ5qocjB6BMxpZ" alt="Kiew entdeckt &quot;Folterstätten&quot; in Cherson" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach der Rückeroberung der südukrainischen Stadt Cherson haben ukrainische Ermittler nach eigenen Angaben vier von den russischen Besatzern genutzte&nbsp;...</p></div>
            </div>
        </a><a href='https://rp-online.de/politik/ausland/ukraine-krieg-liveblog-vier-russische-folterstaetten-in-cherson-entdeckt_aid-66273523'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ukraine-Krieg Liveblog: Vier russische „Folterstätten“ in Cherson ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS_XdSyao5QIFOV7xgi7ILLohTqBXGc7DOhCow66yFGgfkqv2hnQd0Ca6h6m3hnxUuILzIX4aIe" alt="Ukraine-Krieg Liveblog: Vier russische „Folterstätten“ in Cherson ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liveblog Kiew Ukrainische Ermittler haben nach der Rückeroberung von Cherson vier von den russischen Besatzern genutzte Folterstätten entdeckt.</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/politik/ukraine-liveticker-laut-ukraine-vier-folterstaetten-in-cherson-entdeckt-18134628.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ukraine-Liveblog: Ukraine: Vier Folterstätten in Cherson entdeckt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwJ5S3aqBhlt4n4R6Q-FrlaYHysb1ZmUr7Ypfg_yWKUMtumaUJAXNH_Vz_x20Xkq4iIH_x5BPV" alt="Ukraine-Liveblog: Ukraine: Vier Folterstätten in Cherson entdeckt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Russland konzentriere seine Angriffe auf die Städte Awdijiwka und Bachmut im Gebiet Donezk, teilte der ukrainische Generalstab am Montagabend mit. An anderen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.br.de/nachrichten/kultur/unmoeglich-den-krieg-zu-gewinnen-russen-vermissen-ideologie,TNoxOfx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Unmöglich den Krieg zu gewinnen&quot;: Russen vermissen &quot;Ideologie&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTKMRBxadTWpXcDjcMTpAkXy-cmGTC1msZi5ZeGJ9omMjVTJAT9l1Q2oksc6gNSdbkZmsREC4Ru" alt="&quot;Unmöglich den Krieg zu gewinnen&quot;: Russen vermissen &quot;Ideologie&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Kreml formuliert stets neue &quot;Ziele&quot; des Angriffskriegs auf die Ukraine, die Nationalisten bedauern lautstark, dass es an einer staatlichen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}