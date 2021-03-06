module.exports = {
  apps : [{
    name: 'Notification Handler',
    script: './run.js',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    },
  }],

};
