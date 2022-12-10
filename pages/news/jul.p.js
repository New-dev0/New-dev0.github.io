import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jul</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jul"/>
        <meta name="description" content="Trending News about Jul" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jul</h1>
            <Image width={800} height={500} src="https://www.radiofrance.fr/s3/cruiser-production/2022/12/b19698d5-28b3-4612-92f7-76b068a7474f/1200x680_screenshot-www-youtube-com-2022-12-09-15-19-50.jpg" alt="Jul"/>
            <h3>Recent News</h3>
            <a href='https://www.radiofrance.fr/mouv/jul-pourquoi-ne-provoque-t-il-pas-de-lassitude-3261995'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jul : pourquoi ne provoque-t-il pas de lassitude ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRGPIsyGaUDC5Q9K1aZ2JrRdpwNXPCUYNqwN_is-KZX96sj-INQuS0PFr9h32CQCDkLd3011Og" alt="Jul : pourquoi ne provoque-t-il pas de lassitude ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après plus de 1000 albums (au bas-mot), Jul est toujours aussi populaire, et continue à réaliser des scores spectaculaires. Comment expliquer une dynamique&nbsp;...</p></div>
            </div>
        </a><a href='https://france3-regions.francetvinfo.fr/provence-alpes-cote-d-azur/bouches-du-rhone/marseille/jul-l-ovni-au-dome-de-marseille-pour-la-sortie-de-son-nouvel-album-coeur-blanc-2672268.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jul, l&#39;Ovni au Dôme de Marseille pour la sortie de son nouvel album ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR28fb5W8kNCk9--M744olhPw1WiWN9UpPcXkPQJi0v0DpLg__ZmUwJ2r71G9QCeXEyvgpE32la" alt="Jul, l&#39;Ovni au Dôme de Marseille pour la sortie de son nouvel album ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A l&#39;occasion de la sortie de son nouvel album, l&#39;artiste Jul a donné un concert pour remercier ses fans. 6000 d&#39;entre eux ont été tirés au sort parmi ceux&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/people/musique/coeur-blanc-comment-jul-est-parvenu-a-reunir-19-artistes-internationaux-sur-son-nouvel-album_AN-202212090399.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Cœur Blanc&quot;: Comment Jul est parvenu à réunir 19 artistes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZIhb5MnGnh4qwRUGAvosSxdr0N0GtWzP3ucGBDPDxyykpm38oBnu4NDN3z4BQvaCfI_3ZBdGq" alt="&quot;Cœur Blanc&quot;: Comment Jul est parvenu à réunir 19 artistes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De l&#39;Italie aux Pays-Bas en passant par la Russie ou le Maroc. Ce vendredi, le rappeur marseillais a partagé son 26ème album, sur lequel il a convié des&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiofrance.fr/mouv/week-end-special-jul-sur-mouv-6015802'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Week-end spécial JUL sur Mouv&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRi4nc90-XEnnCBUgkHHREY1zHOKZ80UBuWjbKLPgTKlMCCK4Vcu9C2M1Jbm-Ep7XOI4GwR7zTO" alt="Week-end spécial JUL sur Mouv&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pour la sortie ce vendredi 9 décembre du nouvel album de Jul &quot;Cœur blanc&quot;, on consacre un weekend-spécial les 10 et 11 décembre à ton ovni préféré avec la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/culture-loisirs/musique/jul-presente-son-album-coeur-blanc-a-ses-fans-il-nous-donne-de-la-force-09-12-2022-UMTTHDPXNBFLJG3V5ASECBIFVQ.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jul présente son album «Cœur blanc» à ses fans : «Il nous donne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQUQvcx8_G3pehEMtjYLKmkslBXJ8Af-JMruIEs_8LCOlFq1ADfxO1oGXW3DblJo5w617jFsFzG" alt="Jul présente son album «Cœur blanc» à ses fans : «Il nous donne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le rappeur de 32 ans sort ce vendredi «Cœur blanc», son 26e album, enregistré avec des artistes venus du monde entier. Il l&#39;a défendu jeudi soir en&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/marseille/vivement-un-prochain-jul-veut-refaire-un-nouveau-concert-au-velodrome_AV-202212090443.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Vivement un prochain&quot;: Jul veut refaire un nouveau concert au ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZEGfeKikUDIDIETIJYQN91lAvThu8D_yAHSvpQXBM-p1U4rdvt54e8x7VWaS--lOhPZM0sAws" alt="&quot;Vivement un prochain&quot;: Jul veut refaire un nouveau concert au ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après avoir rempli son premier stade Vélodrome, le rappeur marseillais souhaite en faire un autre et envisage même de se produire au stade de France.</p></div>
            </div>
        </a><a href='https://www.radiofrance.fr/franceculture/podcasts/le-cours-de-l-histoire/jul-fou-d-histoire-6483522'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jul, fou d&#39;histoire</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRv0mhPbfmgzjUuRGac6-9GF3Oy4dhfP5V5vyH8_GtcdzkQfwtq6YV4tvVX6trMM9mGIZuCbzV-" alt="Jul, fou d&#39;histoire" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AUDIO • 45 : Jul, fou d&#39;histoire . Fou d&#39;histoire est une série inédite proposée par France Culture. Écoutez gratuitement en ligne ce podcast et parcourez&nbsp;...</p></div>
            </div>
        </a><a href='https://actu.fr/provence-alpes-cote-d-azur/marseille_13055/6-000-fans-de-jul-a-son-concert-exclusif-a-marseille-une-occasion-en-or_55809311.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>6 000 fans de Jul à son concert exclusif à Marseille : &quot;Une occasion ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRJRp1DvTqLHoTySsAaoU1XWocd9IE5GdQZpTI0ATF75Xc_-FahoJuHTBva3OkzvaH2jYGUsSpS" alt="6 000 fans de Jul à son concert exclusif à Marseille : &quot;Une occasion ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce jeudi 8 décembre, veille de sortie de son 26ème disque &quot;Coeur blanc&quot;, Jul a dévoilé ses nouveaux titres dans un concert exclusif au Dôme, à Marseille.</p></div>
            </div>
        </a><a href='https://mcetv.ouest-france.fr/mon-mag-culture/mon-mag-musique/jul-regale-ses-fans-avec-son-nouvel-album-coeur-blanc-09122022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jul sort son nouvel album «Cœur Blanc» composé de 40 morceaux !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRCleB3Y-G_dsrrEmv3HXwzIqPNUID8UQnxlyshA5C4_H-Yh3ZRVtgNjy8SHWeI2WDXgVoFocOU" alt="Jul sort son nouvel album «Cœur Blanc» composé de 40 morceaux !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le rappeur marseillais Jul est de retour avec &quot;Coeur Blanc&quot;, un nouvel album de 40 titres, 6 mois après son dernier projet en date.</p></div>
            </div>
        </a><a href='https://www.konbini.com/popculture/jul-vient-de-sortir-coeur-blanc-on-a-sorti-la-calculette-pour-revenir-sur-tous-les-chiffres-de-la-carriere-du-rappeur-marseillais/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JuL vient de sortir Cœur Blanc : on a sorti la calculette pour revenir ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ_8fRfUS_bMKEMCd08p_7dh5jjGF-KjANEYQrL1BaeX7ZyunPKzMxyyqd8GFYvSPr-ENmC4mS_" alt="JuL vient de sortir Cœur Blanc : on a sorti la calculette pour revenir ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>29 disques de platine (4 doubles platines et 5 triples platines); 2 disques de diamant; 1 disque d&#39;or. En tout, sur Spotify, c&#39;est :.</p></div>
            </div>
        </a>
        </Template></>;
}