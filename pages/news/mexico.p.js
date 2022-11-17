import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mexico</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mexico"/>
        <meta name="description" content="Trending News about Mexico" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mexico</h1>
            <Image width={800} height={500} src="https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/11/16/75189041-637554bbe526f.jpeg" alt="Mexico"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/esportes/rival-da-argentina-mexico-perde-para-suecia-no-ultimo-amistoso-antes-da-copa-do-mundo,2d1849d8dbfdc134fb7e459dd71abf15gxiac3lo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rival da Argentina, México perde para Suécia no último amistoso ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQjB6ndaDJEtnrrH7N4JIV5_4ZjBOPLMeaLmYsnPC5XSawEtiklwwEPLtBKfAsD14Rm3p6sQjUE" alt="Rival da Argentina, México perde para Suécia no último amistoso ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Selecionado mexicano não joga bem e é batido pelo time sueco, que não jogará o Mundial em 2022.</p></div>
            </div>
        </a><a href='https://www.gazetaesportiva.com/futebol/futebol-internacional/mexico-perde-da-suecia-em-ultimo-amistoso-antes-da-estreia-na-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>México perde da Suécia em último amistoso antes da estreia na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSnP0OU8s1OcxkyIhAgM00wy6WrjomIHMExpW_PggPG0jKUq3s8QNKW9HfUk19tSx-L5QLZ8ugE" alt="México perde da Suécia em último amistoso antes da estreia na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Assim, a seleção mexicana chega de sequência instável ao torneio mundial. Nos últimos cinco jogos de preparação para a competição, são três derrotas e duas&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/esporte/mexico-e-derrotado-por-2-a-1-pela-suecia-em-amistoso-antes-da-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>México é derrotado por 2 a 1 pela Suécia em amistoso antes da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvAKWeV36frG-1DHamKK8DHm33TuUTvtJZ_OrpmcqxKs6BPWc9-AfSX6uWNGS-EZ3owU1d9M_E" alt="México é derrotado por 2 a 1 pela Suécia em amistoso antes da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Svanberg restaurou a vantagem da Suécia aos 39 minutos, quando aproveitou um chute desviado e definiu a vitória. O atacante mexicano Raul Jimenez entrou no&nbsp;...</p></div>
            </div>
        </a><a href='https://www.oliberal.com/esportes/futebol/mexico-x-suecia-onde-assistir-ao-vivo-e-o-horario-do-jogo-amistoso-de-hoje-16-11-1.613411'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>México x Suécia: onde assistir ao vivo e o horário do jogo amistoso ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSc7kZ_-C6nJH66pMzSCPlVAsfkRPprRLPdBdUcn-1fgB0zAs-bSwBzVr9g1FbQZ_Jh1ntRiAZ7" alt="México x Suécia: onde assistir ao vivo e o horário do jogo amistoso ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>México e Suécia jogam nesta quarta-feira uma partida amistosa; veja onde assistir e o horário do jogo.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/2022/11/16/amistoso-internacional-mexico-suecia.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>México pressiona, mas é superado pela Suécia em último jogo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQl4QbFmJCvEmeuK2vbGqX8b_lSwpo6Vg_u0c3AvN2ZqfSy225Vc60pvdhN-gOGMZn0dhbIVJfc" alt="México pressiona, mas é superado pela Suécia em último jogo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os gols da partida foram marcados por Rohdén e Svanberg, pelo lado sueco, e por Vega, para os mexicanos. A menos de uma semana da sua estreia no torneio mundial&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ogol.com.br/news.php?id=421683'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antes da Copa do Mundo, México perde para a Suécia em amistoso ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTA1PFc2EH2Y3bq26Ewqqskj0XCoLbkliwklPANBuD9Esro87gNTqp-tSwHDzxrwmts3pU7j7Re" alt="Antes da Copa do Mundo, México perde para a Suécia em amistoso ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chegou pela primeira vez aos 5, quando Vaga tabelou com Martín, bateu da entrada da área e Nordfeldt defendeu para a Suécia. Os mexicanos voltaram a acertar o&nbsp;...</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/blogs/torcedor/2022/11/15121721-mexico-x-suecia-ao-vivo-veja-horario-e-onde-assistir-o-ultimo-amistoso-do-adversario-da-argentina-na-copa-do-mundo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MÉXICO X SUÉCIA AO VIVO: Veja horário e onde assistir o último ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSXoq7Dpmfhiw2K4ogE_m5w85VURy9yp0TyqzPG-xivlXAhNcmWBlPY8g87pPjbWcyKThzxc7PI" alt="MÉXICO X SUÉCIA AO VIVO: Veja horário e onde assistir o último ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>México faz último amistoso antes de estreia na Copa do Mundo.</p></div>
            </div>
        </a><a href='https://www.bnamericas.com/pt/noticias/mobile-360-latin-america-retorna-a-cidade-do-mexico-para-viajar-para-o-futuro-digital-da-regiao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mobile 360 Latin America retorna à Cidade do México para viajar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzIa2E3ps_zRBYvTp7wBO869Afz8ejisUcUiJdnUKLPxZVOsFFXk0iGzj-gbL0OwgKOmvGCvmU" alt="Mobile 360 Latin America retorna à Cidade do México para viajar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em seu retorno ao formato presencial, o evento organizado pela GSMA vai explorar os temas de Conectividade, Cloud &amp; Edge e Sociedades do Futuro.</p></div>
            </div>
        </a><a href='https://www.suinoculturaindustrial.com.br/imprensa/mexico-abre-mercado-para-carne-suina-brasileira/20221116-075232-k233'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>México abre mercado para carne suína brasileira</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQxoX0-uldHLSE72Aas5XlAxm0rk5GNLOzldlVx4DBWVZPdqXEAjPOGUH5TiZeD5VJ4U1sFK6C-" alt="México abre mercado para carne suína brasileira" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Associação Brasileira de Proteína Animal (ABPA) celebrou o anúncio feito hoje pelo Ministro da Agricultura, Pecuária e Abastecimento, Marcos Montes,&nbsp;...</p></div>
            </div>
        </a><a href='https://economiasc.com/2022/11/16/mexico-abre-mercado-para-carne-suina-produzida-em-sc/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>México abre mercado para carne suína produzida em SC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQf93Im_z6a0vt7s-7tp6_4sxyhYpCGqmMQ9rP8xcg2AF7V-u9STfLqyAAa6USn9EsOn6d6zhWS" alt="México abre mercado para carne suína produzida em SC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Governo do Estado comemorou a abertura do mercado mexicano para a carne suína catarinense. O anúncio foi feito pelo Ministério da Agricultura,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}