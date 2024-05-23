# About The Project

Creates email templates.

## Usage

1. Install Bootstrap Email by issuing the command: `gem install bootstrap-email` (see [doc](https://bootstrapemail.com/docs/usage) for more details).
2. Modify `bootstrap-email.scss` to override SCSS variables and rules of Bootstrap Email.
3. Add source files in `/src`.
4. Execute `run.sh` to compile all source files in `/src` to templates in `/build`.

## Installing Norigiri on Msys2

1. Install `zlib-devel`, and `libxml2-devel` or `libxslt-devel`.
2. `gem install nokogiri --platform ruby -- --use-system-libraries --with-xml2-lib=/mingw64/lib --with-xslt-lib=/mingw64/lib --with-xml2-include=/mingw64/include/libxml2 --with-xslt-include=/mingw64/include/libxslt`
