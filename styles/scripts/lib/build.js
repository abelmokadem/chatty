import sass from 'node-sass';
import path from 'path';
import fsp from 'fs-promise';

export async function build() {
    await fsp.ensureDir(path.join(process.cwd(), 'public/css'));

    return new Promise((resolve, reject) => {
        sass.render({
            file: path.join(process.cwd(), 'src/styles.scss'),
            outputStyle: 'compressed',
            sourceMap: 'src/styles.css.map'
        }, async function(err, result) {
            await fsp.writeFile(path.join(process.cwd(), 'public/css/styles.css'), result.css.toString());
            await fsp.writeFile(path.join(process.cwd(), 'public/css/styles.css.map'), result.map.toString());

            if (err) {
                reject(err);
            }

            resolve(result);
        });
    });
}

export default build;
