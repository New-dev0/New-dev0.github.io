import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>USA Wales</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,USA Wales"/>
        <meta name="description" content="Trending News about USA Wales" /></Head><Template>
            <h1 style={{fontSize: "30"}}>USA Wales</h1>
            <Image width={800} height={500} src="https://www.wienerzeitung.at/_em_daten/451128/_/1xZPOhT3Rx3h3lJnagDWVi1FH7eczPhkRaaOXKYFe85UoSgKlbNgBaBnzWI4zZ06q-Pr3YML5m8U4Roihvwx4Ru4z0irW68yGpFoJfEi6sZRY/221121-2244-20221121katar.jpg" alt="USA Wales"/>
            <h3>Recent News</h3>
            <a href='https://www.wienerzeitung.at/nachrichten/sport/fussball-wm-2022/2168583-Wales-und-USA-trennen-sich-mit-einem-11.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wales und USA trennen sich mit einem 1:1</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTqUGZlH-x6RImYFQ3eHlITXelYjy_T3vw05BymumZL4KOHz2omnmEWhzl_mr9n-yj1PWi_x-rO" alt="Wales und USA trennen sich mit einem 1:1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gareth Bale hat Wales bei der Rückkehr auf die WM-Bühne nach über einem halben Jahrhundert einen Punkt beschert. Der Star seiner Mannschaft traf beim 1:1&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6218437/gareth-bale-rettet-wales-das-11-gegen-usa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gareth Bale rettet Wales das 1:1 gegen USA</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRDFAj7IX5tPHwterjw1G7bN12pDDD8n7TCyIp-CI1hA9tsnfjmITcHAMI70zA-79dDqFMbsGlp" alt="Gareth Bale rettet Wales das 1:1 gegen USA" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amerika überraschte mit Offensiv-Mut und schnellem Spiel, Wales lief lange Zeit bloß hinterher. Der Superstar, der schon das ÖFB-Team im Playoff im&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tagesschau.de/sport/sportschau/wales-usa-101.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fußball-WM in Katar : USA und Wales trennen sich 1:1</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRNYZJipYFS4pd3hEGoZdFIH3_n4vHL8wLCmtGUtI2aDJ_vT0IxglfN0iG7-21knW2swlyg4GIw" alt="Fußball-WM in Katar : USA und Wales trennen sich 1:1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bei ihrer Rückkehr auf die WM-Bühne nach 64 Jahren rettete Altstar Gareth Bale den Walisern einen Punkt gegen ein lange überlegenes US-Team.</p></div>
            </div>
        </a><a href='https://kurier.at/sport/fussball/fussball-wm-in-katar-gruppe-b-usa-gegen-wales/402230697'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Das erste Remis bei der WM in Katar: USA und Wales trennen sich 1:1</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSuejsjUiHL6U3e9SL_t1OQsHsqxeSucxkXMOdq6TLEtwU4I1RgLemoRRZChNeJmggBa0LLmkk" alt="Das erste Remis bei der WM in Katar: USA und Wales trennen sich 1:1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die US-Amerikaner diktierten in den ersten 45 Minuten das Geschehen, nach der Pause war Wales am Drücker und schaffte noch den verdienten Ausgleich.</p></div>
            </div>
        </a><a href='https://www.tz.de/sport/fussball/usa-wales-heute-live-ticker-wm-2022-katar-bale-pulisic-gruppe-b-zr-91930287.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Erstes Remis in Katar – USA geben gegen Wales ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRpI70CvJzbq_L9tkyHqO6M18KI5tLvU_HB5_zX3qP_yls_2IjmwM0oE0v2hwJgFFdQpemFgcTf" alt="WM 2022: Erstes Remis in Katar – USA geben gegen Wales ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im zweiten Spiel in der Gruppe B trafen die USA auf Wales. Weah brachte die USA in Führung, Bale glich per Elfmeter aus. Der Ticker zum Nachlesen.</p></div>
            </div>
        </a><a href='https://www.puls24.at/news/sport/wm-2022-usa-wales-im-liveticker/281672'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: USA - Wales im Liveticker</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4iWAJcjNLilYKD4nbO7-TG-mUd2MYd2MIB6cZtRa_TvNKUXNsqnpLh-pZqhKXaxiz7dEZg1ho" alt="WM 2022: USA - Wales im Liveticker" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das WM-Match zwischen USA und Wales im Liveticker auf PULS 24 und live auf zappn.tv.</p></div>
            </div>
        </a><a href='https://www.laola1.at/de/red/fussball/wm-2022/gruppe-b/fifa-wm-2022-heute--usa---wales/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA WM 2022: Wales und USA trennen sich mit einem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRn8JvJSCyBkXpNmK5kre5ORIR6W1fGONg4g5dVXSC3_G27Cri65uGncyqKGh15kdHW1FJ6rz_S" alt="FIFA WM 2022: Wales und USA trennen sich mit einem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das erste WM-Spiel seit 64 Jahren endet für Wales gegen die USA mit einem Zähler. Die Waliser enttäuschen spielerisch, aber Bale gleicht vom Punkt aus.</p></div>
            </div>
        </a>
        </Template></>;
}