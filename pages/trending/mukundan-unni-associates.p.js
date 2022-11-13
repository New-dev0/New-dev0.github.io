import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mukundan Unni Associates</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mukundan Unni Associates"/>
        <meta name="description" content="Trending News about Mukundan Unni Associates" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mukundan Unni Associates</h1>
            <Image width={800} height={500} src="https://th-i.thgim.com/public/entertainment/movies/9232cu/article66123921.ece/alternates/FREE_1200/vinn.jpg" alt="Mukundan Unni Associates"/>
            <h3>Recent News</h3>
            <a href='https://www.thehindu.com/entertainment/movies/mukundan-unni-associates-movie-review-a-darkly-funny-take-on-a-man-obsessed-with-material-success/article66123898.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Mukundan Unni Associates&#39; movie review: A darkly funny take on a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTmKc-KWQxDXSPa2j-hqbY6YlxqPG3AtNqBt5r9zc-Xc2hrrwh_qKXQnC0qgjjUkyC02-ku_LyJ" alt="&#39;Mukundan Unni Associates&#39; movie review: A darkly funny take on a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The themes explored — which in another movie might have been treated in a dark, sombre mood — get an uproariously humorous treatment by film&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newindianexpress.com/entertainment/review/2022/nov/12/mukundan-unni-associates-review-vineeth-sreenivasan-aces-it-as-an-unabashedly-sinister-figure-2517375.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Mukundan Unni Associates&#39; review: Vineeth Sreenivasan aces it as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSuSjmE7GKM3HkNMpJs6Qi9FpWFVeRuWi4Ulgqjc-gas9y_kVSv-KlNJ3pSDbd1hutRrjggN6rX" alt="&#39;Mukundan Unni Associates&#39; review: Vineeth Sreenivasan aces it as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Abhinav Sunder Nayak&#39;s Mukundan Unni Associates is also the most visually inventive film since Thallumaala. It puts as much thought into the presentation as&nbsp;...</p></div>
            </div>
        </a><a href='https://www.onmanorama.com/entertainment/movie-reviews/2022/11/11/mukundan-unni-associates-vineeth-sreenivasan-movie-review-suraj-venjaramoodu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vineeth Seenivasan&#39;s &#39;Mukundan Unni&#39; is delightfully deceptive ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTs6n3dtW_H9_ctMMMIHViakzxPFowkUOogCrg5TSqiWunAtxjo6aJTzdeIhBkUIbVtsOqbJbQo" alt="Vineeth Seenivasan&#39;s &#39;Mukundan Unni&#39; is delightfully deceptive ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If you thought there was some resemblance in Mukundan Unni Associates to the evergreen character played by Salim Kumar in &#39;Meesha Madhavan&#39;, you could not&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thenewsminute.com/article/mukundan-unni-associates-review-vineeth-sreenivasan-rocks-dark-comedy-169837'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mukundan Unni Associates review: Vineeth Sreenivasan rocks in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRrfOvQFroppZHK9cfRmG2ilIkkcWKidpaID2ipDfJjoQ6ALq6wdMPftpxEEmcTe_NTnRRcQCt4" alt="Mukundan Unni Associates review: Vineeth Sreenivasan rocks in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This is the story of a heartless, unloving man with no principles, no ounce of mercy, nothing humane. He is presented as such.</p></div>
            </div>
        </a><a href='https://www.ottplay.com/review/mukundan-unni-associates-review-a-smartly-crafted-dark-comedy-lifted-by-vineeth-sreenivasans-compelling-portrayal/4f1dc64be3190'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mukundan Unni Associates review: A smartly crafted dark comedy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQpzeaGUp7Gvk4ij7hLtZA_bDGU8rEeMpr2PVv0gOtFtBNh9uIixXazzykeNqXvopqm4Q3_pM53" alt="Mukundan Unni Associates review: A smartly crafted dark comedy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The writers seem to have put in a lot of work in defining even his minor quirks and that pays off in the film, one that is especially character driven.</p></div>
            </div>
        </a>
        </Template></>;
}