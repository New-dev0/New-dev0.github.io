import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Manuel Neuer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Manuel Neuer"/>
        <meta name="description" content="Trending News about Manuel Neuer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Manuel Neuer</h1>
            <Image width={800} height={500} src="https://images.sportbuzzer.de/v1/photos/raw/mandatory-credit-photo-by-javier-garcia-shutterstock-13634885is-goalkeeper-manue/large-16-9" alt="Manuel Neuer"/>
            <h3>Recent News</h3>
            <a href='https://www.sportbuzzer.de/artikel/manuel-neuer-rekord-wm-dfb-deutschland-costa-rica-sepp-maier-reaktionen/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mit Einsatz gegen Costa Rica: DFB-Torwart Manuel Neuer sichert ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTKPqB834OlH3BTb6eBap4BPPwyG1BgLMPuZOwW22N7v4VbMGYFjNgI5Ga3hVjdRHJuh0u4hdP4" alt="Mit Einsatz gegen Costa Rica: DFB-Torwart Manuel Neuer sichert ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit seinem Einsatz im entscheidenden WM-Gruppenspiel gegen Costa Rica hat sich DFB-Keeper Manuel Neuer zum alleinigen WM-Rekordtorwart gemacht.</p></div>
            </div>
        </a><a href='https://sport.sky.de/fussball/artikel/wm-2022-manuel-neuer-neuer-rekordtorwart/12759736/35857'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Manuel Neuer neuer Rekordtorwart</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSVjrDkDYkPq2oViQF6F1qz-G-i4AmQZ9KhUCeZGWgZb1GTPRTRB8I858TGOp7S2AOsb2JfDsU" alt="WM 2022: Manuel Neuer neuer Rekordtorwart" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manuel Neuer ist alleiniger WM-Rekordtorwart. Der 36 Jahre alte Schlussmann vom FC Bayern München bestreitet am Donnerstagabend gegen Costa Rica sein 19.</p></div>
            </div>
        </a><a href='https://www.heimatsport.de/fussball/profis/international/ein-musiala-reicht-nicht-ein-team-voller-ausfaelle-selbst-torhueter-manuel-neuer-erreicht-keine-normalform-8396469'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ein Musiala reicht nicht – Ein Team voller Ausfälle: Selbst Torhüter ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTf6Q65BRx1F-FJq1UFVCZmSkOAR4OgoWqJOgtF8A6tiEvN1kvaLcgLW92DxfGocRmObxGESdNn" alt="Ein Musiala reicht nicht – Ein Team voller Ausfälle: Selbst Torhüter ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manuel Neuer: Der Kapitän rückte mit seinem 19. Spiel zum WM-Rekordtorhüter auf. Verhinderte gegen Fuller stark den Ausgleich, klat ...</p></div>
            </div>
        </a><a href='https://www.skysportaustria.at/neuer-stellt-wm-rekord-auf/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neuer stellt WM-Rekord auf - Sky Sport Austria</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQhXnsQFOJeKKfMUjfVdub5oJigUyy6PHvWedSVb6rd-YIvIFJobsgrQw7iNlfRgPekr19anSv" alt="Neuer stellt WM-Rekord auf - Sky Sport Austria" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manuel Neuer hat einen WM-Rekord für Torhüter aufgestellt. Der Kapitän der deutschen Fußball-Nationalmannschaft bestritt am Donnerstagabend in Al-Khor.</p></div>
            </div>
        </a><a href='https://www.der-postillon.com/2022/12/onelove-2026.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manuel Neuer will beim nächsten WM-Spiel One-Love-Binde tragen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRNzGImXNHejfAKYQJRxSoZS7ZetLtWWcdwyFqr7o07DmPLIZ8H_3WCp-g6G3b96W21PKep12Ws" alt="Manuel Neuer will beim nächsten WM-Spiel One-Love-Binde tragen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Al-Khor (dpo) - Er will sich nicht länger zensieren lassen: DFB-Kapitän Manuel Neuer hat angekündigt, beim nächsten WM-Spiel die One-Love-Binde zu tra.</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/wm/2022/12/wm-2022-neuer-knackt-wm-rekord'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Neuer knackt WM-Rekord - und mit Monsterparade!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS9WuW1XDp-Chi--ivLdKH-JfSG7VZUI_kljc532wGsuuGK5wxv_jl4hSOvkpfL84WCzgikwSnv" alt="WM 2022: Neuer knackt WM-Rekord - und mit Monsterparade!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit dem Spiel gegen Costa Rica schnappt sich Manuel Neuer einen WM-Rekord. Der 36-Jährige ist jetzt der Torhüter mit den meisten WM-Einsätzen.</p></div>
            </div>
        </a><a href='https://www.tag24.de/sport/fussball/fifa-weltmeisterschaft/sepp-maier-gratuliert-manuel-neuer-zu-wm-rekord-torwart-legende-besorgt-wegen-schulter-2679332'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sepp Maier gratuliert Manuel Neuer zu WM-Rekord: Torwart ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcShhtaRN7N6Z4AC_z0RskZBIufThEFceBouh9dWguIPd_GRcP2AwRB7u-7qzKmafdlNdENHZ-x_" alt="Sepp Maier gratuliert Manuel Neuer zu WM-Rekord: Torwart ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sepp Maier hat Nationaltorwart Manuel Neuer zu dessen bevorstehendem WM-Rekord gratuliert. Allerdings macht er sich ein wenig Sorgen um dessen Schulter.</p></div>
            </div>
        </a><a href='https://www.tz.de/sport/fussball/wm-rekord-sepp-maier-dfb-kapitaen-manuel-neuer-kritik-sorgen-schulter-der-nation-zr-91950584.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sepp Maier zählt DFB-Kapitän Neuer an - „Dumm ausgeschaut“</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSEzDRBV4zEV9XnKDm7m0z8snD4GknGS8Kmc2dcLG9lJ3W55kY_frH99szC0ssvyzoeEUR_04qu" alt="Sepp Maier zählt DFB-Kapitän Neuer an - „Dumm ausgeschaut“" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sepp Maier verliert seinen WM-Rekord an Manuel Neuer. Die Bayern-Legende macht den Nationalkeeper für zwei Gegentore mit verantwortlich.</p></div>
            </div>
        </a><a href='https://www.nzz.ch/sport/wm-blog-ueber-diesen-rekord-wird-sich-manuel-neuer-kaum-freuen-belgiens-trainer-tritt-nach-dem-vorrunden-aus-zurueck-ld.1714910'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fussball-WM 2022: Deutschland scheidet aus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTZMEBO5QXlbLknohR9-ylciCu0DtOb7L9pT45EP5VK3X6Tdeim7nLlUdyWSzodMcjs-GfbPtgg" alt="Fussball-WM 2022: Deutschland scheidet aus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Belgiens Trainer Martinez tritt nach Out zurück. Roberto Martinez hat umgehend nach dem WM-Vorrunden-Aus seinen Rücktritt als belgischer Nationaltrainer&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}