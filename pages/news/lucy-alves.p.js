import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lucy Alves</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lucy Alves"/>
        <meta name="description" content="Trending News about Lucy Alves" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lucy Alves</h1>
            <Image width={800} height={500} src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/10/18/615x300/1_brisa_e_vivida_por_lucy_alves_em_travessia-21897554.jpg" alt="Lucy Alves"/>
            <h3>Recent News</h3>
            <a href='https://jc.ne10.uol.com.br/cultura/2022/11/15122488-namorada-de-lucy-alves-saiba-quem-e-a-namorada-da-atriz-de-travessia.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NAMORADA DE LUCY ALVES: Saiba quem é a namorada da atriz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRYBB60TEJ8KbOZJGFjNbL6083SMpwiGT5JjbXwpnLajZBSe_THoWmCgh0oBp9w6MC_XfN3oGaR" alt="NAMORADA DE LUCY ALVES: Saiba quem é a namorada da atriz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lucy Alves, que vive a protagonista Brisa, da novela &quot;Travessia&quot;, namora com produtora de TV e cinema.</p></div>
            </div>
        </a>
        </Template></>;
}