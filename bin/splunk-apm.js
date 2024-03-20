const { start } = require('@splunk/otel');

start({
   serviceName: 'pacman-christhianb-pacman-lab',
   endpoint: 'http://localhost:4317'
});
