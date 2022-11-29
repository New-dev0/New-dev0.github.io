import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cyber Monday</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cyber Monday"/>
        <meta name="description" content="Trending News about Cyber Monday" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cyber Monday</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/noticias/05/2022/11/28/cyber-monday-1669636416499_v2_900x506.jpg" alt="Cyber Monday"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/tilt/ao-vivo/2022/11/28/cyber-monday-2022-melhores-descontos-promocao-iphone-air-fryer-celular.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cyber Monday: selecionamos promoções imperdíveis de hoje (28/11)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSbq8zpbzSbNEGgiQ2LvinbvbIpEZZsTjF8anYCBn72aw4tC89o03vkZkFZ1Wd9eBSrcVMBqQ8v" alt="Cyber Monday: selecionamos promoções imperdíveis de hoje (28/11)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O MacBook Air com M1 é uma das opções de notebook da Apple no mercado. Equipado com tela de 13 polegadas e design fino, o laptop se beneficia da adoção do&nbsp;...</p></div>
            </div>
        </a><a href='https://valor.globo.com/empresas/noticia/2022/11/28/copa-do-mundo-e-cenario-economico-tiram-foco-da-cyber-monday.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa do Mundo e cenário econômico tiram foco da Cyber Monday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQ7mWr4uwhn-EO2xtHuiN9B6vzl0qP5e04XvPmu2fH9DMbHz0KWc-_J2VAUlO6RIUj1j3sdLXg" alt="Copa do Mundo e cenário econômico tiram foco da Cyber Monday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Voltada a descontos para eletroeletrônicos, a segunda-feira seguinte à Black Friday vem em segundo plano neste ano; retorno dos fabricantes é de que o&nbsp;...</p></div>
            </div>
        </a><a href='https://exame.com/negocios/cyber-monday-confira-11-produtos-que-estao-com-desconto-pos-black-friday/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cyber Monday: confira 11 produtos que estão com desconto pós ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQnGgdPdwKC98VsWBfDHz443HTw4olcLa16Cf-BrjcqwkYRq9IjcR5cMaM6pk2crIB2wzgGtZI8" alt="Cyber Monday: confira 11 produtos que estão com desconto pós ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Cyber ​​Monday é o evento que começa após a Black Friday, em que são oferecidos descontos semelhantes.</p></div>
            </div>
        </a><a href='https://valor.globo.com/empresas/noticia/2022/11/28/shopify-pode-ser-o-maior-vencedor-da-cyber-monday.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shopify pode ser o maior vencedor da Cyber Monday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQnnEFpCIHI_kHBJJz_N0UirmxJ5o7cC0NejweyQRiZ6lKUgSbyZbE3da5B7VOKy2Q72I2tzuSA" alt="Shopify pode ser o maior vencedor da Cyber Monday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Empresa de software de comércio eletrônico disse no sábado que seus comerciantes quebraram recordes da Black Friday com US$ 3,36 bilhões em vendas ao redor&nbsp;...</p></div>
            </div>
        </a><a href='https://www.techtudo.com.br/noticias/2022/11/cyber-monday-2022-quatro-eletronicos-que-podem-ficar-mais-baratos-hoje-bf2022.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cyber Monday 2022: quatro eletrônicos que podem ficar mais ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSmRS7RTh_O8GHGu0sCZZVKBc-ufAfzttkX7RYDnwcV1c13kBYNJBXBuz-d8tvDXedghHdOZXXK" alt="Cyber Monday 2022: quatro eletrônicos que podem ficar mais ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cyber Monday 2022 acontece hoje e promete trazer as últimas promoções da Black Friday; veja produtos que podem ter queda de preço.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/especiais/black-friday/como-aproveitar-o-estoque-da-black-friday-na-cyber-monday,63a14d2fc98b5eca376bc3af6909a2bdzot36sw4.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Como aproveitar o estoque da Black Friday na Cyber Monday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTi1fjthNqbemYWIz3XJdoZ5I2MfKheGh2Ab1YPrLuNW66C7drS_Zdo32kaKhpHKlmfLlhYSwbV" alt="Como aproveitar o estoque da Black Friday na Cyber Monday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De acordo com uma pesquisa realizada pela Neotrust, em parceria com a Compre&amp;Confie, o faturamento com as vendas da Cyber Monday em 2021 foi de R$ 827,4 milhões&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moneytimes.com.br/cyber-monday-confira-as-principais-promocoes-e-descontos-desta-segunda-feira/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cyber Monday: Confira as principais promoções e descontos desta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJsAx5Ve_DrPgOT2bHGByr3wV2CZGa-JqlOva-bGrIYbj3tV_Be-qxpVnIxE4NXCK04i76MVlw" alt="Cyber Monday: Confira as principais promoções e descontos desta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta segunda-feira, os consumidores podem aproveitar a Cyber Monday para aproveitar condições especiais de compra. Saiba mais.</p></div>
            </div>
        </a><a href='https://br.investing.com/analysis/cyber-monday-vencedores-de-longo-prazo-para-apostar-em-uma-recuperacao-do-setor-de-tecnologia-200453535'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cyber Monday: Vencedores de longo prazo para apostar em uma ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQT89tjUzVgZRQEN5TKCCXD9ZEoxwSiscMzgbYpJAScVJBxswKUUDu53oLuXvchiiKXtn-WnSY" alt="Cyber Monday: Vencedores de longo prazo para apostar em uma ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Análises de Ações por Daniel Shvartsman abrangendo: Microsoft Corporation, Adobe Systems Incorporated, VMware Inc, Broadcom Inc. Leia as Análises de Ações&nbsp;...</p></div>
            </div>
        </a><a href='https://passageirodeprimeira.com/ihg-cyber-monday-ganhe-ate-10-mil-pontos-bonus-a-cada-duas-diarias/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IHG Cyber Monday! Ganhe até 10 mil pontos bônus a cada duas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQfjSo6CEZl0IHKPdAJQtKr085QdDZTMPvKP8msdqKrza3l8Mqg83UsbgJmAJKd-JxVE07KwJi-" alt="IHG Cyber Monday! Ganhe até 10 mil pontos bônus a cada duas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O IHG One Rewards está oferecendo 10.000 pontos bônus a cada duas diárias em seus hotéis. Saiba como aproveitar!</p></div>
            </div>
        </a>
        </Template></>;
}