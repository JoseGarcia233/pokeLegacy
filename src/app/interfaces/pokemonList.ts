export interface APIPoke {
    count:    number;
    next?:     string;
    previous?: string;
    results:  ThePokemons[];
}

export interface ThePokemons {
    name: string;
    url:  string;
}
