import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nadal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nadal"/>
        <meta name="description" content="Trending News about Nadal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nadal</h1>
            <Image width={800} height={500} src="https://i.eurosport.com/2022/11/15/3490805-71163268-2560-1440.jpg" alt="Nadal"/>
            <h3>Recent News</h3>
            <a href='https://www.eurosport.fr/tennis/rafael-nadal-est-peut-etre-fini-mais-il-reviendra-quand-meme_sto9230300/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rafael Nadal est peut-être fini, mais il reviendra quand même</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSDCf3-Xv5_3gxqIijAy9El6bbLXN9Gy1GmRltmWChIdfXcn8qO4bcP7E4mKy0i92iHMskAS57o" alt="Rafael Nadal est peut-être fini, mais il reviendra quand même" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ATP FINALS - Vainqueur de Casper Ruud jeudi (7-5, 7-5) Rafael Nadal quitte Turin sur une bonne note. Reste que, depuis sa blessure à Wimbledon, il peine.</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Tennis/masters-turin/epreuve-simple-messieurs/annee-2022/match-direct/rafael-nadal-casper-ruud-live/329609'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Résultat et résumé : Rafael Nadal - Casper Ruud, ATP, Masters ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQyGeoKp3710ObQePIqfXAGZtIEBD51Wawj3w8g-R0EyCrc-mj5BvoIbhXixErIlJ-uK4HqVnev" alt="Résultat et résumé : Rafael Nadal - Casper Ruud, ATP, Masters ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mélange de satisfaction et de déception pour Rafael Nadal. Très solide au service et dans le jeu, l&#39;Espagnol quittera Turin sur une note positive,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/sports/tennis/masters-atp-nadal-sauve-l-honneur-avant-de-quitter-turin-20221117'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Masters ATP: Nadal sauve l&#39;honneur avant de quitter Turin</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSFWfYUqZyxq1xvU_MzkdZRzdl6mx0Nx8QjcdESjA29e249vzkfqDm-NlZxmApY9pB7wzSZxx3I" alt="Masters ATP: Nadal sauve l&#39;honneur avant de quitter Turin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rafael Nadal a sauvé l&#39;honneur: le numéro 2 mondial a battu jeudi Casper Ruud (4e) 7-5, 7-5 dans un match sans enjeu du groupe Vert des Masters de Turin&nbsp;...</p></div>
            </div>
        </a><a href='https://www.welovetennis.fr/atp/atp-finals/nadal-sauve-lhonneur-sur-le-masters'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nadal sauve l&#39;honneur sur le Masters</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRwpg1HBl9MKQnaHPVzT-V9ku3N7-AFrC5aA4mtSluE4bopWgRCE7myL7LfsXZZAknjLh4n0rf7" alt="Nadal sauve l&#39;honneur sur le Masters" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Défait lors de ses deux premiers matchs sur cette édition 2022 du Masters et officiellement éliminé depuis mardi, Rafael Nadal avait à coeur de quitter&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lanouvellerepublique.fr/sports/masters-atp-nadal-termine-la-saison-sur-une-victoire'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Masters ATP: Nadal termine la saison sur une victoire, Fritz en demies</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSOXvkrOXTtoXZ-6Eoc0g-A9LmMLimsmzAHZOSApxFUfv_ZfKfCIzSzADTrSSNDm6LmJUyQRHJy" alt="Masters ATP: Nadal termine la saison sur une victoire, Fritz en demies" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rafael Nadal n&#39;avait plus gagné depuis son élimination le 4 septembre en 8es de finale de l&#39;US Open, mais il a quitté les Masters de Turin et terminé sa&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rts.ch/sport/tennis/13551837-masters-atp-rafael-nadal-finit-sur-une-victoire.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Masters ATP: Rafael Nadal finit sur une victoire</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRChERUYI9mRpx_eMK7p1evLgkLdjhTrI7Zr4kjJsYB0w7G0fPe2hjA3PaybSAfcSwLOFyMExTN" alt="Masters ATP: Rafael Nadal finit sur une victoire" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Battu lors de ses deux premiers matches et d&#39;ores et déjà sûr d&#39;être éliminé, Rafael Nadal (ATP 2) a terminé les Masters de Turin sur une victoire.</p></div>
            </div>
        </a><a href='https://sports.orange.fr/tennis/atp/article/masters-nadal-j-ai-ete-recompense-c-est-tout-exclu-CNT000001UT4MR.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Masters - Nadal : &quot;J&#39;ai été récompensé, c&#39;est tout&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRTPWuKcirkhS7FqKHXNe3GDeHc1EYwPP65rAaVdLGJGs3E1-KZObuM7V-PXuyd4rZf9CAUG9VS" alt="Masters - Nadal : &quot;J&#39;ai été récompensé, c&#39;est tout&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>people SPORT=&quot;tennis&quot; id=&quot;102933&quot;]Rafael Nadal[/people] ne quitte pas le Masters par la toute petite porte. Vainqueur de Casper Ruud, l&#39;homme aux 22 titres&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}