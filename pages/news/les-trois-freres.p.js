import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Les trois freres</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Les trois freres"/>
        <meta name="description" content="Trending News about Les trois freres" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Les trois freres</h1>
            <Image width={800} height={500} src="https://vl-media.fr/wp-content/uploads/2022/11/les-3-freres.jpg" alt="Les trois freres"/>
            <h3>Recent News</h3>
            <a href='https://www.programme-tv.net/news/cinema/313790-les-trois-freres-tmc-quel-chanteur-culte-aurait-du-jouer-dans-le-film/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Les trois frères (TMC) : quel chanteur culte aurait dû jouer dans le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Les trois frères (TMC) : quel chanteur culte aurait dû jouer dans le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>S&#39;il est bien sûr largement porté par Les Inconnus, le film Les trois frères, diffusé ce 16 novembre 2022 à 21h25 sur TMC, fait aussi la part belle au petit&nbsp;...</p></div>
            </div>
        </a><a href='https://vl-media.fr/10-repliques-cultes-du-film-les-trois-freres-avec-les-inconnus/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>10 répliques cultes du film Les trois frères avec Les Inconnus | VL ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQhopT-fvbOtmqdIOMETK1p1tZdqVjkuGyBg3ZttoW2V8W4NVZlyiPkJuVh1h3H-sNfi22hJjv" alt="10 répliques cultes du film Les trois frères avec Les Inconnus | VL ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alors que TMC rediffuse ce soir Les trois frères, on replonge dans 10 répliques cultes de cette comédie qui l&#39;est tout autant.</p></div>
            </div>
        </a>
        </Template></>;
}