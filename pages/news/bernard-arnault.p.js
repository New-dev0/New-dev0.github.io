import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bernard Arnault</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bernard Arnault"/>
        <meta name="description" content="Trending News about Bernard Arnault" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bernard Arnault</h1>
            <Image width={800} height={500} src="https://cdn.prod.www.manager-magazin.de/images/e8b26641-086e-4fd1-b85c-6374ef27bdd4_w1280_r1.77_fpx56_fpy28.jpg" alt="Bernard Arnault"/>
            <h3>Recent News</h3>
            <a href='https://www.manager-magazin.de/unternehmen/handel/bernard-arnault-so-tickt-der-laut-forbes-neue-reichste-mensch-der-welt-a-841d5e86-3a59-4543-bcc7-51509881297b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Forbes&quot;-Reichstenliste: Bernard Arnault – so tickt der neue reichste ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRiZIU6f1wfxEhVsXxDfOhQt3BeUe2gwgmkkm2xxEWubUKqUjY8YdaBK8BxoeEnQMzspefD2LsT" alt="&quot;Forbes&quot;-Reichstenliste: Bernard Arnault – so tickt der neue reichste ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bernard Arnault, Herrscher über den Luxuskonzern LVMH, hat Elon Musk vom Thron gestoßen und ist jetzt der reichste Mann der Welt.</p></div>
            </div>
        </a><a href='https://www.watson.ch/international/elon%20musk/930780091-bernard-arnault-ist-neu-der-reichste-mensch-der-welt'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bernard Arnault ist neu der reichste Mensch der Welt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSC9_lX_6gXZ4J9QGjaq31PZR4qS7oSOJMYPeifBl_cdbpKjHkSqMwmPrehwnkdpqoTuAsFBTUv" alt="Bernard Arnault ist neu der reichste Mensch der Welt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auf die Reichenliste des Wirtschaftsmagazins «Forbes» schaffen es nur Multimilliardäre. Der umstrittene US-Unternehmer Musk wurde nun vom Spitzenplatz&nbsp;...</p></div>
            </div>
        </a><a href='https://www.focus.de/finanzen/irres-rennen-mit-bernard-arnauld-elon-musk-wird-zweimal-an-einem-tag-als-reichster-mensch-abgeloest_id_180438747.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elon Musk wird zweimal an einem Tag als reichster Mensch der ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ3DoWG2H_i-OOWoRelfiTm6yN5wDa1pR368vGFDh5GoQ6NgMa2XKtx2QSlYo7zAhyYh35WAkt5" alt="Elon Musk wird zweimal an einem Tag als reichster Mensch der ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auf der „Forbes“-Liste der Superreichen liefern sich Elon Musk und Bernard Arnault am Mittwoch ein spannendes Rennen um den ersten Platz.</p></div>
            </div>
        </a><a href='https://www.20min.ch/story/bernard-arnault-stoesst-elon-musk-vom-reichsten-thron-726211581274'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bernard Arnault ist vor Elon Musk der reichste Mensch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSNoT7bpBBqbUulXQVkf76vTb8VN48Ax7-TglcfNCQhIHxyRwwuQF9pzUNomVOFfa4v4_aiPxyH" alt="Bernard Arnault ist vor Elon Musk der reichste Mensch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am Mittwoch übernahm der französische Unternehmer Bernard Arnault den ersten Platz auf der Forbes-Liste. Seither wechseln sich er und Elon Musk an der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lessentiel.lu/de/story/so-kam-der-neue-reichste-mann-der-welt-an-sein-vermoegen-888138890625'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bernard Arnault: So kam der neue reichste Mann der Welt an sein ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSIDxuUNWYS8p1E6Z1f9ov9h0Ik5Z-OfPUmf-11LiDRGEGeJ00OXwckPImPhTwu9MCeHkWgDRJG" alt="Bernard Arnault: So kam der neue reichste Mann der Welt an sein ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Forbes-Liste der reichsten Menschen führt am Donnerstag neu Bernard Arnault als Nummer eins an. Doch wie ist der 73-jährige Unternehmer zu seinem&nbsp;...</p></div>
            </div>
        </a><a href='https://k.at/entertainment/elon-musk-fuer-kurze-zeit-nicht-mehr-reichster-mensch-der-welt/402252258'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elon Musk: Für kurze Zeit nicht mehr reichster Mensch der Welt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQTFPPI-o3ZQsN3ahktoWWaUlXmaDWMOAvr_1K6rvA5L-7icMfdJm0JyztVm0-eR3C-ROl0sEd" alt="Elon Musk: Für kurze Zeit nicht mehr reichster Mensch der Welt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elon Musk: Der Twitter-Kauf und die schwankenden Tesla-Aktien haben das Vermögen von Elon Musk verringert - am Mittwoch wurde der Milliardär sogar&nbsp;...</p></div>
            </div>
        </a><a href='https://www.oe24.at/businesslive/manager/irres-milliardaers-duell-um-spitzenplatz-auf-reichen-liste/538324453'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Irres Milliardärs-Duell um Spitzenplatz auf Reichen-Liste</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQqV49c22Qq8rk9uthi3E8OqcZsuCYoXujLUAsmZYrkOQ4RCRmwn_3AahrLO540qfe4KTksrGBl" alt="Irres Milliardärs-Duell um Spitzenplatz auf Reichen-Liste" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elon Musk stürzt vom Reichen-Thron: Wegen des Crashs seiner Tesla-Aktien rutscht er auf der &quot;Forbes&quot;-Reichenliste auf Platz 2 ab, hinter den französischen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}