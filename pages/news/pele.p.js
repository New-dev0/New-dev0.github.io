import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pele</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pele"/>
        <meta name="description" content="Trending News about Pele" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pele</h1>
            <Image width={800} height={500} src="" alt="Pele"/>
            <h3>Recent News</h3>
            <a href='https://www.ouest-france.fr/sport/football/equipe-bresil/football-l-etat-de-pele-s-ameliore-selon-les-medecins-d01f099e-7275-11ed-bd92-7d4ffff8f3b8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Football. L&#39;état de Pelé s&#39;améliore selon les médecins</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRU_cDFf4iPiLe3W7YBU2Rfn-AscdvcavAQ2G0C8XgkYxIXM4hmQssr5PpeKeK1KRq_xm_sIQAl" alt="Football. L&#39;état de Pelé s&#39;améliore selon les médecins" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pelé, 82 ans, souffre d&#39;une « infection respiratoire » mais son état de santé général s&#39;améliore, a indiqué vendredi l&#39;hôpital de Sao Paulo, où la légende&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/L-etat-de-sante-de-pele-s-ameliore/1368152'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;état de santé de Pelé s&#39;améliore</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRSmphT8oqbYfWKCXh5upC8nQQdzrwSyQPFc2NE-8907mjhlUrOqNX85vTmgUZB3VR84nbuGqsq" alt="L&#39;état de santé de Pelé s&#39;améliore" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Roi Pelé se porte de mieux en mieux, selon l&#39;hôpital Albert-Einstein de São Paulo qui l&#39;avait admis lundi à cause d&#39;une infection respiratoire.</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/sports/football/football-souffrant-dune-infection-pulmonaire-pele-va-mieux-assurent-ses-medecins-02-12-2022-XNNNDIDKTJF6BGYX3A3K5YPMJA.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Football : souffrant d&#39;une infection pulmonaire, Pelé va mieux ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSQ1tI8hBrI7LSaKkagCOAy99W7srqma105fC8WSh4wIeVBr5j8EpzrsqP-K8GwaacRvChqc6c4" alt="Football : souffrant d&#39;une infection pulmonaire, Pelé va mieux ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pelé avait été admis à l&#39;hôpital Albert Einstein pour une réévaluation de son traitement contre le cancer du côlon. Son infection respiratoire est « traitée par&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/fr/news/coupe-du-monde-2022-les-bresiliens-au-soutien-du-roi-pele/blt34d3805faa0c7108'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du Monde 2022 : Les Brésiliens au soutien du Roi Pelé</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTsK0q8X267neL8-9fDfvempcZZLU0pgDTB0rH-GOO1aCMwQkPgNQR9zXt9oB7jiDFtCrWwuqn_" alt="Coupe du Monde 2022 : Les Brésiliens au soutien du Roi Pelé" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les supporters brésiliens ont rendu hommage à la légende du football brésilien Pelé avant la dernière rencontre de la phase de poules.</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/international/pele-souffre-d-une-infection-respiratoire-mais-son-etat-s-ameliore-2240647.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pelé souffre d&#39;une infection respiratoire, mais son état s&#39;améliore</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS6fcMYq-rd3fvT5vhzVzqTD-5tbNwHf3VKomALXXHD7urTu0jitrY57ylIm3-3ke8yUCitpIHX" alt="Pelé souffre d&#39;une infection respiratoire, mais son état s&#39;améliore" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Merci au Qatar pour cet hommage, et à tous ceux qui m&#39;envoient de bonnes ondes. Pelé. Jeudi 1er décembre, sur son compte Instagram, le roi Pelé&nbsp;...</p></div>
            </div>
        </a><a href='https://www.footmercato.net/a7837530834237434624-bresil-pele-donne-de-ses-nouvelles'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brésil : Pelé donne de ses nouvelles</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ4t7oUJtarSv9FZJe2a_XUkiF4_e0WLIS5pN-6UaIoBm0_0EJuGmfOAfqpCurnTnaMdw3Saa_h" alt="Brésil : Pelé donne de ses nouvelles" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hospitalisé dans le cadre d&#39;une &quot;visite de routine&quot; en lien avec le traitement de son cancer, le Roi Pelé a reçu de nombreux messages de supporters venus&nbsp;...</p></div>
            </div>
        </a><a href='https://icilome.com/2022/12/bresil-pele/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brésil-Pélé : Plus de peur que de mal | Icilome</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQMXlHlXzUwZoEBlZ5qVhDQfOIW09Mq5-lKU9kwj7f8shJcktdmDiVsPO1ILLDTprM8Em1UHKLO" alt="Brésil-Pélé : Plus de peur que de mal | Icilome" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;état de santé d&#39;Edson Arates do Nascimento, plus connu sous le nom de Pélé, n&#39;est pas aussi préoccupant que certaines sources le laissent croire, tente de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}