import buildCss from './lib/build-css';
import clean from './lib/clean';
import path from 'path';
import run from './lib/run';
import runFractal from './lib/fractal';
import watch from './lib/watch';

async function startFractal() {
    await run(clean);
    await run(buildCss);
    await run(runFractal);

    watch(path.join(process.cwd(), 'src'), async () => {
        await run(buildCss)
    });
}

run(startFractal);
