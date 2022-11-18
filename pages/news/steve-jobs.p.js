import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Steve Jobs</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Steve Jobs"/>
        <meta name="description" content="Trending News about Steve Jobs" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Steve Jobs</h1>
            <Image width={800} height={500} src="https://www.watson.de/imgdb/a855/Qx,A,0,103,2000,1125,1077,327,333,222/809951043388064" alt="Steve Jobs"/>
            <h3>Recent News</h3>
            <a href='https://www.watson.de/unterhaltung/apple/504010747-apple-fan-kauft-skurriles-andenken-an-steve-jobs-fuer-absurd-viel-geld'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apple: Fan kauft skurriles Andenken an Steve Jobs – für absurd viel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcThKLSoVfRaw6PhGH7SG1DpVOc5a5rrcALbp4gwjuRj7wpfBRL4l09hcTHUCw4ng883QVrN8qwS" alt="Apple: Fan kauft skurriles Andenken an Steve Jobs – für absurd viel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dass benutzte Gegenstände von Stars und Prominenten viel Geld bringen können, ist allseits bekannt. Nun war es erneut ein Gegenstand aus dem Nachlass von&nbsp;...</p></div>
            </div>
        </a><a href='https://orf.at/stories/3294021/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alte Birkenstock von Steve Jobs um 220.000 Dollar verkauft</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS7ajQxRQbcf2WVl32bh85EteOZ8btAieAGzE2h-0_Lmi6UQvSFdLFQzc3FXU2rhGFY7fT-F3Kc" alt="Alte Birkenstock von Steve Jobs um 220.000 Dollar verkauft" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein „gut gebrauchtes“ Paar Birkenstock, die Apple-Mitbegründer Steve Jobs in den 1970er und 1980er Jahren trug, wurde diese Woche für fast 220.000 Dollar&nbsp;...</p></div>
            </div>
        </a><a href='https://www.business-punk.com/2022/11/birkenstocks-fuer-220-000-dollar-so-viel-kosten-reliquien-von-steve-jobs/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Birkenstocks für 220.000 Dollar: So viel kosten Reliquien von Steve ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR6w2mTmWDPXZ1QHOycx8w_Z6Jz5wP4bY64TsKx9mNvFo9TqDqY1lSYpkYLD8rUX805OLTyr9lb" alt="Birkenstocks für 220.000 Dollar: So viel kosten Reliquien von Steve ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jetzt wurden die Birkenstocks des verstorbenen Apple-Gründers für unglaubliche 218.750 Dollar verkauft. Das Auktionshaus Julien&#39;s Auctions teilte in der Anzeige&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kronehit.at/news/steve-jobs-sandalen-verkauft/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steve Jobs Sandalen verkauft</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSe31TFeYhwGzxYO68Eu1KiScPodzLVD4Da7rmsdTzAGetnpTRkhhKCget2OA2ezjexWR7BgVV7" alt="Steve Jobs Sandalen verkauft" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(17.11.2022) Wer möchte nicht ein &quot;gut gebrauchtes“ paar Birkenstock-Sandalen um umgerechnete 211.000 Euro (220.000 Dollar) kaufen?</p></div>
            </div>
        </a><a href='https://www.welt.de/iconist/news/article242188851/Mit-Fussabdruck-211-500-Euro-fuer-die-abgelatschten-Birkenstocks-von-Steve-Jobs.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mit Fußabdruck: 211.500 Euro für die abgelatschten Birkenstocks ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRu8XbG8M4QVgGGt68FXUjlA-wSVIKNaBhxrswXV7O90mtr5FL00nTbjkvpBN3gI2ZZ5fk3K-zO" alt="Mit Fußabdruck: 211.500 Euro für die abgelatschten Birkenstocks ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Noch nie wurde so viel für ein gebrauchtes Paar Sandalen bezahlt. In den USA hat ein Unbekannter Birkenstocks aus dem Nachlass von Steve Jobs ersteigert.</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/feuilleton/steve-jobs-birkenstocks-220-000-dollar-fuer-sandalen-18465624.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sandalen von Steve Jobs: Galoschen des Glücks?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRAWAXR9rnnO1GGzs6aFBkeggpAdENwEi9r1egi_2KsEMLdUpzkiTXhscBzEfdw88LRwQDdIbTE" alt="Sandalen von Steve Jobs: Galoschen des Glücks?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ausgetretene Birkenstock-Sandalen des Computergurus Steve Jobs wurden für fast 220.000 Dollar versteigert: Sind sie ein schönes Zeichen...</p></div>
            </div>
        </a><a href='https://www.basicthinking.de/blog/2022/11/16/birkenstocks-von-steve-jobs-versteigert/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>200.000 US-Dollar: Abgetragene Birkenstocks von Steve Jobs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSk_uvT6DdStOY6LiWpqhH5HnGucn8e-jbJnf--P9NJtu7wk_oOugcqRLMLfCWxJV4iMNrr11Qj" alt="200.000 US-Dollar: Abgetragene Birkenstocks von Steve Jobs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In den USA hat ein Unbekannter die abgetragenen Sandalen von Apple-Mitgründer Steve Jobs ersteigert – für sage und schreibe 218.750 US-Dollar.</p></div>
            </div>
        </a>
        </Template></>;
}