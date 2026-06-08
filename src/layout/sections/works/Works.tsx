import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work.tsx";
import socialImg from './../../../assets/img/portfolio-1.webp'
import timerImg from './../../../assets/img/portfolio-2.webp'
import {Container} from "../../../components/Container.ts";
import React, {useState} from "react";
import {S} from "./Works_Styles.ts"
import Typewriter from 'typewriter-effect';
import {AnimatePresence, motion} from "framer-motion"

const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    },
]

const worksData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda deserunt exercitationem incidunt ipsa ipsum minus nobis, quos rem, similique temporibus voluptates. Aliquid atque eum fugit iste omnis suscipit vero?",
        type: "spa",
        id: 1
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae commodi culpa eum itaque laborum, nemo odit, porro quasi, reprehenderit sint tempora tenetur? Blanditiis explicabo, in quasi quo sapiente tempora!",
        type: "react",
        id: 2
    }
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <S.WorksTitle>
                    <p>My Works</p>
                    <Typewriter
                        options={{
                            strings: ['My Works'],
                            autoStart: true,
                            loop: true,
                            delay: 150
                        }}
                    />
                </S.WorksTitle>



                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                        currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div style={{width: "400px", flexGrow: 1, maxWidth: "540px"}}
                                    layout
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    key={w.id}
                                >
                                    <Work title={w.title}
                                          src={w.src}
                                          text={w.text}
                                          key={w.id}
                                    />
                                </motion.div>

                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

