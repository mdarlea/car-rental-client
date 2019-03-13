/// <reference path="../node_modules/moment/moment.d.ts" />

declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare class LocalStorage {
  constructor();
  localStorageGet(key: string): string;
  localStorageSet(key: string, val: string);
  localStorageRemove(key: string);
}

interface JQuery  {
    slicknav(options: any): JQuery;
}

declare var System: any;
declare var FB: any;
