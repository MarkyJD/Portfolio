<h1 align="center">
  markyjd.com
</h1>

![demo](/static/og.png)

## Tech Stack

- Gatsby
- TailwindCSS

## Installation

1. Install Gatsby CLI

```sh
npm install -g gatsby-cli
```

2. Clone the repo

```sh
git clone https://github.com/MarkyJD/Portfolio.git
cd portfolio
```

3. Install Dependencies

```sh
npm install
```

4. Run the development server

Either run `npm start` or `gatsby develop` and navigate to `http://localhost:8000/` in a browser

## Possible issues in a Windows Environment

I experienced a few issues on Windows with the `.cache` folder's read/write permissions. After Gatsby failed to compile the error looked something like:

`Error: EPERM: operation not permitted ...`

### To fix, try the following

1. Clean the cache using npm

```sh
npm cache clean --force
```

2. Change the `.cache` folder's permissions within Windows
   1. Navigate to the `.cache` folder in File Explorer
   2. Then **Right-Click** > **Properties** > **Security**
   3. Click **Edit** and then **Add** to add a user
   4. Enter **everyone** and set the permissions below with read and write set to allow
   5. Hit **Apply**
