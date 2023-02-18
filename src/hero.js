import react from "react" 
import imag from "./memeimag/Get a new meme image 🖼.png"
import memedata from "./memedata"
import React from "react"
export default function Hero(){ 
    const [memearray , setmemearray]=React.useState([])
    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setmemearray(data.data.memes))
        //this fetch return that file od meme (memedata.js file)the same 
    },[])
    const [meme , setMeme] = react.useState({
        upper:"",
        randomimag:"https://i.imgflip.com/1ur9b0.jpg",
        lower:""
    })
    const photo = document.getElementById('img')
    function generatememe(){
    //const memearray = memedata.data.memes
    const randomnumb = Math.floor(Math.random()*memearray.length);
    const url = memearray[randomnumb].url
    setMeme(function(prev){
        return {
            ...prev,
            randomimag:url
            }
        })
    }
    function handelchange(event){
        const{value,name}=event.target
        setMeme(prev=>({
            ...prev,
            [name]:value
        }))
    }
    return(
        <main>
        <div className="enter-section">
            <input id="setup" name="upper" onChange={handelchange} type="text" placeholder="The Setup" value={meme.upper} />
            <input id="punch" name="lower" onChange={handelchange} type="text" placeholder="The Punchline" value={meme.lower} />
        </div>
        <div id="btn" onClick={generatememe}>
            <img className="getimag" src={imag}/>
        </div>
            <div className="img-container">
            <img id="img" src={meme.randomimag}/>
            <h2 className="meme--text top">{meme.upper}</h2>
            <h2 className="meme--text bottom">{meme.lower}</h2>
            </div>
        </main>
    )
} 
// function Everyshit(){
// useEffect(()=>{
// const photo = document.getElementById('img')
// const button = document.getElementById('btn')
// button.addEventListener('click',function(){


// var i=Math.floor(Math.random())
// photo.setAttribute('src',memedata.data.memes[i].url);
//     })
// })
// }

