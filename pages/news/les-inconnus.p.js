import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Les Inconnus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Les Inconnus"/>
        <meta name="description" content="Trending News about Les Inconnus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Les Inconnus</h1>
            <Image width={800} height={500} src="https://i.f1g.fr/media/cms/1200x630_crop/2022/11/15/76daa361dc0d24e06ce635cacf7c28a0cf46e3cafde4edfae459d1f8b9c88155.jpg" alt="Les Inconnus"/>
            <h3>Recent News</h3>
            <a href='https://www.lefigaro.fr/culture/le-retour-des-inconnus-sur-tf1-l-ordre-moral-applique-au-divertissement-20221115'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le retour des Inconnus sur TF1 : l&#39;ordre moral appliqué au ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSsZ54HNgLdxHL8-8yNDo8sjG0FFllFlEAzmQg_WB6KTpCoA7aPt6DNAEI_Z3vmzvXvwAW15ekS" alt="Le retour des Inconnus sur TF1 : l&#39;ordre moral appliqué au ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHRONIQUE - Notre confrère Guillaume Roquette, directeur de la rédaction du Figaro Magazine, a assisté au piteux spectacle proposé par la une.</p></div>
            </div>
        </a><a href='https://www.marianne.net/societe/medias/over-desabuse-sur-tf1-la-tele-zombie-des-inconnus'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Over désabusé : sur TF1, la &quot;télé zombie&quot; des Inconnus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRrdOUkLAuDiIms44ZvcSwL8P3wDQzNEFPXMibucOPI62N9KxWM0NAply4_MRjIOWQ2DkBExFZw" alt="Over désabusé : sur TF1, la &quot;télé zombie&quot; des Inconnus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Malgré les moyens et le casting mobilisés pour répliquer à l&#39;identique les sketchs des Inconnus, le téléfilm hommage consacré au trio par TF1 ce lundi 14&nbsp;...</p></div>
            </div>
        </a><a href='https://www.programme-television.org/news-tv/Les-Nuls-oui-c-est-de-la-m-rde-Cyril-Hanouna-encense-les-Inconnus-mais-dezingue-les-rivaux-de-l-epoque-4696914'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Les Nuls, oui, c&#39;est de la m*rde&quot; : Cyril Hanouna encense les ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcShKxOR2K7IuHfpN2d0lAAd4nQcgbJnRJ2BJ06ADswGDAXs-IQoERhysJH5D4JSs561FV85dbWO" alt="&quot;Les Nuls, oui, c&#39;est de la m*rde&quot; : Cyril Hanouna encense les ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alors qu&#39;il revenait sur les mauvaises critiques suite au prime de TF1 consacré aux Inconnus, Cyril Hanouna a encensé le trio mais n&#39;a pas été tendre avec&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/11/15/desastre-massacre-scandale-le-retour-des-inconnus-sur-tf1-suscite-un-gros-malaise-chez-les-telespectateurs-10803858.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Désastre&quot;, &quot;massacre&quot;, scandale&quot; : le retour des Inconnus sur TF1 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS-SERcPXfEvoF-IiWzjQ7WggNY5mLvRLODHA6YtLnCBYMsRu-Ti1D16_mh4M3QxIZCBQdC_nIj" alt="&quot;Désastre&quot;, &quot;massacre&quot;, scandale&quot; : le retour des Inconnus sur TF1 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;émission était la revisite d&#39;une vingtaine de sketches de la Télé des Inconnus, trente ans après leur succès. Youpi Matin, Les sectes, Rap-Tout, repris par&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gqmagazine.fr/pop-culture/article/naufrage-desastre-malaise-l-emission-tous-inconnus-consterne-les-telespectateurs-de-tf1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Naufrage”, “désastre”, “malaise” : l&#39;émission “Tous inconnus ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRu-WbtrbMXY9BnUAzw6MYeFVJddyZnO7t7QbEsbcTqpFmgPC-ZfDOq74e0lfJ88OMsDZdFnwya" alt="“Naufrage”, “désastre”, “malaise” : l&#39;émission “Tous inconnus ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Retour raté pour Les Inconnus sur TF1. La reprise des sketches par des célébrités a totalement déprimé les téléspectateurs.</p></div>
            </div>
        </a><a href='https://hitek.fr/42/les-inconnus-sketches-revisites-tf1-malaise-catastrophe_11084'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Les Inconnus : l&#39;émission spéciale sur TF1 est un désastre, les ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSKEzzl9RcviPcg8TNKjur_rLg0VBoUwDae2uyIa7Odkcu6l82IsvKqY9gVGuvhT8cZbEQXr5Qs" alt="Les Inconnus : l&#39;émission spéciale sur TF1 est un désastre, les ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A la place des personnages que composent cette bande d&#39;humoristes, tous leurs sketches ont été réinterprétés, comme Les chasseurs, Auteuil Neuilly Passy, ou&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}