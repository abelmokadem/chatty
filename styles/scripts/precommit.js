import comb from './lib/comb';
import run from './lib/run';

async function precommit() {
    await run(comb);
}

run(precommit);
