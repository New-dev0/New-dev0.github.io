import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fete des lumieres Lyon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fete des lumieres Lyon"/>
        <meta name="description" content="Trending News about Fete des lumieres Lyon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fete des lumieres Lyon</h1>
            <Image width={800} height={500} src="https://france3-regions.francetvinfo.fr/image/pGfx6liZi51a-H5FRAS1dk8PYSU/930x620/regions/2022/12/08/6392061e04b9e_terreaux.jpg" alt="Fete des lumieres Lyon"/>
            <h3>Recent News</h3>
            <a href='https://france3-regions.francetvinfo.fr/auvergne-rhone-alpes/rhone/lyon/direct-video-lyon-fete-des-lumieres-2022-suivez-le-coup-d-envoi-des-20-heures-2670524.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>REPLAY. Lyon. Fête des Lumières 2022 : revivez l&#39;émission ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTj15OsGR77vK5tjzVWVONj4fDKepe1NW2Z_FDj3ql3v06OE0NuMMYLE9UbfaPNmRjH5cqNJ17u" alt="REPLAY. Lyon. Fête des Lumières 2022 : revivez l&#39;émission ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En ce 8 décembre 2022 s&#39;ouvre la Fête des Lumière à Lyon. Entre animations luminescentes projetées sur les murs et lumignons déposés dans les parcs,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.le-tout-lyon.fr/lyon-la-fete-des-lumieres-a-suivre-en-direct-117502.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lyon : la Fête des lumières à suivre en direct</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQv6dA4iw8G0C635efY9N974dQyejNGXaqcO7jodolkb0ehc7lq9hJUHPXnHDlV64GdZCnipFki" alt="Lyon : la Fête des lumières à suivre en direct" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Coup d&#39;envoi de la Fête des lumières en ce jeudi 8 décembre à Lyon, avec une féerie d&#39;oeuvres lumineuses à découvrir. Une première soirée à vivre en live&nbsp;...</p></div>
            </div>
        </a><a href='https://france3-regions.francetvinfo.fr/auvergne-rhone-alpes/rhone/lyon/lyon-fete-des-lumieres-2022-en-connaissez-vous-l-origine-tout-a-commence-un-8-decembre-2664268.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lyon. Fête des Lumières 2022 : en connaissez-vous l&#39;origine? Tout ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRAuS8jSQ5oylHA_1E3RftjUADXkt--kpxA5u4sJDxqfo1BqQ1PrY9r24BfK0frvSZMmmfB4UEj" alt="Lyon. Fête des Lumières 2022 : en connaissez-vous l&#39;origine? Tout ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Fête des Lumières tire son origine de l&#39;inauguration de la statue de la Vierge dorée à Fourvière au milieu du XIXème siècle. Du simple petit lumignon&nbsp;...</p></div>
            </div>
        </a><a href='https://www.linternaute.com/sortir/guide-des-loisirs/1329089-fete-des-lumieres-de-lyon-2022-ce-qu-il-ne-faut-pas-manquer-du-programme/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fête des Lumières de Lyon 2022 : ce qu&#39;il ne faut pas manquer du ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRfxxsaxx-3zsbSzn1gqDkIeNIGVieR1BhZKNAnhU7d8x9OsiX0ir24W-EQ_OJzV8N0n8Pq7aFJ" alt="Fête des Lumières de Lyon 2022 : ce qu&#39;il ne faut pas manquer du ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FETE DES LUMIERES. Du 8 au 11 décembre 2022, la ville de Lyon se pare de mille et une couleurs à l&#39;occasion de sa traditionnelle Fête des Lumières.</p></div>
            </div>
        </a><a href='https://www.lepoint.fr/societe/fete-des-lumieres-a-lyon-poesie-humour-et-sobriete-energetique-08-12-2022-2500980_23.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fête des lumières à Lyon: poésie, humour et... sobriété énergétique</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTBQTHEkz2jTD1lg8vW1T_yD-WI2KniomJt92UkFQ84dsXEU8HQpXyiYZEVeNIBfd0mWkX9qgqA" alt="Fête des lumières à Lyon: poésie, humour et... sobriété énergétique" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un champ de lucioles, un chat sorti du métaverse, des oeuvres d&#39;art qui chantent ACDC et Dalida... la Fête des lumières prend ses quartiers jeudi à...</p></div>
            </div>
        </a><a href='https://www.lyoncapitale.fr/actualite/lyon-decouvrez-la-fete-des-lumieres-2022-en-1-min-chrono-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lyon : découvrez la Fête des lumières 2022 en 1 min chrono (vidéo)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQMzmfVY0ok6o7jbwWyUgakw1jJi_R-39ifhZ6TJW1728jOfgffHgrHHydZim2K5Fwa-PPbO3uH" alt="Lyon : découvrez la Fête des lumières 2022 en 1 min chrono (vidéo)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lyon Capitale a assisté mercredi 7 décembre à l&#39;illumination en avant-première d&#39;une dizaine d&#39;oeuvres de la Fête des lumières 2022.</p></div>
            </div>
        </a><a href='https://www.lyonmag.com/article/127325/lyon-les-bad-gones-critiquent-la-fete-des-lumieres'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lyon : les Bad Gones critiquent la Fête des Lumières</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcStk-K4NaVanLI342p1Rul7R4fhIuUOB85m4lL8HUdIdVcSQbRti8x2N3rfiCM3PwM8Z1no6_Mg" alt="Lyon : les Bad Gones critiquent la Fête des Lumières" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alors que la Fête des Lumières débute officiellement ce jeudi, les Bad Gones ont décidé de publier un communiqué critiquant un évènement &quot;purement&nbsp;...</p></div>
            </div>
        </a><a href='https://www.le-tout-lyon.fr/fete-des-lumieres-la-bibliotheque-municipale-fete-ses-50-ans-117462.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fête des lumières : la bibliothèque municipale fête ses 50 ans</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQhPgRFJnWXEg_e0ehIJb-XDUdn7A22f3rH5A7RIojGIdhH7iVi-sxGYnW9_YBtuw62LE9eSwNd" alt="Fête des lumières : la bibliothèque municipale fête ses 50 ans" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quoi de mieux que la Fête des lumières pour célébrer son anniversaire ? Une installation lumineuse sur le thème des années 1970 est à voir sur la façade de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}