export interface Akty_rozwodu {
    id: number;
    id_rozwodnika: number;
    id_rozwodniczki: number;
    id_urzedu: number;
    id_urzednika: number;
    data_slubu: Date;
    data_wydania_aktu_rozwodu: Date;
    z_orzekaniem_winy_T_N: number;
    id_powodu_glownego: number;
    czy_wylacznie_T_N: number;
}