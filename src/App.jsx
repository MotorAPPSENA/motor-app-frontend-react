// Componente App.js
import React from "react";
import "./App.css";
import Testimonio from "./componentes/testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Programa análisis y desarrollo de software Ficha 2675807 Grupo MotorAPP</h1>
        <Testimonio
          imagen="imgjeysson"
          nombre="Jeysson Gutierrez"
          cargo="Estudiante ADSO SENA"
          testimonio="Soy un entusiasta estudiante de desarrollo de software apasionado por la creación de soluciones innovadoras. Actualmente estoy explorando el fascinante mundo de la programación y la ingeniería de software, con un enfoque particular en lenguajes Y frameworks como Java y React. Me gustaria especializarme en la creación de aplicaciones intuitivas y amigables para el usuario, con un enfoque en la eficiencia y la escalabilidad del código. Mi objetivo es combinar mis habilidades técnicas con una comprensión profunda de las necesidades del usuario para desarrollar productos que impacten positivamente en la vida cotidiana.

          Además de mis habilidades técnicas, tengo una fuerte ética de trabajo, capacidad para trabajar en equipo y una mentalidad de aprendizaje continuo. Siempre estoy buscando oportunidades para mejorar y crecer profesionalmente, ya sea participando en proyectos desafiantes o aprendiendo nuevas tecnologías y metodologías."
        />
        <Testimonio
          imagen="imgedison"
          nombre="Edisson Amaya"
          cargo="Estudiante ADSO SENA"
          testimonio="¡Hola! Soy un estudiante apasionado por el desarrollo de software, con un enfoque especial en lenguajes como JavaScript y Java. Desde que comencé a programar, he encontrado una profunda fascinación por la forma en que estos lenguajes pueden transformar ideas en aplicaciones funcionales y dinámicas. Mi experiencia se extiende desde la creación de aplicaciones web interactivas utilizando frameworks como React y Angular, hasta el desarrollo de aplicaciones empresariales sólidas con Java EE. Me encanta explorar nuevas tecnologías y encontrar formas innovadoras de resolver problemas mediante el código. Estoy emocionado de seguir aprendiendo y creciendo en este emocionante campo del desarrollo de software."
        />
        <Testimonio
          imagen="imgfredy"
          nombre="Fredy Iturre"
          cargo="Estudiante ADSO SENA"
          testimonio="Hola a todos, soy un estudiante dedicado al desarrollo de software, con un enfoque especial en Python y Android. Desde que descubrí mi pasión por la programación, he estado fascinado por la versatilidad y la potencia de Python, así como por las infinitas posibilidades que ofrece el desarrollo de aplicaciones para Android. He trabajado en una variedad de proyectos, desde aplicaciones móviles simples hasta sistemas complejos basados en la nube. Disfruto especialmente trabajando en el ecosistema de Android, creando aplicaciones que sean intuitivas, eficientes y atractivas para los usuarios. Estoy emocionado de seguir explorando las posibilidades que ofrece este emocionante campo y contribuir con mi creatividad y habilidades técnicas a proyectos innovadores."
        />
      </div>
    </div>
  );
}



export default App;