import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jose Saramago</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jose Saramago"/>
        <meta name="description" content="Trending News about Jose Saramago" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jose Saramago</h1>
            <Image width={800} height={500} src="https://images.trustinnews.pt/uploads/sites/5/2022/11/221115_saramago-em-tres-momentos_visao-junior.png" alt="Jose Saramago"/>
            <h3>Recent News</h3>
            <a href='https://visao.sapo.pt/visaojunior/noticias/2022-11-15-jose-saramago-faz-100-anos-que-o-escritor-nasceu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>José Saramago: faz 100 anos que o escritor nasceu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQQfGWD0lmOQ532gxUdW-XO_d_Kh4jIPYpJahgASocPYihPEh4uZrM6LTkQZSu-uHHsJSN5iQa9Qg" alt="José Saramago: faz 100 anos que o escritor nasceu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No dia 16 de novembro de 1922, nasceu na Azinhaga, no Ribatejo, um menino chamado José. Recebeu como presente o seu primeiro livro aos 12 anos,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/15/culturaipsilon/prepublicacao/leia-inicio-viuva-aviso-jose-saramago-2027446'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leia o início de &lt;i&gt;A Viúva&lt;/i&gt; e o aviso de José Saramago</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT5kPEjr-Tnq5S3_1sT6TEeVxpUdzr1QgzLWz4vs6UzHiL4f_36oS_bU7Ut7Liak0hnzub047nV" alt="Leia o início de &lt;i&gt;A Viúva&lt;/i&gt; e o aviso de José Saramago" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Terra do Pecado sai em 1947, mas não era esse o título do manuscrito. Era A Viúva, mas o editor mudou o título. A Porto Editora lança a história de Maria&nbsp;...</p></div>
            </div>
        </a><a href='https://media.rtp.pt/extra/eventos/100-anos-de-jose-saramago/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>100 Anos de José Saramago | Extra | RTP</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS7KhBmyBs41Evp0pJ8djWyze-dTLz9clcF9EuIfDYTFofq8XOgRXCyGo1luRpiGJvDS00KTrcz" alt="100 Anos de José Saramago | Extra | RTP" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A partir das 09h40, na Antena 1, vamos estar em direto da Azinhaga do Ribatejo, local onde nasceu José Saramago, com Pedro Miguel Ribeiro. Contaremos histórias,&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/especiais/o-que-aprendi-com-jose-saramago-nos-cem-anos-do-nobel-11-escritores-respondem-e-escolhem-os-livros-favoritos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;O que aprendi com José Saramago?&quot; Nos cem anos do Nobel, 11 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ2m3ZPQPoBMjPixp66v_eVm8OG4lB0lH3RiCdSRQr2qEw4cps5MLfiTScjwUuK-AG20bMo0inQ" alt="&quot;O que aprendi com José Saramago?&quot; Nos cem anos do Nobel, 11 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A propósito do centenário do Nobel da Literatura português, quisemos saber qual o legado que deixou entre gerações diferentes e quais as obras que se&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/edicao-do-dia/16-nov-2022/e-se-mais-mundo-houvesse-la-chegaria-saramago-15355992.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>E se mais mundo houvesse lá chegaria Saramago</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS_U2tOEGC3guBntPFO5Mb7RFHVLKsxRbfVm1maD5UfFLpmmoyuQvdcyXw_fjTU3ZT_E-va5U4Z" alt="E se mais mundo houvesse lá chegaria Saramago" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Único Nobel da Literatura em língua portuguesa, o escritor nasceu faz hoje um século, na aldeia ribatejana de Azinhaga. Doze anos após a sua morte,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/cultura/levantado-do-chao-foi-o-primeiro-grande-romance-de-jose-saramago_v1447231'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Levantado do chão&quot; foi o primeiro grande romance de José ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLuZkCdDCJQmUTru0vuPnMNJmvH0FmOp4HuOCNNAscaoLmGQ4lBlGjrvIoYWAiWxkPc5wZl1vE" alt="&quot;Levantado do chão&quot; foi o primeiro grande romance de José ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A primeira grande obra literária de José Saramago, &quot;Levantado do Chão&quot;, relata a vida dos trabalhadores rurais no tempo da ditadura no Alentejo.</p></div>
            </div>
        </a><a href='https://www.jornaldoave.pt/biblioteca-municipal-assinala-centenario-de-jose-saramago-com-teatro-e-concerto/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BIBLIOTECA MUNICIPAL ASSINALA CENTENÁRIO DE JOSÉ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_spDT91Zz7ew3_hoD26GHJDpgg2C0xold3fkN9yPIqFX1NYDo_sE2SlRnot7nXEybShsZ9Txk" alt="BIBLIOTECA MUNICIPAL ASSINALA CENTENÁRIO DE JOSÉ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Biblioteca Municipal de Santo Tirso dedica a programação do mês de novembro a José Saramago. Teatro, concertos e sugestões de leitura assinalam o mês de&nbsp;...</p></div>
            </div>
        </a><a href='https://omirante.pt/centenario-de-jose-saramago-o-mirante/2022-11-15-Jose-Saramago-e-os-Poemas-Possiveis-3f6b0366'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>José Saramago e os Poemas Possíveis</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSCGCaTDLIYdQk6vWrs00j-kEBYmNeNBbfnsP9y7xyyMBvaTtmUBZ-i81RTzQLhgpJ0ecwLXJBr" alt="José Saramago e os Poemas Possíveis" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Até 16 de novembro, data do centenário de nascimento do prémio Nobel da Literatura, O MIRANTE vai publicar poemas de José Saramago do livro Os Poemas&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cinema7arte.com/jose-e-pilar-regressa-aos-cinemas-para-o-centenario-de-saramago/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“José e Pilar” regressa aos cinemas para comemorar centenário de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQXGT_IHW_JKHuunbORG05X50l8jL2pX9GIJ6oDMwyoXPBUlJ9tD9Iw_ETcvKgO4xc0nvhM6Pl8" alt="“José e Pilar” regressa aos cinemas para comemorar centenário de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“José e Pilar”, um retrato intimista da vida do escritor José Saramago e da sua mulher, Pilar Del Rio, foi um dos filmes portugueses mais vistos de 2010 e foi&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}