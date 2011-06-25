Duke Nukem Forever 日本語化ファイル
===================================

PC 版 DNF の非公式日本語翻訳ファイル。自分用にまったり進行中。

備忘録
------

* 決まり文句は基本 pallas d の訳文を定訳として翻訳する
    * [pallas d - Duke Nukem 3D Words Collection](http://web.archive.org/http://park3.wakwak.com/~pallas_d/duke/d3dwords/index.html)
    * [pallas d - Duke Nukem Forever Words Collection](http://web.archive.org/http://park3.wakwak.com/~pallas_d/duke/dnfwords/index.html)
* Male, Female 等の無名 NPC はそれぞれで口調を揃える

字幕ファイルのフォーマット
--------------------------

* 拡張子 `int` が英語 (デフォルト) 字幕ファイル
* 他言語の場合は拡張子が変化 (Spanish なら `spa`)
* UTF-16LE (BOM 有) で正常表示確認

ファイル構成
------------

* `dnf-trans-ja`
    * `dist`: 字幕ファイル用ディレクトリ
    * `ja`: 作業ファイル用ディレクトリ
        * `dnai.int`: 完了 要確認
        * `dndecorations.int`: 9 割完了 要確認
        * `map00.int`: 9 割完了 要確認
        * `map01.int`: 9 割完了 要確認
    * `build.sh`: 字幕ファイル生成用スクリプト
    * `install.js`: 字幕ファイルインストール用スクリプト
    * `README.markdown`: 説明
    * `std-trans-list.markdown`: 定訳リスト

ファイル構成 (DNF 側)
---------------------

* `duke nukem forever`
    * `Fonts`
        * `AlteHaasGroteskBold.ttf`: 字幕用フォント
        * `League_Gothic.ttf`: メニュー用フォント
    * `System`
        * `core.int`
        * `dnai.int`
        * `dndecorations.int`
        * `dngame.int`
        * `dnvehicles.int`
        * `dnwindow.int`
        * `dukeed.int`
        * `dukeforever.int`
        * `dukenukemforever.int`
        * `editor.int`
        * `engine.int`
        * `ipdrv.int`
        * `ipserver.int`
        * `loading.int`
        * `map00.int`
        * `map01.int`
        * `map02.int`
        * `map03.int`
        * `map04b.int`
        * `map04c.int`
        * `map04.int`
        * `map05.int`
        * `map06b.int`
        * `map06.int`
        * `map07b.int`
        * `map07.int`
        * `map08.int`
        * `map09.int`
        * `map10.int`
        * `map11b.int`
        * `map11c.int`
        * `map11.int`
        * `map12b.int`
        * `map12.int`
        * `map13.int`
        * `map14b.int`
        * `map14.int`
        * `map15.int`
        * `map16b.int`
        * `map16.int`
        * `map17b.int`
        * `map17.int`
        * `map18.int`
        * `map19b.int`
        * `map19.int`
        * `map20b.int`
        * `map20.int`
        * `map21b.int`
        * `map21.int`
        * `map22.int`
        * `map23.int`
        * `map_mydigs.int`
        * `maps.int`
        * `multiplayer.int`
        * `title.int`
        * `uwindow.int`
        * `window.int`

