import { ModuleWithProviders } from '@angular/core';

export interface IRepository{
    id: number;
    name: string;
    description: string;
    owner: string;
    size: number;       // kilobytes
}

export interface IState {
    abbreviation: string;
    name: string;
}

export interface IContributor {
    name: string;
}


export interface IRouting {
    routes: ModuleWithProviders,
    components: any[]
}
