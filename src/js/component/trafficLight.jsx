import React,{useState} from "react"

const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState("red");

    const [lightColors, setLightColors] = useState(['red', 'yellow', 'green']);

    // Devuelve un color violeta específico
    const generateRandomViolet = () => {
        return '#8A2BE2'; // Púrpura/violeta
    }

    // Función para alternar el color del semáforo.
    const cycleColors = () => {
        const currentIndex = lightColors.indexOf(activeLight);
        const nextIndex = (currentIndex + 1) % lightColors.length; // Cíclico
        setActiveLight(lightColors[nextIndex]);
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            {/* Poste negro */}
            <div className="post"></div>
            
            {/* Semáforo */}
            <div className="traffic-container bg-dark rounded-5 d-flex justify-content-evenly flex-column align-items-center py-2"
                style={{width:"200px", minHeight:"400px"}}>
                {
                    lightColors.map( (color, index) => {
                        return (                         
                            <div key={index} onClick={() => {
                                    setActiveLight(color);
                                }}
                                className={"rounded-circle " + (activeLight === color ? "activeLight" : "")}
                                style={{width:"100px", height:"100px", backgroundColor: color}}>
                            </div>
                        )
                    })
                }
            </div>

            {/* Botón para agregar color */}
            <button className="btn btn-primary mt-3" onClick={() => {
                if (lightColors.length < 4) {
                    setLightColors([ ...lightColors, generateRandomViolet() ]);
                }
            }}>
                Agregar
            </button>

            {/* Botón para alternar */}
            <button className="btn btn-secondary mt-3" onClick={cycleColors}>
                Alternar colores
            </button>
        </div>
    )
}

export default TrafficLight;



