import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Paul Pogba</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Paul Pogba"/>
        <meta name="description" content="Trending News about Paul Pogba" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Paul Pogba</h1>
            <Image width={800} height={500} src="https://resize-lejdd.lanmedia.fr/var/jdd/public/media/image/2022/12/04/12/exclusif.-on-a-retrouve-le-marabout-de-paul-pogba.jpg?VersionId=UD0hkPKmqy8MK2iw9SyyQSwYYlwW7Rbe" alt="Paul Pogba"/>
            <h3>Recent News</h3>
            <a href='https://www.lejdd.fr/Sport/exclusif-on-a-retrouve-le-marabout-de-paul-pogba-4152060'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EXCLUSIF. On a retrouvé le marabout de Paul Pogba</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTvEPyEoTQvP8EZ0UhJWOPjGGcov_mg20a5Z0747dQUYcaa2h4c4vmhci_OB242b1BMgBYlH6i5" alt="EXCLUSIF. On a retrouvé le marabout de Paul Pogba" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le « sage » de 39 ans a été identifié, et ses liens anciens avec le champion du monde 2018, dont il a obtenu beaucoup d&#39;argent, ont été établis par les&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.fr/basket/equipe-de-france-basket/pogba-revelations-marabout-mbappe-672186.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pogba, les révélations sur le marabout et Mbappé</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQUBdDdfJtFNiESJ17hNPPWC6zOcX6aCu8hOGlCB0QksIp6i-th7mDF_8jaQXPEpRg7eOhJYmid" alt="Pogba, les révélations sur le marabout et Mbappé" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>» Interviewée dans le cadre de l&#39;émission Sept à Huit, sur TF1, il y a deux semaines, la mère de Mathias et Paul Pogba, Yeo Moriba, estimait ses deux fils&nbsp;...</p></div>
            </div>
        </a><a href='https://le10sport.com/football/equipe-de-france/equipe-de-france-mbappe-marabout-nouvelle-sortie-hallucinante-dans-laffaire-pogba-624255'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Equipe de France : Mbappé, marabout... Nouvelle sortie ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTuTYQyt2BVOMD3WFoeOI1k6ej7xEoPuZ3xkv_LC1tF9Bv16DIec1LjLzsmS0-Yw-swy7Rg39E7" alt="Equipe de France : Mbappé, marabout... Nouvelle sortie ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quelques mois après les accusations de Mathias Pogba à l&#39;encontre de son frère Paul, l&#39;affaire vient de prendre un autre tournant. Le frère ainé de Paul…</p></div>
            </div>
        </a><a href='https://www.femmeactuelle.fr/actu/news-actu/affaire-paul-pogba-qui-est-le-marabout-mandate-par-le-footballeur-revelations-2145919'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Affaire Paul Pogba : qui est le marabout mandaté par le footballeur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRYGmo-wxvWPkeRC6xSpUE7ysn-X1jaH3Nk3jVar9FwfkjLZ8U5vyz2TpC8XjjKTHrcMd4Noxw8" alt="Affaire Paul Pogba : qui est le marabout mandaté par le footballeur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les enquêteurs en charge de l&#39;affaire Paul Pogba sont parvenus à retrouver la trace du marabout dont le footballeur aurait sollicité les services. Se1.</p></div>
            </div>
        </a><a href='https://www.voici.fr/news-people/affaire-paul-pogba-nouvelles-revelations-sur-le-marabout-auquel-il-aurait-fait-appel-744371'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Affaire Paul Pogba : nouvelles révélations sur le marabout auquel il ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSsUoTyXKP-QpKciqp9Miszyz5HN45XDhRWLdSEYmbbGsluns3etab1RV67VR-4x_YygER-yGuy" alt="Affaire Paul Pogba : nouvelles révélations sur le marabout auquel il ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans la terrible affaire Paul Pogba qui a secoué le monde du football, un marabout a été identifié parmi les protagonistes. Le Journal du Dimanche...</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/societe/315203-il-faisait-de-la-magie-noire-folles-revelations-sur-le-marabout-embauche-par-paul-pogba/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Il faisait de la magie noire&quot; : folles révélations sur le marabout ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="&quot;Il faisait de la magie noire&quot; : folles révélations sur le marabout ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Loin des caméras et des photographes, c&#39;est toute la famille Pogba qui s&#39;entredéchire après les révélations autour d&#39;un mystérieux &quot;sage&quot; adepte de la&nbsp;...</p></div>
            </div>
        </a><a href='https://actu17.fr/enquetes/il-la-enterre-kylian-lun-des-suspects-maintient-ses-accusations-sur-le-marabout-de-paul-pogba.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Il l&#39;a enterré, Kylian» : l&#39;un des suspects maintient ses accusations ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS9yNofsSvvVFrA8HVAE0EUv5Jbmdv3DyFPR8oDRa9jBBy6l9Fz-Sse3z1Pvrc_dKSKOmNSxF2V" alt="«Il l&#39;a enterré, Kylian» : l&#39;un des suspects maintient ses accusations ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;un des suspects mis en examen dans l&#39;affaire Paul Pogba affirme dans des notes découvertes dans son téléphone que le milieu de terrain de l&#39;équipe de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}