# Template Challenge (TC) v0
<p align="center">
  <img src="https://github.com/DrSlamp/CGCtemplate/assets/24397487/655b6a96-1b90-4e44-91ed-cf2b32c010d4" alt="ChicksGold"/>
</p>



For this project:
<b>Vuejs 3 Vue  Pure CSS</b> was used for this project. 

<b>About template challenge: </b>

The main challenge is to maintain the proportions of the cards, between the desktop mode and the mobile mode, it is a good challenge to strengthen the logic between spaces, all thanks to a powerful pure CSS.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/). 

### F.A.Q 
<p>Q- Is responsive? </p>

<p>A- Yes, mobile first. 🫡</p> 

<p>Q- the secret to maintain the proportions of the cards? </p>

<p>A- Pay attention to height and width 🫡</p> 
```

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); /* to 5 cards */
  gap: 2px; /* gap space */
  padding-top: 100px;
  padding-left: 40px;
  padding-right: 0px;
  border-radius: 5px;
  background-color: #303141;
  border: 1px solid #383f56;
}


  .product-card {
    display:flexbox;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 220px;
    padding: 10px;
    margin-bottom: 50px;
    border-radius: 5px;
    background-color: #323648;
    color: white;
    
  }

```
