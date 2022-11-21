import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fifa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fifa"/>
        <meta name="description" content="Trending News about Fifa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fifa</h1>
            <Image width={800} height={500} src="https://extra.globo.com/incoming/25611978-90e-83f/w976h550-PROP/kane-bracadeira.png" alt="Fifa"/>
            <h3>Recent News</h3>
            <a href='https://extra.globo.com/esporte/fifa-proibe-harry-kane-de-usar-bracadeira-em-apoio-comunidade-lgbqtia-na-copa-diz-jornal-25611965.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fifa proíbe Harry Kane de usar a braçadeira em apoio a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTE_FtbptXqOimsyCqJii-gGAWMJGnRRONIOinW22UiTNtyMrLdyG5_sh88NtmlfPRxZ2bIXnct" alt="Fifa proíbe Harry Kane de usar a braçadeira em apoio a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De acordo com o jornal The Telegraph, a queda de braço entre a Fifa e a FA, federação inglesa de futebol, pendeu para o lado da organização internacional.</p></div>
            </div>
        </a><a href='https://www.espn.com.br/futebol/copa-do-mundo/artigo/_/id/11253710/kane-ignora-fifa-decide-utilizar-bracadeira-com-cores-arco-iris-copa-do-mundo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kane ignora Fifa e decide utilizar braçadeira com as cores do arco ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQREkv24i-1_ZV5YgshTBok2UEpWTahUIK5ASjmWke1U4UTiivwC3wZ4SGPomPnpLA0HLRwiNLt" alt="Kane ignora Fifa e decide utilizar braçadeira com as cores do arco ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Inglaterra estreia no Mundial do Qatar contra o Irã nesta segunda-feira (21), às 10h (de Brasília)</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/copa-do-mundo/noticia/2022/11/20/fifa-fatura-r-40-bilhoes-com-copa-do-mundo-do-catar.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fifa fatura R$ 40 bilhões com Copa do Mundo do Catar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-JhYxglHkC4PiktXuYxBnKhfhBTPF59H7pKTgM0sVmicNYkGoGXvPkQi83n4yvU8dDc5wFUpG" alt="Fifa fatura R$ 40 bilhões com Copa do Mundo do Catar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Entidade fecha o ciclo entre os Mundiais de 2018 e 2022 com lucro de R$ 5,4 bilhões; cotas de patrocínio para a edição atual são todas vendidas.</p></div>
            </div>
        </a><a href='https://www.poder360.com.br/esportes/fifa-teve-r-40-bilhoes-em-receitas-para-copa-do-qatar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fifa teve R$ 40 bilhões em receitas para Copa do Qatar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQi-dYAWYrcgR8O67j_3yJnOni7_sPgIkCtv-9SJ4xGvy4dbd6PVhdPeYX9DzrBR1p5a2zqfBPn" alt="Fifa teve R$ 40 bilhões em receitas para Copa do Qatar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Faturamento envolve ciclo de 4 anos e é maior do que o arrecadado com a Copa da Rússia, em 2018. Leia no Poder360.</p></div>
            </div>
        </a><a href='https://www.gazetaesportiva.com/copa-do-mundo/fifa-anuncia-que-quase-tres-milhoes-de-ingressos-ja-foram-vendidos-para-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fifa anuncia que quase três milhões de ingressos já foram vendidos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT1_HlhHjg1O7QR4SV0vcCYtjRrZO2q0DshpdqO1vNtNPj0-j5PKyAB015_RdAX5wTL7xle4qkn" alt="Fifa anuncia que quase três milhões de ingressos já foram vendidos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Fifa anunciou, neste domingo (20), que quase três milhões de ingressos para a Copa do Mundo do Catar foram vendidos até o momento, e revelou que o.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/ultimas-noticias/enm/2022/11/20/fifa-proibe-harry-kane-de-usar-a-bracadeira-da-comunidade-lgbqtia-na-copa.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fifa proíbe Harry Kane de usar a braçadeira da comunidade ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlE-zeaR1FmXG6P2KYa3esEZtegNm0ohP3wEEzVHDY7qWnAcHkVsk2zpzQUISoCqdaOijak5VQ" alt="Fifa proíbe Harry Kane de usar a braçadeira da comunidade ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neste domingo (20), houve um encontro entre representantes da Fifa e da Seleção Inglesa, sobre o uso ou não de símbolos políticos não aprovados pela&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lance.com.br/lancebiz/fifa-anuncia-receita-de-r-40-bilhoes-no-ciclo-da-copa-do-mundo-do-qatar.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fifa anuncia receita de R$ 40 bilhões no ciclo da Copa do Mundo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTdTvT9hFBdbNEhNXMnXIeUE_q9V50k8-VlTL304KYFCBeLv6Jz2qQlW7mm18-i2j4WQiktiMZY" alt="Fifa anuncia receita de R$ 40 bilhões no ciclo da Copa do Mundo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Entidade supera expectativas e fecha o ciclo 2019-22 com lucro de R$ 5,4 bilhões.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/futebol/ativistas-fazem-protesto-relampago-usando-faixa-fifa-mata-em-ponte-de-paris,e547d7b7a6b426e515befe7b5170a9e60h8zaj69.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ativistas fazem protesto relâmpago usando faixa &#39;Fifa mata&#39; em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Ativistas fazem protesto relâmpago usando faixa &#39;Fifa mata&#39; em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Coletivo francês &quot;Les Dégommeuses&quot; questiona entidade máxima do futebol sobre os 6500 imigrantes que morreram durante a construção dos estádios e&nbsp;...</p></div>
            </div>
        </a><a href='https://www.metropoles.com/esportes/futebol/fifa-proibe-uso-de-bracadeira-em-apoio-a-comunidade-lgbti-na-copa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fifa proíbe uso de braçadeira em apoio à comunidade LGBTI+ na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRcBwSeIe1RnHwy8PVF4p4rK9Z44k6GA7qbeZ-0cjNaZmt5DTyibidKOe_7ePrIikMMala-IpNy" alt="Fifa proíbe uso de braçadeira em apoio à comunidade LGBTI+ na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O capitão da Inglaterra, Harry Kane, tem usado a braçadeira em apoio às pessoas LGBTI+ e deve manter o gesto mesmo com proibição.</p></div>
            </div>
        </a><a href='https://www.lance.com.br/fora-de-campo/ativistas-penduram-bandeiras-com-mensagem-fifa-mata-em-ponte-de-paris.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ativistas penduram bandeiras com mensagem &#39;Fifa mata&#39; em ponte ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTD7kYCx4BXJQZ3rqEXeCnWS5TvmC58Z55ZbU0N11VwOubzYUFladfPA4fX-DuATz7GCHqRtuqV" alt="Ativistas penduram bandeiras com mensagem &#39;Fifa mata&#39; em ponte ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>País-sede desta edição da Copa do Mundo, o Qatar tem sido alvo de inúmeras críticas por questões políticas e culturais contra os direitos humanos.</p></div>
            </div>
        </a>
        </Template></>;
}