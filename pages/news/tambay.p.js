import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tambay</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tambay"/>
        <meta name="description" content="Trending News about Tambay" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tambay</h1>
            <Image width={800} height={500} src="https://www.francetvinfo.fr/pictures/wc40MTIkGm37xEYJLm04ilIu4tw/1500x843/2022/12/04/php4JmbKy.jpg" alt="Tambay"/>
            <h3>Recent News</h3>
            <a href='https://www.francetvinfo.fr/sports/auto-moto/formule-1/f1-patrick-tambay-est-mort-a-l-age-de-73-ans_5522451.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 : Patrick Tambay est mort, à l&#39;âge de 73 ans</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQqU2RITLcfdal7b41SEFyWy5XC44Pw9Chv3ze3bzqd4HvOLUuLrQh8SO_dEGkjps5pEyNG2g4J" alt="F1 : Patrick Tambay est mort, à l&#39;âge de 73 ans" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ancien pilote Ferrari ou Renault, figure française marquante du sport automobile et de la Formule 1 dans les années 70-80, est mort dimanche 4 décembre.</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Formule-1/Actualites/Patrick-tambay-ancien-pilote-de-f1-est-mort/1368388'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrick Tambay, ancien pilote de F1, est mort</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTnnqoiJN5JQtE4U07RZvB8GC9CM9Ob8x0wkVXI_gN6FeInq0Le5rlXBQ6m82nm0C9kO9-Qg4pg" alt="Patrick Tambay, ancien pilote de F1, est mort" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patrick Tambay, qui a disputé 114 Grands Prix de F1 dans les années 70 et 80, pour deux victoires, est mort dimanche à 73 ans.</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/12/04/formule-1-lancien-pilote-patrick-tambay-est-mort-10846124.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDEO. Formule 1 : Patrick Tambay, ancien pilote et &quot;gentleman ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS48IwnVVyXHKdtyPedxYd57FXes2ZouXQYnIwNAKVWvJC5HQOAPnaincpXtbAgPpLVHoe5b20a" alt="VIDEO. Formule 1 : Patrick Tambay, ancien pilote et &quot;gentleman ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Victorieux deux Grands Prix en 1982 et en 1983 au volant d&#39;une Ferrari, il s&#39;est éteint à 73 ans des suites de la maladie de Parkinson, annonce sa famille&nbsp;...</p></div>
            </div>
        </a><a href='https://fr.motorsport.com/f1/news/patrick-tambay-mort-disparition-deces/10407756/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrick Tambay est mort</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSU4Uk2XyEg-M84b9Mk1XvdNwslzOn92mE9WWfwR8ZsbGvfx1OOJQJNSn6XkECE9im71F4w8vxY" alt="Patrick Tambay est mort" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ancien pilote français de Formule 1 Patrick Tambay est décédé à l&#39;âge de 73 ans.</p></div>
            </div>
        </a><a href='https://www.lemonde.fr/sport/article/2022/12/04/formule-1-le-pilote-automobile-francais-patrick-tambay-est-mort_6152919_3242.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrick Tambay, pilote de Formule 1 des années 1980, est mort</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTeSSzgucf05LLaPA7c8cKAokANVRat8fSq0UC5yk5pEhJdDkH1we9K9t2EOkf_MsKb_L2INaY7" alt="Patrick Tambay, pilote de Formule 1 des années 1980, est mort" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pilote marquant des années 1980, vainqueur de deux Grands Prix de formule 1, le Français est mort à l&#39;âge de 73 ans.</p></div>
            </div>
        </a><a href='https://www.lepoint.fr/sport/patrick-tanbay-ancien-pilote-de-formule-1-est-mort-04-12-2022-2500354_26.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrick Tambay, ancien pilote de Formule 1, est mort</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQWJGpPCdk_nsVr5yIC3xh8xI2UqixWBZJPWp-QR0aUNepSUQ_0kHIlzsjt1G5Bp17jkuhT2Q2_" alt="Patrick Tambay, ancien pilote de Formule 1, est mort" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le vainqueur de deux Grands Prix Patrick Tambay s&#39;est éteint à l&#39;âge de 73 ans des suites d&#39;une longue maladie, a indiqué sa famille.</p></div>
            </div>
        </a>
        </Template></>;
}