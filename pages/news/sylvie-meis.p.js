import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sylvie Meis</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sylvie Meis"/>
        <meta name="description" content="Trending News about Sylvie Meis" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sylvie Meis</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2869395/va26629/og_image.jpg" alt="Sylvie Meis"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2869411'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lady in Red - Sylvie Meis zieht am Strand alle Blicke auf sich</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRSysSpXYEuJyYrcxUm9Uqe9xSHeHGnWHasEi4tIuGOm3WuUA0M_qJNxO8GyZOLsBDaTAPbvp9B" alt="Lady in Red - Sylvie Meis zieht am Strand alle Blicke auf sich" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Irgendwo ist immer Sommer. Einen Ort, wo das zutrifft, hat die niederländische Moderatorin Sylvie Meis jetzt als Urlaubsort für die Adventzeit ...</p></div>
            </div>
        </a><a href='https://www.nau.ch/people/welt/sylvie-meis-zeigt-ihren-trainierten-korper-auf-instagram-66353942'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sylvie Meis zeigt ihren trainierten Körper auf Instagram</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQnUhrhMMmnYrMklX_mQHhcNGyJebhwjAkiIHLa7TcYvq8OfG1HclXYYvvb1nEqCc2ct7oIwLo-" alt="Sylvie Meis zeigt ihren trainierten Körper auf Instagram" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sylvie Meis ist absolut sehenswert! Auf Instagram zeigt sie ihren trainierten Körper, denn sie befindet sich gerade in Miami.</p></div>
            </div>
        </a><a href='https://www.tag24.de/unterhaltung/promis/sylvie-meis/sylvie-meis-teilt-heissen-clip-vom-pool-fans-flippen-aus-2677642'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sylvie Meis teilt heißen Clip vom Pool: Fans flippen völlig aus!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQvgsvPTS2xORhCDdqnlqQj1nObqP9GLP1lLm90MoP2xfyJJ-GYoLjqHsMnIE-Q77bumffOZx0" alt="Sylvie Meis teilt heißen Clip vom Pool: Fans flippen völlig aus!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sylvie Meis weiß, wie sie ihren Traumbody in Szene setzen kann. Nun macht sie ihre Fans mit einem heißen Pool-Clip verrückt! | TAG24.</p></div>
            </div>
        </a><a href='https://www.express.de/promi-und-show/sylvie-meis-zeigt-ihre-kehrseite-im-knappen-bikini-sexy-goettin-374827'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sylvie Meis zeigt ihre Kehrseite im knappen Bikini: „Sexy Göttin“</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSSrBToqnqjI7V6VeAebjwv_fTtX4AznOoysv0uXs7HqArxOTwEL8pScHy_Qrnhg0OM3evRW2bR" alt="Sylvie Meis zeigt ihre Kehrseite im knappen Bikini: „Sexy Göttin“" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sie zeigt, was sie hat: Sylvie Meis hat mit Fotos im Bikini für eine Welle der Begeisterung bei ihren Fans gesorgt – und dafür Komplimente en masse&nbsp;...</p></div>
            </div>
        </a><a href='https://www.promiflash.de/news/2022/11/29/heisser-paerchen-ausflug-sylvie-meis-und-niclas-am-strand.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Heißer Pärchen-Ausflug: Sylvie Meis und Niclas am Strand</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQqOLRf13_nIfYj42Y7bcqz5QJMiOyyGhS48P7im-fCeoqZZirzyvZeN226VpLfQZHuynIZcjUR" alt="Heißer Pärchen-Ausflug: Sylvie Meis und Niclas am Strand" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dieser Strandbesuch kann sich sehen lassen! Aktuell ist Sylvie Meis (44) mit ihrem Mann Niclas Castello in Miami – der renommierte Künstler nimmt dort an&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}