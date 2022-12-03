import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Zazie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Zazie"/>
        <meta name="description" content="Trending News about Zazie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Zazie</h1>
            <Image width={800} height={500} src="" alt="Zazie"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.fr/l_actu/news_de_stars/zazie-traumatisee-de-chirac-le-pen-elle-revele-pour-qui-elle-a-vote-en-2022_507783'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zazie “traumatisée de Chirac-Le Pen” : elle révèle pour qui elle a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQlCBePZY5lRbWqsU3deiETI3saysiUcAFkonyZufxOk4I5uKfOVPjSQkgRz2bqazm2yTxWrF9S" alt="Zazie “traumatisée de Chirac-Le Pen” : elle révèle pour qui elle a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Au cours de son portrait, la chanteuse a dévoilé le nom du candidat qu&#39;elle a soutenu lors de l&#39;élection présidentielle de 2022. Ne voulant pas revivre le même&nbsp;...</p></div>
            </div>
        </a><a href='https://www.public.fr/News/Zazie-son-aveu-de-taille-sur-Macron-et-Le-Pen-1753151'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zazie : son aveu de taille sur Macron et Le Pen !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQLYVI7ASni7ZsuegDSj7OkKi49x--dGthbTpU9QsspHnTHv8ro5sowVdrUniPC6cb7nVecRea1" alt="Zazie : son aveu de taille sur Macron et Le Pen !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce vendredi 2 décembre 2022, le journal Libération a mis à l&#39;honneur la chanteuse Zazie. Sans fard, la star a évoqué l&#39;élection présidentielle de 2022.</p></div>
            </div>
        </a><a href='http://www.rfm.fr/news/Zazie-Son-dernier-album-Aile-P-est-disponible-28190'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zazie : Son dernier album « Aile-P » est disponible !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS5C5qyfn7_1L42KVrLDerrB2MqtTQ5n7VeYpKdVtZ5AU7PWRM_8pr2QJmc0xeiuazIYpMvZqVx" alt="Zazie : Son dernier album « Aile-P » est disponible !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zazie est de retour. Quatre ans après son album Essenciel, son 10ème album studio, certifié disque de platine et porté par le single Speed, Zazie se renouvelle&nbsp;...</p></div>
            </div>
        </a><a href='https://fr.news.yahoo.com/zazie-voisine-insupportable-copropri%C3%A9t%C3%A9-parvient-142900217.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zazie, une voisine insupportable ? Sa copropriété parvient à la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMmEx0yd7pIF8MWakDeGIGY3ILOpb92H-6Cl_nlbaTMA2HIE466XSOzf6SyTNsvySgFTX4voUC" alt="Zazie, une voisine insupportable ? Sa copropriété parvient à la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lassée de son trop grand logis situé à Belleville, Zazie s&#39;était installée dans un joli appartement avec terrasse....</p></div>
            </div>
        </a><a href='https://www.cheriefm.fr/artistes/zazie/actus/le-coup-de-coeur-du-club-cherie-couleur-de-zazie-71439373'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le coup de cœur du Club Chérie : &quot;Couleur&quot; de Zazie - Chérie FM</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRjig3-dPMwdunE0Oq9Oiml_NauONbm8rfI8c29SHhRVXlIAvFPaZ1HhHjxndE89DOPQETyi8Xt" alt="Le coup de cœur du Club Chérie : &quot;Couleur&quot; de Zazie - Chérie FM" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Couleur&quot; est le 2ème single extrait du nouvel album de Zazie &quot;AILE-P&quot;, disponible aujourd&#39;hui, vendredi 2 décembre. Zazie l&#39;a co-réalisé avec Edith&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtl2.fr/evenements/copie-de-angele-sur-rtl2-pour-nonante-cinq-la-suite-j-avais-envie-de-rajouter-les-pieces-manquantes-7900212195'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zazie sur RTL2 : &quot;Couleur&quot; est une chanson qui est gravement ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQPR47tv7Emg0ZS0tGCcJr6QlsAdswP79kYgNZCstMDmj7uxqiuzOVd9qsNShjDmD2mJUetvlNF" alt="Zazie sur RTL2 : &quot;Couleur&quot; est une chanson qui est gravement ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zazie était l&#39;invitée du Double Expresso RTL2 ce vendredi 2 décembre à l&#39;occasion de la sortie de son nouvel album &quot;Aile P&quot;. Elle a répondu aux questions de&nbsp;...</p></div>
            </div>
        </a><a href='https://actu.fr/pays-de-la-loire/nantes_44109/concert-a-nantes-la-chanteuse-zazie-au-zenith-en-septembre-2023_55616630.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Concert à Nantes : la chanteuse Zazie au Zenith en septembre 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSoAflZlYcgwARlDbzjmvGtOx5Qn92aLXN5sudhC3TZMH6us-plhdvVOdHfXBwN3oFzkj16ECv" alt="Concert à Nantes : la chanteuse Zazie au Zenith en septembre 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zazie repart en tournée en 2023. La célèbre chanteuse sera au Zenith de Nantes (Loire-Atlantique) en septembre 2023. La billetterie est déjà ouverte.</p></div>
            </div>
        </a><a href='https://www.alouette.fr/zazie-en-interview-dans-le-16-20-2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zazie en interview dans le 16-20</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR79WEGYcd4DcxCpbYtgWmkg66M9HnPlGx-RP3fEHkcaDM70ez35Vc51YrBALUuIELpDObw4NHL" alt="Zazie en interview dans le 16-20" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce vendredi, Julien a interviewé Zazie dans le 16-20 d&#39;Alouette, à l&#39;occasion de la sortie de son album ! La chanteuse nous a parlé de ce nouvel opus&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moustique.be/culture/musique/2022/12/02/zazie-sort-un-nouvel-album-toujours-aussi-zen-251788'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zazie sort un nouvel album : toujours aussi zen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTSqc3PXbnp2QJneeXnT9he5euzc8j88eCDve5cC8ZjzOsFB3SjKvVscpTpU7MwJ3o3VQJM-h9q" alt="Zazie sort un nouvel album : toujours aussi zen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La chanteuse Zazie s&#39;affranchit des formats et va à l&#39;essentiel sur “Aile-P”.</p></div>
            </div>
        </a>
        </Template></>;
}