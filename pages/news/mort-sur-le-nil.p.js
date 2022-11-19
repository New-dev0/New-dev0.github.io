import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mort sur le Nil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mort sur le Nil"/>
        <meta name="description" content="Trending News about Mort sur le Nil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mort sur le Nil</h1>
            <Image width={800} height={500} src="https://imgsrc.cineserie.com/2022/11/linnet-ridgeway-gal-gadot-mort-sur-le-nil.png?ver=1" alt="Mort sur le Nil"/>
            <h3>Recent News</h3>
            <a href='https://www.cineserie.com/news/cinema/mort-sur-le-nil-pourquoi-le-film-a-t-il-ete-interdit-au-koweit-5504266/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mort sur le Nil : pourquoi le film a-t-il été interdit au Koweït ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSgAKG92rlD6wSxl9Co8wmqItlt7oW5PlhgXMV_GTpUKztr_rTTXUByJ3v6CK_XYMNenqN4VYPu" alt="Mort sur le Nil : pourquoi le film a-t-il été interdit au Koweït ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après « Le Crime de l&#39;Orient Express », Kenneth Branagh est de retour dans la peau de Hercule Poirot avec « Mort sur le Nil ».</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/shopping/mort-sur-le-nil-ne-ratez-pas-l-adaptation-hollywoodienne-du-classique-d-agatha-christie-sur-canal-056f20c0-668c-11ed-9c6a-75ffb43b0cc7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mort sur le Nil : ne ratez pas l&#39;adaptation hollywoodienne du ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTva-Ph-eKBpmew3qXw2i9gDWCoV7Krh2OHPylxmxFxhiC4a0Xn2D4Xpc0Q5qAR1hZA_1CcynHn" alt="Mort sur le Nil : ne ratez pas l&#39;adaptation hollywoodienne du ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans le film événement Mort sur le Nil, nous retrouvons des acteurs comme Kenneth Branagh, Gal Gadot et Emma Mackey. Souscrivez dès maintenant un abonnement&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}