import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Immigrant</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Immigrant"/>
        <meta name="description" content="Trending News about The Immigrant" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Immigrant</h1>
            <Image width={800} height={500} src="https://fr.web.img6.acsta.net/img/f8/fb/f8fbd0f46b216837e8fd689c802622ac.jpg" alt="The Immigrant"/>
            <h3>Recent News</h3>
            <a href='https://www.allocine.fr/article/fichearticle_gen_carticle=1000003648.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Immigrant sur Arte : un vrai film personnel se cache sous le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTvDexVrTQC8r0jKLceHMm8Vn1uFRDfTKtBBCUriBkph-QrkE2lI4F-RzViz-JrjQ7WddhQvmjN" alt="The Immigrant sur Arte : un vrai film personnel se cache sous le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Film sur l&#39;envers du rêve américain, &quot;The Immigrant&quot; de James Gray a aussi des résonnances familiales chez le cinéaste, qui a tenu à filmer sur Ellis Island&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cineserie.com/news/cinema/the-immigrant-harvey-weinstein-a-ruine-le-succes-du-film-5504270/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Immigrant : Harvey Weinstein a ruiné le succès du film</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_Fc3IUppcZVFi7gj7sZuGemz52pER9XKeneH9CeWv3zLQW2dR2lTAGvpbs_fi54vE4sSyg-s9" alt="The Immigrant : Harvey Weinstein a ruiné le succès du film" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;The Immigrant&quot; n&#39;a pas eu un grand succès en salles. La faute à Harvey Weinstein, qui a tout fait pour pourrir le film de James Gray.</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/culture-loisirs/tv/programme-tv-du-dimanche-27-novembre-the-immigrant-manger-mieux-pour-sauver-le-futur-notre-selection-27-11-2022-P727KYUW3VCCBFFMZD3GDEXQ5A.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Programme TV du dimanche 27 novembre : «The Immigrant ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRX3-ibAUX6-7GLXyHcQlRccJAKd94dfwXrYTZzb8Ih-x6K1E9So_RtwjJcVHoz0Fhb6LidqIt7" alt="Programme TV du dimanche 27 novembre : «The Immigrant ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un film sur l&#39;immigration aux États-Unis au XXe siècle, un documentaire sur l&#39;impact immense de notre assiette sur la planète, une comédie romantique avec&nbsp;...</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/cinema/314484-the-immigrant-arte-ce-decor-mythique-quune-equipe-de-cinema-a-pu-filmer-pour-la-premiere-fois/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Immigrant (Arte) : ce décor mythique qu&#39;une équipe de cinéma a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="The Immigrant (Arte) : ce décor mythique qu&#39;une équipe de cinéma a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce dimanche 27 novembre 2022 à 20h55, Arte diffuse The Immigrant, réalisé par James Gray. L&#39;occasion pour le réalisateur, dont les grands-parents ont émigré&nbsp;...</p></div>
            </div>
        </a><a href='https://www.telerama.fr/ecrans/new-york-debut-de-siecle-au-cinema-reve-ou-cauchemar-7013185.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New York début de siècle au cinéma, rêve ou cauchemar ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-mSglEESxdCvho5ZGkZPioUqxEPbxsdxk7fdM6AnSUIxflBrv0pMks7vk3iaM79mAQUWHOulp" alt="New York début de siècle au cinéma, rêve ou cauchemar ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arte diffuse ce soir “The Immigrant”, le mélo de James Gray avec Marion Cotillard et Joaquin Phoenix. L&#39;occasion d&#39;une plongée en quatre films et une série&nbsp;...</p></div>
            </div>
        </a><a href='https://www.toutelatele.com/the-immigrant-arte-l-histoire-vraie-d-ewa-prise-dans-le-piege-d-un-proxenete-pour-le-film-avec-marion-cotillard-146698'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The immigrant (Arte) : l&#39;histoire vraie d&#39;Ewa prise dans le piège d&#39;un ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQPIFw2HyK_Mr4iJQFFLAYKRGnAnh1aH5hMozEJNTT9wkiaWLcImVlRkorqkTIPJBYMXCC1cv2o" alt="The immigrant (Arte) : l&#39;histoire vraie d&#39;Ewa prise dans le piège d&#39;un ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le film de James Gray, neuf fois nominé au Festival de Cannes 2013, The immigrant, sera diffusé ce dimanche 27 novembre 2022 à 20h55 sur Arte.</p></div>
            </div>
        </a>
        </Template></>;
}