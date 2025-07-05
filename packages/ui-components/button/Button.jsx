import styles from './Button.module.css';

export const Button = ({ children, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

/*
Pasos para usar el Button:
1. En el package.json de la app agrego en la opción de "dependencies" el 
paquete o módulo "ui-components" así:

"ui-components": "1.0.0"

2. Llamo al button en cualquier app así:

import { Button } from 'ui-components';

3. Dentro del "return()" lo llamo así:

<Button onClick={() => alert('¡Hola Bambina!')}>Haz click here</Button>
*/