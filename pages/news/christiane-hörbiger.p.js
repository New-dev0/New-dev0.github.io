import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Christiane Hörbiger</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Christiane Hörbiger"/>
        <meta name="description" content="Trending News about Christiane Hörbiger" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Christiane Hörbiger</h1>
            <Image width={800} height={500} src="https://apa.at/wp-content/uploads/2022/11/87990011470394532_BLD_Online-5.jpg" alt="Christiane Hörbiger"/>
            <h3>Recent News</h3>
            <a href='https://apa.at/news/publikumsliebling-christiane-hoerbiger-verstorben-8/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Publikumsliebling Christiane Hörbiger verstorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTXAyZluR6gPmsyNA5xQYyIg1IrJQaV5gyTucvqPX_RJGY6ilMrZQPah7pH9JS2m704cQ2FrhXU" alt="Publikumsliebling Christiane Hörbiger verstorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Schauspiellegende Christiane Hörbiger ist tot. Kurz nach ihrem 84. Geburtstag am 13. Oktober verstarb die Wienerin am Mittwoch in ihrer Heimatstadt,&nbsp;...</p></div>
            </div>
        </a><a href='https://wien.orf.at/stories/3184446/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kultur: Christiane Hörbiger ist tot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTBuUYx6s1KKb1mKA63twhbrJlp1u_scBRdIXL5U9J0KHOvIgFhTZZ5fRBZJxtD9XMx1KU7uI2L" alt="Kultur: Christiane Hörbiger ist tot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Schauspielerin Christiane Hörbiger ist am Mittwoch in Wien im Alter von 84 Jahren gestorben. Die Tochter des legendären Schauspielerehepaares Paula&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6222278/sie-war-die-grande-dame-am-kleinen-schirm-christiane-hoerbiger-ist-tot'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sie war die Grande Dame am kleinen Schirm: Christiane Hörbiger ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT5QzMGAsfrvgDvVt7DbH9DZkn8BdXnH-ApuBQgx4NQlktxYmMfCiWSxVwLQ9jIY7YAQM6hUXLN" alt="Sie war die Grande Dame am kleinen Schirm: Christiane Hörbiger ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Als Fernsehstar brachte Christiane Hörbiger die hohe Wiener Schauspielkunst in alle heimischen Wohnzimmer. Nun ist der Publikumsliebling mit 84 Jahren&nbsp;...</p></div>
            </div>
        </a><a href='https://orf.at/stories/3295982/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Ein Stück Identität“: Würdigungen für Christiane Hörbiger</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcROrfslEbL1ERY55VLIBQX83JsFinfjH2re_m2gP1cUDpuUXqwb8-5bjQPoK1426ILZkIEX1LDZ" alt="„Ein Stück Identität“: Würdigungen für Christiane Hörbiger" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach Bekanntwerden des Ablebens der Schauspielerin Christiane Hörbiger, die am Mittwoch mit 84 Jahren in Wien starb, gab es zahlreiche Trauerbekundungen und&nbsp;...</p></div>
            </div>
        </a><a href='https://www.boerse-express.com/news/articles/bmaw-mit-christiane-hoerbiger-verliert-oesterreich-eine-vehemente-unterstuetzerin-der-oesterreichischen-filmwirtschaft-528214'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BMAW: Mit Christiane Hörbiger verliert Österreich eine vehemente ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="BMAW: Mit Christiane Hörbiger verliert Österreich eine vehemente ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BM Kocher zum Tod des langjährigen Mitglied des FISA-Beirats - Frau Hörbiger war eine wichtige Botschafterin für den Filmstandort ÖsterreichWien (OTS/BMAW)&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vol.at/christiane-hoerbiger-verstorben/7775263'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schauspielerin Christiane Hörbiger verstorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT5TDQHl5TZFbYPQYg49jlJGqEmnEfwdRGTkRMrcK67GxuPGgX06d8F_sECceOzdkcwf4DCq3SF" alt="Schauspielerin Christiane Hörbiger verstorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Christiane Hörbiger, die vor mehr als 60 Jahren ihr Bühnendebüt gab und es als Tochter des legendären Schauspielerehepaares Paula Wessely und Attila&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ndr.de/kultur/film/Christiane-Hoerbiger-84-Jahren-gestorben,hoerbiger112.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Christiane Hörbiger im Alter von 84 Jahren gestorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS1Yx3rf-1na5XvXKsxA5hh1Qh06SjeBxTmsFBZFDKnis7n6RGObMpneqeyQQt_3qVl-Q13SOXP" alt="Christiane Hörbiger im Alter von 84 Jahren gestorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Schauspielerin Christiane Hörbiger ist am Mittwoch im Alter von 84 Jahren in Wien gestorben. Das bestätigten eine langjährige Mitarbeiterin und ein&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}