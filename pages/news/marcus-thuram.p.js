import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marcus Thuram</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marcus Thuram"/>
        <meta name="description" content="Trending News about Marcus Thuram" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marcus Thuram</h1>
            <Image width={800} height={500} src="https://medias.lequipe.fr/img-video-cover/1500000001715509/640/0" alt="Marcus Thuram"/>
            <h3>Recent News</h3>
            <a href='https://www.lequipe.fr/Football/Actualites/Marcus-thuram-mon-pere-m-a-toujours-dit-de-rester-moi-meme/1366661'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marcus Thuram : « Mon père m&#39;a toujours dit de rester moi-même »</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTuFmhu9vlFYocALkB1kX2DSvS9Vwz0y5b77MT1oJLI_-Wy02dXNmvbq0kkDgOHRWzDDG8Glyk2" alt="Marcus Thuram : « Mon père m&#39;a toujours dit de rester moi-même »" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marcus Thuram pourrait marcher sur les traces de son père au Qatar. Mais l&#39;attaquant du Borussia Mönchengladbach ne se met pas de pression particulière.</p></div>
            </div>
        </a><a href='https://www.paristeam.fr/actu-psg/actualite/marcus-thuram-epate-par-mbappe-61098'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marcus Thuram épaté par Mbappé</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQpV176s-NxAyIx9WaPeCr0L7w6sZKh0JgYyJQPB8LUKugl5sTaY2IQwxn5tA5N5rXqrblLKDVn" alt="Marcus Thuram épaté par Mbappé" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dernier appelé, pour palier le forfait de Christopher Nkunku, Marcus Thuram s&#39;est exprimé ce jeudi sur Kylian Mbappé qu&#39;il connait très bien.</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/sports/football/coupe-du-monde/mon-pere-je-le-connais-depuis-tout-petit-marcus-thuram-le-sourire-du-revenant-24-11-2022-GYO5NFEF5FDNZD7RL7NV3TFUCU.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Mon père, je le connais depuis tout petit» : Marcus Thuram, le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQkVbyIIHgITc4geWtQoCVUSkV-BDcijSQWJiDE3o0Llrr-e0DBV29JeTAJ5RAXg3J98yQHt_ZA" alt="«Mon père, je le connais depuis tout petit» : Marcus Thuram, le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En l&#39;absence de Karim Benzema, Marcus Thuram aura un rôle à jouer en pointe derrière l&#39;immortel Olivier Giroud. Ce jeudi, il a montré un visage souriant et&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sofoot.com/marcus-thuram-je-ne-voulais-pas-voir-mes-reves-s-echapper-521968.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>M. Thuram : « Je ne voulais pas voir mes rêves s&#39;échapper »</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRKz2UIoklgNvV_saZNp0CSQ7qfhSB0gflUs5w62hRenAbinTcbGkERS0MOcmIobdrJ2LGND4Uf" alt="M. Thuram : « Je ne voulais pas voir mes rêves s&#39;échapper »" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nouveau look. Absent du groupe France depuis son tir au but transformé lors du huitième de finale d&#39;Euro perdu face à la Suisse en juin 2021, ...</p></div>
            </div>
        </a><a href='https://madeinfoot.ouest-france.fr/infos/article-video-france-thuram-mbappe-ne-cesse-de-mepater-de-mimpressionner-397739.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Equipe de France : Marcus Thuram - &quot;Kylian Mbappé ne cesse de m ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTXgEhZCGsDYNf4TpIaBlSbDCSEOwbXyovZtU97jJBG2ZJSxRYNmqzkP-cpqq1zRBjvsEMj8QR5" alt="Equipe de France : Marcus Thuram - &quot;Kylian Mbappé ne cesse de m ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Foot : Le 24/11/2022 17:30, Equipe de France - Marcus Thuram : &#39;Kylian Mbappé ne cesse de m&#39;épater, de m&#39;impressionner&#39;. Lors de la conférence de presse de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foot-national.com/equipe-de-france/equipe-de-france--mbappe--khephren--son-poste-preferentiel-thuram-fait-le-point-avant-le-danemark--802411'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Équipe de France : Mbappé, Khephren, son poste préférentiel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRCokm9xj81Exk3jqs1VuUJF0p0Pj2Qax71zDxjEKG0jSYAINOX8M8yrEQbCsE3TcLRTCYgch09" alt="Équipe de France : Mbappé, Khephren, son poste préférentiel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marcus Thuram, qui dispute la première Coupe du Monde de sa carrière, s&#39;est présenté en conférence de presse à deux jours d&#39;affronter le Danemark (samedi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sudouest.fr/sport/football/coupe-du-monde/coupe-du-monde-2022-equipe-de-france-mon-papa-je-l-adore-c-est-une-fierte-lance-marcus-thuram-13109402.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022. Equipe de France : « Mon papa, je l&#39;adore, c ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQE2lMGWfllJbexcZFC397fjZyNjDQRkpuZegr7pdJvx29vDSk5fneXybg6Ka8M4vEr_horXG1M" alt="Coupe du monde 2022. Equipe de France : « Mon papa, je l&#39;adore, c ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Retenu pour la Coupe du monde 24 ans après le titre conquis par son père, Marcus Thuram a beaucoup été interrogé sur leur relation en conférence de presse.</p></div>
            </div>
        </a>
        </Template></>;
}