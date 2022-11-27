import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Equipe de France</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Equipe de France"/>
        <meta name="description" content="Trending News about Equipe de France" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Equipe de France</h1>
            <Image width={800} height={500} src="https://www.maxifoot.fr//photo.maxifoot.fr/mbappe-france-73.jpg" alt="Equipe de France"/>
            <h3>Recent News</h3>
            <a href='https://www.maxifoot.fr/football/article-52603.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Equipe de France : Mbappé, le monsieur plus des Bleus !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1MRy0_fBrGwCjTsN81jompvIPJk5FnCzvay7nBmHevqg-aTosIDA-_LXpTiSoI0C4T2m3VCbU" alt="Equipe de France : Mbappé, le monsieur plus des Bleus !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kylian Mbappé a porté les Bleus. 3 buts et 1 passe décisive en deux matchs (sur 6 buts inscrits pour son équipe) sur cette Coupe du monde 2022. Sans tout&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foot-national.com/equipe-de-france/kylian-mbappe-qualifie-l-equipe-de-france-pour-les-huitiemes-de-finale-de-la-coupe-du-monde-802653'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kylian Mbappé qualifie l&#39;équipe de France pour les huitièmes de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTYPbU6Aic2jGdFQfw2V4YdIcC_HxxElC9parFISoX9Ahx54lqDLnvmT507FBDKK_dsICel2AJj" alt="Kylian Mbappé qualifie l&#39;équipe de France pour les huitièmes de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;équipe de France se qualifie pour les huitièmes de finale de la Coupe du Monde 2022 au Qatar. Les Bleus se sont imposés, deux buts à zéro, contre le Danemark&nbsp;...</p></div>
            </div>
        </a><a href='https://www.footmercato.net/a7204113040920458588-equipe-de-france-des-doutes-des-interrogations-et-des-deceptions-au-poste-de-lateral-droit'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Équipe de France : des doutes, des interrogations et des déceptions ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRX0RdO7G-2O2_FadFIVxTnvbqS4DBFw5TcPFpcjOvIzo2Bjm4aXUvMOWkggW1z9Aw94jNgDzHR" alt="Équipe de France : des doutes, des interrogations et des déceptions ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après deux matchs dans cette Coupe du Monde 2022, ni Benjamin Pavard, ni Jules Koundé ont apporté des gages de satisfaction en tant que latéral d (.</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/L-equipe-de-france-qualifiee-pour-les-8es-de-finale-de-la-coupe-du-monde-si/1366985'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;équipe de France qualifiée pour les 8es de finale de la Coupe du ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR61Jw_YdmhYM-8BXKDo_VlR_3AFvpGVtLYBbgGOCtrTvcOIIs3krnQW2bIwgE_AEcXlEaqjZEK" alt="L&#39;équipe de France qualifiée pour les 8es de finale de la Coupe du ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après un premier succès convaincant contre l&#39;Australie mardi (4-1), l&#39;équipe de France affronte le Danemark samedi (17 heures) pour son deuxième match dans&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/football/equipe-de-france/equipe-de-france-les-bleus-mettent-fin-a-la-malediction-du-champion-du-monde-en-titre-e5ad66f6-6db2-11ed-a158-c55305e444bb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Équipe de France. Les Bleus mettent fin à la « malédiction » du ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRXnwcD7h4O73yWEn4sIxUuqm1BlAeCqih7iJi_Jmf7q8gr8rah_lycox3uGcAR7mYoIX_nM_1E" alt="Équipe de France. Les Bleus mettent fin à la « malédiction » du ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Grâce à sa victoire face au Danemark (2-1), l&#39;équipe de France s&#39;est qualifiée pour les huitièmes de finale de la Coupe du monde. Les Bleus mettent ainsi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sudouest.fr/sport/football/coupe-du-monde/coupe-du-monde-2022-equipe-de-france-quelles-rotations-a-prevoir-face-a-la-tunisie-13142215.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022. Équipe de France : quelles rotations à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRuD6MTqB7JeO86bkr8HUrxdQjb2DTO2DU3xgrPr-JZiAmLz_hPCL8k_PXhl4wDxs_m1WSQNQzR" alt="Coupe du monde 2022. Équipe de France : quelles rotations à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La qualification pour les huitièmes de finale en poche, Didier Deschamps a prévu des changements dans son onze de départ pour le troisième match face à la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/football/equipe-de-france/equipe-de-france-lucas-hernandez-aurait-songe-a-prendre-sa-retraite-apres-sa-blessure-eec60154-6da2-11ed-a158-c55305e444bb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Équipe de France. Lucas Hernandez aurait songé à prendre sa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTeAv6s-xLW7Sbw0IUPyAIR6A2dqZh_86qwiVxxFozGIOGjM1FuLiBHEAfVQpYaTjUi1vnIehza" alt="Équipe de France. Lucas Hernandez aurait songé à prendre sa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Blessé au genou contre l&#39;Australie (4-1) lors du premier match des Bleus à Coupe du monde, Lucas Hernandez aurait songé, un temps donné, à prendre sa&nbsp;...</p></div>
            </div>
        </a><a href='https://www.topmercato.com/1008331-equipe-de-france-lucas-hernandez-voulait-dire-stop-cdm22/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Equipe de France : Lucas Hernandez voulait dire stop !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQPAkszpMlquUc4qwhqXBaJY_2LL2ei2pjc1kt-pVFI6SytQajh7layqmgpsr7SIfh2UB-nHvbP" alt="Equipe de France : Lucas Hernandez voulait dire stop !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Victime d&#39;une grave blessure avec l&#39;équipe de France contre l&#39;Australie, Lucas Hernandez a un temps songé à prendre sa retraite internationale, comme.</p></div>
            </div>
        </a><a href='https://www.foot01.com/equipe-de-france/edf-l-australie-a-ecoeure-lucas-hernandez-il-a-pense-au-pire-416410'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EdF : L&#39;Australie a écœuré Lucas Hernandez, il a pensé au pire</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-u1smnLreqxcMEDRVhoKHqQQbszhuNNxso1KExJTaFTnGps2Js_2wcDFkjysUc0TahE2NQzYV" alt="EdF : L&#39;Australie a écœuré Lucas Hernandez, il a pensé au pire" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lucas Hernandez a du apprécier la victoire de la France sur le Danemark. Mais, il l&#39;aurait goûté bien plus en étant présent sur la pelouse du Stade 974 de&nbsp;...</p></div>
            </div>
        </a><a href='https://le10sport.com/football/equipe-de-france/equipe-de-france-coup-de-tonnerre-un-joueur-proche-dannoncer-sa-retraite-au-qatar-623183'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Equipe de France : Coup de tonnerre, un joueur proche d&#39;annoncer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRkuE8Y7T4PZ4Gs-JajnY-48SIqSJJmJhaS3-IUaGinmb3TWfyWJ0HSVP4WoVmpxYgcbYLYMRMX" alt="Equipe de France : Coup de tonnerre, un joueur proche d&#39;annoncer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Mondial est déjà terminé pour Lucas Hernandez. Touché aux ligaments du genou droit, le joueur est certainement forfait pour le reste de la saison.</p></div>
            </div>
        </a>
        </Template></>;
}