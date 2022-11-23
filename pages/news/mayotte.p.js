import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mayotte</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mayotte"/>
        <meta name="description" content="Trending News about Mayotte" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mayotte</h1>
            <Image width={800} height={500} src="http://www.revolutionpermanente.fr/IMG/arton29537.jpg" alt="Mayotte"/>
            <h3>Recent News</h3>
            <a href='http://www.revolutionpermanente.fr/Surenchere-repressive-a-Mayotte-le-gouvernement-envoie-le-RAID-en-reponse-aux-violences'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Surenchère répressive à Mayotte : le gouvernement envoie le RAID ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSI34DgTYJbnQTzqzTwImmcheFuZdnvdYecQGSt-ujYmGhkKIVUdClcM1wpysPdKiXKgwOcSn67" alt="Surenchère répressive à Mayotte : le gouvernement envoie le RAID ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le ministre délégué des Outre-Mer, Jean-François Carenco, a annoncé ce lundi 21 novembre l&#39;envoi d&#39;un groupe de policiers du Raid à Mayotte pour réprimer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/actualite-france/affrontements-attaques-de-cars-scolaires-mayotte-au-bord-de-la-guerre-civile-20221122'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Affrontements, attaques de cars scolaires... Mayotte au «bord de la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRaxJuBGCYzjvvTsuRMF1wBtz7AIBwIV3fhSSeITgRtInS-JEhYIaB0N0XQdZZE5lu0GOHQpAQS" alt="Affrontements, attaques de cars scolaires... Mayotte au «bord de la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mamoudzou, la plus grande ville du département français de Mayotte, est secouée depuis une dizaine de jours par des conflits interquartiers qui ont fait un&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marianne.net/societe/insecurite-a-mayotte-nouvelles-scenes-de-violences-a-mamoudzou'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Insécurité à Mayotte : nouvelles scènes de violences à Mamoudzou</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTkELp7cwBlCdz28gdn-5Uu__5a6LDofa5Simdkb8ynxdb7UwylhzYW1aOYATbm0A8SmR0F7dbi" alt="Insécurité à Mayotte : nouvelles scènes de violences à Mamoudzou" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le chef-lieu de Mayotte est secoué depuis une dizaine de jours par des conflits inter-quartiers qui ont fait un mort le 12 novembre, un jeune de 20 ans tué à la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/societe/4011201-20221122-mayotte-pourquoi-ca-brule-partout-mamoudzou-capitale-archipel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mayotte : Pourquoi ça « brûle de partout » à Mamoudzou, la capitale ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTT7qVvmluLsozn2aJ2bRnHf0BiTJ4vjxtN4AqDoJFkaZAl1RoXvy6FPz6wy3UDALgne-yMTQvz" alt="Mayotte : Pourquoi ça « brûle de partout » à Mamoudzou, la capitale ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;archipel est secoué par des scènes de chaos depuis la mort d&#39;un jeune le 12 novembre, frappé à coups de machettes par des jeunes d&#39;un quartier rival.</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/economie/mayotte-on-vous-explique-la-nouvelle-flambee-de-violences-qui-touche-ce-departement-au-bord-de-la-guerre-civile_5492970.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mayotte : on vous explique pourquoi ce département est &quot;au bord de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQq0M0tLqfuQ_5RKWE7wUpoZHOde03udUIzHd7QuViyOxOd5ZMNG_3ZK4i4dN8KdiRIbILv9BHM" alt="Mayotte : on vous explique pourquoi ce département est &quot;au bord de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sur l&#39;île de l&#39;océan Indien, des affrontements toujours plus violents laissent les autorités impuissantes. Des policiers du Raid sont attendus pour aider&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rfi.fr/fr/france/20221122-mayotte-dans-l-attente-de-renforts-policiers-apr%C3%A8s-des-violences-inter-quartiers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mayotte dans l&#39;attente de renforts policiers après des violences inter ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ6Z7CG7bcGOh6mqKTOrYBhC0U-LvnA36JDPCRmkwQP-f77QJffRkIhk-tI3bdA-l23UlKIP35w" alt="Mayotte dans l&#39;attente de renforts policiers après des violences inter ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Théâtre depuis plusieurs jours de violences entre jeunes de quartiers rivaux provoquées par le meurtre de l&#39;un d&#39;entre eux, le département de Mayotte compte&nbsp;...</p></div>
            </div>
        </a><a href='https://la1ere.francetvinfo.fr/securite-les-moyens-militaires-seront-prochainement-renforces-a-mayotte-et-en-guyane-1342856.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sécurité : les moyens militaires seront prochainement &quot;renforcés&quot; à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTR_lwh0RcMsKPa_cGM5ZiE5QWznuNrejTFRAM2hZWOu7RltCFaZD5mcxZZzc7kU-Lz8ln47pnG" alt="Sécurité : les moyens militaires seront prochainement &quot;renforcés&quot; à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le ministre de l&#39;Intérieur et des Outre-mer, Gérald Darmanin, a annoncé qu&#39;un chapitre de la prochaine loi de programmation militaire dédié à Mayotte et à&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}