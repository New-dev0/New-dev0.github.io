import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lena Meyer-Landrut</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lena Meyer-Landrut"/>
        <meta name="description" content="Trending News about Lena Meyer-Landrut" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lena Meyer-Landrut</h1>
            <Image width={800} height={500} src="https://ais-akamai.rtl.de/masters/1954980/1686x0/lena-meyer-landrut-zeigt-sich-voellig-veraendert-im-cruella-look.jpg" alt="Lena Meyer-Landrut"/>
            <h3>Recent News</h3>
            <a href='https://www.rtl.de/cms/lena-meyer-landrut-zeigt-sich-voellig-veraendert-im-cruella-look-5018123.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lena Meyer-Landrut zeigt sich völlig verändert - im Cruella-Look</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTe-W8Mi2x_nXJcBs_Y6WUXIT46fIRigwDCqumlVV3Opt-1zdE6EVU4bwsbaqcnYoWX01v-MkWS" alt="Lena Meyer-Landrut zeigt sich völlig verändert - im Cruella-Look" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na nu, hat Sängerin Lena Meyer-Landrut etwa schon wieder ihre Frisur geändert? In einem Tiktok-Clip überrascht die 31-Jährige ihre Fans mit einem blonden&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derwesten.de/panorama/promi-tv/lena-meyer-landrut-mark-forster-instagram-id300145420.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lena Meyer-Landrut hat großes Problem – „Das ist ein Notfall“</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSDvkyNLtvtLIlx6hslvXSu2VEs3mTGCcRi0h0tmfn5oeWewsX-NEWrOjp9kLojGxbIvbuYEVd6" alt="Lena Meyer-Landrut hat großes Problem – „Das ist ein Notfall“" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ESC-Siegerin Lena Meyer-Landrut ist in großen Nöten. Jetzt bittet sie sogar ihre Instagram-Follower um Unterstützung.</p></div>
            </div>
        </a><a href='https://www.news.de/promis/856611720/lena-meyer-landrut-ueberrascht-mit-blondem-pony-auf-tiktok-neue-frisur-nur-filter-fans-loben-look-der-esc-siegerin/1/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lena Meyer-Landrut: &quot;Hab dich erst gar nicht erkannt!&quot; Mit diesem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRXFF0bsMpCqRWyu4gDR7lXFSeL9tihNyhFh7lIHkfdeotZNNOf9YoGq2cvOyrSKP-gNopBTIde" alt="Lena Meyer-Landrut: &quot;Hab dich erst gar nicht erkannt!&quot; Mit diesem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erst vor kurzem hat Lena Meyer-Landrut ihre Frisur geändert. Jetzt zeigte sie ihren Fans auf TikTok schon wieder einen neuen Look. Doch der Schein trügt.</p></div>
            </div>
        </a>
        </Template></>;
}