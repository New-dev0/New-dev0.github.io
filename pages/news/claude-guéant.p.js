import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Claude Guéant</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Claude Guéant"/>
        <meta name="description" content="Trending News about Claude Guéant" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Claude Guéant</h1>
            <Image width={800} height={500} src="https://media.lesechos.com/api/v1/images/view/637cf926b6437756f5056971/1280x720/0702844361828-web-tete.jpg" alt="Claude Guéant"/>
            <h3>Recent News</h3>
            <a href='https://www.lesechos.fr/politique-societe/politique/campagne-des-legislatives-2012-claude-gueant-condamne-a-six-mois-de-prison-ferme-1881683'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Campagne des législatives 2012 : Claude Guéant condamné à six ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT4Z0U3BE2NfugwtRZanhifpcQCw4jcUvEvfln1m8rXtoTaC3SjUcMFwyfoVnGMDMXecq9njCZb" alt="Campagne des législatives 2012 : Claude Guéant condamné à six ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le tribunal correctionnel de Nanterre a condamné mardi l&#39;ancien ministre Claude Guéant à dix-huit mois d&#39;emprisonnement dont douze assortis d&#39;un sursis&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/politique/claude-gueant/escroquerie-de-frais-de-campagne-l-ancien-ministre-claude-gueant-condamne-a-six-mois-de-prison-ferme-amenages_5493384.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Escroquerie de frais de campagne : l&#39;ancien ministre Claude Guéant ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZ6Ks8lH6Q4Ns2BsY9sU0OD48jV7vyK7r-GyqHUTGBjVAGtsGrOY_zfaohqnR_j4J5EGDbaAKv" alt="Escroquerie de frais de campagne : l&#39;ancien ministre Claude Guéant ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ancien ministre de l&#39;Intérieur était poursuivi dans le cadre du financement de sa campagne des législatives en 2012. Son avocat a fait appel mardi après&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/politique/escroquerie-de-frais-de-campagne-claude-gueant-condamne-a-six-mois-de-prison-ferme-amenages-20221122'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Escroquerie de frais de campagne : Claude Guéant condamné à six ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRaxJuBGCYzjvvTsuRMF1wBtz7AIBwIV3fhSSeITgRtInS-JEhYIaB0N0XQdZZE5lu0GOHQpAQS" alt="Escroquerie de frais de campagne : Claude Guéant condamné à six ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ancien ministre de l&#39;Intérieur sous Nicolas Sarkozy, qui a été condamné pour sa campagne législative de 2012, fait appel de la décision.</p></div>
            </div>
        </a><a href='https://www.lemonde.fr/politique/article/2022/11/22/claude-gueant-condamne-a-six-mois-de-prison-ferme-amenages-pour-escroquerie-de-frais-de-campagne_6151079_823448.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Claude Guéant condamné à six mois de prison ferme aménagés ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTHZiKCXBzRlLt7w8DsdG1wRiM86D6ofZuVjbKXoCaeE0MNpgStDQgWyAKWzl19xl6zDV5zpP2o" alt="Claude Guéant condamné à six mois de prison ferme aménagés ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le tribunal de Nanterre a condamné, mardi 22 novembre, l&#39;ancien ministre Claude Guéant à dix-huit mois d&#39;emprisonnement, dont douze assortis d&#39;un sursis&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/faits-divers/claude-gueant-condamne-a-six-mois-de-prison-pour-escroquerie-de-frais-de-campagne-22-11-2022-WXG25ETSQNA45KMFLADWZWAHWI.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Claude Guéant condamné à six mois de prison pour escroquerie ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ4vPhar7LDqMKRSRcJVIClGeCKOLhGEwonBKO3mMkbOFajRZZn4iRSEIh_qLq7LyXCZjRaTJ-n" alt="Claude Guéant condamné à six mois de prison pour escroquerie ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ancien ministre de l&#39;Intérieur était soupçonné d&#39;avoir sciemment minoré ses comptes de campagne et ainsi obtenu un remboursement de plus de 30 000 euros&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/politique/claude-gueant/claude-gueant-condamne-pour-escroquerie-de-frais-de-campagne-242fdfda-6a4d-11ed-91aa-42061f36b05f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Claude Guéant condamné pour escroquerie de frais de campagne</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_udaLfoaHz7-PJXyRtWjcp3NwRGVnq_R4VYsfFlyuwgOtDrx2IQ-vKsPLYdjfixlPMAZacESh" alt="Claude Guéant condamné pour escroquerie de frais de campagne" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ancien ministre de l&#39;Intérieur de Nicolas Sarkozy a été condamné à six mois de prison ferme aménagés ce mardi 22 novembre 2022 par le tribunal de Nanterre&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lejdc.fr/nevers-58000/sports/des-maires-nivernais-prennent-la-parole-claude-gueant-condamne-pour-escroquerie-premier-match-des-bleus-l-actu-a-retenir-de-ce-mardi_14220285/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Des maires nivernais prennent la parole, Claude Guéant condamné ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRmZo1auEEyi9WVuvd6Ts0mrlsjQHfjh2MgAp1zs6A-AxGYIPAh8ToRFvho345Gkt5wCqP3gaBg" alt="Des maires nivernais prennent la parole, Claude Guéant condamné ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Des maires nivernais prennent la parole, Claude Guéant condamné pour escroquerie, premier match des Bleus... L&#39;actu à retenir de ce mardi. Publié le 22/11/2022&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}