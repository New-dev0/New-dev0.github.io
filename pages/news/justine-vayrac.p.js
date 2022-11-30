import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Justine Vayrac</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Justine Vayrac"/>
        <meta name="description" content="Trending News about Justine Vayrac" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Justine Vayrac</h1>
            <Image width={800} height={500} src="https://images.ladepeche.fr/api/v1/images/view/6386111bdd91434cae7b127c/large/image.jpg?v=1" alt="Justine Vayrac"/>
            <h3>Recent News</h3>
            <a href='https://www.ladepeche.fr/2022/11/29/mort-de-justine-vayrac-pourquoi-les-analyses-toxicologiques-ne-sont-toujours-pas-connues-10835027.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>INFO LA DEPECHE. Mort de Justine Vayrac : pourquoi les analyses ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNRTi9Ofzy4jetve-tCgRyGqZf_C7pkAB_XUG8rPEgU_P5VXS3ePeG6QdvJq90G38d1Ob9ENV4" alt="INFO LA DEPECHE. Mort de Justine Vayrac : pourquoi les analyses ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elles sont déterminantes dans le cadre de l&#39;affaire judiciaire et pourtant, elles ne sont toujours pas connues. Baptiste Porcher, le procureur de la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lamontagne.fr/brive-la-gaillarde-19100/actualites/affaire-justine-vayrac-en-correze-l-enquete-dans-l-attente-de-l-analyse-toxicologique_14224776/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Affaire Justine Vayrac en Corrèze : l&#39;enquête dans l&#39;attente de l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ2Yhhjc15YjjFnyctxRUn_23t0HCVDuq1EazGVoTOY95irofqSL1CTjj0sdzlbNbOdtfP8quwI" alt="Affaire Justine Vayrac en Corrèze : l&#39;enquête dans l&#39;attente de l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les services d&#39;enquête sont toujours dans l&#39;attente des conclusions officielles de l&#39;analyse toxicologique, qui permettra de déterminer si Justine Vayrac a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sudouest.fr/faits-divers/meurtre-de-justine-vayrac-la-video-attribuee-a-lucas-l-n-a-pas-ete-tournee-a-la-prison-de-perigueux-13173650.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meurtre de Justine Vayrac : la vidéo attribuée à Lucas L. n&#39;a pas été ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTE0lRr-JGfgyk2UjGIWnctl8SG-rEYzy1_EZ01bvmG5XB-LUo20HF8fT5hx9N-YesKJPGxA6RA" alt="Meurtre de Justine Vayrac : la vidéo attribuée à Lucas L. n&#39;a pas été ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un post sur Instagram au nom de Lucas L. laisse entendre que l&#39;agriculteur de 21 ans, mis en examen pour viol et meurtre, « vit sa meilleure vie en prison&nbsp;...</p></div>
            </div>
        </a><a href='https://www.centrepresseaveyron.fr/2022/11/29/meurtre-de-justine-vayrac-lautopsie-revele-que-la-jeune-femme-a-ete-violee-le-soir-de-sa-mort-10834713.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meurtre de Justine Vayrac : l&#39;autopsie révèle que la jeune femme a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTVh5aTzjxCKEH9uWX7wimhE__lntcSACf8IzCSrwquaHJ-hpVhXLbZyIFwV4_YXj98yQMyQ6nI" alt="Meurtre de Justine Vayrac : l&#39;autopsie révèle que la jeune femme a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le principal suspect, un agriculteur de 21 ans qui est la dernière personne à avoir été vue avec Justine, a avoué le meurtre aux enquêteurs lors de sa garde à&nbsp;...</p></div>
            </div>
        </a><a href='https://www.varmatin.com/faits-divers/lautopsie-pratiquee-sur-le-corps-de-justine-vayrac-revele-que-la-jeune-femme-a-ete-violee-le-soir-de-sa-mort-811263'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;autopsie pratiquée sur le corps de Justine Vayrac révèle que la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSYhWn4qONVe3bKBnRmntYCkfpUBvv9wcNOhxghLBUSQwgX601rfjsxQCpCL7-Tw7qD8XTh2FBs" alt="L&#39;autopsie pratiquée sur le corps de Justine Vayrac révèle que la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ces révélations mettent à mal les premières déclarations du principal suspect mis en examen pour séquestration, viol et meurtre et qui se trouve&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aufeminin.com/news-societe/meurtre-de-justine-vayrac-cette-video-de-lucas-l-tournee-en-prison-serait-fausse-s4054013.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meurtre de Justine Vayrac : cette vidéo de Lucas L. tournée en ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTqJqJYS5IptDLxY5ytn81LH5EVtbygDLrtZqcSkFg1svnXWljjA6qpOltr3YIaotyaDgmCxeut" alt="Meurtre de Justine Vayrac : cette vidéo de Lucas L. tournée en ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depuis quelques jours, une vidéo censée représenter Lucas L, le meurtrier présumé de Justine Vayrac, faisant la fête en prison, circule sur les réseaux&nbsp;...</p></div>
            </div>
        </a><a href='https://fr.news.yahoo.com/lautopsie-confirme-viol-justine-vayrac-080849721.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;autopsie confirme le viol de Justine Vayrac avant son meurtre</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSW9gVvQWNQ7OGpCdvfTatRAZEl84kbKjwoyb_uF2Z6LlIkWDad3sK-ZfSp331Z9JktCJlBJ8FG" alt="L&#39;autopsie confirme le viol de Justine Vayrac avant son meurtre" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans ses aveux, l&#39;accusé affirmait avoir eu un rapport sexuel consenti avec la victime. Lundi, BFMTV a indiqué que l&#39;autopsie réalisée sur le corps de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}