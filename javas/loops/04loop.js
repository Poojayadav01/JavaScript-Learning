const arr=["javascript", "python", "c", "java","Ruby", "c++"]

arr.forEach((item ,i)=>{
  console.log(item);
  
})


arr.forEach((item ,index, arr)=>{
    console.log(item, index, arr);
    
})


const mycode=[{
    languageName:"javascript",
    languageFile:"js"
},
{
    languageName:"python",
    languageFile:"py"
},
{
    languageName:"c++",
    languageFile:"cpp"
}]

mycode.forEach((item)=>{
    const {languageName, languageFile}=item
    console.log(languageName, languageFile);
    
})