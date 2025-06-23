export interface Item {
    icon: string;
    isCollection: boolean;
    id: number;
    name: string;
    Category: Category;
    SubCategory?: SubCategory;
    Collectable?:boolean;
    date?: string;
    comments: string;
}

export interface Category {
    value: string;
    label: string;
    children?: SubCategory[];
}

export interface SubCategory {
    value: string;
    label: string;
}

