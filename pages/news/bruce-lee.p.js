import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bruce Lee</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bruce Lee"/>
        <meta name="description" content="Trending News about Bruce Lee" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bruce Lee</h1>
            <Image width={800} height={500} src="https://de.web.img3.acsta.net/img/d9/97/d99792f436c09bb7870d17aa98974fcf.jpg" alt="Bruce Lee"/>
            <h3>Recent News</h3>
            <a href='https://www.filmstarts.de/nachrichten/1000004769.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biopic über Bruce Lee kommt – vom Regisseur eines der besten ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQx7Kj-sEHNduenZq1OqXzDG-fDoNgGxLwZdtzkUcQElSKtLiKSb9JZQn8t0WVVWxkHoN2gTVA5" alt="Biopic über Bruce Lee kommt – vom Regisseur eines der besten ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meisterregisseur Ang Lee knöpft sich Bruce Lee vor und macht ein Biopic über die Martial-Arts-Legende. Das passt doch schon mal perfekt.</p></div>
            </div>
        </a><a href='https://www.film.at/stars/bruce-lee-film-ang-lee/402244116'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ang Lee dreht Film über Martial-Arts-Ikone Bruce Lee</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRDIvF4NYbHBk-zdxXTZiWkBFPXcmskIRocTpkuHOFBUCIR7VnIzujBzoUk94bfEaC5IxzdKoFQ" alt="Ang Lee dreht Film über Martial-Arts-Ikone Bruce Lee" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oscar-Preisträger Ang Lee (68, &quot;Brokeback Mountain&quot;, &quot;Life of Pi: Schiffbruch mit Tiger&quot;) will ein Biopic über Filmstar und Martial-Arts-Ikone Bruce Lee&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stern.de/kultur/ang-lee--regisseur-laesst-seinen-sohn-bruce-lee-spielen-32967722.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ang Lee: Regisseur lässt seinen Sohn Bruce Lee spielen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRiQouQ23_gqmGxdjw4sTBco-8NSEVWxst5rZO1R1yTCvoXLaoX9NtArbTKLtqRLj9HFhhPjJYO" alt="Ang Lee: Regisseur lässt seinen Sohn Bruce Lee spielen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Regisseur Ang Lee dreht ein Biopic über Martial-Arts-Star Bruce Lee und der Sohn des Filmemachers spielt die Hauptrolle.</p></div>
            </div>
        </a><a href='https://www.rnd.de/medien/film-ueber-bruce-lee-sohn-von-ang-lee-soll-hauptrolle-spielen-FM4GR4O6CBG7FAD4B2QUXNNRUY.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Film über Bruce Lee: Sohn von Ang Lee soll Hauptrolle spielen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTGAWmzc93DFWSUT-ubAwCBFdkLeT3glaMk50UY3MvHm_-obNyiQXw46ETpD-ig2XVLlDMZ0SC9" alt="Film über Bruce Lee: Sohn von Ang Lee soll Hauptrolle spielen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ang Lee plant ein Biopic über Schauspieler und Ikone des Martial-Arts-Films Bruce Lee. Die Hauptrolle übernimmt der Sohn des Regisseurs, Mason Lee.</p></div>
            </div>
        </a><a href='https://www.bildderfrau.de/promi-party/article237045759/Regisseur-Ang-Lee-dreht-Film-ueber-Bruce-Lee-mit-eigenem-Sohn-Mason-Lee.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Regisseur Ang Lee dreht Film über Bruce Lee mit eigenem Sohn ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQW0IhllRLH9GuEIsDVxZXQAjavtzl7iqoDzfMHPzBYv6yRupJl2cWJ4_t-ivdvuLa57rlQX29u" alt="Regisseur Ang Lee dreht Film über Bruce Lee mit eigenem Sohn ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Martial-Arts-Legende Bruce Lee prägte das Kino der 1970er Jahre wie kaum ein anderer. Seine Streifen sind Kult, der tragische Tod des Kampfkünstlers mit&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fan-lexikon.de/film-tv/news/mason-lee-er-spielt-die-kampfkunstlegende-bruce-lee.255932.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mason Lee: Er spielt die Kampfkunstlegende Bruce Lee</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Mason Lee: Er spielt die Kampfkunstlegende Bruce Lee" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Darsteller hat seinen Sohn Mason Lee für die Rolle der Kampfkunstlegende Bruce Lee in einem neuen Biopic gecastet. (Film + TV News)</p></div>
            </div>
        </a>
        </Template></>;
}