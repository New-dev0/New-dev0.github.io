import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pretty Woman</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pretty Woman"/>
        <meta name="description" content="Trending News about Pretty Woman" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pretty Woman</h1>
            <Image width={800} height={500} src="https://img-4.linternaute.com/E3acdwseFA2vgFvM2gUVOmni5Z0=/1500x/smart/64f13f2300d448a2b21934c4f0048ba5/ccmcms-linternaute/39788230.jpg" alt="Pretty Woman"/>
            <h3>Recent News</h3>
            <a href='https://www.linternaute.com/cinema/tous-les-films/2205898-pretty-woman-sur-m6-la-fin-du-film-aurait-pu-etre-bien-differente/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pretty Woman : la fin du film aurait pu être bien différente</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRLV9aRfEnoAh_XEk9I_ylUHcgJVRvyyS8WIJkfAZPHPhfWVFyQbzOuqSF3ZVNQK1AnAqEM5Bph" alt="Pretty Woman : la fin du film aurait pu être bien différente" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pretty Woman est une comédie romantique mettant en scène le couple Richard Geere/Julia Roberts. La fin, désormais culte, aurait toutefois pu être&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nostalgie.fr/actus/pretty-woman-que-sont-devenus-les-principaux-acteurs-du-film-70249190'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Pretty Woman&quot; : que sont devenus les principaux acteurs du film ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQuIXwbYu6W1arBYVtVn8WDoRQUTz4J_vXUGUOumrbJ-rv2Yw8C5qQlblsV8LyaiA773LiU5NkH" alt="&quot;Pretty Woman&quot; : que sont devenus les principaux acteurs du film ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Devenu cultissime, &quot;Pretty Woman&quot;, sorti en 1990, a lancé la carrière de la délicieuse Julia Roberts. Retour sur la trajectoire des principaux acteurs du&nbsp;...</p></div>
            </div>
        </a><a href='https://fr.news.yahoo.com/pretty-woman-suite-possible-pourquoi-200000495.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pretty Woman : une suite possible ? Pourquoi ça ne s&#39;est jamais fait ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTGXIkDmDAjLzc7HL9cJa0TCoZ0KAwUmcY4B12Iyf_AaijCSan7OdKhLCgDPZ9lpEm-oWrU7N6E" alt="Pretty Woman : une suite possible ? Pourquoi ça ne s&#39;est jamais fait ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sorti au cinéma en 1990, le film avec Julia Roberts et Richard Gere n&#39;a jamais eu de suite malgré son succès. Et on dirait qu&#39;un 2ème volet n&#39;est toujours pas d&nbsp;...</p></div>
            </div>
        </a><a href='https://www.feminactu.com/2022/11/pretty-woman-le-film-culte-avec-julia-roberts-et-richard-gere-ce-soir-sur-m6/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Pretty Woman » : le film culte avec Julia Roberts et Richard Gere ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTO8dtpDb9kxL4JaNnD1RPEJAb0SY2UiHFwhEbX1LwEgg_c7RND4bLcjRFO3vOCId57KJs021sx" alt="« Pretty Woman » : le film culte avec Julia Roberts et Richard Gere ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quand Edward Lewis, businessman de talent, s&#39;offre les services de la belle Vivian, beauté fatale qui arpente chaque nuit les trottoirs d&#39;Hollywood Boulevard,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/cinema/314792-pretty-woman-m6-letonnante-methode-du-realisateur-pour-faire-rire-julia-roberts-sur-le-tournage/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pretty Woman (M6) : l&#39;étonnante méthode du réalisateur pour faire ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Pretty Woman (M6) : l&#39;étonnante méthode du réalisateur pour faire ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son interprétation de Vivian lui vaut déjà une nomination à l&#39;Oscar de la meilleure actrice. Le film de Garry Marshall sera pour elle le point de départ d&#39;une&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/cinema/pretty-woman-5-anecdotes-que-vous-ne-connaissiez-peut-etre-pas-sur-le-film-culte-d80a33c6-6f24-11ed-a2a4-28e0450c61da'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Pretty Woman » : 5 anecdotes que vous ne connaissiez peut-être ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQgmjzb2WAJOnSWXuXglG8HCE_ZdLP4jdfGRa-9rmt2IHsT8l4HLP9vWjtpHtMQTUnvHqMtrmX0" alt="« Pretty Woman » : 5 anecdotes que vous ne connaissiez peut-être ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Julia Roberts et Richard Gere forment dans ce film un magnifique duo. Pourtant, ils n&#39;étaient au départ pas les premiers de la liste lors du choix des acteurs&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cosmopolitan.fr/pretty-woman-cette-scene-culte-a-ete-tres-difficile-a-tourner,2066461.asp'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pretty Woman : cette scène culte a été très difficile à tourner</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSOod7y4sOWW2pDGvZSicoHxtKUfIqA19J0uKnDrsZIe8CEwu2knV4mT9C8XityripuMA-4YXs3" alt="Pretty Woman : cette scène culte a été très difficile à tourner" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tous les films ont leurs petits secrets de tournage. Que ce soit des anecdotes, des techniques ou autres astuces de réalisations. Dans Pretty Woman&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}