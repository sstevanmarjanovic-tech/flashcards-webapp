export interface FullSubjectDTO {
    id: number;
    name: string;
    createdAt: Date;
}
export interface FullDeckDTO {
    id: number;
    name: string;
    createdAt: Date;
    subject:{
        id: number;
        name: string;
        createdAt: Date;
    }
    cardsCount: number;
}