import bgTopMobile from '../assets/images/bg-pattern-top-mobile.svg';
import bgBottomMobile from '../assets/images/bg-pattern-bottom-mobile.svg';

import bgTopDesktop from '../assets/images/bg-pattern-top-desktop.svg';
import bgBottomDesktop from '../assets/images/bg-pattern-bottom-desktop.svg';

/*
Este componente "Background.jsx" se está llamando en el componente
"App.jsx", para que las imagenes se pueden ubicar una arriba en el 
header y otra abajo en el footer se le tiene que colocar "relative"
a su "padre" más superior o el que "más está arriba" englobando la
información, en este caso el padre sería la etiqueta "main" que
está en el componente App.jsx, entonces es allí donde colocamos ese
relative para que sea la referencia de las imágenes "Top" y "Bottom"
*/

export const Background = () => {
  return (
    <div>
      {/* 
        La etiqueta "picture" me permite mostrar una u otra imagen de 
        forma automática de acuerdo al ancho de la pantalla. Entonces lo
        siguiente quiere decir:
        - Mientras el ancho de la pantalla sea de 375px muestra la
          imagen "bgTopMobile"
        - Cuando el ancho de la pantalla sea de mínimo 376px muestra
          la imagen "bgTopDesktop"
        - Por defecto voy a colocar como valor inicial el "bgTopMobile",
          pero si el user usa la web en un pc automáticamente se carga
          la imagen "bgTopDesktop"
       */}
      <picture className="absolute top-0 left-0 -z-1">
        <source media="(max-width: 375px)" srcSet={bgTopMobile} />
        <source media="(min-width: 376px)" srcSet={bgTopDesktop} />
        <img src={bgTopMobile} alt="Background" />
      </picture>

      <picture className="absolute bottom-0 right-0 -z-1">
        <source media="(max-width: 375px)" srcSet={bgBottomMobile} />
        <source media="(min-width: 376px)" srcSet={bgBottomDesktop} />
        <img src={bgBottomMobile} alt="Background" />
      </picture>
    </div>
  );
};
