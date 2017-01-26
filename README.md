Репозиторий для сборки иконочного шрифта из sketch-файла.

Описание, инструкция: http://mikeozornin.ru/blog/drafts/how-to-build-icon-font-from-sketch/edit/

-# Установить необходимое ПО:
+Репозиторий для сборки иконочного шрифта из sketch-файла.

1. Установить brew ([http://brew.sh/index_ru.html](http://brew.sh/index_ru.html)):
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. С помощью brew установить шрифтообработчики:
brew install ttfautohint fontforge --with-python

3. Установить node.js, скачать [https://nodejs.org/en/](https://nodejs.org/en/) тут current-версию.

4. Установить SketchTool
При установленном Sketch выполнить в терминале команду:
/Applications/Sketch.app/Contents/Resources/sketchtool/install.sh

5. Установить grunt
npm install -g grunt-cli

# Сборка
Выполнить файл build.sh командой:
./build.sh

Если не запускается, то перед этим сделать chmod +x build.sh

# Публикация новой версии шрифта в репозиторий
0. Настроить локальный npm-репозиторий. Спросите вашего фронтендера как это сделать.
1. Нарисовать иконку
2. Собрать шрифт: ./build.sh или grunt
3. Изменить версию пакета в файле package.json
4. Закоммитить package.json, sketch-файл и шрифт, в комментарии написать изменения
5. Выполнить команду grunt publish
6. Передать разработчику шифровку «Выпустил пакет версии xxx».

Все, можно пить кофе.
