import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Manchester United</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Manchester United"/>
        <meta name="description" content="Trending News about Manchester United" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Manchester United</h1>
            <Image width={800} height={500} src="https://cdn.record.pt/images/2022-11/img_1200x676$2022_11_22_20_03_51_2065414.png" alt="Manchester United"/>
            <h3>Recent News</h3>
            <a href='https://www.record.pt/internacional/paises/inglaterra/man--united/detalhe/todas-as-reacoes-a-saida-de-cristiano-ronaldo-do-manchester-united-em-direto'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Ten Hag também queria que tudo acabasse assim»: Todas as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQNOis1O3CKK3M_AZR2BsV1JlSSwcQAlW3J-wsXMh3RrpL22GM5MM3CIk9xfAQ2Ftfa3NNy5vlJ" alt="«Ten Hag também queria que tudo acabasse assim»: Todas as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Paul Scholes, ex-internacional inglês e médio do Manchester United, arrasou por completo o antigo companheiro de equipa Cristiano Ronaldo após a saída do astro&nbsp;...</p></div>
            </div>
        </a><a href='https://www.acorianooriental.pt/noticia/cristiano-ronaldo-deixa-manchester-united-com-efeitos-imediatos-e-apos-acordo-344866'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo deixa Manchester United &quot;com efeitos imediatos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSfCI9aNjxVVzGMTSOQ67GYydxn65yinfQWn89AiUmZBN8Yg3zbkBpgIBUH2qpRIaQwXa7farj0" alt="Cristiano Ronaldo deixa Manchester United &quot;com efeitos imediatos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O clube agradece-lhe a sua imensa contribuição ao longo de duas passagens por Old Trafford, com 145 golos em 346 jogos, e deseja-lhe, e à sua família, tudo de&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/22/donos-do-manchester-united-estudam-venda-de-clube/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donos do Manchester United estudam venda de clube</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQEb4w5lucVPwO7oSYp3NGYZyejuvalnT_yVR0ubY4N2g0zEw0WtGgzNGaB2rIWT8rN-LlRgMVJ" alt="Donos do Manchester United estudam venda de clube" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A família Glazer, atual proprietária, quer explorar novos investimentos. A notícia já foi confirmada pelo clube inglês num comunicado de imprensa esta&nbsp;...</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/22/desporto/noticia/manchester-united-confirma-saida-cristiano-ronaldo-2028752'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United anuncia saída de Cristiano Ronaldo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSMuXK2WXDMo8Nux7t1Y09xSJ9kCzzIXN4S63CXEFQA1eDerxZtgEXAqw4l7KFFXn30ubtlY2RC" alt="Manchester United anuncia saída de Cristiano Ronaldo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Clube agradece “imensa contribuição” de Cristiano Ronaldo. Jogador diz que é a “altura certa para procurar um novo desafio”.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-22/oficial-man-united-anuncia-rescisao-com-ronaldo/965713'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oficial: Man. United anuncia rescisão com Ronaldo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT9AkPQ0umHYdZIBuCH784oemRm6pDhU1e2Ao_m38m5UfElj64FcZKhXI1BSrgJrL8FqSn7x1nu" alt="Oficial: Man. United anuncia rescisão com Ronaldo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Manchester United confirmou, em comunicado oficial, a rescisão de contrato «por mútuo acordo» com Cristiano Ronaldo. A decisão do clube inglês surge dias&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jornaldenegocios.pt/empresas/desporto/detalhe/divorcio-de-cristiano-ronaldo-e-manchester-united-ja-e-oficial'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Divórcio de Cristiano Ronaldo e Manchester United já é oficial</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQhvWzHRsASToOLHV2Amg9Vl-NyyiMLdsPpZ9Vnnw0PksLG3CpFXyPvSlqPdLVQIuZlFlYJVqiD" alt="Divórcio de Cristiano Ronaldo e Manchester United já é oficial" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo já não é jogador do Manchester United. Jogador e clube chegaram a acordo para a rescisão por mútuo acordo.</p></div>
            </div>
        </a>
        </Template></>;
}