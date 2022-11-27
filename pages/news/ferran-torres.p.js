import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ferran Torres</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ferran Torres"/>
        <meta name="description" content="Trending News about Ferran Torres" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ferran Torres</h1>
            <Image width={800} height={500} src="https://boerse-express.com/public/images/socialshare/share_placeholder.jpg" alt="Ferran Torres"/>
            <h3>Recent News</h3>
            <a href='https://www.boerse-express.com/news/articles/luis-enrique-droht-ferran-torres-bei-jubel-526996'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Luis Enrique &quot;droht&quot; Ferran Torres bei Jubel</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTEOxHWXfeTmwv7A4-p2TmPG1PHpKglXeIQ1shhtb29qokOTTE0Ag0NcCSisH96KsuTIszzfEeb" alt="Luis Enrique &quot;droht&quot; Ferran Torres bei Jubel" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spaniens Teamchef Luis Enrique hat seinem Stürmer und potenziellen Schwiegersohn Ferran Torres scherzhaft gedroht. Im Video-Livestream mit Fans auf Twitch&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/sport/fussball/wm/6220508/Mit-Luis-Enriques-Tochter-liiert_Wenn-Ferran-Torres-den'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wenn Ferran Torres den Schnuller-Jubel macht, wird er vom Platz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQaI31nJ0GTzMUspDsO2pXr9-YJMWQuzM2YOdKCC18lKqKtFKkfZjyhsLUUw_IA4EUl1kASjCBo" alt="Wenn Ferran Torres den Schnuller-Jubel macht, wird er vom Platz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spaniens Teamchef Luis Enrique hat seinem Stürmer und potenziellen Schwiegersohn Ferran Torres scherzhaft gedroht.</p></div>
            </div>
        </a><a href='https://www.bild.de/sport/fussball/fifa-wm-2022/fussball-wm-2022-spanien-trainer-droht-ferran-torres-bei-schnuller-jubel-82070574.bild.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fußball WM 2022: Spanien-Trainer droht Ferran Torres bei ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQULtQiHS71_DEJjOZdhj-943338kC2UwoAUwJc8OX9F-qXuY04DP3X7OCIaZQfOzpM8yu-XM9u" alt="Fußball WM 2022: Spanien-Trainer droht Ferran Torres bei ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spaniens Nationaltrainer Luis Enrique freut sich über jeden Volltreffer von Ferran Torres. Na ja. Nicht ganz. Denn er ist mit seiner Tochter liiert.</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/wm/2022/11/wm-2022-luis-enrique-droht-ferran-torres-bei-daumen-jubel-mit-rauswurf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Luis Enrique &quot;droht&quot; Ferran Torres bei Daumen-Jubel mit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQBsXpPWkfNk_kftaQWJxZp-9mHdsUoujbRscTlOsOB2JUMfqsaQwgrd4ymRioiTHuJYe465ScbQ" alt="WM 2022: Luis Enrique &quot;droht&quot; Ferran Torres bei Daumen-Jubel mit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Luis Enrique droht einem seiner Superstars im Scherz mit einem Rauswurf. Das hat einen familiären Hintergrund.</p></div>
            </div>
        </a><a href='https://www.t-online.de/sport/fussball/wm/id_100087334/spanischer-coach-enrique-droht-dieser-jubel-von-ferran-torres-haette-folgen.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spanischer Coach Enrique &quot;droht&quot;: Dieser Jubel von Ferran Torres ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpYYTGhNp9ZwqlvPyhiMxxcwZK53zW5vMvNqJb4hIKOSayJ2xlMk5zeYVRurHquWxE48izQFsd" alt="Spanischer Coach Enrique &quot;droht&quot;: Dieser Jubel von Ferran Torres ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Tochter von Luis Enrique und Stürmer Ferran Torres sind ein Paar. Für den spanischen Coach so weit kein Problem. Doch eine Aktion würde ihn ärgern.</p></div>
            </div>
        </a><a href='https://www.berliner-kurier.de/fussball/wm-katar/spanien-stuermer-liebt-trainer-tochter-torres-droht-der-wm-rauswurf-wenn-er-falsch-jubelt-li.291052'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spanien-Stürmer liebt Trainer-Tochter: Torres droht der WM ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTTspE_Rs2oVwY7He5KFMGfqLolMlX23hrQm3D7w_oXmd35tRNIWS_DVwChMjth6kfqSCfnxDxg" alt="Spanien-Stürmer liebt Trainer-Tochter: Torres droht der WM ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spaniens Nationaltrainer Luis Enrique hat vor dem Spiel gegen Deutschland seinem Angreifer und potenziellen Schwiegersohn Ferran Torres scherzhaft gedroht,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}