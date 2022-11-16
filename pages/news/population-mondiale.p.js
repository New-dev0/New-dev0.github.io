import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Population mondiale</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Population mondiale"/>
        <meta name="description" content="Trending News about Population mondiale" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Population mondiale</h1>
            <Image width={800} height={500} src="https://services.meteored.com/img/article/2022-noviembre-ha-llegado-el-dia-poblacion-mundial-alcanza-los-8-mil-millones-de-personas-1668414598638_1280.jpeg" alt="Population mondiale"/>
            <h3>Recent News</h3>
            <a href='https://www.tameteo.com/actualites/actualite/derniere-minute-la-population-mondiale-atteint-8-milliards-d-habitants-alerte-monde.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dernière minute : la population mondiale atteint 8 milliards d ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ89btjhd80Rt-5BcTIqCv9qnTeOY8XOjMBqjnQ4frPMsfnkaqVunr-C3MMEnOBknCurEi2QyLv" alt="Dernière minute : la population mondiale atteint 8 milliards d ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce 15 novembre 2022 est le jour où la population mondiale passera la barre des huit milliards d&#39;habitants sur la planète Terre.</p></div>
            </div>
        </a><a href='https://legrandcontinent.eu/fr/2022/11/15/la-population-mondiale-depasse-8-milliards/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La population mondiale dépasse 8 milliards - Le Grand Continent</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRXZsC48d1JKAOGUDSAL9MRmb_Q8H5Ed9Bj2FU4ON1otRem1GIt3Rjqn8gNq_aIhNv1ZLAuzy6P" alt="La population mondiale dépasse 8 milliards - Le Grand Continent" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aujourd&#39;hui, les Nations unies anticipent que la population mondiale devrait dépasser le seuil des 8 milliards d&#39;êtres humains. Selon les dernières projections,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/international/8-milliards-d-habitants-sur-terre-comment-est-calculee-la-population-mondiale_AN-202211150386.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>8 milliards d&#39;habitants sur Terre: comment est calculée la population ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRuDCC43o27R8f2nfez1ruX5Q1kIV3XyrtbdHUGy0UGPDKSPv4yAxr0jvtP6IbuJ_h40BKh58mh" alt="8 milliards d&#39;habitants sur Terre: comment est calculée la population ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Obtenu à partir des recensements nationaux, étayé en utilisant toutes les données disponibles sur les tendances de la fécondité, de la mortalité et des&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.fr/societe/la-population-mondiale-a-atteint-8-milliards-dhabitants/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La population mondiale a atteint 8 milliards d&#39;habitants - Forbes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ2QjWpXId76Y7HdnyJf2q9HUj0CkBKRyCo-qOnlBqHJF7sHVNK-JuNGby4zVTldkFs0F6mmF2e" alt="La population mondiale a atteint 8 milliards d&#39;habitants - Forbes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La population mondiale a atteint 8 milliards d&#39;habitants mardi, selon les estimations de l&#39;Organisation des Nations unies, une étape importante alors&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnetfrance.fr/news/en-seulement-12-ans-la-population-mondiale-est-passee-de-7-a-8-milliards-39949768.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>En seulement 12 ans, la population mondiale est passée de 7 à 8 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRItTyI_dVvz0MeEiAPDkaTrWot_UyuWN41mWcByUPDRLGpeUEyxJuETTXaz0K29xJAK5nvrXk5" alt="En seulement 12 ans, la population mondiale est passée de 7 à 8 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Selon les Nations Unies, la croissance démographique mondiale est de plus en plus concentrée dans les pays les plus pauvres.</p></div>
            </div>
        </a><a href='https://www.europe1.fr/societe/augmentation-de-la-population-mondiale-comment-faire-pour-vivre-ensemble-a-lavenir-4147875'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Augmentation de la population mondiale : comment faire pour tous ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRfvWy839h_vGuotyuyZcN3aZJYVsHBAFjaU6XACIeFNdbYHnkMMG1Q7Y8TL_VVT2wzv1GVXpjb" alt="Augmentation de la population mondiale : comment faire pour tous ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La planète Terre compte depuis ce mardi plus de huit milliards d&#39;êtres humains, selon une estimation des Nations unies. Un nombre qui cache de nombreux&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}