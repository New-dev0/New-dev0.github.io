import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lillehammer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lillehammer"/>
        <meta name="description" content="Trending News about Lillehammer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lillehammer</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2874138/v7718dc/og_image.jpg" alt="Lillehammer"/>
            <h3>Recent News</h3>
            <a href='https://www.boerse-express.com/news/articles/pinkelnig-vergibt-sieg-auf-der-grossschanze-in-lillehammer-529173'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pinkelnig vergibt Sieg auf der Großschanze in Lillehammer</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Pinkelnig vergibt Sieg auf der Großschanze in Lillehammer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach den Rängen drei und eins in Wisla nun die Plätze zwei und drei in Lillehammer: Eva Pinkelnig hat ihre Podestserie in der laufenden Skisprung-Saison am&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2874137'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dritte in Lillehammer - Pinkelnig setzt Podestserie im Weltcup fort</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSehda42KOPLiEmlwcACPqQP1SnHvPozect_bEhHbPPcp6dPOZ9MvPJF6ONupY2H73NCgTBnKjV" alt="Dritte in Lillehammer - Pinkelnig setzt Podestserie im Weltcup fort" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach den Rängen drei und eins in Wisla nun die Plätze zwei und drei in Lillehammer: Eva Pinkelnig hat ihre Podestserie in der laufenden ...</p></div>
            </div>
        </a><a href='https://sport.orf.at/stories/3104482/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seidl rutscht in Lillehammer von Podestplatz</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-tsHhUrNq4t0Hl5nCbZmSIImE4_MTPjhQ2jGZEoTBZtwb3XBrYXv4KSPEJktVBaCWyrOPiDlo" alt="Seidl rutscht in Lillehammer von Podestplatz" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Für Mario Seidl hat sich bei den Nordischen Kombinierern am Sonntag der Rennverlauf vom Samstag wiederholt. Wie am Vortag lag der Salzburger in der Loipe&nbsp;...</p></div>
            </div>
        </a><a href='https://www.n-tv.de/sport/Weltspitze-huldigt-Lillehammer-Expertin-Althausmartin-article23761783.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Katha war unschlagbar&quot;: Weltspitze huldigt Lillehammer-Expertin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTyz56tJMH9RtPCMxfphK-Qz4tHcEAKYp4PgcGhxdJV8Y9bfBgkQdlNJz3swlsytUFlHBGc4dlX" alt="&quot;Katha war unschlagbar&quot;: Weltspitze huldigt Lillehammer-Expertin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zehn Weltcup-Siege stehen für Katharina Althaus in der Statistik - fünf davon feiert sie in Lillehammer. Auch an diesem Wochenende ist sie in Norwegen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bietigheimerzeitung.de/inhalt.weltcup-in-lillehammer-laufstarker-kombinierer-geiger-wird-dritter.01b6f59e-e5ff-4b2c-ac57-09ce423aa181.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Weltcup in Lillehammer - Laufstarker Kombinierer Geiger wird Dritter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS24SoHwJ4MuFwPtiuxzLJtxBu2FjS9Y7cDvu6Lttnu6XOFRYOF6f5H-ayi2Q_tanq2R-h2D2h8" alt="Weltcup in Lillehammer - Laufstarker Kombinierer Geiger wird Dritter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit einer erneut beeindruckenden Laufleistung hat sich Vinzenz Geiger den dritten Platz beim Weltcup der Nordischen Kombinierer in Lillehammer erkämpft.</p></div>
            </div>
        </a><a href='https://www.sueddeutsche.de/sport/skispringen-althaus-vierte-in-lillehammer-1.5708970'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Althaus Vierte in Lillehammer</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Althaus Vierte in Lillehammer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Skispringerin Katharina Althaus hat beim Weltcup in Lillehammer einen erneuten Platz auf dem Podium knapp verpasst. Die 26-Jährige sprang am Sonntag auf der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportschau.de/wintersport/nordische-kombination/nordische-kombination-maenner-sonntag-lillehammer-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nordische Kombination in Lillehammer: Vinzenz Geiger zündet ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT5Jq-mGrPjxZzXHJa_vP9gqAOP-NcOC6p7y9daeU1D67SddTlCnxx3HlObyqNMQuydyVQQXj6Z" alt="Nordische Kombination in Lillehammer: Vinzenz Geiger zündet ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beim Weltcup der Nordischen Kombinierer in Lillehammer hat Vinzenz Geiger nach einer beeindruckenden Aufholjagd den Sprung unter die ersten Drei geschafft.</p></div>
            </div>
        </a><a href='https://www.skispringen.com/silje-opseth-feiert-heimsieg-in-lillehammer-eva-pinkelnig-setzt-podestserie-fort/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Silje Opseth feiert Heimsieg in Lillehammer - Eva Pinkelnig setzt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTzyZKwOU0wgJRI6NkAupQeIShCV7j_QvidTrWEdC6geJ79Apw2rgN6MF55pXuOWYqmOJABcDs5" alt="Silje Opseth feiert Heimsieg in Lillehammer - Eva Pinkelnig setzt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Silje Opseth heißt die strahlende Siegerin des Großschanzen-Springens von Lillehammer. Gemeinsam mit Anna Odine Stroem sorgt sie für einen norwegischen.</p></div>
            </div>
        </a><a href='https://www.allgaeuer-zeitung.de/sport/lillehammer-skispringerin-althaus-wird-vierte-norwegerin-siegt_arid-503883'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lillehammer : Skispringerin Althaus wird Vierte - Norwegerin siegt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQIhK-ZIoBM1X4hsli9vaFweY6kKh1hyWdhE0i74QuducFxAfg9LUtOOj2vbi_KOCCA31mgh7w" alt="Lillehammer : Skispringerin Althaus wird Vierte - Norwegerin siegt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Skispringerin Katharina Althaus hat beim Weltcup in Lillehammer nach ihrem Sieg am Vortag einen erneuten Platz auf dem Podium knapp verpasst.</p></div>
            </div>
        </a><a href='https://www.laola1.at/de/red/wintersport/nord--kombi/oesv-kombinierer-in-lillehammer-nach-dem-springen-gut-dabei/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÖSV-Kombinierer verpassen das Podest in Lillehammer erneut</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSAiQkoW0PqOR5Ux52tvZnyiD-BTAwGZRkQ7J6kFUlA8G40QNjfotUbQJFZ4-TC-INeV8qIDThd" alt="ÖSV-Kombinierer verpassen das Podest in Lillehammer erneut" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mario Seidl und Franz-Josef Rehrl fallen nach guten Sprüngen in der Loipe zurück. An der Spitze dominieren erneut Norweger. - Wintersport, Nord. Kombi.</p></div>
            </div>
        </a>
        </Template></>;
}