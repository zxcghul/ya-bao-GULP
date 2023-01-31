export const server = (done)=> {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`
        },
        notify: false,
        port: 3000,
    });
}
// export const serverScss = (done)=> {
//     app.plugins.browsersync.init({
//         server: {
//             baseDir: `${app.path.build.scss}`
//         },
//         notify: false,
//         port: 3000,
//     });
// }