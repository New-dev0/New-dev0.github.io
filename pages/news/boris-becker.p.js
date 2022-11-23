import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Boris Becker</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Boris Becker"/>
        <meta name="description" content="Trending News about Boris Becker" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Boris Becker</h1>
            <Image width={800} height={500} src="https://i3-img.p7s1.io/pis/ezone/8fccqgELB38wdEB0AB1fHPDQCtTDCJ4UYl_Ic-IXCoYylZ0mXar255psZunNxEf6nIbS_ptHLX5IFtTKiVdkmIxzXpYoaWsxK3yI-YkuWFKSxySVxm48DH1sjto5IAMd6v3ahvb3c-MLJnWOpAVGmBjKjCjb0nG8bvvZSpQLHAFqKC7B1AULR2UnkcTatd1xyjsvaxL65XPP28c/profile:ezone-teaser620x348?source" alt="Boris Becker"/>
            <h3>Recent News</h3>
            <a href='https://www.ran.de/tennis/news/boris-becker-abschiebung-freiheit-deutschland-gericht-162525'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boris Becker noch vor Weihnachten wieder frei?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdRbjhqxXnLyhj9zebw7BHFFe1CCozIoXOBwceYIE-OuD7jzEBBk9gLi5ZKd_P9PoHXytG-FDH" alt="Boris Becker noch vor Weihnachten wieder frei?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tennis-Legende Boris Becker könnte noch vor Weihnachten aus England abgeschoben werden. In Deutschland wäre der 55-Jährige wieder ein &quot;freier Mann&quot;.</p></div>
            </div>
        </a><a href='https://www.focus.de/kultur/stars/tennislegende-wird-55-schock-bilder-zeigen-erbaermliche-zustaende-in-boris-beckers-erstem-knast_id_180301643.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boris Becker: Schock-Bilder zeigen schlimme Zustände in seinem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRKH-EAu6hd8dU9wsi-JGyGitb75cwLdU9cy50vDfdKQyBV3Do3rql03UQn51X4hDB0phLcsq62" alt="Boris Becker: Schock-Bilder zeigen schlimme Zustände in seinem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-Tennisstar Boris Becker sitzt seit Ende April in England im Gefängnis, am heutigen Dienstag feiert er seinen 55. Geburtstag.</p></div>
            </div>
        </a><a href='https://www.bild.de/unterhaltung/leute/leute/promi-geburtstag-auch-boris-becker-wird-aelter-82021320.bild.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Promi-Geburtstag: Auch Boris Becker wird älter | Unterhaltung</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQx9c40L2W-3TzQyKAWhU1gD8YUsS8CSuM2UmJUVDEih3Y6Qks7PTVjXfPZ91e9sc675QKzsON-" alt="Promi-Geburtstag: Auch Boris Becker wird älter | Unterhaltung" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wer hat heute Geburtstag? Lesen Sie hier, welche Promis am 22. November Geburtstag feiern!</p></div>
            </div>
        </a><a href='https://www.t-online.de/unterhaltung/stars/id_100084444/boris-becker-wird-55-jahre-alt-wie-feiert-er-seinen-geburtstag-im-gefaengnis-.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boris Becker wird 55 Jahre alt: Wie feiert er seinen Geburtstag im ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRKYAU2HIWFndnbWqyUraroCavj_xiK0vi9P8xS8nOJ9EGt6ID0WiPxxUnPCD-AT2TNRhEai4oK" alt="Boris Becker wird 55 Jahre alt: Wie feiert er seinen Geburtstag im ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Boris Becker hat eigentlich allen Grund zu feiern, denn er wird 55 Jahre alt. Doch kann der Ex-Tennis-Star den Tag hinter Gittern überhaupt zelebrieren?</p></div>
            </div>
        </a><a href='https://www.rtl.de/cms/zum-geburtstagsbesuch-bei-boris-becker-lilians-und-noahs-gesichter-sprechen-baende-5017545.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zum Geburtstagsbesuch bei Boris Becker: Lilians und Noahs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSLP55SY5bAcDlq3QEugvoUz-0V99iA27y5EWzqlkZ7nrK4fp9-lb7QFqYKGe89Dv4LJW6SnZDt" alt="Zum Geburtstagsbesuch bei Boris Becker: Lilians und Noahs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am 22. November feiert Boris Becker seinen 55. Geburtstag. Einen Ehrentag, den er allerdings hinter Gittern im HMP Huntercombe-Gefängnis in London&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bunte.de/stars/star-news/boris-becker-fotos-zeigen-schockierende-zustaende-in-seinem-ersten-gefaengnis.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boris Becker: Fotos zeigen schockierende Zustände in seinem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTpdwzNgW17pxouBZ9CVlCCphaEuEri_unLcJiYVaxSbgltm_QlxUF0ThUnRPuilLbFHS4efWkp" alt="Boris Becker: Fotos zeigen schockierende Zustände in seinem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Boris Becker verbringt seinen 55. Geburtstag hinter Gittern. Er sitzt seit knapp sieben Monaten in England in Haft – das dunkelste Kapitel seines bewegten&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}