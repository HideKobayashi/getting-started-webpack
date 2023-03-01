package.json:
	npm init -y

package-lock.json: package.json
	npm install --save-dev webpack@5.30.0 webpack-cli@4.6.0

install-dev-webpack: package-lock.json

install-jquery:
	npm install --save jquery@3.6.0

build:
	npm run build
