import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])
    const onAddCategory = (category)=>{
        console.log(category)
        if( categories.includes(category)) return
        setCategories([...categories, category])
        //setCategories( cat => [...cat, 'Valorant'])
    }
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
      setCategories ={setCategories}
      onNewCategory = {event => onAddCategory(event)}
      />
        {categories.map(category =>(<GifGrid category={category}/>))}
    </>
  )
}

