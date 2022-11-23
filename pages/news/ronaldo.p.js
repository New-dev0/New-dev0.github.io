import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ronaldo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ronaldo"/>
        <meta name="description" content="Trending News about Ronaldo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ronaldo</h1>
            <Image width={800} height={500} src="https://apa.at/wp-content/uploads/2022/11/88030011570250854_BLD_Online-1.jpg" alt="Ronaldo"/>
            <h3>Recent News</h3>
            <a href='https://apa.at/news/liebe-zu-ende-manunited-und-ronaldo-trennen-sich/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liebe zu Ende: ManUnited und Ronaldo trennen sich</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQiFZZqHFlS96z5-s1kLB3v3eWp5M8VYqkpBh5Z3fRY0GjaptronhMRsaaxNoe6JXhDEu9jLDLH" alt="Liebe zu Ende: ManUnited und Ronaldo trennen sich" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo wird Manchester United nach einer unrühmlichen Posse mit sofortiger Wirkung verlassen. Dies gab der englische Fußball-Traditionsclub am&nbsp;...</p></div>
            </div>
        </a><a href='https://www.boerse-express.com/news/articles/cristiano-ronaldo-reagiert-auf-united-abschied-525899'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo reagiert auf United-Abschied</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTEOxHWXfeTmwv7A4-p2TmPG1PHpKglXeIQ1shhtb29qokOTTE0Ag0NcCSisH96KsuTIszzfEeb" alt="Cristiano Ronaldo reagiert auf United-Abschied" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am Dienstag gab Manchester United die Vertragsauflösung mit Superstar Cristiano Ronaldo bekannt, der derzeit mit der portugiesischen Nationalelf bei der WM&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2863722'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mit sofortiger Wirkung - Cristiano Ronaldo verlässt Manchester United!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQhEMPXYG8vGl3c7oiohKeAMTaiXSqYTffxoNNtQ0EeojGtZj0QCvuP6-G6LPr48Ke3kzythMFH" alt="Mit sofortiger Wirkung - Cristiano Ronaldo verlässt Manchester United!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo wird Manchester United mit sofortiger Wirkung verlassen. Dies gab der englische Fußball-Traditionsklub am Dienstag einige Tage nach ...</p></div>
            </div>
        </a><a href='https://kurier.at/sport/fussball/manchester-united-wirft-portugals-wm-star-ronaldo-hinaus/402232527'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United wirft Superstar Ronaldo hinaus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSkUlY7MiAldQykcEsta6tZ41bkN3GC09GCcKyDDK8oVU3N3biUiv344krPmCMS9JxupnkMli6o" alt="Manchester United wirft Superstar Ronaldo hinaus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Portugiese hatte in einem Interview den Clubverantwortlichen von ManUnited und Trainer Erik ten Hag &quot;Verrat&quot; vorgeworfen.</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/internationaler-fussball/premier-league/2022/11/cristiano-ronaldo-deutscher-klub-mit-kuriosem-angebot-die-reaktionen-zum-aus-bei-manchester-united'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo? Deutscher Klub mit kuriosem Angebot - die ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ10F90dRORipIsvOipW4oMAf7oRkOPpMM9EprwuHdH8hPpB6jybCg0uG3NB3pS6MBO-NSWAPpU" alt="Cristiano Ronaldo? Deutscher Klub mit kuriosem Angebot - die ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo ist nicht länger Spieler von Manchester United. Der Superstar muss sich einen neuen Klub suchen. SPORT1 fasst die besten Reaktionen auf&nbsp;...</p></div>
            </div>
        </a><a href='https://www.skysportaustria.at/mit-sofortiger-wirkung-ronaldo-verlaesst-manchester-united/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mit sofortiger Wirkung! Ronaldo verlässt Manchester United - Sky ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRH1nGOFYG8cm7CuadM5zeBDAbsOqPyT3vECIDyPymEyCi7w4mNKNYKCgp3gS591sH_C1rKNuyW" alt="Mit sofortiger Wirkung! Ronaldo verlässt Manchester United - Sky ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo und Manchester United trennen sich. Nach der Generalabrechnung des fünfmaligen Weltfußballers gab es keinen Weg zurück mehr. Die.</p></div>
            </div>
        </a><a href='https://www.puls24.at/news/sport/cristiano-ronaldo-ab-sofort-nicht-mehr-bei-manchester-united/281827'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo &quot;ab sofort nicht mehr bei Manchester United&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTtGOv9EswkPm6avlf14BaQH53UwXmeOIc9IJNyHcz7h4AlJi_bZweL84q6AedwWO6fZfDpkhln" alt="Cristiano Ronaldo &quot;ab sofort nicht mehr bei Manchester United&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das gab der Verein am Dienstagabend bekannt. Ein TV-Interview dürfte für die Trennung ausschlaggebend gewesen sein.</p></div>
            </div>
        </a><a href='https://www.zdf.de/sport/manu-thiele/fussball-wm-vorschau-gruppe-h-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fußball-WM 2022: Ist Portugal ohne Cristiano Ronaldo besser?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTelPJZllD5siFYwCGhG1XkOCFAK2Tf3xOkw3Ag6sezFjiZWuG154L7FriRFvdmxfP0cWDgJDNg" alt="Fußball-WM 2022: Ist Portugal ohne Cristiano Ronaldo besser?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manu Thiele blickt auf Gruppe H: Für Portugal steht und fällt der Erfolg mit Ronaldo. Südkorea hat mt Heung-min Son, aber einen Topstar im Team.</p></div>
            </div>
        </a>
        </Template></>;
}