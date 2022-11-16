import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Manifestação</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Manifestação"/>
        <meta name="description" content="Trending News about Manifestação" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Manifestação</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/B6SJfDsrJA-NnsCKU2OIv2_b77o=/1200x/smart/filters:cover():strip_icc()/s03.video.glbimg.com/x720/11128578.jpg" alt="Manifestação"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/politica/noticia/2022/11/15/bolsonaristas-radicais-fazem-manifestacao-com-intencoes-golpistas-no-feriado-de-15-de-novembro.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bolsonaristas radicais fazem manifestação com intenções golpistas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTVQGoYUm5kV_mUfKcrz2Otldw6YokZoVlkOrs3fLViaIwnrANm_DpQ3Rcw56wQleLJcoW4YXBF" alt="Bolsonaristas radicais fazem manifestação com intenções golpistas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ele venceu Jair Bolsonaro (PL), atual presidente e que disputava a reeleição. O presidente do Tribunal Superior Eleitoral (TSE), Alexandre de Moraes, afirmou&nbsp;...</p></div>
            </div>
        </a><a href='https://revistaoeste.com/brasil/as-manifestacoes-em-sao-paulo-contra-lula-em-imagens/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>As manifestações em São Paulo contra Lula em imagens</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQalycsdR4nLVAs_REqF2x74nidPkWc3H6vIiVgVqa9b_pzaf2U1UOobJYmdj5hYaasgrlpEJ4I" alt="As manifestações em São Paulo contra Lula em imagens" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em São Paulo, maior cidade do país, os manifestantes reuniram-se nos arreadores do Comando Militar do Sudeste, no bairro Paraíso, zona sul da capital. Confira&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/politica/manifestantes-protestam-contra-eleicao-de-lula/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manifestantes protestam pelo país contra eleição de Lula</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRAL06RSAR5iOh9M87k-33iVLkuvlMmyiAzDvCQdNaeZoLGvKdGpaEmVi8qt2mjfIvWv6YuqSfh" alt="Manifestantes protestam pelo país contra eleição de Lula" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A manifestação é pacífica e ocorre próximo ao Parque do Ibirapuera e à Assembleia Legislativa de São Paulo (Alesp), próximo ao Comando Militar do Sudeste do&nbsp;...</p></div>
            </div>
        </a><a href='https://noticias.r7.com/brasilia/feriado-e-marcado-por-manifestacoes-em-brasilia-veja-imagens-15112022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Feriado é marcado por manifestações em Brasília; veja imagens</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR1j8v5pQhl02MCcswqQ2B3MFycOpX_jC3UkLuYMIcRdvCZVYVgDTO6qGewqUsqKuaRnEkjdPKs" alt="Feriado é marcado por manifestações em Brasília; veja imagens" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apoiadores do presidente da República, Jair Bolsonaro (PL), se reuniram no QG do Exército contra o resultado das eleições.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/colunas/jamildo/2022/11/15121168-manifestantes-seguem-na-frente-de-quarteis-nesse-feriado-da-republica-confira.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MANIFESTANTES seguem na frente de quartéis nesse FERIADO da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTLgqqS1mMpH2JosrzdZoCLikRLEU3FrZ5OXwMgkSfnkffFpXS2CIkKSLxKwlwhzQbH13GfUWNb" alt="MANIFESTANTES seguem na frente de quartéis nesse FERIADO da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As manifestações antidemocráticas estão desde o dia 30 de outubro nas ruas, quando houve a derrota de Jair Bolsonaro (PL) nas urnas.</p></div>
            </div>
        </a><a href='https://www.otempo.com.br/politica/populares-pedem-que-forcas-armadas-salvem-o-brasil-durante-manifestacao-em-bh-1.2766589'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Populares pedem que Forças Armadas &#39;salvem o Brasil&#39; durante ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTJYq3nz9AcH6Hj4qyLfZ6usdGvfN9sA0J1s1SiERltFZbXFuv0bebWOh2rTrZzodpbPre5zLjD" alt="Populares pedem que Forças Armadas &#39;salvem o Brasil&#39; durante ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com uso de expressões como “supremo é o povo” como uma forma de criticar o Supremo Tribunal Federal (STF), os presentes tentam não bloquear o trânsito no local,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}