# Lesson 5 — Git and GitHub from scratch

## Goal

Practice version control from an empty local repository through a reviewed GitHub pull request. Git is a daily engineering skill: use it throughout the other lessons, not only at the end.

## Safety and setup

Install Git and configure an author name/email with `git config --global user.name "Your Name"` and `git config --global user.email "you@example.com"`. Choose the email you want associated with commits (GitHub provides a private no-reply option). Never put a password, token, SSH private key, or employer data in this repository. GitHub authentication should use the browser/Git Credential Manager or SSH setup from GitHub's official docs; never paste credentials into a commit or chat.

## Part A — Local practice from scratch

To practice the complete initialization flow, make a separate copy of this learning repository (File Explorer copy is fine), or create a scratch folder outside the working repo. Do not run `git init` inside an already initialized repository.

1. In the scratch folder, run `git init -b main` (if your Git version does not support `-b`, run `git init` and rename the branch with `git branch -M main`).
2. Create `README.md` and `.gitignore`. Run `git status` and explain untracked files.
3. Stage only the intended files with `git add README.md .gitignore`; run `git diff --cached` to inspect the staged snapshot.
4. Commit with a meaningful message, e.g. `git commit -m "Add learning repository overview"`. Run `git log --oneline` and `git status`.
5. Edit the README. Compare `git diff` (working tree) with `git diff --cached` (index). Stage and commit the update.
6. Create a feature branch: `git switch -c docs/add-study-goals`. Make a small change, commit it, and inspect `git log --oneline --graph --all`.
7. Switch back to main and merge the feature branch with `git switch main` then `git merge docs/add-study-goals`. Confirm the result and remove the branch with `git branch -d docs/add-study-goals`.
8. Create a temporary conflict in a scratch text file by editing the same line differently on `main` and a feature branch. Merge, inspect conflict markers, resolve deliberately, test/read the result, stage, and commit. Never resolve by blindly choosing a side.

The important mental model: working tree = files currently edited; index/staging area = proposed next commit; commit = immutable snapshot in local history. A branch is a movable name for a line of commits. `git switch` changes branches; `git checkout` is the older multipurpose command you may encounter in existing team instructions.

## Part B — Publish this learning repo to GitHub

1. Sign in to GitHub and create a new repository. Pick a repository name such as `qe-automation-phase-1`. Choose public only if comfortable sharing it; otherwise choose private. **Do not** ask GitHub to add a README, license, or `.gitignore`, because this local repository already contains files.
2. In this folder, inspect `git status` and `git remote -v`. If it is not already a Git repository, initialize it with `git init -b main`; if a remote exists, inspect it before changing anything.
3. Stage and commit the learning files: `git add .`, `git status`, `git diff --cached`, then `git commit -m "Add Phase 1 QE learning exercises"`. Review the staged diff before committing.
4. Connect the new GitHub repo using the HTTPS or SSH URL GitHub displays: `git remote add origin <repository-url>`. Use `git remote -v` to verify. Never put credentials in the URL.
5. Push the default branch: `git push -u origin main`. Complete authentication through the approved browser/Git Credential Manager or your configured SSH agent.
6. For a real practice change, run `git switch -c docs/phase-1-progress`, edit the README checklist or a lesson, then `git add`, `git diff --cached`, `git commit`, and `git push -u origin docs/phase-1-progress`.
7. On GitHub, open a pull request from that branch into `main`. Write a short description, list the checks run, and mention limitations. Review the **Files changed** diff as if you were the reviewer; fix any issue by committing and pushing again.
8. Merge the PR on GitHub. Back locally run `git switch main` and `git pull`; verify the merged change, then delete the feature branch locally (`git branch -d docs/phase-1-progress`) and on GitHub if it remains.

`pull` downloads and integrates remote commits. `push` publishes local commits. `git fetch` downloads remote history without integrating it. A pull request is a GitHub collaboration/review workflow; it is not itself a Git command.

## Commands to know

- Inspect: `git status`, `git diff`, `git diff --cached`, `git log --oneline --graph --all`, `git remote -v`
- Branch/work: `git branch`, `git switch <branch>`, `git switch -c <new-branch>`, `git merge <branch>`
- Share: `git fetch`, `git pull`, `git push -u origin <branch>`
- Snapshot: `git add <path>`, `git commit -m "message"`
- Ignore generated/local files with `.gitignore`. Ignoring a file does not remove it from history if it was committed already.

## Done when

- You can explain staged versus unstaged changes and show the difference with Git commands.
- You can create, switch, merge, and delete a branch, and resolve a simple conflict.
- You have pushed a feature branch, opened and reviewed a PR, merged it, and synchronized local `main`.
- The PR has a clear description and contains no credentials, generated build output, or private data.
