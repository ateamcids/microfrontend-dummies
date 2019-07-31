import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "./utils";

const loadAngularApp = async () => {
    await runScript('http://localhost:4200/main.js');
    return window.angularapp;
};


export const registerAngularApp = () => {
    singleSpa.registerApplication('angularapp', loadAngularApp, matchingPathname(['/angularapp', '/']));
};

