import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Portugal x Uruguai</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Portugal x Uruguai"/>
        <meta name="description" content="Trending News about Portugal x Uruguai" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Portugal x Uruguai</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/ks3XlHUKZi3P4pEsCdyKbMaHSWk=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/11161735.jpg" alt="Portugal x Uruguai"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/copa-do-mundo/noticia/2022/11/29/invasor-de-portugal-x-uruguai-e-liberado-apos-assinar-termo-e-elogia-policia-do-catar.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Invasor de Portugal x Uruguai é liberado após assinar termo e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRbMI_LmYScwWQUiRrPLrwQ4dTA_isVpU_ZYBwMHEq097C6H5dsZatudecugeLsS6eg3JvaTGNP" alt="Invasor de Portugal x Uruguai é liberado após assinar termo e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Italiano Mario Ferri, famoso por suas invasões de gramado, diz ter encontrado com presidente da Fifa, vai a mais jogos, mas não vai repetir atitude:&nbsp;...</p></div>
            </div>
        </a><a href='https://br.noticias.yahoo.com/invasor-de-portugal-x-uruguai-e-banido-da-copa-do-mundo-220907758.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Invasor de Portugal x Uruguai é banido da Copa do Mundo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS3aXy3SwVASHnAB6IibvIV0IDfBYPhJ7OaTGdUMVUmVRbq541RoZFsxgfeaiXyg-soOVBzg2ax" alt="Invasor de Portugal x Uruguai é banido da Copa do Mundo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Italiano Mario Ferri, invasor da partida da última segunda-feira, foi banido pela FIFA.</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/esporte/2022/11/homem-que-invadiu-campo-no-qatar-fez-o-mesmo-no-brasil-2014-ele-foi-liberado.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Invasor de campo em Portugal x Uruguai, no Qatar, fez o mesmo no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTHEW2hlQ3PH5Mm83s47RhR-uuNv6UZuUtrQ9E8ojtMNtCuONlxgt1Ka1ellxAiwORa44QQdpvs" alt="Invasor de campo em Portugal x Uruguai, no Qatar, fez o mesmo no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Após uma breve detenção&#39;, segundo autoridades, homem foi solto &#39;sem consequências&#39;</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/copa-do-mundo/2022/11/29/torcedor-invadiu-campo-copa-liberado.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Homem que invadiu campo em Portugal x Uruguai é liberado e se ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRohLL4d4ZgLPGY2LKC25t3kEailHhGmjrFx_es_SsxEQNRvRp_AegRYFYk-FxeGVlUaifAnRfj" alt="Homem que invadiu campo em Portugal x Uruguai é liberado e se ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo o jornalista Fabrizio Romano, o torcedor que manifestou a favor da causa LGBTQIA+ na Copa do Mundo do Qatar foi liberado; entenda.</p></div>
            </div>
        </a><a href='https://www.espn.com.br/futebol/copa-do-mundo/artigo/_/id/11298432/torcedor-invadiu-campo-durante-portugal-x-uruguai-tem-visto-cancelado-banido-jogos-restantes-copa-mundo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Torcedor que invadiu campo durante Portugal x Uruguai tem visto ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTx5gmhDHf47Yqoni49So7jnAaude-lsKlZk9VUMJDuZjwxkgNUImq0e3xKa_jwGHYQoJNnTAvP" alt="Torcedor que invadiu campo durante Portugal x Uruguai tem visto ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em comunicado, a Organização do Mundial do Qatar informou que ele teve seu Hayya Card (espécie de visto de entrada) cancelado, tendo sido banido das partidas&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lance.com.br/fora-de-campo/o-que-aconteceu-com-homem-que-invadiu-campo-com-bandeira-lgbtqia-no-qatar.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O que aconteceu com homem que invadiu campo com bandeira ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR6qJkCF_O2KnAk0honqvqpoZe4qTnl_wb4oqJcBZwnjQ_wZ4IuRFtuTNOq4lBxr2telwS9kJVb" alt="O que aconteceu com homem que invadiu campo com bandeira ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Foi o primeiro caso desta edição da Copa do Mundo, que aconteceu no Estádio Lusail, na partida entre Portugal e Uruguai.</p></div>
            </div>
        </a>
        </Template></>;
}