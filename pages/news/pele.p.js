import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pele</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pele"/>
        <meta name="description" content="Trending News about Pele" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pele</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/1897505/vb48634/og_image.jpg" alt="Pele"/>
            <h3>Recent News</h3>
            <a href='https://www.boerse-express.com/news/articles/brasilien-legende-pele-wieder-in-krankenhaus-eingeliefert-528181'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brasilien-Legende Pele wieder in Krankenhaus eingeliefert</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Brasilien-Legende Pele wieder in Krankenhaus eingeliefert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die brasilianische Fußball-Legende Pele ist im Kampf gegen den Krebs erneut ins Krankenhaus eingeliefert worden. Wie seine Tochter am Mittwoch in den&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2870677'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Große Sorgen um Ikone - Pele im Kampf gegen Krebs wieder im ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRPlruKn_aGpeJMesbp4Qj4SDa32f-3og-1t6G6JPWHdTs7rNMyyTgN6v7-B1on4Nh1RiM_DexP" alt="Große Sorgen um Ikone - Pele im Kampf gegen Krebs wieder im ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die brasilianische Fußball-Legende Pele ist im Kampf gegen den Krebs erneut ins Krankenhaus eingeliefert worden! Wie seine Tochter am Mittwoch in den ...</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/fussball/international/2211/News/brasilien-idol-pele-im-krankenhaus-tochter-gibt-entwarnung.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pelé ins Krankenhaus eingeliefert: Tochter gibt Entwarnung</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRLtiXugh1JcyixTRYVOivqF_U3DPNEsccIcjc2l3rIBXRNhTpzQpSjJua-Gb1yZ59sZGeWwKY6" alt="Pelé ins Krankenhaus eingeliefert: Tochter gibt Entwarnung" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die brasilianische Fußball-Legende Pelé ist erneut in ein Krankenhaus in Sao Paulo eingeliefert worden. Ein Notfall bestehe jedoch nicht, teilte Peles&nbsp;...</p></div>
            </div>
        </a><a href='https://www.skysportaustria.at/brasiliens-legende-pele-erneut-ins-krankenhaus-eingeliefert/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brasiliens Legende Pele erneut ins Krankenhaus eingeliefert - Sky ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSztDli5gtWl-anKF2M08SwYFAtbNPGZS5iSYY9W71Y6OZet64kWpgZMBflTMFrX-dsWjhUnidc" alt="Brasiliens Legende Pele erneut ins Krankenhaus eingeliefert - Sky ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die brasilianische Fußball-Legende Pele ist im Kampf gegen den Krebs erneut ins Krankenhaus eingeliefert worden. Wie seine Tochter am Mittwoch in den.</p></div>
            </div>
        </a><a href='https://www.oe24.at/sport/fussball/international/fussballlegende-pele-erneut-ins-spital-eingeliefert/537468774'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fußballlegende Pele erneut ins Spital eingeliefert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSz6_6I6EzljJz-NVrjh5hHFk9VLMFiuGcucQEIGqbckpcfsKYWpe_kKIODxwGzyuP8pci9KVeH" alt="Fußballlegende Pele erneut ins Spital eingeliefert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Fußballlegende Pelé wurde in ein Krankenhaus in Sao Paulo eingeliefert. Sein Zustand soll sich &quot;verschlechtert&quot; haben.</p></div>
            </div>
        </a><a href='https://www.stern.de/sport/fussball/pel%C3%A9--brasiliens-fussball-legende-liegt-im-krankenhaus-32964728.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pelé: Brasiliens Fußball-Legende liegt im Krankenhaus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNEPtfAPna_6q0qW3Si0KooNlOoEioUYktvAsyoqZFjXrP5n6N6FezxXiIXxIINWCA2__xqbgt" alt="Pelé: Brasiliens Fußball-Legende liegt im Krankenhaus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Schon länger hat Pelé mit Gesundheitsproblemen zu kämpfen. Nun wurde er wieder ins Krankenhaus eingeliefert. Seine Tochter und die Klinik geben Entwarnung.</p></div>
            </div>
        </a><a href='https://www.bild.de/sport/fussball/fussball-international/pele-grosse-sorgen-um-brasilien-legende-herz-probleme-und-mental-verwirrt-82112510.bild.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pele: Große Sorgen um Brasilien-Legende! Herz-Probleme und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQGC21YNNWojMqtf5sLmC9EBbSKNUgNXdz_LHt7AG0Gw3ESOJamn4bF7JXEHdj3F3vphp_MZPZX" alt="Pele: Große Sorgen um Brasilien-Legende! Herz-Probleme und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die an Krebs erkrankte Brasilien-Legende wurde nach übereinstimmenden brasilianischen Medienberichten am Dienstag in das Albert-Einstein-Krankenhaus in São&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}