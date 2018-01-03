Репозиторий для сборки иконочного шрифта из sketch-файла.

Описание, инструкция: http://mikeozornin.ru/blog/all/how-to-build-icon-font-from-sketch-2/

# Установить необходимое ПО:

1. Установить brew ([http://brew.sh/index_ru.html](http://brew.sh/index_ru.html)):
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. С помощью brew установить шрифтообработчики:
  brew install ttfautohint fontforge --with-python

3. С помощью brew установить node.js:
  brew install node

4. Установить SketchTool
При установленном Sketch выполнить в терминале команду:
  /Applications/Sketch.app/Contents/Resources/sketchtool/install.sh

5. Установить grunt
  npm install -g grunt-cli

# Сборка
Выполнить файл build.sh командой:
  ./build.sh

Если не запускается, то перед этим сделать:
  chmod +x build.sh

# Публикация новой версии шрифта в репозиторий
0. Настроить локальный npm-репозиторий. Передайте своему фронтендеру файл package.json и попросите его настроить.
1. Нарисовать иконку
2. Собрать шрифт: ./build.sh или grunt
3. Присвоить новым иконкам код символа в секции codepoints в файле Gruntfile.js
4. Закоммитить sketch-файл, свг-файлы и Gruntfile.js. В комментарии написать изменения: что сделано и зачем
5. Изменить версию пакета в файлах package.json и Gruntfile.js, дописать изменения в CHANGELOG.md
6. Закоммитить файлы package.json, CHANGELOG.md и Gruntfile.js
6. Выполнить команду grunt publish
7. Передать разработчику шифровку «Выпустил пакет версии xxx»

Все, можно пить кофе.
