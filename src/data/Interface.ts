export interface Item {
    icon: string;
    isCollection: boolean;
    id: number;
    name: string;
    Category: Category;
    Subcategory: Subcategory;
    comments: string;
    collectionDate?: string;
}

export interface Subcategory {
    value: string;
    label: string;
}

export interface Category {
    value: string;
    label: string;
    children: Subcategory[];
}

