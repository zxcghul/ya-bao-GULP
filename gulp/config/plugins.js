import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";
import newer from "gulp-newer";

//Экспортируем пдагины
export const plugins = {
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer
}