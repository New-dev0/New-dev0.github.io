import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Henri Sannier journaliste</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Henri Sannier journaliste"/>
        <meta name="description" content="Trending News about Henri Sannier journaliste" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Henri Sannier journaliste</h1>
            <Image width={800} height={500} src="" alt="Henri Sannier journaliste"/>
            <h3>Recent News</h3>
            <a href='https://www.lunion.fr/id433562/article/2022-12-04/sur-le-plateau-du-telethon-le-journaliste-henri-sannier-raconte-son-combat'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sur le plateau du Téléthon, le journaliste Henri Sannier raconte son ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSMc2k-TdByDNfj7NK99V1nm4fjL5eSL9bTXvjdl6H5GskwDaowfFvHfD67Mbkkh5F1X4xqH9IP" alt="Sur le plateau du Téléthon, le journaliste Henri Sannier raconte son ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ancien journaliste de télévision Henri Sannier, touché par une maladie auto-immune qui l&#39;a laissé paralysé pendant deux ans, est venu témoigner de son&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lavoixdunord.fr/1261991/article/2022-12-03/le-journaliste-henri-sannier-malade-et-paralyse-remarche-il-temoigne-pour-le'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le journaliste Henri Sannier, malade et paralysé, remarche: il ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSq1nxkV1nxjxUWL3sNPd7kpbEUAwLnMNA9EQv4bCgujeLvVR41UlRVDQBr9VbLxiFlv6ZsGkR7" alt="Le journaliste Henri Sannier, malade et paralysé, remarche: il ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Victime d&#39;un accident de vélo, puis d&#39;un virus, l&#39;ex-journaliste de télé Henri Sannier a été privé de l&#39;usage de ses jambes et de ses mains.</p></div>
            </div>
        </a><a href='https://www.lepoint.fr/medias/telethon-2022-gravement-malade-henri-sannier-se-confie-03-12-2022-2500313_260.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Téléthon 2022 : gravement malade, Henri Sannier se confie</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTdF6Ar9yyYrwygFFlPL1WLUO3B2h8qTtYtZKoexdD6Q5gilzH3XkuJq7U20kvfCjERwY40NtQ-" alt="Téléthon 2022 : gravement malade, Henri Sannier se confie" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Victime d&#39;un accident puis d&#39;un virus, l&#39;ancien journaliste de France Télévisions a retrouvé l&#39;usage de ses jambes et de ses mains, relaie « TV Mag ».</p></div>
            </div>
        </a><a href='https://www.santemagazine.fr/actualites/actualites-sante/henri-sannier-son-apparition-au-telethon-pour-parler-de-sa-maladie-947771'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Henri Sannier : son apparition au Téléthon pour parler de sa maladie</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ_pdUxGTQETnhhkQHilrE08H0fcoydLGod4ZrmgTCE-l-gZTlEoIBvtoTuhQjHaPNTrh2zrR58" alt="Henri Sannier : son apparition au Téléthon pour parler de sa maladie" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En décembre 2020, la vie du journaliste Henri Sannier bascule. Il est percuté par une voiture et contracte un virus qui lui paralyse les doigts et les&nbsp;...</p></div>
            </div>
        </a><a href='https://www.closermag.fr/people/on-se-retrouve-allonge-henri-sannier-malade-depuis-deux-ans-fait-une-rare-apparition-au-telethon-1672719'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;On se retrouve allongé&quot; : Henri Sannier, malade depuis deux ans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR2qAhK-pVRKtmLpXhav_DVJpttm_QVM2Ovs0Or3l7v3cSsl2V6i37H-pKOlvLcM39b-z3U21-5" alt="&quot;On se retrouve allongé&quot; : Henri Sannier, malade depuis deux ans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Présent au Téléthon, Henri Sannier a donné de ses nouvelles. Le journaliste évoque sans filtre sa maladie.</p></div>
            </div>
        </a><a href='https://www.courrier-picard.fr/id366538/article/2022-12-03/henri-sannier-temoigne-au-telethon-sur-sa-maladie-auto-imune'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Henri Sannier témoigne au Téléthon sur sa maladie auto-immune</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSd8c3p3pqDKppWkkTQAzTPtkEiXyxZosrNZGrL_UJMHcKjb3r4V3pAL-MEMoFdF2XK06t0wuPc" alt="Henri Sannier témoigne au Téléthon sur sa maladie auto-immune" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tout ce qu&#39;il faut savoir sur Victime d&#39;un accident de vélo, puis d&#39;un virus, l&#39;ex-journaliste de télévision et toujours maire d&#39;Eaucourt-sur-Somme,&nbsp;...</p></div>
            </div>
        </a><a href='https://tvmag.lefigaro.fr/programme-tv/people/maintenant-je-remarche-l-emouvant-cri-du-coeur-d-henri-sannier-apres-avoir-ete-paralyse-20221203'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Maintenant, je remarche !» : l&#39;émouvant cri du cœur d&#39;Henri ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRaxJuBGCYzjvvTsuRMF1wBtz7AIBwIV3fhSSeITgRtInS-JEhYIaB0N0XQdZZE5lu0GOHQpAQS" alt="«Maintenant, je remarche !» : l&#39;émouvant cri du cœur d&#39;Henri ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>VIDÉO - Le journaliste de 75 ans est réapparu vendredi soir en direct sur France 3, pendant la soirée du Téléthon, après une très longue convalescence.</p></div>
            </div>
        </a>
        </Template></>;
}