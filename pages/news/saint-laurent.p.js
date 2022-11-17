import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Saint Laurent</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Saint Laurent"/>
        <meta name="description" content="Trending News about Saint Laurent" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Saint Laurent</h1>
            <Image width={800} height={500} src="" alt="Saint Laurent"/>
            <h3>Recent News</h3>
            <a href='https://www.ouest-france.fr/medias/television/ce-soir-a-la-tele-le-saint-laurent-de-bertrand-bonello-sur-arte-8b249076-6509-11ed-aba0-e15ec39bff25'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ce soir à la télé. Le Saint Laurent de Bertrand Bonello sur Arte</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRNVB5qt1GHrX3PHsjCEkiKFHiDMbx6q22RlHod_VkrV-yJW5UgSfIEjSrgULp6bw88SRB6Mp6e" alt="Ce soir à la télé. Le Saint Laurent de Bertrand Bonello sur Arte" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2014 fut l&#39;année Yves Saint Laurent au cinéma. Tandis que Jalil Lespert proposait un Yves Saint Laurent avec Pierre Niney et Guillaume Gallienne,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gala.fr/l_actu/news_de_stars/gaspard-ulliel-son-incroyable-transformation-physique-pour-incarner-yves-saint-laurent_506624'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gaspard Ulliel : son incroyable transformation physique pour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTD1ERZr2aGMVKAMLVdRyp1cmW47jrast-yRfbNXsSGh63H3vQnBCh2Mk9htoyU3HOPVj2hjqy9" alt="Gaspard Ulliel : son incroyable transformation physique pour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans le biopic Saint Laurent, diffusé ce mercredi 16 novembre sur Arte, Gaspard Ulliel a incarné le célèbre créateur français. Pour rentrer dans la...</p></div>
            </div>
        </a><a href='https://www.cineserie.com/news/cinema/saint-laurent-comment-pierre-berge-sest-oppose-au-film-avec-gaspard-ulliel-5502707/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saint Laurent : comment Pierre Bergé s&#39;est opposé au film avec ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRUqNezkXKdbj6X18W4qA85YNUMml7PeWcxhJBG_8I4CcbKwhXUhkMlMb6W0G0nqfiCtFoRpK19" alt="Saint Laurent : comment Pierre Bergé s&#39;est opposé au film avec ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tous deux évoquent la vie de l&#39;artiste de haute couture. Le premier, porté par Gaspard Ulliel, montrant les excès d&#39;une vie, le second, avec Pierre Niney,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.telerama.fr/other/pierre-niney-vs-gaspard-ulliel-lequel-est-le-plus-saint-laurent-0224-34823.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pierre Niney vs Gaspard Ulliel : lequel est le plus “Saint Laurent” ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRTPu0awUlTABFVkjivhCkevZy7vEqwIT0fqJTv1NW221AmQEMOqtAu9wAkK4RkTQl_QgUHJzRW" alt="Pierre Niney vs Gaspard Ulliel : lequel est le plus “Saint Laurent” ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ils incarnent chacun un Yves Saint Laurent différent : Pierre Niney il y a quelques mois chez Jalil Lespert, et Gaspard Ulliel dans le film de Bertrand&nbsp;...</p></div>
            </div>
        </a><a href='https://www.femmeactuelle.fr/actu/news-actu/gaspard-ulliel-meconnaissable-dans-le-biopic-de-saint-laurent-2144832'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gaspard Ulliel : méconnaissable dans le biopic de Saint-Laurent</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRUlwlzVyAexlsZ1bRwgFjUPsej9UaG1zFWOP1MSSCJl27WM6mQHlhXhKXGOK0rvU-nk5KU7YIo" alt="Gaspard Ulliel : méconnaissable dans le biopic de Saint-Laurent" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le biopic Saint Laurent a été diffusé mercredi 16 novembre 2022, sur la chaîne Arte. C&#39;est Gaspard Ulliel qui incarne le créateur de mode français. P1.</p></div>
            </div>
        </a><a href='https://www.premiere.fr/Cinema/News-Cinema/Bertrand-Bonello-decrypte-son-biopic-dYves-Saint-Laurent-avec-Gaspard-Ulliel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bertrand Bonello décrypte son biopic d&#39;Yves Saint Laurent avec ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdxHczS7sLWvfF3w6NVe47dN8Xjys0BMJyTHwL1wDA1gMZ7LEt5wINra4J0a71UhmtyHewSs20" alt="Bertrand Bonello décrypte son biopic d&#39;Yves Saint Laurent avec ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;J&#39;ai voulu raconter ce que ça coûtait quotidiennement à Saint Laurent d&#39;être Saint Laurent&quot;</p></div>
            </div>
        </a>
        </Template></>;
}