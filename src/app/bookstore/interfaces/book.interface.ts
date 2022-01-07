export interface RESTBooksResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    id:             number;
    title:          string;
    authors:        Author[];
    translators:    Author[];
    subjects:       string[];
    bookshelves:    string[];
    languages:      Language[];
    copyright:      boolean;
    media_type:     MediaType;
    formats:        Formats;
    download_count: number;
}

export interface Author {
    name:       string;
    birth_year: number | null;
    death_year: number | null;
}

export interface Formats {
    "application/epub+zip":            string;
    "application/rdf+xml":             string;
    "application/x-mobipocket-ebook":  string;
    "text/plain; charset=us-ascii"?:   string;
    "text/plain"?:                     string;
    "image/jpeg":                      string;
    "text/html":                       string;
    "application/zip"?:                string;
    "text/plain; charset=utf-8"?:      string;
    "text/html; charset=utf-8"?:       string;
    "text/html; charset=iso-8859-1"?:  string;
    "application/octet-stream"?:       string;
    "text/html; charset=us-ascii"?:    string;
    "text/plain; charset=iso-8859-1"?: string;
}

export enum Language {
    En = "en",
}

export enum MediaType {
    Text = "Text",
}
