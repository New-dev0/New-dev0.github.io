import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Franck Saurat</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Franck Saurat"/>
        <meta name="description" content="Trending News about Franck Saurat" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Franck Saurat</h1>
            <Image width={800} height={500} src="https://www.lepoint.fr/images/2022/12/08/23949514lpw-23949855-article-jpg_9206716_1250x625.jpg" alt="Franck Saurat"/>
            <h3>Recent News</h3>
            <a href='https://www.lepoint.fr/medias/television-le-producteur-franck-saurat-est-mort-08-12-2022-2500957_260.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Télévision : le producteur Franck Saurat est mort</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRl_IEmBthGeecia5iEO9eAJyVXz1ABzQ9pP3LgEeVqmTVn5y9T6dC3Htcg3Nmz3_sDthIrdAu3" alt="Télévision : le producteur Franck Saurat est mort" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Franck Saurat, le fondateur de la société Carson Prod, notamment connu pour avoir produit « Stars à domicile », est mort jeudi 8 décembre, à l&#39;âge de 55&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/culture/tv/le-producteur-de-television-franck-saurat-est-mort-a-l-age-de-55-ans_5532921.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le producteur de télévision Franck Saurat est mort à l&#39;âge de 55 ans</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQt4B_P4nx6rlsIe06XxwqL-BMgEonatPFzCBj3xJqCkd_S9SbcXMK5s7dlg-YqEFgLBMASjEzP" alt="Le producteur de télévision Franck Saurat est mort à l&#39;âge de 55 ans" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Il avait produit plusieurs émissions comme &quot;Stars à domicile&quot;, &quot;300 Choeurs&quot;, &quot;le Grand Show&quot; ou encore &quot;Les Victoires de la musique&quot;, depuis 2020,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.voici.fr/news-people/jean-luc-delarue-son-ami-et-associe-le-producteur-franck-saurat-est-decede-a-55-ans-744712'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jean-Luc Delarue : son ami et associé, le producteur Franck Saurat ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSVPLmJsLvXx_DQFtaPZtuxWjksdieZ9DYxk71-dC3HhzkX9g1tAOeUNhhnuzxXP9tgwaWuGADu" alt="Jean-Luc Delarue : son ami et associé, le producteur Franck Saurat ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est un jour bien triste pour le monde de la télévision. Franck Saurat, fondateur de la société Carson Prod et producteur d&#39;émissions cultes telle...</p></div>
            </div>
        </a><a href='https://www.ozap.com/actu/le-producteur-franck-saurat-est-mort/624917'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le producteur Franck Saurat est mort</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRRgdziOwLyZ0cNNo_BKbtaOzgbJh9DYSWqvZk2Gb8xtZbOk8avBQ8QtF7ID7-mysdxpXgU5CIY" alt="Le producteur Franck Saurat est mort" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Franck Saurat, décédé à l&#39;âge de 55 ans, était le patron de Carson Prod, société qu&#39;il avait co-fondée avec Jean-Luc Delarue. Le monde de la production est&nbsp;...</p></div>
            </div>
        </a><a href='https://fr.news.yahoo.com/mort-franck-saurat-%C3%A0-seulement-124700015.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mort de Franck Saurat à seulement 55 ans : hommages du monde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRNUIDZ3-ibieYhPp7RWaHawF1wxsa5ePBKupK5ImnKJl515nx8BmbIzvEB7p6CJw1XUIUs6k5o" alt="Mort de Franck Saurat à seulement 55 ans : hommages du monde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est une bien triste nouvelle qui est venue assombrir le monde de la télévision ce jeudi : alors qu&#39;il n&#39;avait que 55 ans, le producteur Franck Saurat&nbsp;...</p></div>
            </div>
        </a><a href='https://vl-media.fr/disparition-brutale-du-producteur-franck-saurat-a-55-ans/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Disparition brutale du producteur Franck Saurat à 55 ans | VL Média</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT2hmvOlbVasfyjk-DZ9uuEJv8ctdwNhJeDQBWY5OqvjGuv1WV5oAUVkp4hcYr2wt2AfIHk9Cjt" alt="Disparition brutale du producteur Franck Saurat à 55 ans | VL Média" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Il était un des producteurs incontournables de la télévision française : Franck Saurat est mort brutalement cette nuit à l&#39;âge de 55 ans.</p></div>
            </div>
        </a>
        </Template></>;
}