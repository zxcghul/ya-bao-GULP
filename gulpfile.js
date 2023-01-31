import gulp from "gulp"; //основной модуль
import { path } from "./gulp/config/path.js"; //импорт путей
import { plugins } from "./gulp/config/plugins.js"; //импорт плагинов

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
} //передаем значения в глобальную переменную

import { copy, copyFonts } from "./gulp/tasks/copy.js"; //импорт задач
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
// import { serverScss } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
// import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { ftp } from "./gulp/tasks/ftp.js";

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}  //наблюдатель за изменениями в файлах

// const fonts = gulp.series( otfToTtf, ttfToWoff, fontsStyle );

// const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

const mainTasks = gulp.series(copyFonts, gulp.parallel(copy, html, scss, js, images));

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server)); //построение сценариев

const deployFTP = gulp.series(reset, mainTasks, ftp);
export { deployFTP }

gulp.task('default', dev); //выполнение сценария по умолчанию

//если ошибка с ненайденным модулем webp, то используем команду //npm i webp-converter@2.2.3 --save-exact