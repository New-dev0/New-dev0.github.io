import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mau tempo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mau tempo"/>
        <meta name="description" content="Trending News about Mau tempo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mau tempo</h1>
            <Image width={800} height={500} src="https://media-manager.noticiasaominuto.com/1280/naom_5a27e26ac158d.jpg" alt="Mau tempo"/>
            <h3>Recent News</h3>
            <a href='https://www.noticiasaominuto.com/pais/2113300/esta-de-visita-a-serra-da-estrela-saiba-que-ha-corte-de-estradas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mau tempo. &quot;Perigo de derrocada&quot; corta estrada entre Piornos e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQeUaC7jzeX90zeasDT-fmA4YUqoUwGuHmvxaX6DF-HhoNgkv5vCBuCis0RgEeNuyNH0gV2RsIY" alt="Mau tempo. &quot;Perigo de derrocada&quot; corta estrada entre Piornos e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A interdição de tráfego na EN338 &quot;permanecerá até que as condições meteorológicas estabilizem e permitam a reabertura deste troço&quot; rodoviário da serra da&nbsp;...</p></div>
            </div>
        </a><a href='https://24.sapo.pt/atualidade/artigos/mau-tempo-infraestruturas-de-portugal-adia-trabalhos-na-ponte-da-figueira-da-foz'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mau tempo: Infraestruturas de Portugal adia trabalhos na Ponte da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQU1s5_H4FcS9aTT4drpTDr9chTzg0SCbq8L8FQfqoizTNXhNHhHXKcWTKkkW7OFLJ733pbh8X2" alt="Mau tempo: Infraestruturas de Portugal adia trabalhos na Ponte da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Infraestrutura de Portugal (IP) adiou os trabalhos previstos para quarta e quinta-feira na Ponte Edgar Cardoso, na Figueira da Foz, devido às previsões de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/sociedade/estrada-en338-entre-piornos-e-manteigas-cortada-devido-ao-mau-tempo-15353522.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Estrada EN338 entre Piornos e Manteigas cortada devido ao mau ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJpwlbL41gumS4qlNds2KCQ-mYEiq86EdbDmsBxZAg1qlVauUlCmHzP8IE-2cg8d1Z0b5vWKCk" alt="Estrada EN338 entre Piornos e Manteigas cortada devido ao mau ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo a Infraestruturas de Portugal (IP) a interdição de tráfego na EN338 &quot;permanecerá até que as condições meteorológicas estabilizem e permitam a&nbsp;...</p></div>
            </div>
        </a><a href='https://radioboanova.sapo.pt/mau-tempo-perigo-de-derrocada-corta-estrada-entre-piornos-e-manteigas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mau tempo: &quot;Perigo de derrocada&quot; corta estrada entre Piornos e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Mau tempo: &quot;Perigo de derrocada&quot; corta estrada entre Piornos e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A EN338 está cortada ao trânsito esta terça-feira &quot;por prevenção&quot;, no troço entre Piornos e Manteigas, na serra da Estrela, devido ao mau tempo.</p></div>
            </div>
        </a><a href='https://jornaldascaldas.pt/2022/11/16/mau-tempo-fez-adornar-embarcacao-no-porto-de-pesca/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mau tempo fez adornar embarcação no porto de pesca - Jornal das ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTLxqTqXot8IZHEQqEpt2Um6Kq7FLCb1Zv4CxD1NLXuIiRivBy-2H2Cfn8p91s2vyIZtynK4-89" alt="Mau tempo fez adornar embarcação no porto de pesca - Jornal das ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Durante a manhã da passada terça-feira, devido às condições atmosféricas, com forte vento, precipitação e alguma agitação marítima no interior do porto de&nbsp;...</p></div>
            </div>
        </a><a href='https://portocanal.sapo.pt/noticia/314904'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mau tempo: Avenida da Boavista no Porto afetada pelas cheias ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS2q3cUPyxCC9ZHoKROXfrEIXRisuDjtWdBBYhTrkO_mhO1xMFG_y9g-C6wWUNlxU8OzBtpfqon" alt="Mau tempo: Avenida da Boavista no Porto afetada pelas cheias ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na manhã desta terça-feira, o distrito do Porto este sob a previsão de chuvas fortes e possibilidade de ocorrência de cheias e deslizamentos de terras para&nbsp;...</p></div>
            </div>
        </a><a href='https://radiocomercial.iol.pt/noticias/130246/en338-cortada-entre-piornos-e-manteigas-devido-ao-mau-tempo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EN338 cortada entre Piornos e Manteigas devido ao mau tempo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRwJaTb6o382Hfpw-DXBAXnrfRYv06wYAKXUySWXG3ejTIINJFlFQ1H44c-k-wJP4TMdw7vq2xD" alt="EN338 cortada entre Piornos e Manteigas devido ao mau tempo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A interdição de trânsito na EN338 vai permanecer até que as condições meteorológicas estabilizem.</p></div>
            </div>
        </a>
        </Template></>;
}