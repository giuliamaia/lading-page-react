
import Header from '../../components/header';
import './styles.scss';
import Woman from '../../assets/images/woman.png'
import Woman2 from '../../assets/images/woman2.png'
import ProgressBar from '../../components/progress-bar';
import Title from '../../components/title';
import CardArea from '../../components/card-area';
import { useState } from 'react';
import { mdiWallet, mdiAbacus, mdiAccount, mdiCheck, mdiSecurity, mdiHandClap, mdiFormatColorFill, mdiWeb, mdiPencilRuler, mdiDesktopClassic, mdiHomeAnalytics, mdiClipboardPulse } from "@mdi/js"
import CardTarget from '../../components/card-target';
import TimelineItem from '../../components/timeline-item';

function Home() {

    const [cardsInfo, setCardsInfo] = useState([
        {
            title: 'Graphic Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sollicitudin augue, vitae vulputate enim. Quisque tincidunt libero ut mi ultrices, in varius tortor mattis.',
            icon: mdiFormatColorFill
        },
        {
            title: 'Web Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sollicitudin augue, vitae vulputate enim. Quisque tincidunt libero ut mi ultrices, in varius tortor mattis.',
            icon: mdiWeb
        },
        {
            title: 'UI/UX Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sollicitudin augue, vitae vulputate enim. Quisque tincidunt libero ut mi ultrices, in varius tortor mattis.',
            icon: mdiPencilRuler
        },
        {
            title: 'HTML/CSS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sollicitudin augue, vitae vulputate enim. Quisque tincidunt libero ut mi ultrices, in varius tortor mattis.',
            icon: mdiDesktopClassic
        },
        {
            title: 'Business Analysis',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sollicitudin augue, vitae vulputate enim. Quisque tincidunt libero ut mi ultrices, in varius tortor mattis.',
            icon: mdiHomeAnalytics
        },
        {
            title: 'SEO Marketing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sollicitudin augue, vitae vulputate enim. Quisque tincidunt libero ut mi ultrices, in varius tortor mattis.',
            icon: mdiClipboardPulse
        }
    ])
    return (
        <article className='home'>
            <section className='section1'>
                <Header />
                <div className='container'>
                    <main className='section1__content'>
                        <div className='section1__content__text'>
                            <h3>Hello, I'm</h3>
                            <h1>Giulia Maia</h1>
                            <h5>Web developer at CESAR</h5>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sollicitudin augue, vitae vulputate enim. Quisque tincidunt libero ut mi ultrices, in varius tortor mattis. Aliquam convallis venenatis orci et gravida. Cras aliquam mattis velit, vel laoreet risus consequat in. Duis blandit convallis ipsum non porttitor. Nullam sodales est ut elit pharetra vehicula. Quisque in enim velit.</span>
                        </div>
                        <div className='section1__content__img'>
                            <img src={Woman} alt="Woman" />
                        </div>
                    </main>
                </div>
            </section>
            <section className='section2'>
                <div className='container'>
                    <main className='section2__content'>
                        <div className='section2__content__about-us'>
                            <div className='section2__content__about-us__img'>
                                <img src={Woman2} alt="Woman2" />
                            </div>
                            <div className='section2__content__about-us__text'>
                                <Title title='About Us' description='Why You Hire Me!'></Title>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sollicitudin augue, vitae vulputate enim. Quisque tincidunt libero ut mi ultrices, in varius tortor mattis. Aliquam convallis venenatis orci et gravida. Cras aliquam mattis velit, vel laoreet risus consequat in. Duis blandit convallis ipsum non porttitor. Nullam sodales est ut elit pharetra vehicula. Quisque in enim velit.</span>
                                <div className="section2__content__about-us__progress-bars">
                                    <ProgressBar title={"UX/UI Design"} percent={"75%"}></ProgressBar>
                                    <ProgressBar title={"Web Design"} percent={"54%"}></ProgressBar>
                                    <ProgressBar title={"HTML/CSS"} percent={"85%"}></ProgressBar>
                                    <ProgressBar title={"Angular"} percent={"92%"}></ProgressBar>
                                    <ProgressBar title={"React"} percent={"88%"}></ProgressBar>
                                </div>
                            </div>
                        </div>
                        <div className='section2__content__cards'>
                            <Title title='Service' description='Service Provide' center={true}></Title>
                            <article className='section2__content__cards__container'>
                                {
                                    cardsInfo.map((info, index) => {
                                        return <CardArea title={info.title} description={info.description} icon={info.icon} key={index}></CardArea>
                                    })
                                }
                            </article>
                        </div>
                    </main>
                </div>
            </section>
            <section className="section3">
                <div className='container'>
                    <main className="section3__content">
                        <CardTarget icon={mdiCheck} number={65} description={"Project Compleate"}></CardTarget>
                        <CardTarget icon={mdiAccount} number={73} description={"Satisfied Client"}></CardTarget>
                        <CardTarget icon={mdiSecurity} number={38} description={"Active Project"}></CardTarget>
                        <CardTarget icon={mdiHandClap} number={54} description={"Team Members"}></CardTarget>
                    </main>
                </div>
            </section>
            <section className="section4">
                <div className='container'>
                    <Title title='Experience' description='Work Experience' center={true}></Title>
                    <main className="section4__content">
                        <TimelineItem
                            textCard='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sollicitudin augue, vitae vulputate enim. Quisque tincidunt libero ut mi ultrices, in varius tortor mattis.'
                            numberSection={1}
                            title='Grafic Designer'
                            desc1='Team Orio Designer Team'
                            desc2='March 2019 - August 2019'
                            reverse={false}
                        />
                        <TimelineItem
                            textCard='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sollicitudin augue, vitae vulputate enim. Quisque tincidunt libero ut mi ultrices, in varius tortor mattis.'
                            numberSection={2}
                            title='Grafic Designer'
                            desc1='Team Orio Designer Team'
                            desc2='March 2019 - August 2019'
                            reverse={true}
                        />
                        <TimelineItem
                            textCard='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sollicitudin augue, vitae vulputate enim. Quisque tincidunt libero ut mi ultrices, in varius tortor mattis.'
                            numberSection={3}
                            title='Grafic Designer'
                            desc1='Team Orio Designer Team'
                            desc2='March 2019 - August 2019'
                            reverse={false}
                        />
                    </main>
                </div>
            </section>
        </article>
    )
}

export default Home;