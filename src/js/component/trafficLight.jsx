import React,{useState} from "react"

const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState("red");

    const [lightColors, setLightColors] = useState(['red', 'yellow', 'green']);

    // Devuelve un color violeta específico
    const generateRandomViolet = () => {
        return '#8A2BE2'; // Este es un código hexadecimal para un tono violeta
    }

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

            {/* Botón para agregar un color */}
            <button className="btn btn-primary mt-3" onClick={() => {
                if (lightColors.length < 4) {
                    setLightColors([ ...lightColors, generateRandomViolet() ]);
                }
            }}>
                Add Colour
            </button>
        </div>
    )
}

export default TrafficLight;


