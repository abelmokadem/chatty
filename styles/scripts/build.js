import buildCss from './lib/build-css';
import run from './lib/run';

async function build() {
    await run(buildCss);
}

run(build);
