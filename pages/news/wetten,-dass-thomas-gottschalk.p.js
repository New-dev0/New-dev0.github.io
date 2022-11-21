import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wetten, dass Thomas Gottschalk</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wetten, dass Thomas Gottschalk"/>
        <meta name="description" content="Trending News about Wetten, dass Thomas Gottschalk" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wetten, dass Thomas Gottschalk</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2861659/vd9ee2a/og_image.jpg" alt="Wetten, dass Thomas Gottschalk"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2861552'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Upps, Fettnäpfchen! - Gottschalk patzt bei Kult-Show „Wetten, dass..?“</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRLklVjj_U4wKiglRe4w-cw1xfzePKcX17JRK1T5XomzIygCYoORK3EizjzBhGt0Wzw53p9WoTl" alt="Upps, Fettnäpfchen! - Gottschalk patzt bei Kult-Show „Wetten, dass..?“" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Verrückte Wetten, große Showbühne, Popstars hautnah und mittendrin Showmaster Thomas Gottschalk: Das ZDF hatte „Wetten, dass..?“ 2021 wieder in alter ...</p></div>
            </div>
        </a><a href='https://www.watson.de/unterhaltung/tv/653194395-wetten-dass-thomas-gottschalk-unterlaeuft-peinlicher-fehler'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Wetten, dass..?&quot;: Thomas Gottschalk unterläuft peinlicher Fehler</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRbEPlQ9yeYVeAyt_dddCRIKV093q9cih2jXpPSoeE_Wc_2-93OC5ms7y-krmjHpsO0zSjIImjE" alt="&quot;Wetten, dass..?&quot;: Thomas Gottschalk unterläuft peinlicher Fehler" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Doch einige sahen in Gottschalks Interview mit den Fußballnationalspielerinnen Giulia Gwinn und Alexandra Popp den negativen Höhepunkt der Show. Der Moderator&nbsp;...</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/feuilleton/medien/wetten-dass-im-zdf-mit-gottschalk-und-hunziker-18474130.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Wetten, dass..?“ im ZDF: Gottschalk im Leopardenlook</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSV7T3TNtupCoO-EKRWSqAAPuXBe8Lg_jum4iC-6GS6otnHA-jTjub1STQIWq399k1dKgo4-ixZ" alt="„Wetten, dass..?“ im ZDF: Gottschalk im Leopardenlook" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Etwas mehr als zehn Millionen Zuschauer holt Thomas Gottschalk am Samstag mit „Wetten,dass..?“ im ZDF. Michelle Hunziker stellt ihn dabei...</p></div>
            </div>
        </a><a href='https://www.merkur.de/boulevard/nichts-ausser-gemuesebruehe-thomas-gottschalk-wetten-dass-auf-diaet-etv-zdf-91926781.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Nichts außer Gemüsebrühe“: Thomas Gottschalk macht vor „Wetten ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRPCXvtWJ-6Tt0ddyJZzxJd7dBbuSnNBcI5Tp8njr_5aSUxEeDsDtt3JO9d_v9oYyvMyhIhkjL0" alt="„Nichts außer Gemüsebrühe“: Thomas Gottschalk macht vor „Wetten ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thomas Gottschalk hat sich fleißig für die neue „Wetten, dass..?“-Ausgabe vorbereitet. Damit er in seinem Anzug auch super aussieht, hat er sich einer&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/kultur/medien/wetten-dass-mit-thomas-gottschalk-und-michelle-hunziker-ein-wettkoenig-namens-luetzi-oder-luetzerath/402229422'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Wetten, dass..?&quot;: Ein Wettkönig namens Lützi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQuJ5MgiHo5GroRgJre4b2TuULrU713hBTvMAA8gNkgBLaXz5T9EntAmWR98WGu0j98Iet1rahL" alt="&quot;Wetten, dass..?&quot;: Ein Wettkönig namens Lützi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die zweite Revival-Show mit Thomas Gottschalk und Michelle Hunziker brachte Stargäste aus der alten und der neuen Welt und eine sympathische politische&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fr.de/kultur/tv-kino/wetten-dass-thomas-gottschalk-zdf-michelle-hunziker-tv-show-kritik-chauvinismus-91927016.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Wetten, dass..?“ (ZDF): Thomas Gottschalks Chauvinismus macht ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSOwwUX3Il1sPueJe3k0Sa_H4jS49eJaGtTuPRulmuPng9UNei2cLzuTklhJu4iwhJL9iPN8dSe" alt="„Wetten, dass..?“ (ZDF): Thomas Gottschalks Chauvinismus macht ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das ZDF bringt mit „Wetten, dass..?“ den Dino der deutschen TV-Unterhaltung zurück auf den Bildschirm. Thomas Gottschalk macht einfach weiter,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.halternerzeitung.de/ueberregionales/wetten-dass-revival-kritik-samstag-thomas-gottschalk-michelle-hunziker-gaeste-w1812142-3000653657/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Wetten, dass..?“-Revival: Gottschalk im Schatten von Hunziker</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQpIyVwCtuemG9hqcUX3a8tWlU0KpgMM2HYGzReqTzUGAQWnai-BX9922nKE0L42D5sFe0Dh8A9" alt="„Wetten, dass..?“-Revival: Gottschalk im Schatten von Hunziker" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das ZDF hatte „Wetten, dass..?“ 2021 wieder in alter Tradition aufleben lassen - und knüpft jetzt genau daran an.</p></div>
            </div>
        </a><a href='https://www.bunte.de/stars/star-news/tv-show/thomas-gottschalk-so-gespalten-ist-die-nation-ueber-sein-wetten-dass-revival.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thomas Gottschalk : So gespalten ist die Nation über sein &quot;Wetten ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQVhhiyLPjaf0Vy-rG3p5ukYYaD99uTroqPEMFCMiwUA3btz1fKcu5BNk_RLWrFTdfS9VY6JDH" alt="Thomas Gottschalk : So gespalten ist die Nation über sein &quot;Wetten ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Top oder Flop? Das ist hier die Frage. BUNTE.de hat User-Stimmen gesammelt. | BUNTE.de.</p></div>
            </div>
        </a><a href='https://www.sport.de/news/ne5114738/wetten-dass-peinliche-panne-von-thomas-gottschalk-bei-star-des-fc-bayern/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Peinliche Gottschalk-Panne bei Bayern-Star</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRdN6CnkWnipb0njNwzc9_VqLMW9Ih7jHHsPb2ZZFwMrRhHgNPVZThJ71vmM1VXPhDKNRimPnOs" alt="Peinliche Gottschalk-Panne bei Bayern-Star" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In der &quot;ZDF&quot;-Show &quot;Wetten, dass...?&quot; waren am Samstagabend die beiden Fußball-Nationalspielerinnen Alexandra Popp vom VfL Wolfsburg und Giulia Gwinn vom FC&nbsp;...</p></div>
            </div>
        </a><a href='https://www.heute.at/s/wetten-dass-gehoert-abgeschafft-fuer-immer-100239568'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Wetten, dass..?&quot; gehört abgeschafft – für immer!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJ_FcYpV_nkU7kg6Kt4Ky1Kq7rPDccCkLYcgMw8VabXUBz7GOKktEoNns2mPjzZblX0T0zOgO6" alt="&quot;Wetten, dass..?&quot; gehört abgeschafft – für immer!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Es ist ja nicht so, als ob ich mich nicht auf die Show mit dem Gottschalk gefreut hätte. Aber ich glaube, irgendwann reicht es dann auch.</p></div>
            </div>
        </a>
        </Template></>;
}