import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mario Matos Ribeiro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mario Matos Ribeiro"/>
        <meta name="description" content="Trending News about Mario Matos Ribeiro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mario Matos Ribeiro</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A868%3A488%3Anowe%3A226%3A0%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F19220232%2Fscreenshot-2022-11-19-at-220110.jpg" alt="Mario Matos Ribeiro"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/19/morreu-mario-matos-ribeiro-cofundador-da-modalisboa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu Mário Matos Ribeiro, cofundador da ModaLisboa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTjfWWfNXTjx8UR_0dRa4RuwsawJlChMYN39zmxQbs9Dv2TtybVQBechsXBUuF3z_LTb_clh5Ou" alt="Morreu Mário Matos Ribeiro, cofundador da ModaLisboa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A primeira edição do projeto ModaLisboa, uma conceção e produção de Eduarda Abbondanza e Mário Matos Ribeiro, data de março de 1991, no Teatro São Luiz.</p></div>
            </div>
        </a><a href='https://www.delas.pt/morreu-mario-matos-ribeiro-um-dos-pais-da-modalisboa/atualidade/939330/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu Mário Matos Ribeiro, um dos “pais” da ModaLisboa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRqia_a3WFTCFkh8_9pRzv6trqqNq3Zvmbg5w1tqv1XZ6d1r_Y2cRUCtlbLpxx0rQtWPg9bHkwP" alt="Morreu Mário Matos Ribeiro, um dos “pais” da ModaLisboa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Falar sobre Mário Matos Ribeiro &quot;é falar do exímio, da transcendência, a procura permanente da perfeição”, recorda Eduarda Abbondanza, parceira na dupla&nbsp;...</p></div>
            </div>
        </a><a href='https://www.flash.pt/celebridades/nacional/detalhe/morreu-mario-matos-ribeiro-criador-e-um-dos-responsaveis-da-modalisboa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu Mário Matos Ribeiro, criador e um dos responsáveis da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTAWZ61B2sRrx3Vb7PFN43f2AtuGiGJUkdZ9043kji-jKFaEGQhxq1YDn7fhi49irqNFwiA8Kx5" alt="Morreu Mário Matos Ribeiro, criador e um dos responsáveis da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Morreu Mário Matos Ribeiro, criador de moda e um dos responsáveisl pela ModaLisboa, em parceria com Eduarda Abbondanza.</p></div>
            </div>
        </a>
        </Template></>;
}