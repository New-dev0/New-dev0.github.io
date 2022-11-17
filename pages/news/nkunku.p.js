import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nkunku</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nkunku"/>
        <meta name="description" content="Trending News about Nkunku" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nkunku</h1>
            <Image width={800} height={500} src="https://reshape.sport1.de/c/t/92e1d763-fef8-4e40-92b9-0d77ee86feed/1200x630" alt="Nkunku"/>
            <h3>Recent News</h3>
            <a href='https://www.sport1.de/news/fussball/wm/2022/11/wm-2022-christopher-nkunku-nach-verletzungsschock-denke-an-meinen-teamkollegen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Christopher Nkunku nach Verletzungsschock: &quot;Denke an ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTpvetekdiVeOGn-w27R7PhTceQzfTJeM3uOtquRz7KAW1-lzb7BykGI03RefGpfMWW5bcNnbFg" alt="WM 2022: Christopher Nkunku nach Verletzungsschock: &quot;Denke an ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach seinem Verletzungsschock am Dienstag meldet sich Christopher Nkunku erstmals zu Wort. In einem Post richtet der 25-Jährige warme Worte an Foulspieler&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zdf.de/nachrichten/sport/kolo-muani-nkunku-frankreich-kader-wm-katar-2022-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kolo Muani für Nkunku zur WM 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT5oFR2gFZFqK7sHcoddFeKa6P266dSt8FuJkMdkD4u2roHIvUt2AotHwCVIB68MdRw7f1lrN3t" alt="Kolo Muani für Nkunku zur WM 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach dem WM-Aus von Christopher Nkunku ist Kolo Muani in Frankreichs Nationalteam nachnominiert worden. Nkunku hatte sich am Dienstag verletzt.</p></div>
            </div>
        </a><a href='https://www.boerse-express.com/news/articles/eintracht-juwel-nach-nkunku-ausfall-fuer-wm-nachnominiert-524008'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eintracht-Juwel nach Nkunku-Ausfall für WM nachnominiert</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Eintracht-Juwel nach Nkunku-Ausfall für WM nachnominiert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nun herrscht Gewissheit - das Lazarett der &quot;Equipe Tricolore&quot; wird um einen weiteren klingenden Namen ergänzt. Leipzig-Ass Christopher Nkunku zog sich&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportbuzzer.de/artikel/christopher-nkunku-verletzung-ausfall-dauer-diagnose-rb-leipzig/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Christopher Nkunku: Verletzung sorgt wohl für wochenlange Pause</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7O7WUPI5Plh9PKhUVYLvmcu0unFYsig-5TRbppVFo2WvUA7mc5zCfW85huHPvSK5kAhLNp0ST" alt="Christopher Nkunku: Verletzung sorgt wohl für wochenlange Pause" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RB-Leipzig-Star Christopher Nkunku wird Frankreich bei der WM verletzt fehlen – und wohl auch seinem Klub in der Vorbereitung auf die Wiederaufnahme des&nbsp;...</p></div>
            </div>
        </a><a href='https://sport.sky.de/fussball/artikel/wm-2022-nkunku-nach-sky-infos-am-bandapparat-verletzt/12748678/35311'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Nkunku nach Sky Infos am Bandapparat verletzt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRJG3Z_7pr9nNfd-4dO3fL8UAiyOVDLbAnVTMs0A9Ly4WY2tZPqhEgSw-SKW_3B59EpV7yHW6W8" alt="WM 2022: Nkunku nach Sky Infos am Bandapparat verletzt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Christopher Nkunku hat sich im Abschlusstraining der französischen Nationalmannschaft vor dem Abflug nach Katar verletzt und wird die WM verpassen.</p></div>
            </div>
        </a><a href='https://www.puls24.at/news/sport/wm-franzose-nkunku-verpasst-turnier-wegen-knieverletzung/281259'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM: Franzose Nkunku verpasst Turnier wegen Knieverletzung</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLOa7nf5YAjjqDi7tR5GgDp_UeQEm_11jHhhDMZfx8SNwcFRkAjNnj-U70V5RhKi2GgGMo1EgX" alt="WM: Franzose Nkunku verpasst Turnier wegen Knieverletzung" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Franzose Christopher Nkunku wird die Fußball-WM in Katar nach einer im Training erlittenen Knieverletzung verpassen.</p></div>
            </div>
        </a>
        </Template></>;
}