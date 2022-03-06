# 共有したい文書

## 目的

md で作成した文書を自動で PDF に変換してデプロイする．

## 使用技術

- `md-to-pdf`

- GitHub Actions

## How to use

1. `src` ディレクトリに md ファイルを設置する．

2. main ブランチにマージすると自動で PDF ファイルが生成されてデプロイされる．

PDF ファイルのパスは以下のとおり．

- `https://taroosg.github.io/md-to-pdf/{MDファイル名}.pdf`
