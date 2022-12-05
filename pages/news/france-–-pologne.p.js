import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>France – Pologne</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,France – Pologne"/>
        <meta name="description" content="Trending News about France – Pologne" /></Head><Template>
            <h1 style={{fontSize: "30"}}>France – Pologne</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/kylian-mbappe-tunisie-france-football-coupe-du-monde-2022-1-c61367-0@1x.jpeg" alt="France – Pologne"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/sport/football-coupe-du-monde-2022-au-qatar-france-pologne-8e-de-finale-pour-stopper-kylian-mbappe-il-nous-faut-un-scooter-arkadiusz-milik-2240680.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France-Pologne : pour stopper Mbappé, &quot;il nous faut un scooter&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTa-JGLJcbzSk99CCoKcm8TcchqP_c8cavzUqId6kH8XVSezNLcaUQUAQwoOaQvKmMeL8l9nGqi" alt="France-Pologne : pour stopper Mbappé, &quot;il nous faut un scooter&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ La Pologne redoute l&#39;explosivité de Kylian Mbappé. À la veille de leur huitième de finale face à la France, dimanche 4 décembre (à 16h,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/sports/football/coupe-du-monde/france-pologne-dembele-enfin-l-heure-de-la-maturite-20221203'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France-Pologne : Dembélé, enfin l&#39;heure de la maturité</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSBborkoOI1Sb7NyvAoXSXYdZ80APkCer0iaNyy8Gh1pMF2t3L39YmcIYcPfJTP8f4R9GgGuJX9" alt="France-Pologne : Dembélé, enfin l&#39;heure de la maturité" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DÉCRYPTAGE – Critiqué pour son manque de discipline sur et en dehors du terrain, l&#39;ailier français a su gommer ses errements pour s&#39;imposer en Bleu.</p></div>
            </div>
        </a><a href='https://www.rtl.fr/sport/football/france-pologne-77-des-francais-pronostiquent-une-qualification-des-bleus-pour-les-quarts-7900212176'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France-Pologne : 77% des Français pronostiquent une qualification ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTrSsE9X7ItiyaRH6CpE9NL41HDSfZEmkSCyUdzYdlwHLF8OAyhHe4KzCgmzAGugHNWJSrUjyD6" alt="France-Pologne : 77% des Français pronostiquent une qualification ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LE BAROMÈTRE - Le dernier sondage réalisé par Odoxa pour Winamax et RTL porte samedi 3 décembre sur les Bleus à la veille de leur 8e de finale de Coupe du&nbsp;...</p></div>
            </div>
        </a><a href='https://www.onzemondial.com/coupe-du-monde-2022/france-pologne-le-onze-des-bleus-a-fuite-deschamps-joue-la-continuite-809046'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France - Pologne : le onze des Bleus a fuité, Deschamps joue la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ8IjwnXgHvkca46njTDhktv5JWWz32iZDrBd-7DMH3nelBa-OEUpWgOaUtCsvHwi258nLYnd_n" alt="France - Pologne : le onze des Bleus a fuité, Deschamps joue la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Didier Deschamps va aligner le même onze que face au Danemark pour son 8e de finale de la Coupe du Monde face à la Pologne, avec Mbappé Giroud Dembélé&nbsp;...</p></div>
            </div>
        </a><a href='https://www.maxifoot.fr/football/article-52678.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France-Pologne, les pronostics de la rédac</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1MRy0_fBrGwCjTsN81jompvIPJk5FnCzvay7nBmHevqg-aTosIDA-_LXpTiSoI0C4T2m3VCbU" alt="France-Pologne, les pronostics de la rédac" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les choses sérieuses commencent ! L&#39;équipe de France affronte la Pologne pour les 8es de finale de cette Coupe du monde 2022 au Qatar. L&#39;o ...</p></div>
            </div>
        </a><a href='https://www.winamax.fr/news_france---pologne-lavant-match-en-chiffres-48316?param=france---pologne-lavant-match-en-chiffres-48316'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France - Pologne : l&#39;avant-match en chiffres</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT9h8KphvbVa8fmuA37ni6YbGqVzoMfwMyuIZFy8gmmDoWS3rn-j374_ndnm42PKUQQW0wwyr8v" alt="France - Pologne : l&#39;avant-match en chiffres" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Statistiques, cotes, coup à tenter : voici tout ce qu&#39;il faut savoir avant le 1/8 de finale entre la France et la Pologne durant ce Mondial...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/sports/football/coupe-du-monde/france-pologne-upamecano-raconte-par-ceux-qui-lont-faconne-dangers-a-munich-en-passant-par-leipzig-03-12-2022-X3WG5EX4SBHPTBMP6RTLF6YVVE.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France-Pologne : Upamecano raconté par ceux qui l&#39;ont façonné, d ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRr5x7QgWUiz0ZNIogsF_L9YjTcAVZHc5to1Beeb9qfZkfzQPA9hknjTNfxA8R-npj7t4BTIWVl" alt="France-Pologne : Upamecano raconté par ceux qui l&#39;ont façonné, d ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De ses débuts dans la banlieue angevine au très haut niveau au Bayern Munich, voici l&#39;histoire de Dayot Upamecano. Le défenseur central s&#39;apprête à jouer&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}