import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vila Nova</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vila Nova"/>
        <meta name="description" content="Trending News about Vila Nova" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vila Nova</h1>
            <Image width={800} height={500} src="https://s3.glbimg.com/v1/AUTH_378ee63fe83141e69caddd838034e850/static/preview-share-min.png" alt="Vila Nova"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/go/futebol/copa-verde/jogo/19-11-2022/vila-nova-paysandu.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogo Vila Nova 1 x 1 Paysandu melhores momentos - Copa Verde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQPDNTg4o40UImgagqTQqvHIzWeSAcn3Zo4nsOKtJt8vOWr2208z7ETYWjiSaLw4HqSfhhenp1U" alt="Jogo Vila Nova 1 x 1 Paysandu melhores momentos - Copa Verde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saiba tudo sobre o jogo Vila Nova 1 x 1 Paysandu (Copa Verde, Final): placar, escalação, fotos, gols e lances da partida.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/blogs/torcedor/2022/11/15124122-resultado-do-jogo-do-vila-nova-e-paysandu-saiba-quem-e-o-campeao-da-copa-verde.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RESULTADO DO JOGO DO VILA NOVA E PAYSANDU: Saiba quem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4mEvHDMGItt-Ph2mHrP6YuIgWLB5WyvAb3iTmKdWgQtLghzMdQuOvj2D_0mhqJPvLmE5-53UV" alt="RESULTADO DO JOGO DO VILA NOVA E PAYSANDU: Saiba quem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vila Nova x Paysandu disputaram neste sábado a grande final da Copa Verde 2022.</p></div>
            </div>
        </a><a href='https://www.oliberal.com/esportes/paysandu/paysandu-bate-vila-nova-go-nos-penaltis-e-conquista-o-tricampeonato-da-copa-verde-1.614825'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paysandu bate Vila Nova-GO nos pênaltis e conquista o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQVIG5KyGEylxIw33q-nOhIXeK8TUFl7y0g9HQAQSeqjZG6K1aj7Q2RBeExLBpUw_xGuh1aLl5s" alt="Paysandu bate Vila Nova-GO nos pênaltis e conquista o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Papão saiu perdendo, mas empatou no último minuto do tempo regulamentar. Nos pênaltis, Patrick Brey garantiu mais um título regional para o Bicola.</p></div>
            </div>
        </a><a href='https://www.gazetaesportiva.com/campeonatos/copa-verde/paysandu-empata-no-apagar-das-luzes-leva-decisao-com-o-vila-nova-para-os-penaltis-e-conquista-o-titulo-da-copa-verde/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paysandu empata no apagar das luzes, leva decisão com o Vila ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRF_y12GB9wK1ni5iWsMQxY8d5sdmjnqdY2ZoOGzGqgdpu_OHDl64Zknm4BlGeYIdghDD3p42lc" alt="Paysandu empata no apagar das luzes, leva decisão com o Vila ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na noite deste sábado, Vila Nova e Paysandu realizaram a segunda partida da final da Copa Verde de 2022, no Serra Dourada, em Goiânia (GO). Com gol de.</p></div>
            </div>
        </a><a href='https://sagresonline.com.br/ao-vivo-vila-nova-decide-a-copa-verde-contra-o-paysandu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AO VIVO | Vila Nova decide a Copa Verde contra o Paysandu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRB4cUM-fujRPWi1xs2fMqVc6oUBJ3t3opyqb8ZD5rNKdPQt35NkeLNux3WdMS2DFedr9uenIhj" alt="AO VIVO | Vila Nova decide a Copa Verde contra o Paysandu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na noite deste sábado (19), a partir das 19h, o Vila Nova realiza o último jogo da temporada de 2022 do futebol brasileiro. No estádio Serra Dourada,&nbsp;...</p></div>
            </div>
        </a><a href='https://interior.ne10.uol.com.br/esportes/2022/11/15123941-transmissao-vila-nova-x-paysandu-ao-vivo-hoje-qual-canal-vai-passar-vila-nova-x-paysandu-pela-copa-verde-vai-passar-no-dazn-confira.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TRANSMISSÃO VILA NOVA X PAYSANDU AO VIVO HOJE: Qual ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-dc3c7Kx_OgUI5sIOYq24hQbYKJQwQ1XLL1YPrL80KXmf9WzEiwkKBisuaoq-80Wvo1PWSOqG" alt="TRANSMISSÃO VILA NOVA X PAYSANDU AO VIVO HOJE: Qual ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vila Nova e Paysandu fazem, na noite deste sábado (19), o jogo de volta da final da Copa Verde 2022. A partida entre Tigre e Papão será disputada no estádio&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/sc/futebol/times/camboriu/noticia/2022/11/19/camboriu-anuncia-higo-magalhaes-ex-vila-nova-como-novo-treinador-para-2023.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Camboriú anuncia Higo Magalhães, ex-Vila Nova, como novo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQsoiqks9bA7OjrokcYQj1GoO6BnrFg1BX2jXfcjwobgldl2enAVAs1dzybwDYOn7m60MTzFJJs" alt="Camboriú anuncia Higo Magalhães, ex-Vila Nova, como novo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois de fazer sua melhor campanha na história do Campeonato Catarinense, o vice-campeonato para o Brusque em 2022, a Cambura vai disputar a Copa do Brasil, a&nbsp;...</p></div>
            </div>
        </a><a href='https://sagresonline.com.br/ele-fica-vila-nova-registra-renovacao-de-contrato-de-allan-aal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ele fica! Vila Nova registra renovação de contrato de Allan Aal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcShpE4Gm9Tgjwy1AIncWQkf47Idemf7-mfsFx8Z6TKiUqek3MLHI72P7obWwllkvEvdlgq66iaM" alt="Ele fica! Vila Nova registra renovação de contrato de Allan Aal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O novo contrato com o treinador foi publicado nesta sexta-feira (18) no boletim diário da Confederação Brasileira de Futebol (CBF), com vínculo até o final&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}