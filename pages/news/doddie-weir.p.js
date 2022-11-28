import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Doddie Weir</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Doddie Weir"/>
        <meta name="description" content="Trending News about Doddie Weir" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Doddie Weir</h1>
            <Image width={800} height={500} src="https://static.actu.fr/uploads/2022/11/doddie-weir-ecosse-rugby.jpg" alt="Doddie Weir"/>
            <h3>Recent News</h3>
            <a href='https://actu.fr/sports/rugby/pro/rugby-doddie-weir-ancien-deuxieme-ligne-international-ecossais-est-decede_55500881.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rugby. Doddie Weir, ancien deuxième ligne international écossais ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSrxmqKXQBxUpkOTzQLNNnXNK1zuNqPwUcqjoBevy1jzXHkOQoUbYt1HdCelOlH-S3gz7NPUMJu" alt="Rugby. Doddie Weir, ancien deuxième ligne international écossais ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RUGBY. L&#39;ancien deuxième ligne écossais Doddie Weir (61 sélections) est décédé ce samedi à 52 ans des suites de la maladie de Charcot.</p></div>
            </div>
        </a><a href='https://www.lerugbynistere.fr/news/rugby-lovalie-rend-hommage-a-doddie-weir-legende-ecossaise-decedee-a-52-ans-2711221733.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RUGBY. L&#39;ovalie rend hommage à Doddie Weir, légende écossaise ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQdLbiB6HcbYfLfmb4Xx6OV3JECp0wf-W_IoWCTLKSl7B2N0Y2yxxYZ7Utl8teP6OAVOjgJup0JAw" alt="RUGBY. L&#39;ovalie rend hommage à Doddie Weir, légende écossaise ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depuis l&#39;annonce de son décès samedi 26 novembre au soir, les hommages se multiplient autour de Doddie Weir.</p></div>
            </div>
        </a><a href='https://www.rugbyrama.fr/rugby/carnet-noir-doddie-weir-et-sa-croisade-je-ne-veux-pas-inspirer-la-pitie._sto9245418/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carnet noir - Doddie Weir et sa &quot;croisade&quot; : &quot;Je ne veux pas inspirer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQwQyb9hVqjKg0Ko333w5BewlQpD-yyJIBCD3RJuET76-jJ0K-UIpzAgnDyiluTudIs5Sez9nLZ" alt="Carnet noir - Doddie Weir et sa &quot;croisade&quot; : &quot;Je ne veux pas inspirer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CARNET NOIR - Doddie Weir est décédé ce samedi à l&#39;âge de 52 ans des suites d&#39;une maladie neurodégénérative. L&#39;occasion de se replonger dans cette rencontre&nbsp;...</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/sport/rugby/4012028-20221127-rugby-symbole-lutte-contre-maladie-charcot-ancien-international-ecossais-doddie-weir-decede'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rugby : Symbole de la lutte contre la maladie de Charcot, l&#39;ancien ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQRrDMa2ARNbvyfej9hX89hfN_WVw_ErR_Door50YmQJPKX37OZYLVfefCB06IsLE9hv5QUc2qt" alt="Rugby : Symbole de la lutte contre la maladie de Charcot, l&#39;ancien ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ancien international écossais Doddie Weir est décédé à l&#39;âge de 52 ans, a annoncé sa famille samedi. Il souffrait depuis plusieurs années de la maladie de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.midi-olympique.fr/2022/11/27/carnet-noir-doddie-weir-digne-jusqua-son-ultime-souffle-10831435.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carnet Noir - Doddie Weir, digne jusqu&#39;à son ultime souffle</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQWdu_Of0dtmjqt5aLUJgAiUXkj0jV-obHJzmZD27kEnwvYJrV17Ea1tWFMFV8eR1xPdiCrISBXVQ" alt="Carnet Noir - Doddie Weir, digne jusqu&#39;à son ultime souffle" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Samedi soir, on a appris que Doddie Weir, qui luttait depuis six ans contre la maladie de Charcot, venait de s&#39;éteindre dans sa maison de Galashiels,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.epcrugby.com/2022/11/27/lepcr-en-deuil-apres-le-deces-de-doddie-weir/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;EPCR en deuil après le décès de Doddie Weir</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ28hcw0vK2zKzNDRfMfccRzW4vyGUyu0vKtd46aDuzss7DXN1EoLvkdeP84OJUGdQC8AQkzeDI" alt="L&#39;EPCR en deuil après le décès de Doddie Weir" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;EPCR a appris avec tristesse le décès de Doddie Weir, ancien joueur de l&#39;équipe d&#39;Ecosse et des Lions britanniques et irlandais, qui s&#39;est battu avec.</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Rugby/Actualites/Doddie-weir-ancien-international-ecossais-est-mort/1367028'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doddie Weir, ancien international écossais, est mort</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQJiWhpIfrsT9m4OJJ7rxMgyGJbsbs_jH-JeJ80C1oB7So7JN4rEsaV-GCDSeJRd2nsOSa_jurD" alt="Doddie Weir, ancien international écossais, est mort" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deuxième-ligne de la sélection écossaise dans les années 1990, Doddie Weir est mort ce samedi à l&#39;âge de 52 ans. Il était atteint de sclérose latérale&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}