import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Beaujolais nouveau</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Beaujolais nouveau"/>
        <meta name="description" content="Trending News about Beaujolais nouveau" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Beaujolais nouveau</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/capbeaujo-1-3cb562-0@1x.jpeg" alt="Beaujolais nouveau"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/traditions-et-patrimoine/video-vin-gastronomie-le-beaujolais-nouveau-est-de-retour-2238948.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO - Ils fêtent l&#39;arrivée du Beaujolais nouveau</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQR1UNPoY0W8PKC-FUyLW28O1JPt7ynez4DOwzRQCtTcqtEgjkY9rpyHl5Nfv54mEEpKYWKaIPq" alt="VIDÉO - Ils fêtent l&#39;arrivée du Beaujolais nouveau" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est d&#39;abord un spectacle que nous offrent les habitants de Lyon. Les tonneaux roulent depuis le Beaujolais jusqu&#39;aux pavés lyonnais.</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/gastronomie/beaujolais-nouveau-un-cru-2022-amoindri-mais-de-qualite-20221117'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beaujolais nouveau : un cru 2022 amoindri mais de qualité</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSD6Po0HDI5BMaRob7JIWKPt68O4jRYWYPt_dW6Kuz4hHWD9X4-6gmKgaUM8q_61ovQiKIpRF21" alt="Beaujolais nouveau : un cru 2022 amoindri mais de qualité" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La production a baissé principalement à cause des conditions climatiques. Après une année marquée par les aléas climatiques qui ont pénalisé les rendements,le&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/sante/alimentation/vin-la-popularite-du-beaujolais-nouveau-ne-se-dement-pas_5482884.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vin : la popularité du beaujolais nouveau ne se dément pas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRs3Jtzsll7agTKgn6KOAOBSSMxnx1aMax8PMso0RIZuuzLCoXCLz7DQgHlldhoaS7tKLDb35WI" alt="Vin : la popularité du beaujolais nouveau ne se dément pas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Comme chaque année, le troisième jeudi de novembre fait la part belle au beaujolais nouveau. Jeudi 17 novembre, le cru s&#39;annonce prometteur et de bonne&nbsp;...</p></div>
            </div>
        </a><a href='https://www.midilibre.fr/2022/11/17/le-beaujolais-nouveau-arrive-ce-jeudi-mais-pourquoi-est-ce-toujours-a-la-meme-date-chaque-annee-10807560.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le beaujolais nouveau arrive ce jeudi : mais pourquoi est-ce ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRG2fBUdXO-pUi4EsUYOTJWBziI_-rkSPCqXavyJnEWKpMIEuZrfhBAsbIZQRovTuIJzzzFUiiG" alt="Le beaujolais nouveau arrive ce jeudi : mais pourquoi est-ce ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le troisième jeudi de novembre marque l&#39;arrivée du beaujolais nouveau, une date particulièrement fixe, voici pourquoi.</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/societe/4010487-20221117-beaujolais-nouveau-vin-fete'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le beaujolais nouveau, un « vin de fête » mais pas que</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSEOvlS_0SJRYr-vaKvrlqpsEQUnE4etZjRPxeu-M9e22FMaRnTERB2AOWf9GL_iByYBbOUgFNB" alt="Le beaujolais nouveau, un « vin de fête » mais pas que" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le troisième jeudi de novembre, c&#39;est la fête du beaujolais nouveau. Ce vin se prête à merveille à la fête car c&#39;est un vin aromatique, facile à boire, qui ne&nbsp;...</p></div>
            </div>
        </a><a href='https://www.larvf.com/quel-gout-a-le-beaujolais-nouveau-2022-decouvrez-notre-selection-de-18-cuvees,4806094.asp'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quel goût a le Beaujolais nouveau 2022 ? Découvrez notre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSt-in3Xna2Trr8CNW8Ql4mWdRlUhcy7ylYwc1-RJ65C2rwKqgVUAjQOucYmeVSwRNbCiI2gCFj" alt="Quel goût a le Beaujolais nouveau 2022 ? Découvrez notre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Beaujolais nouveau est arrivé ! Ce jeudi 17 novembre débute la grande fête de ces vins primeurs pour les amateurs de Beaujolais. Voici une sélection de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/11/17/hautes-pyrenees-ce-drole-de-pain-au-beaujolais-nouveau-faconne-a-arras-en-lavedan-10809322.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ce drôle de pain au Beaujolais nouveau façonné par un boulanger ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQnrnxhvsU1Y_IYkMwxd325B_UqnFA2ipc7gsV2J65kqCFOIsB-aKc2oRherERA_IV9LlTlKWdp" alt="Ce drôle de pain au Beaujolais nouveau façonné par un boulanger ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Qui dit troisième jeudi de novembre, dit vins primeurs. Aussi, à la boulangerie Lagrue à Arrras-en-Lavedan, fait-on, à cette occasion, une entorse au pain&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nicematin.com/conso-shopping/on-demele-le-vrai-du-faux-du-beaujolais-nouveau-808347'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>On démêle le vrai du faux du Beaujolais nouveau</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT8nZftsRBgjbKlKqBaYFrwfQ552klD0BfMWY4eN5CFPgyt1HE2Sya0yJY5Kjuy25eLUZrBY50X" alt="On démêle le vrai du faux du Beaujolais nouveau" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rouge, c&#39;est le dernier bar à vin à la mode, ouvert par Gautier et Alexandra Creissard, des anciens de l&#39;école Vatel, à Nîmes, ici en compagnie d&#39;Yves&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}