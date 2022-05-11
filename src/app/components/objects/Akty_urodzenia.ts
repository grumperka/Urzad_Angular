export interface Akty_urodzenia {
    id: number;
    id_obywatela: number;
    id_ojca: number;
    id_matki: number;
    id_urzedu: number;
    id_urzednika: number | null;
    data_wydania_aktu: Date;
}