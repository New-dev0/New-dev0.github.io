import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Russie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Russie"/>
        <meta name="description" content="Trending News about Russie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Russie</h1>
            <Image width={800} height={500} src="https://www.francetvinfo.fr/pictures/oUfYPB_6kCqXuDYEzUJPK3DIots/1500x843/2022/11/20/phpbHpNpi.jpg" alt="Russie"/>
            <h3>Recent News</h3>
            <a href='https://www.francetvinfo.fr/monde/europe/manifestations-en-ukraine/guerre-en-ukraine-la-russie-et-l-ukraine-s-accusent-mutuellement-de-bombardements-sur-la-centrale-de-zaporijjia_5488902.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Guerre en Ukraine : la Russie et l&#39;Ukraine s&#39;accusent mutuellement ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTO99JVmzuIDoaErD_JQSu2_kKD0ontGn6CF91TLu_Zm-Fv9_Yku1NGQnfnmRv-q7rxjgMzEUFo" alt="Guerre en Ukraine : la Russie et l&#39;Ukraine s&#39;accusent mutuellement ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Le niveau de radiation dans la zone de la centrale reste conforme à la norme&quot; a précisé le ministère russe de la Défense dans un communiqué.</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/international/en-direct-guerre-ukraine-russie-zelensky-poutine-kiev-kherson-negociations-de-paix-les-infos-d-aujourd-hui-dimanche-20-novembre-2022-2239217.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EN DIRECT - Le chef de l&#39;AIEA dénonce des frappes &quot;délibérées et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQn_wv75y0KmJ_UizqrY__QVQVQJQFPgmvEvgd9ZW86JQj5-w7bP0yYybviAfmnx9nzQFvEiGOJ" alt="EN DIRECT - Le chef de l&#39;AIEA dénonce des frappes &quot;délibérées et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ L&#39;Ukraine a nié ce dimanche l&#39;exécution de prisonniers russes par ses forces, après des accusations russes. Suivez les dernières informations.</p></div>
            </div>
        </a><a href='https://www.france24.com/fr/europe/20221120-en-direct-n%C3%A9gocier-aujourd-hui-avec-moscou-signifie-capituler-assure-kiev'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>En direct : la Russie et l&#39;Ukraine s&#39;accusent de bombardements sur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ7q9FQ7awgHaDLBZ82lF6WqAGcZTfEVEezhFMriHBS3H-Z5_Lp7EEdx_WS-t_kNPXA_tNOHUep" alt="En direct : la Russie et l&#39;Ukraine s&#39;accusent de bombardements sur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le chargé des droits de l&#39;Homme au Parlement ukrainien a nié que les forces de Kiev aient tué des prisonniers de guerre russes, arguant que les soldats&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lexpress.fr/actualites/1/monde/la-russie-et-l-ukraine-s-accusent-de-bombardements-sur-la-centrale-nucleaire-de-zaporijjia_2183863.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La Russie et l&#39;Ukraine s&#39;accusent de bombardements sur la centrale ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRrBr4qaWU_Xy6ap2wcYjX3w1trCvhVVsqnZxzvLQ6EIoBt1VFia9RFhs8ztm3URLjTjNvIAUSB" alt="La Russie et l&#39;Ukraine s&#39;accusent de bombardements sur la centrale ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Moscou - La Russie et l&#39;Ukraine se sont à nouveau accusées mutuellement dimanche d&#39;avoir bombardé la centrale nucléaire de Zaporijjia, la plus grande…</p></div>
            </div>
        </a><a href='https://www.lindependant.fr/2022/11/20/guerre-en-ukraine-la-russie-accusee-de-nouveaux-bombardements-sur-la-centrale-nucleaire-de-zaporijjia-10815488.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Guerre en Ukraine : la Russie accusée de nouveaux ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSC8TTvYsHNLwiJOhQeKfTTwlzKWdOjGKfcCmUSBGxQwSCwGW9bG5VpguKd_q_6Ki0VJ_ycL91EtA" alt="Guerre en Ukraine : la Russie accusée de nouveaux ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;énergéticien nucléaire ukrainien Energoatom a déclaré dimanche que l&#39;armée russe avait visé la centrale nucléaire de Zaporijjia avec des tirs d&#39;artillerie&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francebleu.fr/infos/international/la-russie-et-l-ukraine-s-accusent-de-bombardements-sur-la-centrale-nucleaire-de-zaporijjia-1668972491'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La Russie et l&#39;Ukraine s&#39;accusent mutuellement de bombardements ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRqXldvHJtQbpzgr8Nx_hb45cd8e4_7d5JW2UbteFJ1xwO3l6qDlRXO9KQvoVMOlCle8XxK-RIZ" alt="La Russie et l&#39;Ukraine s&#39;accusent mutuellement de bombardements ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kiev et Moscou s&#39;accusent mutuellement des frappes, au moins une douzaine, qui ont frappé ce week-end la centrale nucléaire de Zaporijjia, dans le sud de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lexpress.fr/actualite/iran-russie-pourquoi-les-peuples-se-revoltent-ou-pas_2183783.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iran, Russie... Pourquoi les peuples se révoltent (ou pas)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR3GFC2_HWCkNKxtxbZmxCXnYq494_B9chVe5KIqaP-DHtfP_6TaW6pX4Y3bZ-PkiLBpKY9l6E9" alt="Iran, Russie... Pourquoi les peuples se révoltent (ou pas)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les Iraniens se révoltent contre le régime théocratique de leur pays contrairement au peuple russe, pourtant soumis au pouvoir autocratique de Vladimir…</p></div>
            </div>
        </a><a href='https://www.aa.com.tr/fr/politique/dmitri-medvedev-kiev-est-une-ville-russe-et-elle-sera-reprise/2743632'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dmitri Medvedev : &quot;Kiev est une ville russe et elle sera reprise&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSurDLxRAVXgnFLcFaIlvIFQWcCxjnqY5c5UnCrSZFusn2v9CV6bFY0s8sWELrpM6-LQz561uf4" alt="Dmitri Medvedev : &quot;Kiev est une ville russe et elle sera reprise&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;En réponse aux menaces ukrainiennes de reprendre la Crimée&quot;, selon le vice-président du Conseil de sécurité de la Fédération de Russie - Agence Anadolu.</p></div>
            </div>
        </a>
        </Template></>;
}