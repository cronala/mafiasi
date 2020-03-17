base_static = mafiasi/base/static/
dashboard_static = mafiasi/dashboard/static/
pks_static = mafiasi/pks/static/
mumble_static = mafiasi/mumble/static/
gprot_static = mafiasi/gprot/static/

all: css js locales

css: ${base_static}css/main.min.css ${base_static}css/bootstrap.min.css ${base_static}css/smoothness/jquery-ui-1.12.1.custom.min.css ${dashboard_static}/css/dashboard.min.css ${pks_static}css/pks.min.css ${mumble_static}css/mumble.min.css

js: ${base_static}js/jquery-2.0.3.min.js ${base_static}js/jquery-ui-1.12.1.custom.min.js ${base_static}js/common.min.js ${base_static}js/autocomplete.min.js ${dashboard_static}js/dashboard.min.js ${pks_static}js/pks-graph.min.js ${gprot_static}js/gprot.min.js ${base_static}js/bootstrap.min.js

locales: locale/de_DE/LC_MESSAGES/django.mo locale/en_US/LC_MESSAGES/django.mo locale/fr_FR/LC_MESSAGES/django.mo

static: css js
	./manage.py collectstatic --noinput

%.min.css: %.css
	yui-compressor -o $@ --type css --charset utf-8 $<

%.min.js: %.js
	yui-compressor -o $@ --type js --charset utf-8 $<

%.mo: %.po
	msgfmt -o $@ $<
