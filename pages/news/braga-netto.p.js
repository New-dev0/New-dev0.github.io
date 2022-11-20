import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Braga Netto</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Braga Netto"/>
        <meta name="description" content="Trending News about Braga Netto" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Braga Netto</h1>
            <Image width={800} height={500} src="https://api.metro1.com.br/noticias/130561,fala-enigmatica-de-braga-netto-reativa-rumor-de-virada-de-mesa-golpista-no-bolsonarismo-3.jpg" alt="Braga Netto"/>
            <h3>Recent News</h3>
            <a href='https://www.metro1.com.br/noticias/politica/130561,fala-enigmatica-de-braga-netto-reativa-rumor-de-virada-de-mesa-golpista-no-bolsonarismo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fala enigmática de Braga Netto reativa rumor de virada de mesa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQqB9NQiqBVUBY9eKLkyQ0dZ0Ixl8TWeT72c4XFNUL7YP0jtArL8PRE82QUINLOVoTxz9iUj3pg" alt="Fala enigmática de Braga Netto reativa rumor de virada de mesa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois de visitar o presidente no Palácio da Alvorada, o ex-ministro da Defesa conversou com apoiadores bolsonaristas e pediu que “não perdessem a fé”,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.miseria.com.br/ultimas-noticias/imediatas/braga-netto-diz-que-bolsonaro-deve-voltar-logo-ao-planalto/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Braga Netto diz que Bolsonaro &#39;deve voltar logo&#39; ao Planalto - Site ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQMT-Ky9Ka2iiDwtlkmvy-9Md3o1XYBRnNk385QFwHxE7zFJR_7R9iZAdCb6dPrzXBJU8Vels3G" alt="Braga Netto diz que Bolsonaro &#39;deve voltar logo&#39; ao Planalto - Site ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ex-ministro da Defesa, Walter Braga Netto, afirmou que o presidente Jair Bolsonaro (PL) deve voltar em breve para o Palácio do Planalto.</p></div>
            </div>
        </a><a href='https://diariodoestadogo.com.br/video-braga-netto-visita-apoiadores-e-bolsonarista-chora-221027/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vídeo: Braga Netto visita apoiadores e bolsonarista chora</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWYyYGKfElul7I20yOX8cuNiIHeHlBmzofJX9xB9i19jkR33EuN-rpF__pj7BSILpqAH6yaFQR" alt="Vídeo: Braga Netto visita apoiadores e bolsonarista chora" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Walter Braga Netto (PL), que negou a internação de Bolsonaro após dores abdominais. Ex-ministro se negou a falar com jornalistas.</p></div>
            </div>
        </a><a href='https://contilnetnoticias.com.br/2022/11/declaracoes-de-braga-netto-viram-combustivel-para-manifestacoes-de-bolsonaristas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Incitando bolsonaristas? Braga Netto pede que manifestantes &quot;não ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQcGrrjZqbI2HUpRfDZ0_Rmp17iLSiL1EqpDAdtWzsHz6eoAi_MG5yCOXhS7sn99G_XpJfAcndY" alt="Incitando bolsonaristas? Braga Netto pede que manifestantes &quot;não ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Vocês não percam a fé, é só o que eu posso falar para vocês agora”, disse o general da reserva do Exército Braga Netto, ex-candidato a vice-presidente na&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pontoevirgula.news/noticia/21280/apos-encontro-com-bolsonaro-general-fala-a-apoiadores-e-manda-recado-enigmatico'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após encontro com Bolsonaro, General fala a apoiadores e manda ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Após encontro com Bolsonaro, General fala a apoiadores e manda ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na manhã desta sexta-feira (18), o General Braga Neto, ex-ministro chefe da Casa Civil da Presidência da República, fez uma aparição surpresa na entrada do&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}