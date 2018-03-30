import { Weather } from './weather';
import { Main } from './main';

export interface Forecast {
    weather: Weather[];
    main: Main;
    name: string;
}
