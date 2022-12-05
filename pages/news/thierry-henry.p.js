import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Thierry Henry</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Thierry Henry"/>
        <meta name="description" content="Trending News about Thierry Henry" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Thierry Henry</h1>
            <Image width={800} height={500} src="https://le10static.com/img/master/0000/0021/217615.jpeg" alt="Thierry Henry"/>
            <h3>Recent News</h3>
            <a href='https://le10sport.com/football/coupe-du-monde/coupe-du-monde-2022-thierry-henry-est-menace-pour-ce-nouveau-role-en-belgique-624012'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du Monde 2022 : Thierry Henry est menacé pour ce nouveau ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRt0LbZLjyNzJITAI8FcbJTu8s8BQYrNzIFNVH2ftthtNmQTNIJAwfNdoXVJGAU42Nys6TwGhct" alt="Coupe du Monde 2022 : Thierry Henry est menacé pour ce nouveau ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après l&#39;élimination de la Belgique en Coupe du Monde, Roberto Martinez a annoncé sa démission. Pour le remplacer, la fédération des Diables Rouges devrait…</p></div>
            </div>
        </a><a href='https://www.foot-national.com/coupes/coupe-du-monde-le-francais-thierry-henry-prochain-selectionneur-de-la-belgique-803246'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde : le Français Thierry Henry, prochain ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTaQChgWs3av8Wz_Z8UHcSZ4ENLGBtmySg2Dy7q7Lh2QhPqFkVW7XiFW97btFnLIqUfARIo96TD" alt="Coupe du monde : le Français Thierry Henry, prochain ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Entraîneur adjoint de Roberto Martinez, le Français Thierry Henry pourrait faire partie des favoris pour la succession de l&#39;Espagnol à la tête de Belgique.</p></div>
            </div>
        </a><a href='https://www.foot01.com/foot-mondial/apres-le-fiasco-les-belges-pensent-a-thierry-henry-416622'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Après le fiasco, les Belges pensent à Thierry Henry</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQECKLdUoVVtaL4TcNNRdFy7fh-y61naYZccO_zO746JLVj7F5GXkIZpnJ6ud4aXZ6csrC6nuXm" alt="Après le fiasco, les Belges pensent à Thierry Henry" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sortie de la Coupe du monde 2022 dès la phase de groupes, la Belgique devra trouver un nouveau sélectionneur après la démission de Roberto Martinez.</p></div>
            </div>
        </a><a href='https://madeinfoot.ouest-france.fr/infos/article-belgique-thierry-henry-bientot-propulse-a-la-tete-des-diables-rouges-ij-398457.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgique : Thierry Henry bientôt propulsé à la tête des Diables ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRfgoy0RK4iGyBf_r_yABM7jv4BMKPBRS2C6Jcs2PcIGuEEFtVbKmmdfW9ZfMRWFIO44Irv9XWY" alt="Belgique : Thierry Henry bientôt propulsé à la tête des Diables ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Foot : Le 02/12/2022 15:23, Belgique - Thierry Henry bientôt propulsé à la tête des Diables Rouges ?. Éliminée de la Coupe du Monde 2022 après seulement&nbsp;...</p></div>
            </div>
        </a><a href='https://m.maxifoot.fr/belgique/thierry-henry-va-assurer-l-interim-foot-380602.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgique : Thierry Henry va assurer l&#39;intérim</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQqtUqoJKAwqf9Nvy8IBbXqINXBGBpCrgddjiAuUzPqXZ9JKTT7rXoPdEvKdECE26ivIDDqiSe8" alt="Belgique : Thierry Henry va assurer l&#39;intérim" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après l&#39;élimination de son équipe dès la phase de poules de la Coupe du monde 2022 jeudi, le sélectionneur de la Belgique Roberto Martinez a immédiatement&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport.fr/football/thierry-henry-oublie-definitivement-les-bleus-et-prend-la-tete-des-diables-rouges-970319.shtm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thierry Henry oublie définitivement les Bleus et prend la tête des ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmdkv-uL60C_v-Zapo8h6qcCsR_gtrK2E4i0OC6rBMl5xzoooPsfDGOWWLsmK-CDY0UcwshzMT" alt="Thierry Henry oublie définitivement les Bleus et prend la tête des ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A la suite de l&#39;annonce du départ de Roberto Martinez, Thomas Vermaelen et Thierry Henry, ces deux adjoints, auraient pris la tête de la Belgique.</p></div>
            </div>
        </a><a href='https://www.topmercato.com/1010172-belgique-thierry-henry-sur-le-banc/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgique : Thierry Henry sur le banc ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRMprF2oCXR_Fj3z4XKGzRzKEtpa0KGGGFK-YNjFXroyYkpZTSx4e7jZRSSAuDEKZz56RFuREfj" alt="Belgique : Thierry Henry sur le banc ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alors que Roberto Martinez a choisi de quitter son poste de sélectionneur de la Belgique, le nom de Thierry Henry est cité parmi les potentiels.</p></div>
            </div>
        </a>
        </Template></>;
}