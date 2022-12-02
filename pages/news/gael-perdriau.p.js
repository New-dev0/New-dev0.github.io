import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gael Perdriau</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gael Perdriau"/>
        <meta name="description" content="Trending News about Gael Perdriau" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gael Perdriau</h1>
            <Image width={800} height={500} src="https://www.francetvinfo.fr/pictures/Zng-pFrF0i5VyfjRNpV7Vil0xLE/1500x843/2022/12/01/6388e6d79e84f_080-hl-vmartin-1907671.jpg" alt="Gael Perdriau"/>
            <h3>Recent News</h3>
            <a href='https://www.francetvinfo.fr/politique/affaire-gael-perdriau-25-elus-de-la-loire-appellent-a-la-demission-du-maire-de-saint-etienne_5516001.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Affaire Gaël Perdriau : 25 élus de la Loire appellent à la démission ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQJWC1HLJer0UY0_lV-ivU9SJH4eYTgWodvBR6bM-NFe--ZmrZL-6SzXgndWVHdaMQupc-x_nHO" alt="Affaire Gaël Perdriau : 25 élus de la Loire appellent à la démission ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Temps de lecture : 1 min. Le maire de Saint&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/politique/saint-etienne-25-elus-locaux-demandent-a-gael-perdriau-de-demissionner-apres-de-nouvelles-revelations_AD-202212010768.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saint-Étienne: 25 élus locaux demandent à Gaël Perdriau de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQqbxSkxlsaHtbxQX1Wtw29sCJILaGMmrowfwePp3lzOU31RYSmAvmVqaDm6Vbpvc-1dteojNe-" alt="Saint-Étienne: 25 élus locaux demandent à Gaël Perdriau de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cet appel intervient alors que Mediapart a mis en évidence la calomnie du maire de Saint-Étienne à l&#39;encontre du président de la région Rhône-Alpes Laurent&nbsp;...</p></div>
            </div>
        </a><a href='https://www.midilibre.fr/2022/12/01/affaire-gael-perdriau-le-maire-de-saint-etienne-pousse-a-la-demission-par-25-elus-de-la-loire-10840539.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Affaire Gaël Perdriau : le maire de Saint-Etienne poussé à la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSZG8R2SnaacKFkqCgVb625jBYW7H7tR83bZmVCDeEWD1WZpMvvCtS04Pl81Kk801QgfVHUNIoI" alt="Affaire Gaël Perdriau : le maire de Saint-Etienne poussé à la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vingt-cinq élus de la Loire ont signé, ce jeudi 1er novembre, un appel à la démission du maire de Saint-Etienne, après la diffusion d&#39;un article de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/politique/appel-a-la-demission-de-gael-perdriau-par-25-elus-de-la-loire-20221201'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saint-Étienne : appel à la démission de Gaël Perdriau par 25 élus ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTzZEHeqLxyLab2ImZzn3o-iCcva21QOLpNKohXIN5LU3TafqeG2aLez_gg0TZldrqaszf93KY9" alt="Saint-Étienne : appel à la démission de Gaël Perdriau par 25 élus ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le maire de Saint-Etienne avait lancé une rumeur accusant Laurent Wauquiez de pédocriminalité, avant de reconnaître, auprès de Mediapart, des accusations&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnews.fr/france/2022-12-01/affaire-laurent-wauquiez-gael-perdriau-voici-tout-ce-que-lon-sait-1295917'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Affaire Laurent Wauquiez-Gaël Perdriau : voici tout ce que l&#39;on sait</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSLIEx9dvYBLg89Qz4U55VrqrOYDBeskc2hoBQhytvCVOeDvQ_S-pN9AUXqcS9FOgitMHMvosP1" alt="Affaire Laurent Wauquiez-Gaël Perdriau : voici tout ce que l&#39;on sait" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Laurent Wauquiez a annoncé porter plainte contre le maire de Saint-Etienne, Gaël Perdriau, pour diffamation. Voici ce qu&#39;il faut savoir sur cette affaire.</p></div>
            </div>
        </a><a href='https://www.sudouest.fr/france/affaire-de-la-sextape-les-appels-a-la-demission-du-maire-de-saint-etienne-gael-perdriau-se-multiplient-13215707.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Affaire de la sextape : les appels à la démission du maire de Saint ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRhIXA3JFIMpvvyc9DK38LtveLC8XPHNmXjIbpt8PXkA9elMqFbKzakuWAZoWyH3UmMmqI_UuPN" alt="Affaire de la sextape : les appels à la démission du maire de Saint ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après la diffusion d&#39;un article de Mediapart révélant ses propos calomnieux envers Laurent Wauquiez, le maire de Saint-Etienne, déjà visé dans une affaire&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lemonde.fr/police-justice/article/2022/11/30/mediapart-finalement-autorise-a-publier-une-enquete-sur-gael-perdriau-le-maire-de-saint-etienne_6152370_1653578.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Mediapart » finalement autorisé à publier une enquête sur Gaël ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ0toleisdGc49Y0uzkME-O_ILrc0HAKW5CTmYup5A29ZBIZ27_xTR-ouKnsqUfGBHsK9hO-1b3" alt="« Mediapart » finalement autorisé à publier une enquête sur Gaël ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mediapart peut finalement publier sa nouvelle enquête sur le maire de Saint-Etienne. « La justice rétracte l&#39;ordonnance qui nous interdisait de publier&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}