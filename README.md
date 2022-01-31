# staging.sunlitsea.no

## Project setup (node version 12.13.0, npm version 6.9.0)
The project is built with [Create React App](https://github.com/facebook/create-react-app), Craco, and typescript. Node version 12.13.0, npm version 6.9.0.
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

### Editing dynamic content
In the about section the team members and consultants can be edited in the JSON files found under src/data.
Team members are in the team.json file and include string fields name, image, role, and description.
Consultants are in the consultants.json file and include string fields name, optional image (if lacking image, will be replaced with placeholder), and role.
When adding a new image, it should be placed in the public/img/people directory and have 350x500 pixels. Fields that are in uppercase are fixed in code so the case can be arbitrary in the JSON files.

The job openings in the careers section can be edited in the file src/data/careers.json and include a number field positionsOpened, string fields position, description, sector, location, trade, and optional keywords.

The roadmap and accomplishments are edited in their respective JSON files in the src/data directory. Follow the existing pattern to update them. The day in the date is irrelevant. Additional readme regarding development of the roadmap can be found in src/components/molecules/timeline-graph/Readme.md.

Follow the steps below for deployment to make the changes show up on the website.

### Split deployment with Github Pages

We use Github Pages for deployment. Github Pages allows only one domain per remote, so we use another remote for production. The second repo is https://github.com/Kodeworks/new-sunlitsea.no.
This means we have to scripts for building: build-staging and build-prod. The difference between them is that each copies the right CNAME file to the build folder to set the correct domain.
Then the build should be pushed to the correct repo. If the wrong build is pushed to a repo, just reupload both of them. Keep a dev branch for the staging build and a master branch for the production build.

### Deployment staging

The "build" directory needs to be removed from .gitignore.

Build the project for staging by running:

`npm run build-staging`

Commit the build folder, so it can be pushed.

`git subtree push --prefix build origin gh-pages`

This will push the build folder to the gh-pages branch, which is deployed by github pages.

If some refs failed: 

`git checkout master`
`git subtree split --prefix build -b gh-pages`
`git push -f origin gh-pages:gh-pages`
`git branch -D gh-pages`

You might have to set the custom domain in github pages again after publishing:

github->settings->pages: Write "staging.sunlitsea.no" in Custom domain and press save

### Deployment production

If you have not done this before, add new-sunlitsea remote:

`git remote add production git@github.com:Kodeworks/new-sunlitsea.no.git`

build needs to be removed from .gitignore

`npm run build-production`

Commit the build folder, so it can be pushed.

`git subtree push --prefix build production gh-pages`

This will push the build folder to the gh-pages branch on the new-sunlitsea.no remote, which is deployed by github pages.

If some refs failed: 

`git checkout master`
`git subtree split --prefix build -b gh-pages`
`git push -f production gh-pages:gh-pages`
`git branch -D gh-pages`

You might have to set the custom domain in github pages again after publishing:

github->settings->pages: Write "sunlitsea.no" in Custom domain and press save

### Recommended VSCode Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)

### Stylelint

VSCodes built-in CSS validator does not support Tailwind syntax. Disable it by adding the following config to `.vscode/settings.json` to avoid false errors, and use Stylelint instead by installing the `stylelint` extension in VSCode.

```PlainText
{
    "css.validate": false
}
```