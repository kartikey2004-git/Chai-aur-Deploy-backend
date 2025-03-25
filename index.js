require('dotenv').config()

const express =  require('express')
// import express from 'express'
const app = express()
const port = 4000

const githubData = {
  "login": "kartikey2004-git",
  "id": 182670228,
  "node_id": "U_kgDOCuNTlA",
  "avatar_url": "https://avatars.githubusercontent.com/u/182670228?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kartikey2004-git",
  "html_url": "https://github.com/kartikey2004-git",
  "followers_url": "https://api.github.com/users/kartikey2004-git/followers",
  "following_url": "https://api.github.com/users/kartikey2004-git/following{/other_user}",
  "gists_url": "https://api.github.com/users/kartikey2004-git/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kartikey2004-git/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kartikey2004-git/subscriptions",
  "organizations_url": "https://api.github.com/users/kartikey2004-git/orgs",
  "repos_url": "https://api.github.com/users/kartikey2004-git/repos",
  "events_url": "https://api.github.com/users/kartikey2004-git/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kartikey2004-git/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Kartikey bhatnagar",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Kartikey bhatnagar is here 👨🏻‍💻",
  "twitter_username": null,
  "public_repos": 15,
  "public_gists": 0,
  "followers": 2,
  "following": 0,
  "created_at": "2024-09-24T16:10:16Z",
  "updated_at": "2024-12-19T15:46:39Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
  res.send('kartikey')
})

app.get('/login',(req,res) => {
  res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube',(req,res) => {
  res.send("<h2>chai aur kartikey</h2>")
})

app.get('/github',(req,res) =>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

