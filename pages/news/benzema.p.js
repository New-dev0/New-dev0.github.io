import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Benzema</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Benzema"/>
        <meta name="description" content="Trending News about Benzema" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Benzema</h1>
            <Image width={800} height={500} src="https://media.diepresse.com/social_diepresse_nachrichten/images/uploads_1200/0/2/a/6217770/271254BF-FB7F-44F7-8C49-D8267FC3AF79_v0_l.jpg" alt="Benzema"/>
            <h3>Recent News</h3>
            <a href='https://www.diepresse.com/6217770/frankreich-muss-bei-wm-auf-benzema-verzichten'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Frankreich muss bei WM auf Benzema verzichten</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQGAdE5ix_-gQUSDhBXr3_fT6tJ-MkC3mS2N1_K3O1DSTK6irNGOkHuiYr__D844QWG1CGqzE-X" alt="Frankreich muss bei WM auf Benzema verzichten" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Stürmerstar hat sich am Oberschenkel verletzt und muss nun drei Wochen pausieren. „Die Vernunft sagt mir, meinen Platz jemandem zu überlassen,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wienerzeitung.at/nachrichten/sport/fussball-wm-2022/2168434-Benzema-faellt-fuer-WM-aus.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benzema fällt für WM aus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvmRme7WiV_MWYU8_OeuXHrtesMNXdc2y4qlbbwy-a7TcvJ6i1Vb3ZOyyTSIcy0dJeW4V_FTyb" alt="Benzema fällt für WM aus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Weltmeisterschaft findet ohne den Weltfußballer statt. Stürmerstar Karim Benzema kann wegen einer Verletzung im linken Oberschenkel nicht für&nbsp;...</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/sport/fussball-wm/fussball-wm-frankreichs-karim-benzema-faellt-verletzt-aus-18473896.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Verletzungs-Drama um Profi: Was Benzemas WM-Aus für ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTpSYokTdUsVfOLQ3uol8jxE8CtwBAFnADe4NJkHrEpO-c6OQT5bztqxYjXpRTwZRXhq4Q8fAR9" alt="Verletzungs-Drama um Profi: Was Benzemas WM-Aus für ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stürmerstar Karim Benzema wird die Fußball-WM in Qatar verletzt verpassen. Die Franzosen schwächt das, ihr Team bleibt aber stark....</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/wm/2022/11/wm-2022-frankreich-verzichtet-nach-aus-von-benzema-auf-nachnominierung'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Frankreich verzichtet nach Aus von Benzema auf ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRA4b2qJNDCFhY2FThShkI58gTaONU-UGrCjKdLm86VcCmtGcNKDfyYuBnpL8iU5wsiacuo5vkv" alt="WM 2022: Frankreich verzichtet nach Aus von Benzema auf ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach dem WM-Aus von Karim Benzema wird Weltmeister Frankreich keinen Nachfolger für den Real-Star nachnominieren.</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/fussball/wm/wm2022/2211/News/karim-benzema-bei-comeback-training-erneut-verletzt-aus-fuer-weltmeisterschaft-droht.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022 in Katar: Karim Benzema fehlt Frankreich ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTCxltEV5x-igeO_PAiY6gpu-AxiOKBcUTDjCR-ZGhL15h-Zj2G5XT78tC_5T1Kf4JiSUra6dCx" alt="WM 2022 in Katar: Karim Benzema fehlt Frankreich ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nächster Nackenschlag für den Weltmeister: Frankreich muss nach zahlreichen verletzungsbedingten Ausfällen bei der WM auch noch auf seinen Topstürmer Karim&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derwesten.de/sport/fussball/karim-benzema-wm-2022-frankreich-id300129674.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karim Benzema am Boden zerstört – „Vernunft sagt mir, meinen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTDUAHITAcmIK7a7xSMHcddx-7CjYCqxG3HcpZ-8Cym1h0sWIJLfjLskHWeqCB3O8RL9v5b8rOp" alt="Karim Benzema am Boden zerstört – „Vernunft sagt mir, meinen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Paul Pogba, N&#39;Golo Kante, Christopher Nkunku, Presnel Kimpembe und jetzt auch noch Karim Benzem. Bei Weltmeister Frankreich gibt es für die WM 2022 den nächsten&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}