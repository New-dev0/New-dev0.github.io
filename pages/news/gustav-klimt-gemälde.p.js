import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gustav Klimt gemälde</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gustav Klimt gemälde"/>
        <meta name="description" content="Trending News about Gustav Klimt gemälde" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gustav Klimt gemälde</h1>
            <Image width={800} height={500} src="https://image.kurier.at/images/fb_kurierat_plus/7368438/46-192108190.jpg" alt="Gustav Klimt gemälde"/>
            <h3>Recent News</h3>
            <a href='https://kurier.at/chronik/oesterreich/emilie-floege-alter-glanz-fuer-wiens-wertvollstes-gemaelde/402221739'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Emilie Flöge“: Alter Glanz für Wiens wertvollstes Gemälde</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSiv42D73Cj1sAWD4-GoErHcQbHbTWega7SFwTRYykk36Odn2DAtCQ9tbSKbypxE3fuBY_EEvjA" alt="„Emilie Flöge“: Alter Glanz für Wiens wertvollstes Gemälde" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gustav Klimt porträtierte 1902 seine Muse. Nun wurde das Bild restauriert, Spritzer auf Emilies Gesicht wurden entdeckt – „Anschlag“ war das keiner.</p></div>
            </div>
        </a>
        </Template></>;
}