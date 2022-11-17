import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Artemis launch</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Artemis launch"/>
        <meta name="description" content="Trending News about Artemis launch" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Artemis launch</h1>
            <Image width={800} height={500} src="https://spacenews.com/wp-content/uploads/2022/11/52503734338_b636b568d0_k-e1668613482410.jpg" alt="Artemis launch"/>
            <h3>Recent News</h3>
            <a href='https://spacenews.com/op-ed-artemis-launches-need-to-set-the-world-on-fire/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Op-ed | Artemis Launches Need to Set the World on Fire - SpaceNews</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRk1zAPu8GHtUbeXlGZ6zsThJiC6cB7qWmS9kbReRhE67XXDyNm7rxA-kTrVwAHVu2plt4iAYXx" alt="Op-ed | Artemis Launches Need to Set the World on Fire - SpaceNews" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Only when the public can see a launch up close in all its revelatory glory — boosters burning almost too bright to see, engines roaring almost too loud to&nbsp;...</p></div>
            </div>
        </a><a href='https://techcentral.co.za/watch-artemis-on-course-for-the-moon-after-epic-launch/217519/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch | Artemis on course for the moon after epic launch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQahnHFPBRCy4TAHZ1qnmjYcHAxssB1JpBIsZp6ElJuKQv1Plg1qiqFefAr6O7zKxPsTUn5XXOI" alt="Watch | Artemis on course for the moon after epic launch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>About 90 minutes after launch, the rocket&#39;s upper stage successfully thrust the Orion capsule out of Earth orbit and on its trajectory to the moon, Nasa&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nasa.gov/press-release/liftoff-nasa-s-artemis-i-mega-rocket-launches-orion-to-moon'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liftoff! NASA&#39;s Artemis I Mega Rocket Launches Orion to Moon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQt1XxPjBhEy8cJo0g6REscqcJtOoR-_YxwwinaK73YE9oLe_CUiXId0HnjMthbWDwdOT8WsTAM" alt="Liftoff! NASA&#39;s Artemis I Mega Rocket Launches Orion to Moon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following a successful launch of NASA&#39;s Space Launch System (SLS), the most powerful rocket in the world, the agency&#39;s Orion spacecraft is on its way to the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.space.com/nasa-artemis-1-moon-mission-go-for-launch-watch-live'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Update: NASA&#39;s Artemis 1 moon rocket launches on lunar test flight</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQEa-Nahf4p-IhvtiPBZhVy2KwUKqhxteZAGoHuqyn-t2kizVZ95JSDaQGEGSMhAV2QSDgPIzIG" alt="Update: NASA&#39;s Artemis 1 moon rocket launches on lunar test flight" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Update for 2 am ET: NASA successfully launched the Artemis 1 moon mission on the first Space Launch System rocket at 1:47 am EST (0647 GMT) in a stunning&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/16/science/nasa-launch-artemis-1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NASA Blazes a Path Back to the Moon With Artemis I Rocket Launch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTe8_Ydn8TUeXSiw005BCzYEioZTIVRuihD3v8kk0w-muRriy_-xHjiXuNa79t11cO9w9tlX3vA" alt="NASA Blazes a Path Back to the Moon With Artemis I Rocket Launch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The uncrewed flight of the giant Space Launch System on Wednesday began a new era of spaceflight amid a debate over how to finance rocket development.</p></div>
            </div>
        </a><a href='https://www.independent.co.uk/space/nasa-artemis-rocket-launch-tonight-b2226098.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nasa Artemis rocket launches into space, as humanity begins ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQhX0W3CMKULNxgTnLximNbA0-cWbfHctXrMNLKIlwBEHgPJttkcZhKxnHvlbQ5AdXMhb89g6Rl" alt="Nasa Artemis rocket launches into space, as humanity begins ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nasa successfully launched its Artemis rocket on Wednesday, heralding a new era of space exploration that will eventually see humans return to the moon.</p></div>
            </div>
        </a>
        </Template></>;
}