# Github TIL

## 1. Git Flow
> Github로 협업하는 흐름으로 branch를 활용하는 전략을 의미함.

banch | 주요 특징 | 
---- | ---- | 
master(main) |  * 배포 가능한 상태의 코드  | 
develop(main) | * feature banch로 나뉘어지거나, 발생된 버그 수정 등 개발 진행 <br/>* 개발 이후 release branch로 갈라짐. |
feature branches(supporting) | * 기능별 개발 브랜치(topic branch) <br/> * 기능이 반영되거나 드랍되는 경우 브랜치 삭제 |
release branches(supporting) | * 개발 완료 이후 QA/Test 등을 통해 얻어진 배포 전 minor bug fix 등 반영 |
hotfixes(supporting) | * 긴급하게 반영 해야하는 bug fix <br/>* release branch는 다음 버전을 위한 것이라면, hotfix branch는 현재 버전을 위한 것 |


## 2. Branch basic commands

### (1) 브랜치 생성 
```bash
(master) $ git branch {branch name}
```

### (2) 브랜치 이동 
```bash
(master) $ git checkout {branch name}
```

### (3) 브랜치 생성 및 이동 
```bash
(master) $ git checkout -b {branch name}
```

### (4) 브랜치 목록 

```bash
(master) $ git branch // 로컬 브랜치 목록
```

```bash
(master) $ git branch -r // 원격 브랜치 목록
```



### (5) 브랜치 삭제

```bash
(master) $ git branch -d {branch name} // 로컬 삭제 
```

```bash
(master) $ git branch -d {branch name} // 원격 삭제 
```



## 3. Branch merge

> Git에서 한 브랜치에서 다른 브랜치로 합치는 방법으로는 두 가지가 있다. 하나는 Merge이고 다른 하나는 Rebase이다. <br/>각 branch에서 작업을 한 이후 이력을 합치기 위해서는 일반적으로 merge 명령을 사용한다. 병합을 진행할 때, 만약 서로 다른 이력(commit)에서 동일한 파일을 수정한 경우 충돌이 발생할 수 있다.<br /> 충돌이 발생한 것은 오류가 발생한 것이 아니라 이력이 변경되는 과정에서 반드시 발생할 수 있는 것이다. 


### (1) Branch merge : fast-forward
> 기존 master 브랜치에 변경사항이 없어 단순히 앞으로 이동
```bash
(master) $ git merge feature-a
Updating 54b9314 .. 5429f25
Fast-forward
```

1. feature-a branch로 이동 후 commit
2. master 별도 변경 없음
3. master branch로 병합

### (2) Branch merge : merge commit
> 기존 master 브랜치에 변경사항이 있어 병합 커밋 발생
```bash
(master) $ git merge feature-a
Already up to date!
Merge made by the 'recursive' strategy.
```
1. feature-a branch로 이동 후 commit
2. master branch commit
3. master branch로 병합

## Branch rebase 
> rebase는 merge와 최종 결과는 같으나, commit history만 다르게 형성된다. 따라서, remote repository에 push된 commit에 대해서는 절대 rebase를 진행하면 안된다. 

### (1) Rebase 기본 전략 
> Rebase 하려는 브랜치 커밋들의 변경 사항을 Patch라는 것으로 만든 다음, 어딘가에 저장해 둔다. 그리고 이를 master 브랜치에 하나씩 적용하여 새로운 커밋을 만든다. 
```bash
$ git checkout feature
$ git rebase master
First, rewinding head to replay your work on top of it...
Applying: f1
Applying: f2
$ git merge feature
```
1. feature branch로 checkout
2. master branch로 rebase
3. master branch를 master로 fast-forward merge


## Merge vs Rebase
 - Merge의 경우, 히스토리란 작업한 내용의 사실을 기록한 것입니다. Merge로 branch를 병합하게 되면 커밋 내역에 Merge commit이 추가로 남게 됩니다. 즉, Merge를 사용하면 브랜치가 생기고 병합되는 모든 작업 내용을 그대로 기록하게 됩니다. <br/>
- Rebase의 경우, branch를 병합할 때 이런 Merge commit을 남기지 않으므로, 마치 다른 브랜치는 없었던 것처럼 프로젝트의 작업 내용이 하나의 흐름으로 유지됩니다.
