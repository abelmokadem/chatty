import fsp from 'fs-promise';
import path from 'path';

export function clean() {
    return fsp.remove(path.join(process.cwd(), 'public'));
}

export default clean;
