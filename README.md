# cse5335-gxs3486
web data project

1.What server framework did you choose and why?
I chose Nodejs as it is relatively new than rails. it's fast and based on google's v8. However it isn't as mature rails. It just boils down to personal preference. Iwished to learn Nodejs

2. What client framework did you choose and why?
i chose Jquery. It's simple write less do more approach makes it easier to pick up for beginers. However it's not as efficient as angularjs and over the time i felt angularjs is better than jquery

3.what aspect of the implementation did you find it easy and why?
I found jquery easy because of the tutorials available and it's been here for a long time, so most questions are answered

4.what aspect of the implementation did you find it hard and why?
Uploading the code to heroku and making it work. trying to print the locations on the map

5.what components other than your client and server framework did you install, if any, and if so, what is the purpose of your solution?
GitHub.exe(easy way to contribute to projects) and heroku-toolbelt(all the tools you need to get started using Heroku at the command line)

6.What ubuntu commands are required to deploy and run your server?
$ heroku login
$ heroku git:clone -a cse5335-gxs3486
$ cd cse5335-gxs3486
$ git add .
$ git commit -am "make it better"
$ git push heroku master
$ git status
$ heroku open
$ heroku ps:scale web=1
$ git commit -nm "bad"
