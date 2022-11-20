import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gilbert Montagné</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gilbert Montagné"/>
        <meta name="description" content="Trending News about Gilbert Montagné" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gilbert Montagné</h1>
            <Image width={800} height={500} src="https://images.rtl.fr/~c/2000v2000/rtl/www/1553135-jade-gilbert-montagne-et-eric-dussart.png" alt="Gilbert Montagné"/>
            <h3>Recent News</h3>
            <a href='https://www.rtl.fr/culture/medias-people/meteo-danse-avec-les-stars-the-voice-ce-que-gilbert-montagne-reve-de-faire-a-la-tele-7900207557'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Météo, Danse avec les Stars, The Voice : ce que Gilbert Montagné ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSrU7TzWzD62UOAItVS5HX94mnj_z9EMdEdfpxMtN10M1ADR2gpDC_oS0-6NirgTBxCrlVlINPi" alt="Météo, Danse avec les Stars, The Voice : ce que Gilbert Montagné ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Sous les sunlights des tropiques&quot;, &quot;The Fool&quot;, &quot;On va s&#39;aimer&quot;, Gilbert Montagné a fait danser toutes les générations. A présent, il aimerait apparaître&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gala.fr/l_actu/news_de_stars/video-gilbert-montagne-ce-defaut-de-sa-femme-nikole-qui-le-met-tres-mal-a-laise_506844'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO – Gilbert Montagné : ce défaut de sa femme Nikole qui le met ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSxiJsBj-3HlomOzuzEo5TsXmd-MVQYb0-BcsyDtYry6CLQ2QjMqF2M0bsjiKrawSGhLq3dRBo9" alt="VIDÉO – Gilbert Montagné : ce défaut de sa femme Nikole qui le met ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce samedi 19 novembre, Éric Dussart et Jade recevaient Gilbert Montagné dans l&#39;émission On refait la télé sur RTL. L&#39;animateur est notamment revenu...</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/tv/314241-50-minutes-inside-gilbert-montagne-en-larmes-en-evoquant-sa-petite-fille-la-sequence-tres-emouvante/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>50 minutes inside : Gilbert Montagné en larmes en évoquant sa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="50 minutes inside : Gilbert Montagné en larmes en évoquant sa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce samedi 19 novembre, Nikos Aliagas s&#39;est entretenu avec Gilbert Montagné dans 50 minutes inside. Pendant l&#39;entretien, le chanteur de 70 ans a fondu en&nbsp;...</p></div>
            </div>
        </a><a href='https://www.voici.fr/news-people/gilbert-montagne-interesse-pour-etre-jure-de-the-voice-il-repond-743273'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gilbert Montagné intéressé pour être juré de The Voice ? Il répond</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTA1z0DQ-fR6BtB3b6c0JSoHF3MGsy57eZbFHtwcOP6gN3jImzEpqPvQ433IkqJTjNRwpmH6j6o" alt="Gilbert Montagné intéressé pour être juré de The Voice ? Il répond" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce samedi 19 novembre, Gilbert Montagné a répondu aux questions d&#39;Eric Dussart et Jade sur sa carrière, son présent mais aussi ses envies futures....</p></div>
            </div>
        </a>
        </Template></>;
}