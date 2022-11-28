import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>1 de dezembro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,1 de dezembro"/>
        <meta name="description" content="Trending News about 1 de dezembro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>1 de dezembro</h1>
            <Image width={800} height={500} src="https://sintranoticias.pt/wp-content/uploads/2022/11/sociedade-uniao-primeiro-dezembro.jpg" alt="1 de dezembro"/>
            <h3>Recent News</h3>
            <a href='https://sintranoticias.pt/2022/11/27/sociedade-uniao-primeiro-de-dezembro-faz-135-anos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sociedade União Primeiro de Dezembro faz 135 anos - Sintra Notícias</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQGFTZO2qsmvYmhO9V0aBokMcpSuIEskVBcTuuCyDgYSgxDYL5JXbpJ5luQ4TqPg1i9JWW7bEeO" alt="Sociedade União Primeiro de Dezembro faz 135 anos - Sintra Notícias" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No dia 1 de dezembro será assinala a festa de aniversário, estrando programadas outras iniciativas, como “jogos de solteiros e casados, seguido de almoço” a 8&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}