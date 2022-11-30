import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gakpo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gakpo"/>
        <meta name="description" content="Trending News about Gakpo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gakpo</h1>
            <Image width={800} height={500} src="https://boerse-express.com/public/images/socialshare/share_placeholder.jpg" alt="Gakpo"/>
            <h3>Recent News</h3>
            <a href='https://www.boerse-express.com/news/articles/ex-oranje-star-raet-wm-held-gakpo-zu-diesem-klub-527821'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-Oranje-Star rät WM-Held Gakpo zu diesem Klub</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTEOxHWXfeTmwv7A4-p2TmPG1PHpKglXeIQ1shhtb29qokOTTE0Ag0NcCSisH96KsuTIszzfEeb" alt="Ex-Oranje-Star rät WM-Held Gakpo zu diesem Klub" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auch dank der Tore von Cody Gakpo dürfen die Niederlande den Einzug ins WM-Achtelfinale bejubeln. In allen drei Gruppenspielen (gegen Senegal,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.skysportaustria.at/gakpo-stellt-neuen-wm-rekord-auf/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gakpo stellt neuen WM-Rekord auf - Sky Sport Austria</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSuGWUnaDjeFUsFW21ukk_ZG1ZFVIa4FHjEHYoEwQ4AmFWpRay0qt-9hNLWw2hRkL4pLzG3cu6b" alt="Gakpo stellt neuen WM-Rekord auf - Sky Sport Austria" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cody Gakpo konnte durch seinen Treffer am Dienstag gegen Gastgeber Katar zum 1:0 einen neuen Rekord aufstellen. Der 23-Jährige ist der erste Niederländer.</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/wm/2022/11/wm-2022-tor-meilenstein-cody-gakpo-zieht-mit-drei-ikonen-gleich'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Tor-Meilenstein! Cody Gakpo zieht mit drei Ikonen gleich</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWfk0b6xoZAX6tWj8Y2eLIIF8LmwO2lBXC5nd9cFQSvfMpLIsIvIyhHgSq_64OUp4UxfjDM9cg" alt="WM 2022: Tor-Meilenstein! Cody Gakpo zieht mit drei Ikonen gleich" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cody Gakpo trifft auch in seinem dritten WM-Auftritt für die Niederlande - und zieht mit diesem Meilenstein in eine legendäre Ahnengalerie ein.</p></div>
            </div>
        </a><a href='https://www.focus.de/sport/fussball/wm-2022/nicht-musiala-nicht-gavi-niederlaender-gakpo-ist-der-wm-shootingstar-ueber-den-niemand-sprach_id_180415644.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nicht Musiala oder Gavi: Gakpo ist der WM-Shootingstar, über den ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQxMihuebMax_e0R43lFDeSWcZiUJAybXF_SsXnOU4M9eTM4Mti3gEr88Ap1rp7tI-ajLIrLKYD" alt="Nicht Musiala oder Gavi: Gakpo ist der WM-Shootingstar, über den ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nicht Jamal Musiala, Jude Bellingham oder Gavi - Cody Gakpo ist der Shootingstar der bisherigen WM. Der Niederländer hat in allen drei Gruppenspielen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}