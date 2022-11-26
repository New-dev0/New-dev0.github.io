import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rammstein</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rammstein"/>
        <meta name="description" content="Trending News about Rammstein" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rammstein</h1>
            <Image width={800} height={500} src="https://image.gala.de/22969952/t/rW/v3/w1440/r1.7778/-/25--ist-das-ein-abschied----1-1---spoton-article-1034201.jpg" alt="Rammstein"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.de/lifestyle/film-tv-musik/neues-rammstein-video--adieu---ist-das-ein-abschied--22969950.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neues Rammstein-Video &quot;Adieu&quot;: Ist das ein Abschied?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ08wVpOIwshGX44oxcf_Bco5j4VWtpGABgkCfSImcMbskuyg49xyzFR3TxuFPi6Ahvh07BC6Cu" alt="Neues Rammstein-Video &quot;Adieu&quot;: Ist das ein Abschied?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rammstein haben ein Video zur Single &quot;Adieu&quot; aufgenommen - Titel, Text und Bilder lassen bei vielen Fans aber böse Vorahnungen aufkommen.</p></div>
            </div>
        </a><a href='https://www.stern.de/kultur/musik/rammstein-sagen--adieu----fans-raetseln-ueber-bedeutung-des-videos-32948082.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rammstein sagen &quot;Adieu&quot; – Fans rätseln über Bedeutung des VIdeos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYxnIXBbzpDJU8KkfI7Hc0yLcoFf8QeYWK0wOwFgyQCjcjCf6u3zNRjankU0ywfVCds-j4cEjR" alt="Rammstein sagen &quot;Adieu&quot; – Fans rätseln über Bedeutung des VIdeos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rammstein hat mit dem Video zur Single &quot;Adieu&quot; erneut für Kontroversen gesorgt. Viele Fans befürchten, das Lied besinge den Abschied der Band.</p></div>
            </div>
        </a><a href='https://events.at/konzerte/rammstein-umwelt-video/402237114'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rammstein-Musiker Flake veröffentlicht Umwelt-Video</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcREvSyFGpNcO1sW-ks2UrfjNSExWERGOUT688cZOsa-EWVDoxGrir9T18CV6r5cz0jJnyg08wOP" alt="Rammstein-Musiker Flake veröffentlicht Umwelt-Video" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rammstein-Musiker Christian „Flake“ Lorenz veröffentlichte gemeinsam mit seiner Tochter ein düsteres Video mit Umweltbotschaften.</p></div>
            </div>
        </a><a href='https://utopia.de/news/rammstein-musiker-ueberrascht-mit-umwelt-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Warum hat das niemand gesagt“: Rammstein-Musiker überrascht ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSeVLakuWiiXQAsVSWXm5nyX_Jk5XT3hfqUOUQ9YiBHudyh3HhD8wSVVt6zVLq6dL5JDIcxhSxz" alt="„Warum hat das niemand gesagt“: Rammstein-Musiker überrascht ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Rammstein-Musiker Christian &quot;Flake&quot; Lorenz zeichnet in einem neuen Video ein düsteres Zukunftsszenario mit dunklen Bunker inmitten einer zerstörten Welt&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rollingstone.de/rammstein-haben-das-musikvideo-zu-adieu-veroeffentlicht-ist-das-ihr-ende-2523185/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rammstein haben das Musikvideo zu „Adieu“ veröffentlicht – ist das ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRnRs91jHPSi4yJlr9AiqM6NuKygPCnRhXPEp5W8OYgyXjBXIQQlGfuDyqUv6QX7_lDkdiqIVCz" alt="Rammstein haben das Musikvideo zu „Adieu“ veröffentlicht – ist das ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit „Adieu“ haben Rammstein dieses Jahr ihren fünften Videoclip geteilt. Die Fans diskutieren bereits, ob die Truppe damit, gemäß des Titels, ein Ende ihres&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abendzeitung-muenchen.de/kultur/musik/neues-rammstein-video-adieu-ist-das-ein-abschied-art-861015'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neues Rammstein-Video &#39;Adieu&#39;: Ist das ein Abschied?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQvprhGcAZWW8CBy6ukYAhb5EA5E9_JCylEfL8wo-MGLr0LUJTStNzZYQuBMdGDz2KB9zo6Um4L" alt="Neues Rammstein-Video &#39;Adieu&#39;: Ist das ein Abschied?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rammstein haben die nächste Single aus ihrem Album &quot;Zeit&quot; in ein Video verwandelt. Titel, Text und Bilder lassen bei vielen Fans allerdings böse Vorahnungen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.berliner-kurier.de/berlin/musikvideo-adieu-von-rammstein-loest-sich-die-band-bald-auf-neue-interpretation-des-clips-gibt-den-fans-hoffnung-li.290662'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Musikvideo „Adieu“ von Rammstein: Löst sich die Band bald auf ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSfwexHuZQZf43sUW40neNX4N-SbFiJzzpNApY50i5HQ-6QkV-cpLKZDRvBZWizkQsUBZohfIyI" alt="Musikvideo „Adieu“ von Rammstein: Löst sich die Band bald auf ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fans spekulieren: Bedeuten die versteckten Botschaften im Clip wirklich, dass die Band die Karriere beendet, dass die Rocker in Rente gehen?</p></div>
            </div>
        </a><a href='https://www.bigfm.de/nachrichten/musiknews/rammstein-mitglied-flake-ueberrascht-mit-umwelt-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rammstein-Mitglied Flake überrascht mit Umwelt-Video</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR9riAJBZZ83IZP_m9PSAjLsi0FGejS4NHTT5y8SUP2IR5r0lkajoX6dvrZwNVOwqbtlu3PbhLR" alt="Rammstein-Mitglied Flake überrascht mit Umwelt-Video" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Keyboarder Flake und seine Tochter Mimi appellieren im Rahmen der Berliner Stadtreinigung an einen bewussteren Umgang mit unserem Planeten.</p></div>
            </div>
        </a><a href='https://www.laut.de/News/Rammstein-Das-neue-Video-zu-Adieu-24-11-2022-19287'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rammstein: Das neue Video zu &quot;Adieu&quot; – laut.de – News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSG7tlCa3D1YgmVcMhlnpMOlsnV4tpGs0-BZ7HDqjyYTmAv3wpDPNuoU9W0lvpdib6brTnyKcgm" alt="Rammstein: Das neue Video zu &quot;Adieu&quot; – laut.de – News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hören Rammstein tatsächlich auf? Der bisher martialischste Clip zum aktuellen Studioalbum &quot;Zeit&quot; lässt dies offen.</p></div>
            </div>
        </a><a href='https://www.watson.de/unterhaltung/klima%20&%20umwelt/279798936-rammstein-vs-klima-keyboarder-flake-ueberrascht-mit-neuem-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rammstein vs. Klima: Keyboarder Flake überrascht mit neuem Video</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQs--i67Ll5hChgFqIecg_8G7APCfu3R3F5-ppsrPuvCQvB6mLjg6CvdHTKCe2lBjuL5RGkfHIv" alt="Rammstein vs. Klima: Keyboarder Flake überrascht mit neuem Video" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Berliner Stadtreinigung (BSR) hat ein Video veröffentlicht, in dem Rammstein-Keyboarder Flake auftaucht. Dieser sitzt mit seiner Tochter in einem Bunker&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}