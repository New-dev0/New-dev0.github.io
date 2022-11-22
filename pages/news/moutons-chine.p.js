import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Moutons Chine</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Moutons Chine"/>
        <meta name="description" content="Trending News about Moutons Chine" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Moutons Chine</h1>
            <Image width={800} height={500} src="https://s.rfi.fr/media/display/fede76f6-0d61-11ea-96d0-005056a9aa4d/w:1280/p:16x9/gettyimages-155379351_0.jpg" alt="Moutons Chine"/>
            <h3>Recent News</h3>
            <a href='https://www.rfi.fr/fr/asie-pacifique/20221121-chine-une-myst%C3%A9rieuse-vid%C3%A9o-de-moutons-qui-tournent-en-rond-devient-virale-sur-les-r%C3%A9seaux-sociaux'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chine: une mystérieuse vidéo de moutons qui tournent en rond ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQOQ6ymqr4EyCHA6bO24xaVhIhFqeeLYJ2LnoIKUJ7R_lOTFcBepSSv4zA1iCPk-zsh3lYngGRx" alt="Chine: une mystérieuse vidéo de moutons qui tournent en rond ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La vidéo fait un buzz sur les réseaux sociaux en Chine. Voilà plus de deux semaines que des moutons tournent en rond dans un élevage du nord du pays.</p></div>
            </div>
        </a><a href='https://www.cnews.fr/monde/2022-11-21/mysterieux-phenomene-en-chine-des-moutons-forment-un-cercle-et-tournent-en-rond'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mystérieux phénomène en Chine : des moutons forment un cercle et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTt9rqn95T90uXUYVMVtsPFqxKbenOvQ2UABBwsV4xwuHmxpIs0LSNv3NO4AG4ZJdXIwPLR_3MM" alt="Mystérieux phénomène en Chine : des moutons forment un cercle et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un phénomène étonnant a progressivement touché un troupeau de moutons dans la région de Mongolie intérieure en Chine depuis le 4 novembre dernier.</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/insolite/4010991-20221121-chine-moutons-tournent-rond-pendant-plusieurs-jours-arreter-ignore-pourquoi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chine : Des moutons tournent en rond pendant plusieurs jours sans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS1ilhRpIyBP_qS_dxtZ3wKnG246r7vJcnezRXBYlUV9GS2UeugAcoYI8BhSNvbOMgZHjpyHA1r" alt="Chine : Des moutons tournent en rond pendant plusieurs jours sans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pour l&#39;heure, la thèse la plus probable reste celle d&#39;une infection à une bactérie.</p></div>
            </div>
        </a><a href='https://www.lessorsavoyard.fr/50706/article/2022-11-21/pourquoi-depuis-12-jours-en-chine-des-moutons-tournent-ils-en-rond'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pourquoi depuis 12 jours, en Chine, des moutons tournent-ils en ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJ2o0y4KqVbBle30eOklU5kQa_ltzDg4KmMaw4kgl8o6-gmqAGexqhSEKeWcFZuSvpkuQD0oI2" alt="Pourquoi depuis 12 jours, en Chine, des moutons tournent-ils en ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans un élevage du Nord de la Chine, plusieurs dizaines de moutons tournent en rond. En un cercle parfait. Sans raison apparente encore identifiée.</p></div>
            </div>
        </a><a href='https://www.caminteresse.fr/insolite/chine-la-mysterieuse-affaire-des-moutons-qui-tournent-en-rond-11186565/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chine : la mystérieuse affaire des moutons qui tournent en rond</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQR6cE3kSR-470KTI1mGXOY-PaTxQh5M_l7lgVbttml6T_iA-nzlf7e4ypYj3wu_BSCYvwKB1uR" alt="Chine : la mystérieuse affaire des moutons qui tournent en rond" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La vidéo fait le buzz sur Internet. Depuis 12 jours, ces animaux marchent en formant un cercle sans que les experts puissent comprendre pourquoi. La p.</p></div>
            </div>
        </a><a href='https://www.midilibre.fr/2022/11/20/phenomene-mysterieux-et-inexplique-en-chine-des-moutons-tournent-en-rond-sans-sarreter-depuis-15-jours-10813684.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Phénomène mystérieux et inexpliqué en Chine : des moutons ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQjb-LhvlIN5OaTaUTNLoQAifd3BKpIKoqfzn1q7g6ftqgH5aEqjKEFlflIqTKpBAnukR8CwI-" alt="Phénomène mystérieux et inexpliqué en Chine : des moutons ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un troupeau d&#39;une centaine de bovidés a commencé à marcher en cercle le 4 novembre dans la région de la Mongolie intérieure en Chine et ils ne se sont&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}