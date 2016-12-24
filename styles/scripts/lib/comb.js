import path from 'path';
import Comb from 'csscomb';
import config from '../../.csscomb.json';

const cssReorderer = new Comb(config);

export function comb() {
    return cssReorderer.processPath(path.join(process.cwd(), 'src'));
}

export default comb;
