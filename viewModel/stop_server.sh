#!/bin/bash
sudo pm2 stop Sample-node-app

# isExistApp=`sudo pgrep pm2`
# if [[ -n  $isExistApp ]]; then
    # sudo pm2 kill
    # sudo pm2 stop Sample-node-app
    # you can remove the crontab as well
# fi

# isExistApp=`pgrep pm2`
# if [[ -n  $isExistApp ]]; then
#     # sudo pm2 kill
#     echo 'yo'
#     # you can remove the crontab as well
# fi
