import React, { Fragment, useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState( ['Dragon Ball'] );

  return (
    <Fragment>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories = { setCategories }/>
        <hr />
        <ul>
            { 
                categories.map( category => (
                    <GifGrid 
                        key = { category }
                        category = { category }
                    />
                ))
            }
        </ul>
    </Fragment>
  )
}
