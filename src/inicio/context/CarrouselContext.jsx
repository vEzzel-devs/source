import { createContext } from "react";
import Vezzel from "../../components/Vezzel"

export const CarrouselContext = createContext();
export function CarrouselContextProvider(props) {
    const text = [
        {
            title : <>Qué es <Vezzel/>?</>,
            body : <>La plataforma <Vezzel/> es una red para usuarios de todo el mundo, en la que podrás construir o encontrar soluciones digitales sencillas a problemas de diversas causalidades. Únete a <Vezzel/> y comienza tu migración hacia la era digital!</>
        },
        {
            title : <>Quieres simplicidad?</>,
            body : <>Siempre quisiste desarrollar tus propias aplicaciones, pero programar era muy complicado? Con <Vezzel/> podrás cumplir ese sueño con un sistema de desarrollo low-code mediante nuestras renovadas hojas de cálculo tipadas.</>
        },
        {
            title : <>Quieres inmediatez?</>,
            body : <>En <Vezzel/> te tenemos cubierto, aquí podrás buscar las soluciones digitales desarrolladas y publicadas por otros usuarios, para que puedas resolver tu problema en cuestión de segundos. Incluso puedes contactarlos por ayuda!</>
        },
        {
            title : <>Quieres exactitud?</>,
            body : <>Pues te sorprenderás, algunas aplicaciones de <Vezzel/> contarán con la opción de personalizarlas si su desarrollador lo permite, de esta manera podrás adquirir exactamente la tecnología que estabas buscando al adaptar la solución a lo tuyo.</>
        },
        {
            title : <>Se parte de <Vezzel/>!</>,
            body : <>Tanto si te gusta crear soluciones, como adquirirlas para hacer tu vida más fácil, podrás encontrar tu lugar aquí. Participa de esta migración digital y aligera tu esfuerzo en diversas tareas del día a día a un click de distancia.</>
        },
    ];
    
    const multimedia = [
        "placeholder1.png",
        "placeholder2.png",
        "placeholder3.png",
        "placeholder4.png",
        "placeholder5.png",
    ];

    return (
        <CarrouselContext.Provider value={({text, multimedia})}>
            {props.children}
        </CarrouselContext.Provider>
    )
}