import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Suíça</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Suíça"/>
        <meta name="description" content="Trending News about Suíça" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Suíça</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=bc01e573-d765-4b35-b03b-cfdb0fad5e6f&w=800&h=420&watermark=true&t=20221202224200" alt="Suíça"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/internacional/selecao/noticias/portugal-suica-um-historico-para-contrariar-15419269.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal-Suíça: um histórico para contrariar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxs-NjfxBk_iy8g6mwYNSRx5tcqvL-9aBhIzbsBZf_fgS95i0hRxz2zPlATMQzzWqdZgIkRJ5w" alt="Portugal-Suíça: um histórico para contrariar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Suíça leva a melhor no balanço de todos os confrontos contra Portugal. Nunca se encontraram num Mundial e apenas uma vez se cruzaram num Europeu,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/desporto/suica-o-velho-conhecido-que-tem-shaqiri-e-embolo-como-setas-no-ataque-15418929.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Suíça, o velho conhecido que tem Shaqiri e Embolo como setas no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSi0CGGcFT-XkmuMoJEV12vKk12hUJ6gm6UiJEUP_jUXRcz-7-Ayu2eX7q5Zeg32eSYg_OglsgU" alt="Suíça, o velho conhecido que tem Shaqiri e Embolo como setas no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os suíços são o adversário de Portugal na próxima terça-feira. Trata-se de uma seleção que vive uma nova vida sob comando do antigo jogador Murat Yakin.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-12-02/mundial-2022-portugal-defronta-a-suica-nos-oitavos-de-final/967012'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal defronta a Suíça nos oitavos de final</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSXx1LuwrpSb97Lfecorui9vmwmBwBjCLlBx7ID87mUsAAU7nDlI7vMBmiyClw0YaPzGU6kYhVL" alt="Portugal defronta a Suíça nos oitavos de final" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogo está marcado para a próxima terça-feira, 6 de dezembro, a partir das 19 horas, em Lusail e será o 26.º entre os dos países, contabilizando jogos oficiais&nbsp;...</p></div>
            </div>
        </a><a href='https://pt.euronews.com/2022/12/02/suica-congelou-75-mil-milhoes-de-francos-suicos-de-fundos-russos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Suíça congelou 7,5 mil milhões de francos suíços de fundos russos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSn5a-PvaJuX0eG9zglCHg838vioTOi0V9fERI3udvVjoWoHmBe0xljyOHoZ3oP0ja2Jwlph8HV" alt="Suíça congelou 7,5 mil milhões de francos suíços de fundos russos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erwin Bollinger, alto funcionário da Secretaria de Estado da Economia suíça, diz que é preciso &quot;distinguir entre os 7,5 mil milhões de francos congelados, que&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/12/02/o-golo-de-embolo-pos-a-cereja-no-topo-do-bolo-e-os-suicos-nos-oitavos-a-cronica-do-servia-suica/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O golo de Embolo pôs a cereja no topo do bolo — e os suíços nos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQKOYkFWIFdvjoLdpJmPQN1AoAsutjF0unVcFZ7nMpwqa7rHckEST6559SlOJQ3HaoGGtgHZzKo" alt="O golo de Embolo pôs a cereja no topo do bolo — e os suíços nos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shaqiri abriu as contas, Sérvia ainda deu a volta ao marcador mas o golo de Embolo em cima do intervalo deu o mote para o apuramento: Suíça está nos oitavos&nbsp;...</p></div>
            </div>
        </a><a href='https://24.sapo.pt/desporto/artigos/suica-e-o-adversario-de-portugal-nos-oitavos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Suíça é o adversário de Portugal nos &#39;oitavos&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRJGXmTQGPA0GmwQjYaQZJAzIDWQvvdCbhKkn9iRJS_TxafwHQkEKKqugoHCjiYzOR1T869F5FH" alt="Suíça é o adversário de Portugal nos &#39;oitavos&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Num jogo bastante emotivo, a Suíça saiu na frente do marcador, com um golo de Shaqiri aos 20&#39;, mas a Sérvia, que também lutava pelo apuramento, deu a volta ao&nbsp;...</p></div>
            </div>
        </a><a href='https://desporto.sapo.pt/futebol/mundial/artigos/suica-vence-servia-e-marca-encontro-com-portugal-nos-oitavos-de-final'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Suíça vence Sérvia e marca encontro com Portugal nos oitavos-de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS6b6Ljw1SeGKDtaUSKzEns9K_FwRb9YCNOqnb5sAS-kJWkk5ysOV_WwvtggcEs8CJgzLm3PyK7" alt="Suíça vence Sérvia e marca encontro com Portugal nos oitavos-de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Suíça venceu a Sérvia por 3-2 no fecho da fase de grupos do Mundial 2022 e será assim a adversária de Portugal nos oitavos-de-final, ao terminar no segundo&nbsp;...</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/bola-branca/noticia/mundial-qatar-2022/2022/12/02/suica-e-o-adversario-de-portugal-nos-oitavos-do-mundial/310410/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Suíça é o adversário de Portugal nos &quot;oitavos&quot; do Mundial ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQHC7E_Qjizo2P3xa79_NV7ZMCHd7T3xfPORgKyxCkw62LR3mHj_WuDx0eBrWSL9a1vz2no3pTP" alt="Suíça é o adversário de Portugal nos &quot;oitavos&quot; do Mundial ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Helvéticos derrotaram Sérvia, por 3-2, e apuraram-se para a fase a eliminar. Vitória dos Camarões sobre o Brasil não foi suficiente. Portugal-Suíça está&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}