## Tutorial for Controllers Chapter

Assumes you've created a new app

current as of

[jb: create chapter first steps]

`nest new cats`

observations:

* asks you a few questions
* these help set up npm or yarn
* takes a minute or two
* bootstraps a standard 
* in this tutorial, we use npm
* you end up with a git repo
* note, you should probably add a gitignore!
	- VS Code shows a nice warning about this
* observations about the bootstrapped files
* show printout

(add section at end of post about tools used to write this blog post, and link to my howto)


Illustrated with Visual Studio Code, with these settings

[jb: document setup]

Follows along the docs, with links. 
Includes a codesandbox at completion of each step

1. nest g controller cats
2. in cats.controller.ts, paste code under Request Object heading
	1. https://docs.nestjs.com/controllers#request-object
	2. observations
	3. install express typings, and show
3.  