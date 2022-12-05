import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lewandowski</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lewandowski"/>
        <meta name="description" content="Trending News about Lewandowski" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lewandowski</h1>
            <Image width={800} height={500} src="" alt="Lewandowski"/>
            <h3>Recent News</h3>
            <a href='https://www.ouest-france.fr/sport/football/robert-lewandowski/coupe-du-monde-difficile-a-dire-maintenant-lewandowski-n-est-pas-sur-d-etre-au-mondial-2026-afebef80-7404-11ed-9402-c361be74b85c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde. « Difficile à dire maintenant » : Lewandowski n&#39;est ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQPf118X-uZ5qqqAtdpcXpfMv-dulWVnjpG812w2TTQN4Hp64ZKyw7eRzAHfaT-AgGeqLGAJC0W" alt="Coupe du monde. « Difficile à dire maintenant » : Lewandowski n&#39;est ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>... « Physiquement, je n&#39;ai pas peur » de rester en équipe nationale en vue du Mondial 2026, a assuré l&#39;attaquant polonais Robert Lewandowski, mais « c&#39;est&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lemonde.fr/football/article/2022/12/04/coupe-du-monde-2022-la-petite-solitude-de-robert-lewandowski-grand-attaquant-de-l-equipe-de-pologne_6152898_1616938.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : la petite solitude de Robert Lewandowski ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSklrMWA22SSJq8MMaTjA-5OyXsH3Ze2qJa4B74P6zdgGSHW0OWsF1pV8cY90ihWmVOTpL1Y4kq" alt="Coupe du monde 2022 : la petite solitude de Robert Lewandowski ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Principale menace polonaise pour la défense française en huitième de finale, le buteur vedette s&#39;est souvent retrouvé isolé lors de Mondial au Qatar,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.onzemondial.com/coupe-du-monde-2022/france-pologne-le-gros-regret-de-lewandowski-apres-la-defaite-809258'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France – Pologne : le gros regret de Lewandowski après la défaite</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT_RPj7ChLQH7xMMgMzWN1j1A4r1PW7Jd7LyH-6lqNu7b80GVwLCURO9BLw9hubpIYRvCTo2m7y" alt="France – Pologne : le gros regret de Lewandowski après la défaite" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zapping Onze Mondial CDM 2022 : Allemagne, retour vers les sommets ? Analyse de Patrick Guillou ! Robert Lewandowski a peut-être joué son&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lejsl.com/insolite/2022/12/04/le-jsl-a-telephone-a-lewandowski'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Insolite. Le JSL a téléphoné à Lewandowski</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Insolite. Le JSL a téléphoné à Lewandowski" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avant le France - Pologne ce dimanche nous avons tenté de joindre Lewandowski. Mission réussie. Mais au bout de la ligne, c&#39;était Jean-Pierre, brocanteur de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.fr/football/coupe-du-monde-2022/lewandowski-declaration-seme-doute-672178.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lewandowski, la déclaration qui sème le doute</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQLFaEv2RgKU-XPRG9vTg0aJBvSZ_SBsa2hPWXpnLEZO0aqGmpGTj_opBLQS0YWqcelR8LGGmsD" alt="Lewandowski, la déclaration qui sème le doute" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Pologne n&#39;aura pas fait de miracle. Opposés à l&#39;équipe de France en huitième de finale du Mondial 2022, ce dimanche après-midi à Doha, les Aigles Blancs se&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sofoot.com/la-deception-lewandowski-522477.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La déception Lewandowski</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRviEJmCzo1UMyVFXf3tieQsotf52_MH1886H2sOfJ4K5jR5-kdAMhUVYInjlxw3RjME64fCIuO" alt="La déception Lewandowski" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Attendu comme le leader d&#39;une équipe de Pologne fragile, Robert Lewandowski a finalement quitté cette Coupe du monde 2022 tel que les Aigles l&#39;ont entamée :&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/12/04/mondial-2022-france-pologne-si-lewandowski-est-lun-des-meilleurs-buteurs-du-monde-cest-aussi-grace-a-lewandowska-10845914.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mondial 2022 - France-Pologne : si Lewandowski est l&#39;un des ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQzm4ZjHSk_zKhMCX5sk81x0b06YOanhRsjijYmydT95cv4JVkI2UWXdnayviC2dqtiD2LMBKCZ" alt="Mondial 2022 - France-Pologne : si Lewandowski est l&#39;un des ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce dimanche 4 décembre, les Bleus défient les Polonais et leur redoutable attaquant (16h), pour une place en quarts de finale de la Coupe du monde de foot&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/Robert-lewandowski-apres-l-elimination-de-la-pologne-face-aux-bleus-peut-etre-que-si-on-marque-le-premier-but/1368465'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Robert Lewandowski après l&#39;élimination de la Pologne face aux ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQv-G-q1cKZhwumohJf6lkEOoF2l_WglrTcwJBi2h3BSxbrlsP5JbrhtTwfrOF3q0iWJ6cNircX" alt="Robert Lewandowski après l&#39;élimination de la Pologne face aux ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Robert Lewandowski, l&#39;attaquant polonais, regrettait les occasions manquées en première période face à l&#39;équipe de France (1-3), dimanche en 8es de finale&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/fr/news/goal50-robert-lewandowski-vs-karim-benzema/bltc05a9a272343dec5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>GOAL50: Robert Lewandowski vs Karim Benzema</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQoEw4rA_qDXjckb1ezqqZ6pHwuHYt6L48-VMgGCzmj0K_AgvtPtyExPsoofwghoWq0spyQSE3R" alt="GOAL50: Robert Lewandowski vs Karim Benzema" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ils sont les meilleurs attaquants du monde aujourd&#39;hui, mais qui de Robert Lewandowski ou Karim Benzema obtiendra votre vote GOAL50 ?</p></div>
            </div>
        </a>
        </Template></>;
}