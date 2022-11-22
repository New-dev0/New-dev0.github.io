import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Victor Hugo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Victor Hugo"/>
        <meta name="description" content="Trending News about Victor Hugo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Victor Hugo</h1>
            <Image width={800} height={500} src="https://images.bfmtv.com/mML9R5Y787ahKUrTgWOojhESmOM=/0x0:1280x720/1280x0/images/La-statue-de-Victor-Hugo-restauree-source-Twitter-de-la-ville-de-Besancon-1524680.jpg" alt="Victor Hugo"/>
            <h3>Recent News</h3>
            <a href='https://www.bfmtv.com/societe/a-besancon-la-restauration-d-une-statue-de-victor-hugo-critiquee_AN-202211210445.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>À Besançon, la restauration d&#39;une statue de Victor Hugo critiquée</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRyB8js8LeqMjxGEK30GvC4s8gtrey0MKRpETsjlkLN0XzZCHVxgsU8L8-JeBYQAId1kcc0mMyR" alt="À Besançon, la restauration d&#39;une statue de Victor Hugo critiquée" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans la préfecture du Doubs, la statue de l&#39;écrivain français a été rénovée et arbore désormais un teint foncé, déclenchant une polémique et un acte de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/bourgogne-franche-comte/besancon-25000/restauree-degradee-a-besancon-la-statue-de-victor-hugo-cree-la-polemique-881359ac-69ba-11ed-bd29-7d31c7eef0da'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Restaurée, dégradée… À Besançon, la statue de Victor Hugo crée ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRUbYj8LZjlWvdMqm8WjHB-UFWmQ-STeOaMmYpzFh1gaSVXt2rPEEOmAzpT1-pPxyeSHEAoOqoR" alt="Restaurée, dégradée… À Besançon, la statue de Victor Hugo crée ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Réalisée il y a vingt ans par Ousmane Sow, la statue du célèbre écrivain est l&#39;objet de nombreuses critiques depuis sa restauration.</p></div>
            </div>
        </a><a href='https://m.epochtimes.fr/on-dirait-un-victor-hugo-noir-a-besancon-la-nouvelle-version-de-la-statue-de-lecrivain-surprend-2164832.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«On dirait un Victor Hugo noir»: à Besançon, la nouvelle version de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQfICDWd4DPmcAUmjJq2Gdv4nOfLS0hNYmH5_wwCMGyxgMQt-IgAZsonlYxoFy4CMBg3oXvnpjz" alt="«On dirait un Victor Hugo noir»: à Besançon, la nouvelle version de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après avoir subi une restauration, la statue de Victor Hugo, qui siège depuis 2003 sur l&#39;Esplanade de la ...</p></div>
            </div>
        </a><a href='https://www.leprogres.fr/faits-divers-justice/2022/11/21/a-besancon-une-statue-de-victor-hugo-victime-de-white-facing'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vandalisme. A Besançon, une statue de Victor Hugo victime de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTY_5F0EKGKtrCIYgII21UwxfjcSkB-gqTS0OM_uAi76mG24ZRCgzbDLzCtOF_7EzwEfvO2JTuK" alt="Vandalisme. A Besançon, une statue de Victor Hugo victime de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La statue en bronze de Victor Hugo qui trône devant la mairie de Besançon a subi un acte de vandalisme dans la nuit de dimanche à lundi.</p></div>
            </div>
        </a><a href='https://france3-regions.francetvinfo.fr/bourgogne-franche-comte/doubs/besancon/statue-de-victor-hugo-noir-a-besancon-un-racisme-dramatique-on-decrypte-en-images-cette-polemique-qui-n-aurait-jamais-du-avoir-lieu-2659628.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Statue de Victor Hugo “noir” à Besançon ? “Un racisme dramatique ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRCc9fuuvr2JoGZfDrNf30A-B8XELoS_TSzqbK8D-QfRb8sX8etZcsJ_3iSdqClkWaXAYMQRXPx" alt="Statue de Victor Hugo “noir” à Besançon ? “Un racisme dramatique ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Restaurée depuis quelques jours, la statue qui représente le célèbre écrivain dans sa ville natale de Besançon (Doubs) fait parler d&#39;elle au niveau national&nbsp;...</p></div>
            </div>
        </a><a href='https://www.estrepublicain.fr/culture-loisirs/2022/11/21/besancon-la-statue-de-victor-hugo-une-miserable-polemique'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Billet. Besançon : La statue de Victor Hugo, une misérable polémique</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Billet. Besançon : La statue de Victor Hugo, une misérable polémique" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est l&#39;éternel débat subjectif du beau contre le laid. À l&#39;origine, l&#39;artiste Ousmane Sow avait donné vie à la représentation du père des Misérables en&nbsp;...</p></div>
            </div>
        </a><a href='https://www.macommune.info/besancon-le-visage-de-la-statue-de-victor-hugo-repeinte-en-blanc-par-des-vandales/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Besançon : le visage de la statue de Victor Hugo repeint en blanc ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRyBnC1YOBq1_pW6uDmsxtAMYVhZYNq0Smf1ULOWrPQAFQKL6ZYxVZluvuENuREERmo8OB3innR" alt="Besançon : le visage de la statue de Victor Hugo repeint en blanc ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}></p></div>
            </div>
        </a>
        </Template></>;
}