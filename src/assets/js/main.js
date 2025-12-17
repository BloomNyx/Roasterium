import { loadingIntro } from "./loadingIntro";
import { header } from "./header";
import { intro } from "./intro";
import { subnav } from "./subnav";
import { atom } from "./atom";
import { menu } from "./menu";
import { cont } from "./cont";
import { white } from "./white";
import { footer } from "./footer";

window.addEventListener("load", function(){
    loadingIntro();
    header();
    intro();
    subnav();
    atom();
    menu();
    cont();
    white();
    footer();
});