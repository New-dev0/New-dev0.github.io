import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Michael Jackson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Michael Jackson"/>
        <meta name="description" content="Trending News about Michael Jackson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Michael Jackson</h1>
            <Image width={800} height={500} src="https://c.nau.ch/i/qxRNAZ982odw3ebpKY69J5OEk5LQ4WVO61Bv0nMP/1024/michael-jackson.jpg" alt="Michael Jackson"/>
            <h3>Recent News</h3>
            <a href='https://www.nau.ch/people/welt/michael-jackson-und-der-siegeszug-von-thriller-66353982'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michael Jackson und der Siegeszug von «Thriller»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRfES3gVffzmE1Yysxxi4RWdCAx_II52L2pyCWBOWzuUKWdF-uzM86uUhkvZxL52DeFtd8AEE6F" alt="Michael Jackson und der Siegeszug von «Thriller»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Er ist der King of Pop: Michael Jackson. Mit seinem Album «Thriller» feierte der Musiker grosse Erfolge. Jetzt gibt es die dritte Wiederveröffentlichung.</p></div>
            </div>
        </a><a href='https://www.rollingstone.de/40-jahre-thriller-michael-jackson-2525303/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>40 Jahre „Thriller“ von Michael Jackson: Makelloser Pop ohne...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTyPVph67GYLMUSXBEYENF8korfI4IosBnCoWb78IGchumH_pzrqJ7O_mmsn_vtCx_fG0mZ7WxP" alt="40 Jahre „Thriller“ von Michael Jackson: Makelloser Pop ohne..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der lässige Hedonismus des Albums, der den Zeitgeist seiner Entstehung auf den Punkt bringt, paart sich mit einer erstaunlichen Sammlung von Hits.</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/service/topeasy/lebenshilfe/6222030/Einfache-Sprache_Michael-Jacksons-ThrillerAlbum-wird-40'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michael Jacksons &quot;Thriller&quot;-Album wird 40</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSSY6wtXnVoebHTtwRLWX_5Vp2C6yi-HtazSc7qna_bhYb5FOLEVxSWqgQc1DMBGFksohKbSNLG" alt="Michael Jacksons &quot;Thriller&quot;-Album wird 40" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor 40 Jahren wurde das Musik-Album &quot;Thriller&quot; von Michael Jackson veröffentlicht. Es gilt heute als das am meisten verkaufte Musik-Album der Geschichte.</p></div>
            </div>
        </a><a href='https://www.suedostschweiz.ch/sendungen/michael-jackson-thriller-wird-40-30-11-22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michael Jackson - Thriller wird 40</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSPq1AMVoOwKDsrPT5hCKPsPaY4t2R8bkOYV1L3J7BT23N28v-3wjw-MEXm6yLdw3eMx-aerFIU" alt="Michael Jackson - Thriller wird 40" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Heute Mittwoch vor genau 40 Jahren erschien ein Album, welches wahrscheinlich jede Generation kennt. «Thriller» von Michael Jackson. Ein Kunstwerk für sich.</p></div>
            </div>
        </a><a href='https://weltwoche.ch/daily/schweizer-wirtschaft-erstaunlich-robust-chinas-harte-hand-bundesrats-hearings-michael-jackson-40-jahre-thriller-john-lecarres-briefe/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schweizer Wirtschaft erstaunlich robust. Chinas harte Hand ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSYK-GBbN6_RFFHBPxKHCdeegKuDFESuCmxXkfE6SeIz3xT5lj38De9zxEqMBrdp1-9arqJswkZ" alt="Schweizer Wirtschaft erstaunlich robust. Chinas harte Hand ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>78 Kommentare zu “Schweizer Wirtschaft erstaunlich robust. Chinas harte Hand. Bundesrats-Hearings. Michael Jackson: Vierzig Jahre «Thriller». John le Carrés&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bluewin.ch/de/entertainment/musik/michael-jackson-und-der-siegeszug-seines-albums-thriller-1499561.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Der packende Thriller hinter Michael Jacksons «Thriller»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT8U5NbEFxiHGbBUwABixO7mjzUw4BkE9on7NCFNeNqmyHBjxfnP0D2_yBfRb_MhpuDxWTE1-jZ" alt="Der packende Thriller hinter Michael Jacksons «Thriller»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Thriller», «Beat It», «Billy Jean»: Michael Jackson hat heute vor 40 Jahren sein Album «Thriller» veröffentlicht. Rückblickend gilt es als Meilenstein.</p></div>
            </div>
        </a><a href='https://www.likehifi.de/musik/album-des-monats-michael-jackson-thriller-40-jahre/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Album des Monats: Michael Jackson - Thriller (1982)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS5Sr23w4Mp9oeh0VAkUWHxBdfBkAl2YsiXHcYQaxwWl4NA46--zqsBvY3CBgqy9rzP-5IaA8jP" alt="Album des Monats: Michael Jackson - Thriller (1982)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das meistverkaufte Album der Musikgeschichte wird 40 Jahre alt: &quot;Thriller&quot; von Michael Jackson. Wir blicken zurück auf den Pop Klassiker.</p></div>
            </div>
        </a><a href='https://www.freiepresse.de/kultur-wissen/kultur/40-jahre-thriller-von-michael-jackson-meisterpop-aus-dem-schatten-artikel12575997'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>40 Jahre &quot;Thriller&quot; von Michael Jackson: Meisterpop aus dem Schatten</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQp04g2J3_LD03Oq1-DmoTbYGllr-Zj6B-zEIf1j170NgAnHBBshDs6653AMIWaHl0Xj2S1w6gg" alt="40 Jahre &quot;Thriller&quot; von Michael Jackson: Meisterpop aus dem Schatten" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am 30. November 1982 erschien das meistverkaufte Album der Popgeschichte - um erst einmal mit Startschwierigkeiten zu kämpfen.</p></div>
            </div>
        </a>
        </Template></>;
}