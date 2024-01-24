# dailyWarmup
Toy Problems
============
Welcome to Sfectoria-FullStack daily warmup. This repository will be updated every morning with a new
code challenge.

Using this Repository
---------------------
You'll find each day's a warmup.

Getting a Copy of the Repo
--------------------------
If you haven't already, fork the repository on GitHub and clone your newly created
repo down to your computer. 

Submitting your Solutions
-------------------------
Once you're done, push your changes to GitHub and issue a pull request from your
repository's master branch to your MakerSquare branch.

Updating the Repository
-----------------------
Every morning, when a new warmup is added, you'll need to sync your version of
the repo with main. Git won't automatically pull in upstream changes for
you; it trusts that you'll pull them in as needed. Do so by giving Git a reference
to MakerSquare's version of the repo:

    git remote add upstream https://github.com/Sfectoria-FullStack/DailyWarmUps.git

After you've done that, updating your repo is as simple as running the following:

    git checkout main       // Your fork's master branch
    git pull upstream main  // Your class's master branch

This will check out your branch and tell git to grab any changes made to the main
repository and merge them into your branch.

Resolving Taser's Unmergeable Pull Request
------------------------------------------
You may encounter a scenario where Taser will not merge your pull request. This
often happens as a result of your upstream branch becoming out of sync with your
local copy. To resolve this problem, run:

    git pull upstream <your-branch-name>

Resolve any conflicts, merge, commit and push. You will then be able to submit a
Pull Request that will get correctly merged.
