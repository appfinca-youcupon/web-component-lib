# Install Bootstrsap Email first by running :
# gem install bootstrap-email
# in command line. (Ruby is required)
rm build/*
bootstrap-email -p 'coupon-template.html' -d 'build/'
bootstrap-email -p 'coupon-template-long.html' -d 'build/'