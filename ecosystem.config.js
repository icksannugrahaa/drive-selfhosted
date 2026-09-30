module.exports = {
  apps: [
    {
      name: 'cloudreve',
      cwd: '/opt/local-drive',
      script: '/opt/local-drive/bin/cloudreve',
      args: 'server -c /opt/local-drive/conf.ini',
      autorestart: true,
      restart_delay: 5000,
      max_restarts: 20,
      min_uptime: '10s',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: '/opt/local-drive/log/cloudreve.err.log',
      out_file: '/opt/local-drive/log/cloudreve.out.log',
      merge_logs: true,
      kill_timeout: 8000,
      env: {
        PORT: '7201'
      }
    }
  ]
};
