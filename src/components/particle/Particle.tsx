import {useMemo} from "react";
import Particles, {ParticlesProvider} from "@tsparticles/react";
import {type Container, type Engine, type ISourceOptions} from "@tsparticles/engine";
import {loadSlim} from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const particlesInit = async (engine: Engine): Promise<void> => {
    await loadSlim(engine);
};

export const Particle = () => {
    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => (

            {
                "key": "nasa",
                "name": "NASA",
                "particles": {
                    "number": {
                        "value": 160,
                        "density": {
                            "enable": true
                        }
                    },
                    "paint": {
                        "fill": {
                            "color": {
                                "value": "#ffffff"
                            }
                        }
                    },
                    "shape": {
                        "type": "circle"
                    },
                    "opacity": {
                        "value": {
                            "min": 0.1,
                            "max": 1
                        },
                        "animation": {
                            "enable": true,
                            "speed": 1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": {
                            "min": 1,
                            "max": 3
                        }
                    },
                    "move": {
                        "enable": true,
                        "speed": {
                            "min": 0.1,
                            "max": 1
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onHover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onClick": {
                            "enable": false,
                            "mode": "repulse"
                        }
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "links": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 250,
                            "size": 0,
                            "duration": 2,
                            "opacity": 0
                        },
                        "repulse": {
                            "distance": 400,
                            "duration": 0.4
                        },
                        "push": {
                            "quantity": 4
                        },
                        "remove": {
                            "quantity": 2
                        }
                    }
                }

}
),
[],
)
;

return (
    <ParticlesProvider init={particlesInit}>
        <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} className="particles-background"/>
    </ParticlesProvider>
);
}
;

