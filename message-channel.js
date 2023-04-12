if (typeof window !== 'undefined' && !window.MessageChannel) {
    // JSDom still does not implement MessageChannel https://github.com/jsdom/jsdom/issues/2448
    window.MessageChannel = require('node:worker_threads').MessageChannel;
}
