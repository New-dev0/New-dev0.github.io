import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Harrison Ford</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Harrison Ford"/>
        <meta name="description" content="Trending News about Harrison Ford" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Harrison Ford</h1>
            <Image width={800} height={500} src="https://image.kurier.at/images/facebook/7451484/indiana-jones-5-harrison-ford.jpeg" alt="Harrison Ford"/>
            <h3>Recent News</h3>
            <a href='https://kurier.at/kultur/erster-trailer-fuer-indiana-jones-5-harrison-ford-in-actionszenen/402245778'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erster Trailer für &quot;Indiana Jones 5&quot;: Harrison Ford in Actionszenen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRrglbiCK14KfGt7CNP3ltSxMZQOF4naw66lxTcTuQwx6gLF7mwtWU4W90mDk24SstB-JFWUhHa" alt="Erster Trailer für &quot;Indiana Jones 5&quot;: Harrison Ford in Actionszenen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die zu Disney gehörende Firma Lucasfilm stellte das Video am Donnerstag (Ortszeit) ins Netz. Der für Juni 2023 angekündigte Film hat den Titel &quot;Indiana Jones&nbsp;...</p></div>
            </div>
        </a><a href='https://www.spiegel.de/kultur/kino/indiana-jones-5-trailer-mit-harrison-ford-bis-zum-letzten-peitschenknall-a-ba5eedde-8101-4260-a5e6-d2852ff0eb5f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erster Trailer für »Indiana Jones 5«: Bis zum letzten Peitschenknall</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSUOl1PPmY5v6SOHf3LvNVPYoffHSGSOMLGuiM29XTRWzHAtI3DGRcaTs31ovF0Ttb4bufVCkKo" alt="Erster Trailer für »Indiana Jones 5«: Bis zum letzten Peitschenknall" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Harrison Ford wird im kommenden Sommer zum letzten Mal als Indiana Jones zu sehen sein. Nun wurde der erste Trailer des neuen Films veröffentlicht.</p></div>
            </div>
        </a><a href='https://www.promiflash.de/news/2022/12/02/neuer-indiana-jones-trailer-zeigt-harrison-ford-verjuengt.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neuer &quot;Indiana Jones&quot;-Trailer zeigt Harrison Ford verjüngt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTDM02EpkzKlfSMtCi22QXHs5ba3YczLQJ1xS20U1-L4sQ-mLt44o85jOpi1Ss2LsGvQQLP7V4t" alt="Neuer &quot;Indiana Jones&quot;-Trailer zeigt Harrison Ford verjüngt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Harrison Ford (80) gibt als Indiana Jones immer noch alles. Mittlerweile stand der Hollywoodstar bereits fünfmal als schatzsuchender Archäologe vor der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.t-online.de/unterhaltung/kino/id_100091464/indiana-jones-5-so-wirkt-harrison-ford-mit-80-jahren-in-action.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indiana Jones 5: So wirkt Harrison Ford mit 80 Jahren in Action</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQc0wfmRxMXcdVVEd__pvh64R0r87lYXBB1eNxMFuxlTypevqpvsgpNZXk6cndmqkEMFtQZEHNP" alt="Indiana Jones 5: So wirkt Harrison Ford mit 80 Jahren in Action" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seit 1981 ist er der Lederwesten-Held mit der Peitsche: Harrison Ford als Indiana Jones. Jetzt gibt es den ersten Blick auf den fünften Teil der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stuttgarter-nachrichten.de/inhalt.indiana-jones-und-der-ruf-des-schicksals-kann-harrison-ford-als-abenteuer-opa-ueberzeugen.8df3e249-31d0-4ca6-b7f5-25258517c499.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indiana Jones und der Ruf des Schicksals - Kann Harrison Ford als ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRYO37VHx8PMRxuqgfBDUA5eGCl5JMR2-Q7mCJQxjANk8iBCOmArcexgKuaQ2iEclgTxANG5oSo" alt="Indiana Jones und der Ruf des Schicksals - Kann Harrison Ford als ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit Peitsche und Hut: Der Kult-Abenteurer Indiana Jones kehrt auf die Leinwand zurück. Diesmal geht es wieder den Nazis an den Kragen, wie der erste Trailer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stern.de/kultur/film/kinotrailer/-indiana-jones-5--im-ersten-abenteuerlichen-trailer-mit-harrison-ford-32970304.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indy ist zurück! &quot;Indiana Jones und der Ruf des Schicksals&quot; im ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS5iElA427iIPwfnyC21kudTB1fp-VTUq1-OKO7Du1-CXP9eITWe3xgZ8XsUeWo55Od1kfIVber" alt="Indy ist zurück! &quot;Indiana Jones und der Ruf des Schicksals&quot; im ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indiana Jones ist der wohl berühmteste Archäologe der Filmgeschichte. Seit 1981 verkörpert Hollywood-Legende Harrison Ford den Kult-Abenteurer.</p></div>
            </div>
        </a><a href='https://www.mopo.de/news/erster-indiana-jones-trailer-harrison-ford-packt-die-peitsche-wieder-aus/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Indiana Jones“ ist wieder da: Harrison Ford packt die Peitsche aus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQvvJpcfTZmVzJFyI8GMTWqmOhf1AXs1TyznoOo2X8P2Go1gQxQnneRq5fzWpw2wHEYGujUWBf" alt="„Indiana Jones“ ist wieder da: Harrison Ford packt die Peitsche aus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die zu Disney gehörende Firma Lucasfilm stellte das Video am Donnerstag ins Netz. Der für Juni 2023 angekündigte Film hat den Titel „Indiana Jones And The Dial&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}