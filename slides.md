---
# try also 'default' to start simple
theme: apple-basic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
image: /images/yancy-min-842ofHC6MaI-unsplash.jpg
# apply any windi css classes to the current slide
layout: intro-image
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
css: unocss
---

<div class="absolute bottom-10">
  <h1>How to git along</h1>
  <p>4C Talk</p>
  <sub>Photo by <a href="https://unsplash.com/@yancymin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yancy Min</a> on <a href="https://unsplash.com/s/photos/git?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </sub>
</div>

---
layout: bullets
---

# Plan

* Introduce a general way of thinking of version control and git
* Basic `git` commands
* How to use git in a team?
* What's Github, Gitlab etc.?

---
layout: center
---

## Version Control

A way to <strike>trck</strike> changes to files.

A way to track changes to <strike>files</strike>.

A way to track changes to things.

(Often these are changes to files in some directory)

---
layout: two-cols
---

<template v-slot:default>

# Tree Model

A common way to imagine a git repository is as a tree.

 * a circle is a commit
 * a chained, horizontal series of commits are a branch

The diagram shows two branches, `main` and `pf341-feature-x`.

Since `pf341-feature-x` was made a new commit has been added
to `main`.

</template>

<template v-slot:right>

![VCS diagram](/diagrams/vcs.svg)

```sh
# Make sure we are on the main branch
git checkout main
# Create a new branch
git checkout -b pf341-feature-x
```

</template>

---
layout: two-cols
---

<template v-slot:default>

# Making Changes

One source of confusion is the model to have in mind when
making changes to a git repository.

In the example, there are a few things to note:

 - We're on a branch called `main`
 - The file `hello.txt` has been created and tracked
 - The file `world.txt` has been created
 - The file `remove-me.txt` was already committed and has been deleted

**Only staged changes are committed!**

</template>

<template v-slot:right>

![Staging diagram](/images/staging.png)

</template>

---
layout: two-cols
---

<template v-slot:default>


# Local vs. Remote(s)

One reason to use git is to make collaboration easier.

This means at any given moment there might be multiple
copies of the git repository.

A generic way to think of this is:

 - There is your *local* copy on your machine just for you
 - There is your local copy's *origin* which exists remotely (e.g. on Github)
 - There is your origin's *upstream* repository, typically the "source of truth"

When you work on your own typically *origin* and *upstream* are the same. Otherwise
your origin is a **fork** of some *upstream*.

</template>

<template v-slot:right>

![Remote terminal](/images/remotes.png)

### A typical workflow

```sh
# check things are clean
git status
# create a new branch
git checkout -b my-feature
# do some changes
git add .
git commit -m "Made some changes"
git push -u origin my-feature
# open pull request from origin to upstream in Github
```

</template>

---

## 🚨 failed to push refs 🚨

```
➜  4c-git-tutorial git:(main) git push
Enter passphrase for key '/Users/patrickferris/.ssh/id_rsa': 
To github.com:patricoferris/4c-git-tutorial.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'github.com:patricoferris/4c-git-tutorial.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

Most of the time this means our remote has changed without us knowing!

 - Solution 1: `git pull --rebase` is probably the preferred option. This amounts to pulling in the changes in the remote and solving the conflicts
 - A branch workflow would probably have avoided this! As a general rule of thumb, never push directly to the `main` branch, only merge other branches into it and do all of your development on your own branch which you can do whatever you want to.

---
layout: section
---

# Vscode, Git Commands & Basics

---
layout: intro-image
image: ./public/images/vscode.png
---

---

## `git log`

This allows you to inspect the commits (and their **well-written messages**)

```sh
➜  4c-git-tutorial git:(main) git log --grep="remove-me.*"
commit 7dd2060f07821958067f3b210f0cb459457d1142
Author: Patrick Ferris <patrick@sirref.org>
Date:   Mon Nov 28 09:44:43 2022 +0000

    Add remove-me.txt
```

*(Globally search for a Regular Expression and Print matching lines)*

---

## `git diff`

Diffing is the act of looking at what has changed, these are often called *patches*

```diff
diff --git a/hello.json b/hello.json
index f2a886f..cf0a1d7 100644
--- a/hello.json
+++ b/hello.json
@@ -1,3 +1,3 @@
 {
-  "hello": "world"
+  "hello": "World!"
 }
```

---
layout: two-cols
---

<template v-slot:default>

# `git stash`

Stashing allows you to store your changes so they're out of the way
and then restore them afterwards. 

It is a stack (like a *stack of plates*), so the most recently stashed
changes will be the first to be "popped" off the top.

```sh
git stash # store some changes
git stash pop # try to pop the changes back
```

</template>

<template v-slot:right>

```
➜  4c-git-tutorial git:(main) ✗ git checkout update-readme
error: Your local changes to the following files 
would be overwritten by checkout: README.md
Please commit your changes or stash them 
before you switch branches.
Aborting
➜  4c-git-tutorial git:(main) ✗ git stash
Saved working directory and index state 
WIP on main: 95da8da Oops
➜  4c-git-tutorial git:(main) ✗ git stash list
stash@{0}: WIP on main: 95da8da Oops
```

```sh
➜  4c-git-tutorial git:(main) ✗ git diff main stash@{0}
diff --git a/README.md b/README.md
index b9dd7df..f61e728 100644
--- a/README.md
+++ b/README.md
@@ -1,3 +1,3 @@

-I would like a message like this! Oops!
+I would like a message like this! Oops! 
+A little bit of editing!
```

</template>

---

# Useful commands and scenarios

 - 🍒 `git cherry-pick <commit-sha>`: you want to pick up some changes from somewhere else
    into your branch. You may have to merge conflicts!
 - 🔙 `git reset --soft HEAD~1`: This says to reset the current branch's `HEAD` to "minus 1" i.e. undo the last commit. `--soft` means undo the last commit but keep the changes I made. A common use case is when pushing to a branch and seeing the tests fail, you might then `git reset --soft HEAD~1`, do a small fix and `git push -f`. It can also be used to _squash_ commits by `git reset --soft HEAD~n && git commit -m "All in one!"`
 - 🔍 `git blame <FILE>`: Find out who made changes to different lines in a file and when

---
layout: section
---

# Github & Workflows

---
layout: two-cols
---

<template v-slot:default>

## A pull request and merge conflicts

When developing it is quite common that by the time you get
around to asking for your changes to be incorporated things 
have changed.

If the `main` branch has changes to files that you have also
changed, you will have the (dreaded) *merge conflict* and will
have to solve the conflict.

### Merge or Rebase

You can either create a new commit on your branch that incorporates
the changes.

Or you can rewrite the history of your branch as if it started from
the very latest main branch.

</template>

<template v-slot:right>

![Merge conflicts](/images/merge-conflicts.png)

</template>

---

## A general flow for resolving conflicts

### Rebase

```sh
# get the latest changes to main
git checkout main && git pull upstream main
# do the rebase
git checkout my-feature
git rebase main # can be quite painful
git add <changed-files> # <----.
                        #      | 
git rebase --continue   # -----'
# if things get too much: git rebase --abort 
git push --force # be careful!
```

### Merge

```sh
# get the latest changes to main
git checkout main && git pull upstream main
# do the merge
git checkout my-feature
git merge main # can be quite painful
git add <changed-files>
git merge --continue
# if things get too much: git merge --abort 
git push
```

---

# Workflows

**Github** workflows are computations that are triggered by merging/pushing commits.
These are very useful for testing whether or not a pull request will break changes.

```yaml
# What should trigger running this workflow?
on:
  push:
  pull_request:
    branches:
      - main
jobs:
  run:
    steps:
      # Use the github action for checking out code
      - uses: actions/checkout@v3
      # Use the github action for setting up python
      - uses: actions/setup-python@v4
        with:
          python-version: '3.9'
          cache: 'pip' # caching pip dependencies
      - run: pip install -r requirements.txt
      - run: python run.py
```

---

# Protect Important Branches!

<img width="700" src="/images/protect.png"/>

---
layout: two-cols
---

<template v-slot:default>

## Uh, someone with git/Github knowledge has asked me to do something I don't know what they mean!

 - Could you open a PR?
 - Could you just *rebase* this on main?
 - Could you *squash* the commits?
 - This has *merge conflicts* now, could you fix these?

</template>

<template v-slot:right>

![Kermit panicking](/images/kermit-panicking.gif)

</template>