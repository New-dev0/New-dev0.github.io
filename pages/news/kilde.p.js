import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kilde</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kilde"/>
        <meta name="description" content="Trending News about Kilde" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kilde</h1>
            <Image width={800} height={500} src="https://images-tt-com.nmo.at/v2/assets.tt.com/im-content/images/2a40de2b-0c51-57d6-bc79-96877f57c7f7?p=eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6MTIwMCwiaGVpZ2h0Ijo2MzB9fQ%3D%3D" alt="Kilde"/>
            <h3>Recent News</h3>
            <a href='https://www.tt.com/artikel/30838792/schweizer-odermatt-gewann-den-super-g-in-lake-louise-vor-kilde-und-mayer'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schweizer Odermatt gewann den Super-G in Lake Louise vor Kilde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_dsbDfNbpLExUJ1UmcxBwGte7rCRc5cdO__T9febiVUoHlOxegDFGgHy8SWRAccRdhjyNZdAl" alt="Schweizer Odermatt gewann den Super-G in Lake Louise vor Kilde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Schweizer fuhr vor Aleksander Aamodt Kilde (NOR) und den beiden ÖSV-Läufern Matthias Mayer (3.) und Vincent Kriechmayr (4.) zu seinem 13. Weltcupsieg. Ein&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wienerzeitung.at/nachrichten/sport/ski/2169662-Odermatt-gewann-in-Lake-Louise-vor-Kilde-Mayer.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Odermatt gewann in Lake Louise vor Kilde, Mayer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-WI67qfbi8FCWykqvx9JbXjEIDaTpwZMH_RvCPapVDU_aDIoX1NhWl2IC84PER3568ZgmgyTf" alt="Odermatt gewann in Lake Louise vor Kilde, Mayer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Weltmeister Kriechmayr wurde Vierter und war &quot;definitiv mehr zufrieden als gestern&quot;, sauber und ohne Fehler sei die Fahrt aber nicht gewesen.</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000141248648/kilde-gewinnt-abfahrt-von-lake-louise-vor-hemetsberger'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kilde gewinnt Abfahrt von Lake Louise vor Hemetsberger</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQnsWbv2oXtvh3lydzlRU9Zl58OPUd6g1l32cDe6sbn6JO4-symVdfqsjJkxKxjWd0t_Iz6lFyH" alt="Kilde gewinnt Abfahrt von Lake Louise vor Hemetsberger" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Österreicher muss sich dem Norweger nur um sechs Hundertstel geschlagen geben. Mayer wird hinter Odermatt Vierter.</p></div>
            </div>
        </a><a href='https://kurier.at/sport/wintersport/maenner-abfahrt-in-lake-louise-kilde-siegt-hemetsberger-ueberzeugt/402238806'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Männer-Abfahrt in Lake Louise: Kilde siegt, Hemetsberger überzeugt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSTSpeNfuCV-8ZWlFmiyEIZA5p1zm1Mc-Y2LP9n3UYkOGG3hW14bPatIgg5yZnGsoMAknOnOkB4" alt="Männer-Abfahrt in Lake Louise: Kilde siegt, Hemetsberger überzeugt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Norweger bleibt nur sechs Hundertstelsekunden vor dem Oberösterreicher. Gesamtweltcupsieger Marco Odermatt baut seine Führung aus.</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000141267457/odermatt-gewinnt-super-g-in-lake-louise-vor-kilde-mayer'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Odermatt gewinnt Super-G in Lake Louise vor Kilde und Mayer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1lN2WVocGPdD9EDya3dPcZe5XaaxY3xnGPtjRCap6BDvnw1v0xkv1YZP-KIhEHWTpfuJiwmnH" alt="Odermatt gewinnt Super-G in Lake Louise vor Kilde und Mayer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Schweizer siegt bereits zum zweiten Mal in diesem Winter. Rennen musste nach einem schweren Sturz von Mauro Caviezel unterbrochen werden.</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/sport/wintersport/skialpin/6220671/Alpiner-SkiWeltcup_Kilde-steht-vor-Premierensieg-in-Lake-Louise'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kilde siegt in Lake Louise, Hemetsberger wurde Zweiter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYvt4CD9bZ-fqJSFYUv3acge3wYYIyGfJDBrczGlxDKVeP2lOcuR2Ep37sWkNcoA_AYxtDaqjF" alt="Kilde siegt in Lake Louise, Hemetsberger wurde Zweiter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Weltcupsieger in der Abfahrt begann die neue Saison dort, wo er die alte beendet hatte: ganz oben. Aleksander Aamodt Kilde siegt in Lake Louise das&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportnews.bz/artikel/wintersport/ski-alpin/kilde-bezwingt-seinen-lake-louise-fluch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kilde bezwingt seinen Lake-Louise-Fluch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRJJcvpOMUwn191EsAYGog1slLOYh7zhGOwQ1t57_SQYAfGxo3SCuBY8etfBn-Xb_t5FWvvB-_8" alt="Kilde bezwingt seinen Lake-Louise-Fluch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Noch nie stand Aleksander Aamodt Kilde in Lake Louise auf dem Siegertreppchen – bis jetzt. Am Samstag hat der Norweger die erste Abfahrt der Saison gewonnen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.oe24.at/sport/wintersport/ski-alpin/kilde-verhindert-in-lake-louise-hemetsbergers-sieg-premiere/537098250'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kilde verhindert in Lake Louise Hemetsbergers Sieg-Premiere</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRGYnIVkVv3FX9a_XqzIPkLOjQLp2uYYzoI84IT03mfO4ux6aBazPj64O4uVa5Ne_X_a2z7Fg6R" alt="Kilde verhindert in Lake Louise Hemetsbergers Sieg-Premiere" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nur Aleksander Aamodt Kilde verhindert den ersten Weltcupsieg von ÖSV-Ass Daniel Hemetsberger. Der Norweger gewinnt den Hundertstel-Krimi beim Speed-Auftakt&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}