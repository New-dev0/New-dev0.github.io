import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>RSV Virus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,RSV Virus"/>
        <meta name="description" content="Trending News about RSV Virus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>RSV Virus</h1>
            <Image width={800} height={500} src="https://www.zdf.de/assets/krankes-kind-108~1280x720?cb=1669376205407" alt="RSV Virus"/>
            <h3>Recent News</h3>
            <a href='https://www.zdf.de/nachrichten/panorama/rsv-atemwege-krank-kinder-behandlung-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warum so viele Kinder gerade an RSV erkranken</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRBENyZmyI1xrzG-5Bz1Ka5NNLMLaphxDur6MKR-n0EHpwsX0HFS5v981YFcO1nq3VEH5yiF8D1" alt="Warum so viele Kinder gerade an RSV erkranken" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Angesichts vieler RSV-Fälle bei Kindern warnt die Divi vor &quot;Katastrophenzuständen&quot;. Was hat es mit dem Virus auf sich? Wie wird es behandelt?</p></div>
            </div>
        </a><a href='https://www.rbb24.de/panorama/beitrag/2022/11/rsv-virus-maske-atemwegserkrankung-kleinkind-krankenhaus.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steigende RSV-Fallzahlen stellen Kinderkliniken vor Probleme</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRrjw_I5fARBJ7CyTKoQxGuDfVLlsSWrImd94rv8BPCf8Dr3PHrIz7oQq5MFFzGKkMz42vMrL2o" alt="Steigende RSV-Fallzahlen stellen Kinderkliniken vor Probleme" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kinderkliniken kommen an ihre Grenzen: Das RS-Virus verursacht eine große Welle an Atemwegserkrankungen. Betroffen sind vor allem Kleinkinder.</p></div>
            </div>
        </a><a href='https://www.swp.de/panorama/rsv-rs-virus-behandlung-symptome-ansteckung-baby-kinder-impfung-67808981.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RSV: Symptome, Behandlung, Ansteckung - So gefährlich ist das ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDhOOmc-kTaUBPiP894pmC1NscJ6SBLtim4536oYzWPG-PjNqj60oOdOp_DmxN7W2p7Jvlwadt" alt="RSV: Symptome, Behandlung, Ansteckung - So gefährlich ist das ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das RS-Virus sorgt derzeit für ungewöhnlich viele Atemwegserkrankungen bei Kleinkindern. Symptome, Übertragung, Behandlung - Hier gibt es alle Infos zu RSV.</p></div>
            </div>
        </a><a href='https://www.zeit.de/gesundheit/2022-11/rs-virus-kinder-saeuglinge-impfung-antikoerper'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RS-Virus bei Kindern: Hoffnung im Kampf gegen das RS-Virus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSvUX-m-bkD4-xdLLjtt48NE2gv7Xa72_wfOsCfWPgmni5OtKb25h_w_MoyvG4_AAIjF8eiPxA0" alt="RS-Virus bei Kindern: Hoffnung im Kampf gegen das RS-Virus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RSV-Infektionen sind der häufigste Grund, warum sehr junge Kinder ins Krankenhaus müssen, und lassen diese an ihre Grenzen stoßen. Nun hoffen Ärzte auf zwei&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tagesschau.de/wissen/gesundheit/pandemie-immunitaet-kinder-rsv-101.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lage auf Kinderstationen: Warum es so viele RSV-Infektionen gibt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRubqn09f94a1Qn2ow2hJKTZNj2_tvShpHYByx7vj1UNwX1T3vUogbWhL2M79yrQXE6UF-r9uI8" alt="Lage auf Kinderstationen: Warum es so viele RSV-Infektionen gibt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kinderkliniken vermelden derzeit ungewöhnlich viele Atemwegserkrankungen. Haben die Pandemiemaßnahmen das Immunsystem geschwächt?</p></div>
            </div>
        </a><a href='https://www.ndr.de/nachrichten/niedersachsen/RSV-Immer-mehr-Kleinkinder-mit-Infektion-im-Krankenhaus,virus196.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RSV: Immer mehr Kleinkinder mit Infektion im Krankenhaus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT5EJ1DrDHAmEKVAdmyXP_6j2nlqn5z5vTFhwtXyE9ndbna92wPw7pby1--7cSFAkstQn7YVJuW" alt="RSV: Immer mehr Kleinkinder mit Infektion im Krankenhaus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Niedersachsen liegen immer mehr Kinder mit dem Respiratorischen Synzytial-Virus (RSV) im Krankenhaus. In einigen Kliniken sind bereits die Kinderbetten&nbsp;...</p></div>
            </div>
        </a><a href='https://www.spiegel.de/wissenschaft/rsv-welle-bei-kleinkindern-die-werte-gehen-senkrecht-nach-oben-a-156d1d1b-8633-4aa3-936e-dd17d055bb60'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RSV-Welle bei Kleinkindern: »Die Werte gehen senkrecht nach oben«</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSl8iCQkt58vueC3nKAfYtPZwr8y3fvKMLbwbMrjc1Rx6KeWHaHJG48xjAQJEgnFT_0ssWmvGt" alt="RSV-Welle bei Kleinkindern: »Die Werte gehen senkrecht nach oben«" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wegen Infektionen mit dem RS-Virus müssen gerade besonders viele Kinder im Krankenhaus behandelt werden. Ein Mediziner spricht von »Katastrophenzuständen«.</p></div>
            </div>
        </a>
        </Template></>;
}