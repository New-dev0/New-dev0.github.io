import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dolphins</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dolphins"/>
        <meta name="description" content="Trending News about Dolphins" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dolphins</h1>
            <Image width={800} height={500} src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1127%2Fr1097919_1296x729_16%2D9.jpg" alt="Dolphins"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/nfl/story/_/id/35123136/dolphins-lt-terron-armstead-ruled-pectoral-injury'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dolphins LT Terron Armstead ruled out with pectoral injury</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRzzMn4Nd9AF3ynD_-rGSH2Byq0zueejplIDcCp6o1UPCSCmbzsUajE7ekAdtDVavlC5ORcPwil" alt="Dolphins LT Terron Armstead ruled out with pectoral injury" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dolphins left tackle Terron Armstead suffered a pectoral injury in Sunday&#39;s game against the Texans.</p></div>
            </div>
        </a><a href='https://www.miamidolphins.com/news/dolphins-pick-up-fifth-straight-win-with-30-15-rout-of-houston'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dolphins pick up fifth straight win with 30-15 rout of Houston</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRBTpOUy7BENUNsPnncyOa18nWGXMbiJ5IuCf2PSE5WP5I5maewKtcXRcaZi9S6QI-ggY6m3Lh9" alt="Dolphins pick up fifth straight win with 30-15 rout of Houston" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Coming off their bye week, the Miami Dolphins showed no signs of rust on Sunday afternoon at Hard Rock Stadium as they picked up their fifth straight win&nbsp;...</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/sports/nfl/2022/11/27/dolphins-texans-terron-armstead/10786503002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dolphins take care of Texans, but not without injury to key player</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQs918H99M_K1FC6XFOEp4pbSKtz_Ebhj8E5OjHXaNFsDJ681ecoQGdqUmATVfGKG3DWBEZZVE-" alt="Dolphins take care of Texans, but not without injury to key player" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tua Tagovailoa was sacked four times – after tackle Terron Armstead left the game with a pectoral injury. Miami&#39;s next three games are on the road.</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/miami/news/texans-dolphins-on-diverging-paths-since-9-turnover-fiasco/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Texans, Dolphins on diverging paths since 9-turnover fiasco</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT4tfkAf4ZLh_E7enHAy2k6G4B4OkzL3RCKciGSIR5WrqDEhqeulYJnlB_0cyLSzIIdSG-SnLGK" alt="Texans, Dolphins on diverging paths since 9-turnover fiasco" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The last time the Dolphins and Texans met, Miami edged Houston in a turnover-riddled game indicative of the chaotic seasons both teams were having.</p></div>
            </div>
        </a><a href='https://www.miamiherald.com/sports/nfl/miami-dolphins/article269277702.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Terron Armstead&#39;s value to Dolphins was made obvious in shaky ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRhs2OK2HYKvcPYHI1tkPO4GGmCcIN5S6XmRPDAUf22XrvJZpgSTHELIe5YTPEoddII7RGqeHW7" alt="Terron Armstead&#39;s value to Dolphins was made obvious in shaky ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tackle Terron Armstead went out with a pectoral injury and offensive lineman Austin Jackson left with an ankle injury in the Dolphins&#39; win against the&nbsp;...</p></div>
            </div>
        </a><a href='https://profootballtalk.nbcsports.com/2022/11/27/dolphins-first-half-enough-to-beat-texans-30-15/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dolphins&#39; first half enough to beat Texans 30-15</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcST0RhyOHa6kxEKAgtM3zQOKR0ESNQjnkTXTKm5fQVWUznpxdoy0MQFDvJ6LwcCGvAEsQsYEO6K" alt="Dolphins&#39; first half enough to beat Texans 30-15" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Dolphins defense ruled the first half. Xavien Howard returned an Akins fumble 16 yards for a scoop-and-score touchdown, and Andrew Van Ginkel had a 23-yard&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sandiegouniontribune.com/en-espanol/noticias/story/2022-11-27/tagovailoa-y-dolphins-vencen-a-texans-e-hilan-5to-triunfo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tagovailoa y Dolphins vencen a Texans e hilan 5to triunfo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRUzZG673dXAMa6Vu6FErrPSLzM8sCO2XEClWomPWPycrVtilKbr34r0YDCYlL-nJI1__DhaVGq" alt="Tagovailoa y Dolphins vencen a Texans e hilan 5to triunfo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tua Tagovailoa lanza para 299 yardas y los Dolphins de Miami toman una ventaja de 30 puntos, antes de marchar relajados hacia su quinto triunfo consecutivo,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.elnuevoherald.com/deportes/nfl/miami-dolphins/article269278852.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Los Dolphins aplastan a los Texans con una gran primera mitad y ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ6zv8Df7PGSJVr3QyxQqWz7Lzt42goKNCJmeHsIlcyrqnyUQYBK6mM5_qiwnGYrwjIbOrwwQ7u" alt="Los Dolphins aplastan a los Texans con una gran primera mitad y ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Después de una semana de descanso, los Dolphins buscaban este domingo 27 de noviembre otro triunfo en el Hard Rock Stadium ante unos Texans que no era&nbsp;...</p></div>
            </div>
        </a><a href='https://www.france24.com/es/minuto-a-minuto/20221127-los-miami-dolphins-logran-quinta-victoria-seguida-en-la-nfl'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Los Miami Dolphins logran quinta victoria seguida en la NFL</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR11cDDkyPM0XKEhxSdGgKnb9bMkg3qTvxUUlAU7YruQb-BiVbsA89O8OmLrsVe6jkSFal7_LDP" alt="Los Miami Dolphins logran quinta victoria seguida en la NFL" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los Miami Dolphins disfrutaron de su quinta victoria consecutiva este domingo con un cómodo triunfo de 30-15 sobre los Houston Texans, que tienen una sola&nbsp;...</p></div>
            </div>
        </a><a href='https://elcomentario.ucol.mx/recuperan-los-dolphins-el-primer-lugar-de-la-division-del-este/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Recuperan los Dolphins el primer lugar de la División del Este – El ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRrE-xw5rQpSSH_1GF2sE5_ovS-GelBgZPnqfE-LuqmRXBTp8VwSLfapIdQai9QxZtfpm5K7dhb" alt="Recuperan los Dolphins el primer lugar de la División del Este – El ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los Miami Dolphins recuperaron el primer lugar de la División del Este, con 9 triunfos y 3 derrotas, al superar por 30-15 a los Houston Texans.</p></div>
            </div>
        </a>
        </Template></>;
}