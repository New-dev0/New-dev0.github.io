import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>France Tunisie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,France Tunisie"/>
        <meta name="description" content="Trending News about France Tunisie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>France Tunisie</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/antoine-griezmann-tunisie-france-coupe-du-monde-2022-2-97d286-0@1x.jpeg" alt="France Tunisie"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/sport/football-coupe-du-monde-2022-egalisation-de-griezmann-var-video-but-refuse-on-vous-explique-la-fin-du-match-perdu-tunisie-france-2240388.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tunisie-France : égalisation de Griezmann, VAR, but refusé... On ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR52HW8uktEitr0VD7QKt-ul0VclUl50V4UO5CGBYUzRVIhOMV_MpJekGDe_ZMdPz7X8FuCkVa8" alt="Tunisie-France : égalisation de Griezmann, VAR, but refusé... On ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;arbitre, après vérification à la vidéo, a décidé d&#39;annuler le but tricolore pour un hors-jeu passif de l&#39;attaquant des Bleus.</p></div>
            </div>
        </a><a href='https://www.lafinancepourtous.com/2022/11/30/tunisie-france-qui-va-gagner-match-economique/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tunisie-France : qui va gagner ? [match économique] - La finance ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTqd89B5FWGKjWtfVGAr5121vSHIpoUiS8416pgYHGpM0M90v19TjLqtE0JAGgp-R-zQaE9rGvx" alt="Tunisie-France : qui va gagner ? [match économique] - La finance ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après le match contre l&#39;Australie et contre le Danemark, l&#39;équipe de France est opposée à la Tunisie ce mercredi. Les Bleus, déjà qualifiés pour les.</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Medias/Actualites/Tunisie-france-tf1-loupe-le-var-de-la-fin-de-match/1367735'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tunisie-France : TF1 loupe le VAR de la fin de match</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2y4TWRDgwTLe3NbVIOMRLuYssz3A9HwKcjPkttDRlidFAUM6_WcaYYyc4d7lbq5-Ee5bMBeml" alt="Tunisie-France : TF1 loupe le VAR de la fin de match" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Diffuseur en clair de Tunisie-France (1-0), troisième match de poules des Bleus dans cette Coupe du monde, TF1 a envoyé la publicité avant la décision du&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/coupe-du-monde/directs/direct-tunisie-france-les-coiffeurs-pour-assurer-la-premiere-place-du-groupe-d_5512581.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tunisie-France : premiers de leur groupe malgré la défaite, les ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRrfh1gMCAChQBBM3Xca1xJ5DZ7Nec4LYFjHlzpoLd3dMv2eeKmEXUyfxHQSK1v75487h-7d30h" alt="Tunisie-France : premiers de leur groupe malgré la défaite, les ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Longtemps inoffensifs, les hommes de Didier Deschamps n&#39;ont pas pu égaliser malgré l&#39;entrée d&#39;Antoine Griezmann et Kylian Mbappé.</p></div>
            </div>
        </a><a href='https://www.lepoint.fr/sport/football/mondial-2022-tf1-rend-l-antenne-avant-la-fin-de-tunisie-france-30-11-2022-2499998_1858.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mondial 2022 : TF1 rend l&#39;antenne avant la fin de Tunisie-France</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTQGSmcwD3JIa6bLd6ypQi1OzreeF91jQv6TW1OwDxEKhiojIcS88ec8jjF3HrW3QLSKHL5LVrk" alt="Mondial 2022 : TF1 rend l&#39;antenne avant la fin de Tunisie-France" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les téléspectateurs de la chaîne ont été privés du dénouement de la rencontre avec l&#39;arbitre qui a annulé l&#39;égalisation en fin de match d&#39;Antoine Griezmann.</p></div>
            </div>
        </a><a href='https://www.lemonde.fr/coupe-du-monde-2022/article/2022/11/30/france-tunisie-febriles-les-bleus-s-inclinent-mais-terminent-premiers-de-leur-groupe_6152417_6101826.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France-Tunisie : fébriles, les Bleus s&#39;inclinent mais terminent ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSdt2NZTc4SHqW5wRjpSXDkqrAvQo9YTt5paYVrtQ8_05arE8ew9iRxqin4w5gKY0JBf6aEuk0M" alt="France-Tunisie : fébriles, les Bleus s&#39;inclinent mais terminent ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Des Bleus largement remaniés ont été battus (1-0) par la Tunisie. Ils enregistrent donc une défaite pour leur dernier match de poule, avant un huitième de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}