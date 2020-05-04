export enum Status {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}

export interface Task {
    id: string;
    title: string;
    description: string;
    status: Status;
}