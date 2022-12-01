import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Stewart Rhodes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Stewart Rhodes"/>
        <meta name="description" content="Trending News about Stewart Rhodes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Stewart Rhodes</h1>
            <Image width={800} height={500} src="https://media0.faz.net/ppmedia/aktuell/politik/ausland/1181070422/1.8500390/facebook_teaser/stewart-rhodes-im-juni-2016-in.jpg" alt="Stewart Rhodes"/>
            <h3>Recent News</h3>
            <a href='https://www.faz.net/aktuell/politik/ausland/sturm-auf-us-kapitol-anfuehrer-rechtsextremer-miliz-verurteilt-18498060.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Milizführer verurteilt: Gericht sieht Kapitolssturm als Verschwörung an</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ9W7oT828_Wnxkv6trE_XoyoBUOucbJflExkeJomJwgB8gTIEnzSkHXGq4iWybMyIzllQ6F-yj" alt="Milizführer verurteilt: Gericht sieht Kapitolssturm als Verschwörung an" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erstmals wurden Tatbeteiligte der Erstürmung des Kapitols wegen „aufrührerischer Verschwörung“ verurteilt. Ein wichtiger Sieg für...</p></div>
            </div>
        </a><a href='https://www.stern.de/politik/ausland/kapitol-sturm--rechter--oath-keepers--anfuehrer-fuer-verschwoerung-verurteilt-32962128.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kapitol-Sturm: Rechter &quot;Oath Keepers&quot;-Anführer für Verschwörung ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQl413kQEVrcFkmg0xVsXrxu1fUu1RQ2Xd1V6b0qR2CklyQo6zkWyoVHxYQ3Kl46vDC2Ax1LCYF" alt="Kapitol-Sturm: Rechter &quot;Oath Keepers&quot;-Anführer für Verschwörung ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Knapp zwei Jahre nach dem Sturm aufs Kapitol wird nun der rechtsextreme Anführer der &quot;Oath Keepers&quot; verurteilt - mittels eines seltenen Straftatbestands.</p></div>
            </div>
        </a><a href='https://www.sueddeutsche.de/politik/sturm-kapitol-oath-keepers-stewart-rhodes-urteil-1.5706204'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sturm aufs US-Kapitol: Oath Keepers-Anführer Stewart Rhodes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSMYXX8402FBITYrvY2ulf8iis8OKKNnnnXhtkInEXXQ6dJkxY02Vp87DoqJoI-xrvBztUfAw-6" alt="Sturm aufs US-Kapitol: Oath Keepers-Anführer Stewart Rhodes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eine Jury befindet Stewart Rhodes als Anführer der Oath Keepers wegen &quot;aufrührerischer Verschwörung&quot; für schuldig. Wie viel Haft ihm droht.</p></div>
            </div>
        </a><a href='https://www.weekend.at/politik/milizenfuehrer-steward-rhodes-schuldig-gesprochen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>USA: Milizenführer als Verschwörer schuldig gesprochen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQuJWn0rW7Fr7RoT7pnGJQCkaV2HKSGI7JWu5ZvSiZP6Sz4TM_iu9rmIcJ8IO7FyM9MgVfooRss" alt="USA: Milizenführer als Verschwörer schuldig gesprochen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stewart Rhodes, Anführer der rechtsextremen Miliz &quot;Oath Keepers&quot;, ist zwei Jahre nach der Erstürmung des US-Kapitols verurteilt worden.</p></div>
            </div>
        </a><a href='https://www.zeit.de/gesellschaft/zeitgeschehen/2022-11/stewart-rhodes-oath-keepers-us-miliz-schuldspruch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sturm auf das US-Kapitol: Gründer von rechtsextremer US-Miliz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQxcNZtfHX6k8zeSc_BypPOXtgIZJk2mQRDDAemlSCr2SvzlXZcP9QLCiR56Yb45FktxTls7Gif" alt="Sturm auf das US-Kapitol: Gründer von rechtsextremer US-Miliz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein Geschworenengericht hat Stewart Rhodes nach dem Sturm auf das US-Kapitol wegen &quot;aufrührerischer Verschwörung&quot; verurteilt. Dem 57-Jährigen drohen bis zu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nzz.ch/international/us-jury-anfuehrer-der-rechtsextremen-oath-keepers-schuldig-ld.1714721'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US-Jury: Anführer der rechtsextremen Oath Keepers schuldig</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSifP2N1LQsoVA864ZxJxZn-r2cbMzvEaUiH_GgbQYqch1HqrwIwUjDdgVwgfBYwzqvMGHje9JW" alt="US-Jury: Anführer der rechtsextremen Oath Keepers schuldig" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein Geschworenengericht in Washington hat am Dienstag Stewart Rhodes wegen «aufrührerischer Verschwörung» am 6. Januar 2021 für schuldig gesprochen.</p></div>
            </div>
        </a><a href='https://www.spiegel.de/ausland/usa-oath-keepers-anfuehrer-stewart-rhodes-wegen-kapitol-attacke-schuldig-gesprochen-a-981bea5b-abdf-4d7c-a53d-215a3173c8af'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>»Aufrührerische Verschwörung«: Anführer rechter Miliz wegen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR1wLFVeln_8NgSw5G4QLxtRra8CZxmwrpujD_dNHJtZH4C0NnDh-BvyZc7VwCUqdUfWgtjn-fO" alt="»Aufrührerische Verschwörung«: Anführer rechter Miliz wegen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eine Geschworenenjury hat den Gründer der rechtsextremen Miliz »Oath Keepers« wegen seiner Rolle bei der Erstürmung des US-Kapitols schuldig gesprochen.</p></div>
            </div>
        </a>
        </Template></>;
}