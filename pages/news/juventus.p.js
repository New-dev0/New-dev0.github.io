import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Juventus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Juventus"/>
        <meta name="description" content="Trending News about Juventus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Juventus</h1>
            <Image width={800} height={500} src="https://medias.lequipe.fr/img-photo-jpg/andrea-agnelli-a-droite-et-pavel-nedved-ne-sont-plus-president-et-vice-president-de-la-juve-a-martin/1500000001717549/0:0,1995:1330-640-427-75/d9eb4.jpg" alt="Juventus"/>
            <h3>Recent News</h3>
            <a href='https://www.lequipe.fr/Football/Actualites/La-direction-et-le-conseil-d-administration-de-la-juventus-turin-demissionnent/1367431'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La direction et le conseil d&#39;administration de la Juventus Turin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTsGXb38DCzR1RVnm-TwuLbXkrvwbNmEEKh36x_YbtfddD_vfGFlRaj-MY5cag4WDkU0b2RqgbV" alt="La direction et le conseil d&#39;administration de la Juventus Turin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Selon plusieurs médias italiens, l&#39;ensemble de la direction de la Juventus a décidé de démissionner, ce lundi. C&#39;est la fin de l&#39;ère Andrea Agnelli,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.juventus-fr.com/28/11/2022/tremblement-de-terre-a-la-juventus-andrea-agnelli-et-pavel-nedved-demissionnent/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tremblement de terre à la Juventus ! Andrea Agnelli et Pavel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQi1xhUq3BRYv7wrOfwACPymC3Fhxt9voaH8hpZ3-f-j18sQgC6Vnl84nJYUVrpvqm20a01lBIR" alt="Tremblement de terre à la Juventus ! Andrea Agnelli et Pavel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Énorme nouvelle à la Juventus ! Sky Sports et Fabrizio Romano annoncent que le board de la Juventus, notamment composé de Pavel Nedved vice-président et&nbsp;...</p></div>
            </div>
        </a><a href='https://www.footmercato.net/a2373306731859045419-juventus-andrea-agnelli-et-toute-la-direction-demissionnent'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Juventus : Andrea Agnelli et toute la direction démissionnent !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTEo_5yMv7w0EA8fJdgC624YauBlDwEiiLBPI9DmbA1MPN4bpPchdYkmArbetslF57rMohyI4FC" alt="Juventus : Andrea Agnelli et toute la direction démissionnent !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Véritable coup de tonnerre à Turin ! Andrea Agnelli, le président de la Juventus, et son conseil d&#39;administration ont démissionné ce lundi soir a (.</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/La-tribune-loire-finalement-ouverte-pour-nantes-juventus-turin-en-ligue-europa/1367395'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La tribune Loire finalement ouverte pour Nantes-Juventus Turin en ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQjDSoaUIGhbT9ajoLeZFghQp_F_kJV5rN3j-GcgMY_-Rs50u0tZSSsq_KTJH8zos5EIIkJWUC9" alt="La tribune Loire finalement ouverte pour Nantes-Juventus Turin en ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;appel du FC Nantes a été entendu. La tribune Loire du stade de la Beaujoire sera finalement ouverte pour la réception de la Juventus Turin en Ligue&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foot01.com/foot-europeen/italie/ita-andrea-agnelli-et-les-dirigeants-de-la-juventus-demissionnent-416486'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ita : Andrea Agnelli et les dirigeants de la Juventus démissionnent !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ3TTlrkmKI-8HQkRbmtOAZN05iHo5ZjFCfaCsq85dmfhw3NoqSiSzpLEyutqZOiU1BN-jvvmRT" alt="Ita : Andrea Agnelli et les dirigeants de la Juventus démissionnent !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Même si après son élimination précoce en Ligue des champions, la Juventus s&#39;était largement rétablie en Serie A, puisque les Turinois étaient sur six victoires&nbsp;...</p></div>
            </div>
        </a><a href='https://www.beinsports.com/france/serie-a/news/serie-a-coup-de-tonnerre-cest-la-revolution-a/1995677'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Serie A - Coup de tonnerre : c&#39;est la révolution à la Juventus Turin !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS4BrDnA_x8hUvNZlr3XjwktEFzwl0j2aig5FY4tbdHvn0h-rVzwGceoib0PL04azA20BEX5tko" alt="Serie A - Coup de tonnerre : c&#39;est la révolution à la Juventus Turin !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Selon Sky Italia, le président de la Juventus Turin, Andrea Agnelli, et son vice-président, Pavel Nedved, ont annoncé leur démission ! La Juve va changer de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.onzemondial.com/serie-a/2020-2021/juventus-coup-de-tonnerre-agnelli-demissionne-808287'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Juventus : coup de tonnerre, Agnelli démissionne !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQqnZpTZJQr4gDeTC1thI90ot-DL0fXaQDrJqRpQTldaZR-3iXYHlIBurrKRq9cLTjfzHjs_2AL" alt="Juventus : coup de tonnerre, Agnelli démissionne !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le conseil d&#39;administration de la Juventus a annoncé sa démission. Cela inclut le président Andrea Agnelli.</p></div>
            </div>
        </a><a href='https://www.onzemondial.com/ligue-europa/fc-nantes-enorme-bonne-nouvelle-pour-le-choc-face-a-la-juventus-808271'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FC Nantes : énorme bonne nouvelle pour le choc face à la Juventus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRsZyPZTgRWMX55SBp6Y1Tr-5XY0xhwCzB7Ny5RR_te5hZaECV6J42BkzhYStmN3N_DMME-vk6a" alt="FC Nantes : énorme bonne nouvelle pour le choc face à la Juventus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Tribune Loire sera finalement ouverte pour le choc de la Ligue Europa entre le FC Nantes et la Juventus Turin après l&#39;appel auprès de l&#39;UEFA.</p></div>
            </div>
        </a><a href='https://www.sofoot.com/la-tribune-loire-finalement-ouverte-pour-nantes-juventus-turin-522185.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La tribune Loire finalement ouverte pour Nantes-Juve</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9vUlF-kvjQAc1r2yibapPZC8-LVaKnKDTMC_h6NWDcumfYbxOX15vzj_pRMeSFNbUSoToQkRI" alt="La tribune Loire finalement ouverte pour Nantes-Juve" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nul n&#39;est censé ignorer la Loire. Alors que l&#39;UEFA avait tranché en faveur d&#39;une fermeture de la tribune Loire (à cause de l&#39;utilisation ...</p></div>
            </div>
        </a><a href='https://tribunenantaise.fr/actus-fcnantes/nantes-juventus-les-infos-sur-la-billetterie-du-match-retour-des-barrages-deuropa-league/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nantes - Juventus : les infos sur la billetterie du match retour des ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQR7x41oln2seN_uwUT_0bxBoyjYhhvZErTJc7pxzisu0zHvcy_8nUybCJ3oLF0KU4ZU8nF9cTO" alt="Nantes - Juventus : les infos sur la billetterie du match retour des ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alors que le club vient d&#39;annoncer que le Tribune Loire sera bien ouverte contre la Juventus, voici les infos concernant la billetterie.</p></div>
            </div>
        </a>
        </Template></>;
}