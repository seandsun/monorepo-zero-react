/*
En este archivo se exportan todos los componentes del módulo "ui-components"
para que puedan ser usados desde cualquier "app" del monorepo. O sea que aquí
se centralizan todas las exportaciones lo cual es más organizado y escalable.

Al exportar los componentes desde aquí, cuando una app quiera usar un 
componente solo tendrá que colocar:

import { Button } from 'ui-components';

Si no se tuviera este archivo, la app tendría que colocar toda la ruta, así:

import { Button } from 'ui-components/button/Button';
*/

export { Button } from './button/Button';



