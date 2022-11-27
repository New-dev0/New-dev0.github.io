import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Killington</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Killington"/>
        <meta name="description" content="Trending News about Killington" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Killington</h1>
            <Image width={800} height={500} src="https://media.diepresse.com/social_diepresse_nachrichten/images/uploads_1200/b/7/e/6220670/402EEDFC-5955-495C-A7ED-F3BF22C39652_v0_l.jpg" alt="Killington"/>
            <h3>Recent News</h3>
            <a href='https://www.diepresse.com/6220670/gut-behrami-siegt-in-killington'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gut-Behrami siegt in Killington</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS0TFXaNxL6hd2qGE0fOk1K3Q65IFEFIopjEibxx1cJq4gc7pjLS58q06LfYZfmYE80DpOW68hy" alt="Gut-Behrami siegt in Killington" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Schweizerin gewinnt den Riesentorlauf an der US-Ostküste. Mikaela Shiffrin enttäuscht beim Heimrennen.</p></div>
            </div>
        </a><a href='https://www.sportnews.bz/artikel/wintersport/ski-alpin/live-1-durchgang-riesenslalom-action-in-killington'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LIVE | 1. Durchgang: Riesenslalom-Action in Killington</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT1Re5F0nHwYvC3dFlecHe3G3dG99mu9E38P8dq8j6kDOY1YksZzSgGhViVf72TQjEHBYL5BvBb" alt="LIVE | 1. Durchgang: Riesenslalom-Action in Killington" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Killington geht ab 16:00 Uhr der erste Weltcup-Riesenslalom der Damen über die Bühne. Dabei wollen sich auch die Azzurre um Federica Brignone und Marta&nbsp;...</p></div>
            </div>
        </a><a href='https://tvthek.orf.at/live/Skiweltcup-Riesenslalom-der-Damen-Killington-1-Durchgang/14200778'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Skiweltcup Riesenslalom der Damen Killington: 1. Durchgang vom ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2TOHeQn5DNQCU5heHPzVjr8mOAz4x3J_sAOo3MY4YIeGU9p07HVQftC4eN9VvrQ-WqQO26qlo" alt="Skiweltcup Riesenslalom der Damen Killington: 1. Durchgang vom ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Olympiasiegerin Sara Hector hat sich beim ersten Riesentorlauf (RTL) der Saison an die Spitze gesetzt. Die 30-jährige Schwedin führt in Killington (USA)&nbsp;...</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/mehrsport/2211/Artikel/ski-alpin-riesenslalom-der-frauen-in-killington-heute-im-liveticker.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ski alpin: Mikaela Shiffrin verpasst Heimsieg bei Riesenslalom der ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQQFUU9YYrA6UMV-nVU2ekoOnEXsm4HdZ1vkZBT9oJ-mjMrfxAw30LnHbNgLybXsivGhx4dVks0" alt="Ski alpin: Mikaela Shiffrin verpasst Heimsieg bei Riesenslalom der ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ski-Superstar Mikaela Shiffrin hat bei ihrem ersten Heimrennen des Weltcup-Winters den Sieg klar verpasst. Beim Riesenslalom in Killington/Vermont belegte&nbsp;...</p></div>
            </div>
        </a><a href='https://www.puls24.at/news/sport/liensberger-fuenfte-bei-gut-sieg-im-killington-rtl/282174'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liensberger Fünfte bei Gut-Sieg im Killington-RTL</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6eUKyS9rpUaSjIMA7nj-pssLk0FpX4ibw0QfAiFyO7s-o1hQonN7R2QZz6pPar25tw2LS0ShM" alt="Liensberger Fünfte bei Gut-Sieg im Killington-RTL" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der erste Saison-Riesentorlauf der alpinen Ski-Frauen ist zur Beute von Lara Gut-Behrami geworden. Die Schweizerin setzte sich am Samstag in Killington&nbsp;...</p></div>
            </div>
        </a><a href='https://skiweltcup.tv/index.php/live-ski-weltcup-slalom-der-damen-in-killington-2022-vorbericht-startliste-und-liveticker-startzeit-16-15-uhr-finale-19-00-uhr/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LIVE: Ski Weltcup Slalom der Damen in Killington 2022 – Vorbericht ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRDkx0-itcX3T0oJS70kB2_imfiRpX1gLLCv8ok6VVHNmE6H8SbNWlDMBY394hq6odGipZfoIo2" alt="LIVE: Ski Weltcup Slalom der Damen in Killington 2022 – Vorbericht ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Killington – Einen Tag nach dem Riesenslalom bestreiten die Damen einen Slalom, den dritten im laufenden WM-Winter 2022/23 in Killington, gelegen im Rutland&nbsp;...</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/villach-land/c-sport/kathi-truppe-bekommt-in-killington-naechste-watschn_a5734717'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Es will nicht laufen: Kathi Truppe bekommt in Killington nächste ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTCW9j89auKwSCJua0y2b2yfvBUr_ftiop8NTpDJpBOvzw0NDUEnRfi_-tphS1lPxYHRln0QuzL" alt="Es will nicht laufen: Kathi Truppe bekommt in Killington nächste ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Es will einfach nicht laufen für unsere Kathi Truppe. So gut verlief die vergangene Saison, doch in der (noch jungen) aktuellen scheint die Pest an den&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportschau.de/wintersport/ski-alpin/ski-alpin-rennbericht-riesenslalom-killington-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Furioses Finale: Gut-Behrami siegt in Killington</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTjUwbagEUeYiCZeaMMDL_vBwp09k4FmG8kWvEhk0cZfLYJ_ygCe7Zbo01QpP_kelWaIpBTgof9" alt="Furioses Finale: Gut-Behrami siegt in Killington" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Schweizerin Lara Gut-Behrami feiert in Killington dank eines fehlerlosen zweiten Laufs ihren 35. Weltcup-Sieg. DSV-Fahrerin Marlene Schmotz unterläuft&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}