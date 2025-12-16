import { header } from "./header";
import { intro } from "./intro";
import { subnav } from "./subnav";
import { atom } from "./atom"

window.addEventListener("load", function(){
    header();
    intro();
    subnav();
    atom();
});