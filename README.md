# staging.sunlitsea.no

## Project setup (node version 12.13.0, npm version 6.9.0)
The project is built with[Create React App](https://github.com/facebook/create-react-app), Craco, and typescript. Node version 12.13.0, npm version 6.9.0.
```
npm install

```

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```

### Deployment

build needs to be removed from .gitignore

`npm run build`

Commit the build folder, so it can be pushed.

`git subtree push --prefix dist origin gh-pages`

This will push the build folder to the gh-pages branch, which is deployed by github pages.

If some refs failed: 

`git checkout master`
`git subtree split --prefix dist -b gh-pages`
`git push -f origin gh-pages:gh-pages`
`git branch -D gh-pages`

You might have to set the custom domain in github pages again after publishing:

github->settings->pages: Write "staging.sunlitsea.no" in Custom domain and press save

### Recommended VSCode Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)

### PostCSS

This project uses [PostCSS](https://github.com/postcss/postcss) for transforming CSS with JavaScript used by [Tailwind CSS](https://tailwindcss.com). It includes the following PostCSS plugins:

- [postcss-preset-env](https://preset-env.cssdb.org/) - Adds stage 2+ features and autoprefixes
- [postcss-import](https://github.com/postcss/postcss-import) - transforms @import rules by inlining content

To control the generated stylesheet's filesize, this project uses Tailwind CSS' [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused CSS.

### Stylelint

VSCodes built-in CSS validator does not support Tailwind syntax. Disable it by adding the following config to `.vscode/settings.json` to avoid false errors, and use Stylelint instead by installing the `stylelint` extension in VSCode.

```PlainText
{
    "css.validate": false
}
```