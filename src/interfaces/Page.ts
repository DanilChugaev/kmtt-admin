import UiComponent from './UiComponent';

export default interface Page {
    name: string;
    to?: string;
    id?: string;
    components?: Array<UiComponent>;
}
