import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mastodon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mastodon"/>
        <meta name="description" content="Trending News about Mastodon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mastodon</h1>
            <Image width={800} height={500} src="https://img.20mn.fr/KLjhtP2xRgKu_YDkPOrWJSk/1200x768_the-twitter-and-mastodon-app-logos-are-seen-in-this-photo-illustration-in-warsaw-poland-on-12-november-2022-mastodon-is-a-decentralized-open-source-network-that-comes-without-an-algorithm-or-ads-and-doesn-t-sell-the-data-of-its-users-hundreds-of-thousands-of-users-have-joined-mastodon-since-musk-took-over-twitter-since-musk-s-takeover-mass-layoffs-have-taken-place-as-well-as-a-series-of-changes-to-the-content-moderation-protocol-and-verification-process-furthermore-reports-have-surface-that-musk-is-considering-putting-all-of-twitter-behind-a-paywall-photo-by-jaap-arriens-sipa-usa-42699284-jaap-arriens-2211130518" alt="Mastodon"/>
            <h3>Recent News</h3>
            <a href='https://www.20minutes.fr/by-the-web/4010625-20221118-reseaux-sociaux-alternative-twitter-mastodon-si-libre-ca'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Réseaux sociaux : L&#39;alternative de Twitter, Mastodon, est-il si libre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQT0x97nuW2DLBa26eMR6yp820OH6yH-i8Eu9u1hlmTk7Fe-QIRS4HJdK01XWsdimhNLz-rrtNL" alt="Réseaux sociaux : L&#39;alternative de Twitter, Mastodon, est-il si libre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mais certains internautes craignent l&#39;absence de sécurité sur Mastodon, notamment pour leurs messages privés et leurs mots de passe. Or, la protection reste&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanityfair.fr/actualites/article/elon-musk-twitter-mastodon-blaireau'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Elon Musk passe pour un blaireau » : entretien avec le créateur de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwcLMyRX9DbJPrwA96IFdlcAd-_xn4rX-_5NWjcMjmO6uVa-gj5kiPweV_b6pfxT5Ch4sjMzeU" alt="« Elon Musk passe pour un blaireau » : entretien avec le créateur de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alors que se poursuit l&#39;exode des utilisateurs de Twitter vers Mastodon, la plateforme alternative conçue par Eugen Rochko, ce dernier persiste et signe&nbsp;...</p></div>
            </div>
        </a><a href='https://www.numerama.com/tech/1183832-comment-retrouver-sur-mastodon-les-gens-que-vous-suivez-sur-twitter.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Comment retrouver sur Mastodon les gens que vous suivez sur Twitter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTK9LyAiXydymb83g8VrDhse4xf_-7bY8Ziz8pOPHcDqjv8_u7sw2-DamAdKB_ptcPf-jiMbXFS" alt="Comment retrouver sur Mastodon les gens que vous suivez sur Twitter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Il existe une app tierce qui permet de vérifier, parmi vos abonnements Twitter, qui est présent sur le serveur Mastodon où vous vous trouvez.</p></div>
            </div>
        </a><a href='https://www.bbc.com/afrique/monde-63675253'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter | Elon Musk : Les utilisateurs du réseau social sautent sur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRQCXFYMqqr6nOKcSePGNWvnooC1C9IHRFnsR5kycrqqBSlWIKSiPzq30Fd0OzYzttzJn_K1taj" alt="Twitter | Elon Musk : Les utilisateurs du réseau social sautent sur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La base d&#39;utilisateurs de ce réseau social peu connu a gonflé après le rachat de Twitter par Elon Musk.</p></div>
            </div>
        </a><a href='https://www.presse-citron.net/on-a-essaye-mastodon-pendant-deux-semaines-on-est-heureux-darreter/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>On a essayé Mastodon pendant deux semaines (on est heureux d ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQb9WhFPP5WszygCvdRM_C9nCkuZm9ePKWhYUcUHKDZVD8lzuEtaX62N7wKVdprjU6lMeMNi8zl" alt="On a essayé Mastodon pendant deux semaines (on est heureux d ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depuis le rachat de Twitter par Elon Musk, une partie des déçus de l&#39;oiseau bleu ont migré vers Mastodon, une application souvent présentée comme la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.i24news.tv/fr/actu/economie/technologie/1668790243-mastodon-le-reseau-qui-peut-accelerer-la-chute-de-twitter'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mastodon, le réseau qui peut accélérer la chute de Twitter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4MmvyZ1YWgZAJmZN9gdUW2Ph7gG2O15DUJxeYvOrp56Gdv_0FjjRk_Ruf3_ZA-u8kkzLnqamL" alt="Mastodon, le réseau qui peut accélérer la chute de Twitter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depuis le rachat surmédiatisé de Twitter par le milliardaire américain Elon Musk fin octobre, de nombreux internautes et journalistes cherchent une solution&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}