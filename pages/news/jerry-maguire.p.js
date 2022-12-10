import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jerry Maguire</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jerry Maguire"/>
        <meta name="description" content="Trending News about Jerry Maguire" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jerry Maguire</h1>
            <Image width={800} height={500} src="https://imgsrc.cineserie.com/2021/12/tom-cruise-jerry-maguire.png?ver=1" alt="Jerry Maguire"/>
            <h3>Recent News</h3>
            <a href='https://www.cineserie.com/news/cinema/jerry-maguire-retour-sur-lhistoire-vraie-qui-a-inspire-le-film-4762175/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jerry Maguire : de quelle histoire vraie s&#39;inspire le film ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS0p8tqybCG1kWZ2YufQ1xllcHMllZrMZI0rGz3n7NLxwJNU_9iV83PXsRu9vUQTZ6Sh2puH3T9" alt="Jerry Maguire : de quelle histoire vraie s&#39;inspire le film ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Jerry Maguire&quot; : focus sur Leigh Steinberg, l&#39;agent sportif qui a inspiré le personnage incarné par Tom Cruise.</p></div>
            </div>
        </a><a href='https://www.programme-television.org/news-tv/Programme-TV-Jerry-Maguire-Pays-Bas-Argentine-que-regarder-a-la-tele-ce-soir-4698759'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Programme TV : Jerry Maguire, Pays-Bas / Argentine… que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTTQF5PiibS8nug-z-Yx7oACYbMWeZW51deMlsDhNGOzK1H9ha3Lx2s6tk1vvQoxISgKIF9uu9D" alt="Programme TV : Jerry Maguire, Pays-Bas / Argentine… que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le film Jerry Maguire, le match de football Pays-Bas / Argentine, le divertissement 300 Chœurs chantent et la comédie J&#39;adore ce que vous faite…</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/culture-loisirs/tv/programme-tv-du-vendredi-9-decembre-jerry-maguire-jadore-ce-que-vous-faites-notre-selection-09-12-2022-W4OEYUNNZRBINA4JM7JYA72ZZ4.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Programme TV du vendredi 9 décembre : «Jerry Maguire», «J&#39;adore ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRlBix4RFkbs2C_Bx_kXAcg92EimolM19HraK2WpmihUA9eMORaMVv7fhOnokYFmTYdY7-vq3jV" alt="Programme TV du vendredi 9 décembre : «Jerry Maguire», «J&#39;adore ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un héros campé par Tom Cruise en pleine remise en question, une comédie sociétale portée par Gérard Lanvin, un croque-mort dans le collimateur de la&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}