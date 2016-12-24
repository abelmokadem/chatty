import path from 'path';
import { format } from './run';
import { create } from '@frctl/fractal';

const fractal = create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Chatty Style Guide');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(process.cwd(), 'patterns'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(process.cwd(), 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(process.cwd(), 'public'));

/*
 * Set the default preview layout
 */
fractal.components.set('default.preview', '@preview');

export function runFractal() {
    const fractalServer = fractal.web.server({
        sync: true,
        watch: true
    });

    fractalServer.on('error', err => {
        console.log(`[${format(new Date())}] ${err.message}`);
    });

    return fractalServer.start().then(() => {
        console.log(`[${format(new Date())}] Fractal server is now running at ${fractalServer.url}`);
    });
}

export default runFractal;
