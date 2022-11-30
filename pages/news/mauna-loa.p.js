import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mauna Loa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mauna Loa"/>
        <meta name="description" content="Trending News about Mauna Loa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mauna Loa</h1>
            <Image width={800} height={500} src="https://img.lemde.fr/2022/11/28/42/0/960/640/1440/960/60/0/dcda0ef_5865926-01-06.jpg" alt="Mauna Loa"/>
            <h3>Recent News</h3>
            <a href='https://www.lemonde.fr/planete/article/2022/11/29/le-mauna-loa-plus-gros-volcan-du-monde-est-entre-en-eruption-a-hawai_6152121_3244.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le Mauna Loa, plus gros volcan du monde, est entré en éruption à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSvcG6EKIo1UgVBARw8p2mdlow_ddst0JPUDr5HMXDdDXRVFm1JoZtLJZbS-Pv52tH04WfewJ94" alt="Le Mauna Loa, plus gros volcan du monde, est entré en éruption à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les coulées de lave du volcan, en « pause éruptive » depuis presque quarante ans, ne menacent pas pour l&#39;instant les habitants de l&#39;île américaine.</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/international/video-volcan-hawai-les-images-impressionnantes-du-mauna-loa-le-plus-grand-des-volcans-actifs-au-monde-2240233.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO - Éruption du Mauna Loa à Hawaï : les images ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcShZ1Xn8XI00Q-XcwawTLShIgjZPMLXrk4O7GSYygtoOx9kou3HMSxNNVJ617elPbVtT3RbxfSG" alt="VIDÉO - Éruption du Mauna Loa à Hawaï : les images ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ À Hawaï, le Manau Loa, le plus grand volcan actif au monde, s&#39;est réveillé. Cela faisait 38 ans qu&#39;il était endormi. Découvrez les images&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sudouest.fr/international/etats-unis/video-hawai-le-mauna-loa-plus-gros-volcan-actif-du-monde-crache-d-immenses-fontaines-de-lave-13184287.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vidéo. Hawaï : le Mauna Loa, plus gros volcan actif du monde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQMWmar6EQ9Q8fU5JI9qjSXOj1GZy4p2fR2S7IqS-Yo0ZXIftqv5pR0T8pzt2Sl-ERj0ptnzbF0" alt="Vidéo. Hawaï : le Mauna Loa, plus gros volcan actif du monde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après 38 ans sans effusion, le Mauna Loa, plus gros volcan actif du monde, est entré en éruption dimanche soir à Hawaï. Il crache désormais des fontaines de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.courrierinternational.com/article/video-a-hawaii-le-volcan-mauna-loa-est-entre-en-eruption-pour-la-premiere-fois-depuis-1984'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>À Hawaii, le volcan Mauna Loa est entré en éruption pour la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR-wZtrfNJr7SiPFyRAI3wfU4PNFnCCBi5EQvN2uETvLZgxlREHDALZI3vidsjFwqIJO0l9sLxm" alt="À Hawaii, le volcan Mauna Loa est entré en éruption pour la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après des décennies de silence et des semaines d&#39;intense activité sismique à proximité de sa caldeira, le volcan hawaïen Mauna Loa, le plus grand du monde,&nbsp;...</p></div>
            </div>
        </a><a href='https://fr.euronews.com/2022/11/29/hawaii-reveil-du-plus-grand-volcan-actif-du-monde-le-mauna-loa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eruption du volcan Mauna Loa à Hawaï : faut-il s&#39;en inquiéter ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT4VBXE5lLG33CbHSWU0Xwyox6isMNW8yGISdxE0d3IXKDaHYpSqMBFvqWAMEXESXst6xSxZi86" alt="Eruption du volcan Mauna Loa à Hawaï : faut-il s&#39;en inquiéter ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Hawaï, le Mauna Loa s&#39;est réveillé. Il n&#39;était pas rentré en éruption depuis 1984. Quatre choses à savoir sur le plus grand volcan actif au monde.</p></div>
            </div>
        </a><a href='https://www.huffingtonpost.fr/international/video/a-hawai-le-volcan-mauna-loa-entre-en-eruption-et-le-ciel-se-teinte-de-rouge_210868.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le ciel d&#39;Hawaï se teinte de rouge avec l&#39;éruption du volcan Mauna ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTA9PCgIRq9jnDtvRQyt_soUvbam15DICSpwUDp9ObBno2BryDke-WlEMQjSfhQ0kTwdogYVq7y" alt="Le ciel d&#39;Hawaï se teinte de rouge avec l&#39;éruption du volcan Mauna ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le plus grand volcan actif du monde vient d&#39;entrer en éruption à Hawaï pour la première fois en 38 ans. Son réveil s&#39;observe jusque dans le ciel.</p></div>
            </div>
        </a>
        </Template></>;
}