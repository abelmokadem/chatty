import watcher from 'watch';

export function watch(path, callback) {
    watcher.watchTree(path, {ignoreDotFiles: true}, callback);
}

export default watch;
