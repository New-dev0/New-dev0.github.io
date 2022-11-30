import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Blackout</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Blackout"/>
        <meta name="description" content="Trending News about Blackout" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Blackout</h1>
            <Image width={800} height={500} src="https://boerse-express.com/public/images/socialshare/share_placeholder.jpg" alt="Blackout"/>
            <h3>Recent News</h3>
            <a href='https://www.boerse-express.com/news/articles/round-table-zu-blackout-praevention-lebensmittelhandel-mit-einheitlicher-vorgehensweise-fuer-krisenfall-geruestet-527670'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Round-Table zu Blackout-Prävention: Lebensmittelhandel mit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTEOxHWXfeTmwv7A4-p2TmPG1PHpKglXeIQ1shhtb29qokOTTE0Ag0NcCSisH96KsuTIszzfEeb" alt="Round-Table zu Blackout-Prävention: Lebensmittelhandel mit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lebensmittelversorgung auch im unwahrscheinlichen Blackout-Fall bundesweit gesichert. Gemeinsamer Blackout-Vorsorge-Plan heute im Landwirtschaftsministerium&nbsp;...</p></div>
            </div>
        </a><a href='https://science.apa.at/power-search/15330838035653366664'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>#SuccessStory: Blackout-Vorsorge für Pflegeheime &amp; Co.</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="#SuccessStory: Blackout-Vorsorge für Pflegeheime &amp; Co." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auskunft gibt der Maßnahmenkatalog &quot;Erhöhung der Versorgungssicherheit im Krisenfall&quot;. Das Handbuch wurde im Rahmen eines KIRAS-Projekts vom Interdisziplinären&nbsp;...</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/telfs/c-lokales/blackout-wird-jetzt-ernster-genommen_a5708182'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Interview: &quot;Blackout wird jetzt ernster genommen&quot; - Telfs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSVX3s07EmfuyF1H6IYeo6-d7khUOzm9G0lI134L0YpJ4zoWoa6z6b4WS5MMQJVwa5gv4dt5XKN" alt="Interview: &quot;Blackout wird jetzt ernster genommen&quot; - Telfs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Telfer Thomas Kugler von der &quot;Gesellschaft für Krisenvorsorge&quot; will mehr Bewusstsein für den &quot;Blackout&quot;-Fall schaffen. REGION.</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6221445/lebensmittelhandel-bereitet-sich-auf-den-blackout-vor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lebensmittelhandel bereitet sich auf den Blackout vor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQc5OaW5g8l7BJOL0lXPwwLA1Z9KWQgZAJ_10KYdHpkVM7b0HrgowiWSHTQvCn_-jrdRyjZs6jv" alt="Lebensmittelhandel bereitet sich auf den Blackout vor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das Risiko eines Blackouts sei &quot;in Summe sehr gering&quot;, heißt es aus dem Klimaschutz- und Energieministerium. Dennoch einigte sich der Lebensmittelhandel auf&nbsp;...</p></div>
            </div>
        </a><a href='https://www.inside-graz.at/einkaufen/wie-der-lebensmittelhandel-bei-einem-blackout-reagiert.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wie der Lebensmittelhandel bei einem Blackout reagiert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSwCLZsGDCYELg_5aN97GFj5U7KxQPnsL4hLL_Qgp-wCmIqsgYLJz4j_oly2zWedpisEHeLTn38" alt="Wie der Lebensmittelhandel bei einem Blackout reagiert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Krieg in der Ukraine hat die Versorgungssicherheit mit Lebensmitteln und Energie in den Fokus gerückt. Derzeit sei die Versorgungslage in Österreich&nbsp;...</p></div>
            </div>
        </a><a href='https://www.heute.at/s/blackout-plan-fuer-oesterreich-regierung-sperrt-supermaerkte-und-stellt-auf-sackerl-versorgung-um-100241254'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Supermärkte zu, Sackerln – der Blackout-Plan der Regierung</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRgvJ6i-SV7slMA4dF8GtXGFW2LeyfMuFZkgfF2pHxPHPLyfxa81x9vWv7ZDz74WZBIiXhXl33U" alt="Supermärkte zu, Sackerln – der Blackout-Plan der Regierung" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Lebensmittelhandel in Österreich hat sich auf einen gemeinsamen Notfall-Plan im Falle eines Blackout geeinigt. Dieser sieht Blackout-Sackerl vor.</p></div>
            </div>
        </a><a href='https://www.puls24.at/news/politik/blackout-unwahrscheinlich-lebensmittelversorgung-ist-gesichert/282385'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Blackout &quot;unwahrscheinlich&quot;: Lebensmittelversorgung ist gesichert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTKVHmxIW_rVLvUYtroOk8tI74UkymynI4CJXY6bAc3c1VOXpzD4VQeHc552nibITHnNXGsuGZF" alt="Blackout &quot;unwahrscheinlich&quot;: Lebensmittelversorgung ist gesichert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Klima- und Energieministerin Leonore Gewessler und Landwirtschaftsminister Norbert Totschnig haben sich am Dienstag mit Vertretern des&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2869156'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Blackout in Österreich - Wie im Krieg: Lebensmittel-Pakete vor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR4QxoXkQW4yGzHlMG-tYPKd06OoE6Byui1D7l7Y8Ztia__Z4OBHLBe-MzVjtCGzMt9sIES_Yim" alt="Blackout in Österreich - Wie im Krieg: Lebensmittel-Pakete vor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Österreich rüstet sich für den Krisenfall: Politik, Sozialpartner, Banken und Lebensmittelriesen verhandeln derzeit, wie die Österreicher bei einem ...</p></div>
            </div>
        </a><a href='https://newsroom.sparkasse.at/2022/11/29/lebensmittelhandel-einheitliches-vorgehen-bei-blackout/97777'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Blackout: Lebensmittelhandel beschließt einheitliches Vorgehen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQEnx4KFqub_FxdZQ9Oe5S71BIydGqslcnpcCqsBRI98eLnqtZKefMv-5M6bXO0-_5rMQBxFNzR" alt="Blackout: Lebensmittelhandel beschließt einheitliches Vorgehen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bei einem runden Tisch mit Energieministerin Leonore Gewessler (Grüne) und Landwirtschaftminister Norbert Totschnig (ÖVP) wurden nun Maßnahmen zur&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}