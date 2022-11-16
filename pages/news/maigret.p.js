import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maigret</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maigret"/>
        <meta name="description" content="Trending News about Maigret" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maigret</h1>
            <Image width={800} height={500} src="https://i.f1g.fr/media/eidos/1200x630_crop/2022/11/15/XVMb91e355c-64d4-11ed-9dd9-aa3829713063.jpg" alt="Maigret"/>
            <h3>Recent News</h3>
            <a href='https://www.lefigaro.fr/culture/maigret-gerard-depardieu-en-etat-de-grace-sur-canal-20221115'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maigret : Gérard Depardieu en état de grâce sur Canal +</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7p74ktafRiwo8it9-ThTu4oxNOCnv8RYPB52S7y0mm-8jjcuKsq82nbh_TeKihe9iTcTq30Zx" alt="Maigret : Gérard Depardieu en état de grâce sur Canal +" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CRITIQUE - Le comédien trouve dans le film de Patrice Leconte inédit à la télévision un de ses meilleurs rôles. Celui d&#39;un fauve assoupi dans la grande&nbsp;...</p></div>
            </div>
        </a><a href='https://www.femina.fr/article/maigret-sur-canal-le-film-policier-avec-gerard-depardieu-aura-t-il-droit-a-une-suite'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Maigret » sur Canal+ : le film policier avec Gérard Depardieu aura ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRfp3PeBXPgdsecjA68OU55nCdRxh8SrnFRRgNM28ikGVsUwROnxui1h4MBBE6bzBuJ_QNyapPW" alt="« Maigret » sur Canal+ : le film policier avec Gérard Depardieu aura ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le 23 février 2022 est sorti dans les salles obscures un nouveau long-métrage sur le commissaire du 36 quai des Orfèvres. Dans le rôle titre, nous y r...</p></div>
            </div>
        </a><a href='https://www.nouvelobs.com/teleobs/20221115.OBS65942/maigret-depardieu-commissaire.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Maigret », Depardieu commissaire</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6xYHCvlVEab2yKCNFMDeaAUzf2yQ9XpBr0a250rJypg1ztW3S4RhuX81aK4FCZzF1w44D5PhV" alt="« Maigret », Depardieu commissaire" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après « Monsieur Hire » sorti en 1989, Patrice Leconte retrouve Simenon et redonne vie à son célèbre personnage du 36, quai des Orfèvres.</p></div>
            </div>
        </a><a href='https://www.cineserie.com/news/cinema/maigret-gerard-depardieu-a-remplace-un-autre-grand-acteur-francais-dans-le-role-5501737/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maigret : Gérard Depardieu a remplacé un autre grand acteur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRS95hDpUcvnTeMPSZlTnDec7G3CVNHLqADvJ447G-3Sy_50STCn84Vm0MbCc2F9--sx0S5d9VG" alt="Maigret : Gérard Depardieu a remplacé un autre grand acteur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Parfait dans le rôle du commissaire Maigret, Gérard Depardieu était pourtant le remplaçant d&#39;un autre acteur dans le film de Patrice Leconte.</p></div>
            </div>
        </a><a href='https://lepetitjournal.com/milan/agenda/cinema/georges-simenon-au-cinema-a-milan-en-10-films'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georges Simenon au cinéma à Milan, en 10 films</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTKOezfKuie59TaMWbmvvBXmKzvkYxWhZ1ttWFS1eY0_qUO7odXvESQD7pk3PIbZaI81KOLBxnf" alt="Georges Simenon au cinéma à Milan, en 10 films" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cineteca Milano MIC dédie une rétrospective à George Simenon, avec 10 films français transposés parmi ses meilleurs best-sellers, jusqu&#39;au récent Maigret de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}