import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bones and All</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bones and All"/>
        <meta name="description" content="Trending News about Bones and All" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bones and All</h1>
            <Image width={800} height={500} src="https://ibs.orf.at/news?image=https%3A%2F%2Fassets.orf.at%2Fmims%2F2022%2F48%2F70%2Fcrops%2Fw%3D1200%2Ch%3D630%2Cq%3D75%2F1580455_master_578470_bones_and_all_film_n.jpg%3Fs%3D82b0b34b97b2eb5e8abe211896c1ea1ab5f23886" alt="Bones and All"/>
            <h3>Recent News</h3>
            <a href='https://orf.at/stories/3294779/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Bones and All“: Verliebte Kannibalen plagt das Gewissen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSJmYQdwdWSLQCqoS48OhfplzjmNTT_kj4M3_yO8c5M2WzPpwbBvnVzZL9PPn0gtT0T4iz2DIVH" alt="„Bones and All“: Verliebte Kannibalen plagt das Gewissen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Kannibalenromanze „Bones and All“ handelt vom Dasein an den Rändern der Gesellschaft: „Dune“-Superstar Timothee Chalamet und Newcomerin Taylor Russell&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gala.de/lifestyle/film-tv-musik/-bones-and-all---eine-alles-verzehrende-liebesgeschichte-22968298.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Bones and All&quot;: Eine alles verzehrende Liebesgeschichte</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRctMPhEEqvqpNVlAvRDRj4IKB7qBOfx2eCIXQiC5u6dE84CmEDtyw0UeFFfRHyRAxYvu1Pn9YH" alt="&quot;Bones and All&quot;: Eine alles verzehrende Liebesgeschichte" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kannibalismus und Teenie-Romanze: In &quot;Bones and All&quot; spielen Timothée Chalamet und Taylor Russell zwei Teenager am Rande der Gesellschaft.</p></div>
            </div>
        </a><a href='https://www.film.at/filmkritiken/bones-and-all-filmkritik/402231930'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Bones and All&quot;: Timothée Chalamet als verliebter Kannibale</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTKp8VveKtYo-863UeD-Da2Q40oxrtNM8HPP73ygFwEy7HqWWdxUEWVv9N1nqE7N9PJz-n8XdXr" alt="&quot;Bones and All&quot;: Timothée Chalamet als verliebter Kannibale" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Bones and All&quot;-Filmkritik: Timothée Chalamet als Kannibale. Taylor Russell stand erstmals für &quot;Call me by Your Name&quot;-Regisseur vor der Kamera.</p></div>
            </div>
        </a><a href='https://kurier.at/kultur/filmkritik-zu-bones-and-all-lust-auf-liebe-und-menschenfleisch/402233820'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Filmkritik zu &quot;Bones and All&quot;: Lust auf Liebe und Menschenfleisch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTv2DmfMp0AKhmJnmg7fgKpRGibIS1K726dK42DvI9b8ZRW4juwLi7LdVhTEUIUsf6XAnhrThBd" alt="Filmkritik zu &quot;Bones and All&quot;: Lust auf Liebe und Menschenfleisch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wieder Ronald Reagan. Und wieder eine Coming-of-Age-Geschichte – diesmal vom italienischen Regisseur Luca Guadagnino, der mit „Call Me By Your Name“&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wienerzeitung.at/nachrichten/kultur/film/2168890-Vom-Essen-und-Gegessenwerden.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vom Essen und Gegessenwerden</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTiNwVSy1s-9HnnBkh3_NKYXqD6VaVVjhAr9NpD2wEksbzvWiRFsJkSxzbZmct9Pieedoup8EGB" alt="Vom Essen und Gegessenwerden" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kannibalen können einander riechen. Das lernen wir bereits früh in Luca Guadagninos neuem Film &quot;Bones and All&quot;, und der Titel sagt auch, wohin die Reise&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zeit.de/kultur/film/2022-11/bones-and-all-film-luca-guadagnino'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Bones and All&quot;: &quot;Es geht immer wieder ums Anderssein&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQa2ROkLG74ZGovAKrZSO4wAynYU_jfkM-5C5pss9cPRUY6hUB0SfZmv8grJ8mB-C1g-wPTHbK4" alt="&quot;Bones and All&quot;: &quot;Es geht immer wieder ums Anderssein&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Keine Liebe ohne Einverleibung, keine Leidenschaft ohne Zerfleischung. Der Regisseur Luca Guadagnino erklärt, warum er eine romantische Kannibalengeschichte&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fr.de/kultur/tv-kino/bones-and-all-im-kino-mit-haut-und-haaren-91934249.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Bones and All“ im Kino: Mit Haut und Haaren</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSxAksLi9kTwVCFf9Ua-X-blp7SGct8kaFCsYtwrUyzZhwHaj-uZmySMUnuU8n5ga252AGe3WBp" alt="„Bones and All“ im Kino: Mit Haut und Haaren" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Luca Guadagninos radikaler und blutig-romantischer Genrefilm „Bones and All“. Auch wenn Leonard Cohens „Hallelujah“ bei Castingshows in aller Munde ist,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}