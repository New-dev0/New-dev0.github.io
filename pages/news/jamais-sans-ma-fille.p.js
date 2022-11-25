import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jamais sans ma fille</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jamais sans ma fille"/>
        <meta name="description" content="Trending News about Jamais sans ma fille" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jamais sans ma fille</h1>
            <Image width={800} height={500} src="https://imgsrc.cineserie.com/2022/11/sally-field-et-sheila-rosenthal-jamais-sans-ma-fille.jpg?ver=1" alt="Jamais sans ma fille"/>
            <h3>Recent News</h3>
            <a href='https://www.cineserie.com/news/cinema/jamais-sans-ma-fille-pourquoi-lhistoire-a-fait-polemique-5507905/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jamais sans ma fille : pourquoi l&#39;histoire a fait polémique ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS42D_X_p-whol561zdxa_lmK38noqdOAPRwckPdHORHFAM6dlnV7IG0pL1BET1uwMKINWwJuDo" alt="Jamais sans ma fille : pourquoi l&#39;histoire a fait polémique ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Jamais sans ma fille&quot; raconte l&#39;enfer vécu par Betty Mahmoody et sa fille. Un récit qui fut particulièrement critiqué.</p></div>
            </div>
        </a><a href='https://www.allocine.fr/article/fichearticle_gen_carticle=1000002237.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ce soir à la télé : le film qui vous déchire le coeur à chaque fois</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjcYVVm7krVtKN06StlHW-OMw0PJPbLOndmMMevNO7fobgDmvVi1FApxgJPG2KTeeD7ebeCZOS" alt="Ce soir à la télé : le film qui vous déchire le coeur à chaque fois" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En 1984, Betty Mahmoody, une Américaine, accepte de suivre son mari Moody, un médecin d&#39;origine iranienne, dans son pays d&#39;origine pour des vacances, avec leur&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}