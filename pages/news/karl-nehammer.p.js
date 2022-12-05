import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Karl Nehammer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Karl Nehammer"/>
        <meta name="description" content="Trending News about Karl Nehammer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Karl Nehammer</h1>
            <Image width={800} height={500} src="https://i.ds.at/MscNEA/rs:fill:1200:600/plain/2022/12/02/nehammer002.jpg" alt="Karl Nehammer"/>
            <h3>Recent News</h3>
            <a href='https://www.derstandard.at/story/2000141465823/karl-nehammer-ein-selbstversuch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Das neue Kanzlergespräch&quot;: Karl Nehammer, ein Selbstversuch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTXXBV0lnnDSbQQoA3WL8NrJhcTB_AZ6s_efasNXS1bkS67BMCxvD3hoEvdMcb1FNicAx-gTDvK" alt="&quot;Das neue Kanzlergespräch&quot;: Karl Nehammer, ein Selbstversuch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zum Einjahresjubiläum versuchte sich Karl Nehammer an einem neuen Format: dem &quot;Kanzlergespräch&quot; mit Journalisten. Eine Sperrfrist sorgte für Aufregung,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tt.com/artikel/30839352/die-parteierb-und-regierungslast-des-karl-nehammer'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Die Parteierb- und Regierungslast des Karl Nehammer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSOUR7kJyY3o_9Dwg8rejBzkMR_Wqjl82aoPISGm65O0i8OITFqgT9b9U1I2RcJm8jgISG5JC8s" alt="Die Parteierb- und Regierungslast des Karl Nehammer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kurz brachte die ÖVP in die Höh&#39;, sich nach Wahlerfolgen aber in das politische Abseits. Nun grundelt die Partei, die bei der Nationalratswahl 2019 auf 37,5&nbsp;...</p></div>
            </div>
        </a><a href='https://www.profil.at/oesterreich/karl-nehammer-von-einem-der-auszog-kanzler-zu-lernen/402246807'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karl Nehammer: Von einem, der auszog, Kanzler zu lernen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTcSz1lerlE6MGYuN8goPsvePCorLIy8Cuub_uq9WTy2nwF_jVRbtSEgkLFo8bYa6_0r0S97FWZ" alt="Karl Nehammer: Von einem, der auszog, Kanzler zu lernen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seit einem Jahr ist Karl Nehammer Bundeskanzler – und ein Getriebener. Statt Politik zu gestalten, muss er Krisen bewältigen. Er sei ein „Nachdenkender“,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sn.at/politik/innenpolitik/karl-nehammers-erstes-kanzlerjahr-politikberater-analysiert-130655086'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karl Nehammers erstes Kanzlerjahr: Politikberater analysiert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ8enY80qXphncRV6sXxUxP8gynIIWfG8K5XZNgFC_MOpr36YwaP3qWzfZKSOYVAhu96SWJoqvJ" alt="Karl Nehammers erstes Kanzlerjahr: Politikberater analysiert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wie schlug sich der Kanzler bisher? Kann die ÖVP aufholen? Wo bleibt die Strategie? Experte Thomas Hofer analysiert.</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6223180/karl-nehammer-als-dritter-bundeskanzler'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karl Nehammer: Als Dritter Bundeskanzler</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRnW5fy_CwMaAn6F0tAHrzGCDvRgwWCHlp6Kpbbxnzk7UIjAmBGVmI-YowU3jR9FS4k9VGQeXYE" alt="Karl Nehammer: Als Dritter Bundeskanzler" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seit einem Jahr ist Karl Nehammer im Amt. Multiple Krisen und das Kurz-Erbe lassen ihm wenig Spielraum. Trotz guter Ansätze – einen Kanzlerbonus hat er&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ots.at/presseaussendung/OTS_20221203_OTS0016/stocker-bundeskanzler-karl-nehammer-fuehrt-unser-land-mit-vollem-einsatz-durch-die-krisen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stocker: „Bundeskanzler Karl Nehammer führt unser Land mit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSygiCPagDYWd2YnzDslKMjXbXEc4J4DTD5QtH5If9Y8cZVgB9O1KukEMzJdc_ySZ0vf4UkUObn" alt="Stocker: „Bundeskanzler Karl Nehammer führt unser Land mit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bilanz der vergangenen zwölf Monate macht deutlich, dass die Bundesregierung unter Kanzler Karl Nehammer große Erfolge vorzuweisen hat.</p></div>
            </div>
        </a><a href='https://www.nachrichten.at/politik/innenpolitik/karl-nehammer-der-schadensbegrenzer-im-kanzleramt;art385,3753231'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karl Nehammer: Der Schadensbegrenzer im Kanzleramt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-NjDSvrXVsiKBn8Co4IMCOCPivOp2FteT3uySuHNRY1bVcVaAr5IOz-8VobS9jNDC-MWUVbJG" alt="Karl Nehammer: Der Schadensbegrenzer im Kanzleramt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WIEN. Karl Nehammers Bilanz nach einem Jahr als VP- und Regierungschef fällt gemischt aus – Eine Analyse.</p></div>
            </div>
        </a><a href='https://www.heute.at/s/keine-denkverbote-das-sagt-nehammer-ueber-gis-aus-100242163'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Keine Denkverbote&quot; – das sagt Nehammer über GIS-Aus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSUmA9KmxLkzaDngJoI2yyBxCYE7A6jRdep_ie6du3PS1hYBBAc25y5uY9fses8lGUZDNQa6NqW" alt="&quot;Keine Denkverbote&quot; – das sagt Nehammer über GIS-Aus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bundeskanzler Karl Nehammer erklärt im &quot;Heute&quot;-Interview, dass es bei der Diskussion rund um ein Aus der GIS-Gebühr &quot;keine Denkverbote&quot; geben dürfe.</p></div>
            </div>
        </a>
        </Template></>;
}