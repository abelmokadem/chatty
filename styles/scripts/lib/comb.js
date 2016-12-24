import path from 'path';
import Comb from 'csscomb';

const cssReorderer = new Comb('csscomb');

export function comb() {
    return cssReorderer.processPath(path.join(process.cwd(), 'src'));
}

export default comb;
