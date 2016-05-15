# create backups first without branch switching. Much safer. Trust me.
./scripts/backup_branches.sh

git checkout observables
git rebase --onto jump-start HEAD~5 HEAD
git branch -f observables

git checkout architecture
git rebase --onto jump-start HEAD~5 HEAD
git branch -f architecture

git checkout forms
git rebase --onto jump-start HEAD~7 HEAD
git branch -f forms

git checkout routing
git rebase --onto jump-start HEAD~5 HEAD
git branch -f routing

git checkout jump-start