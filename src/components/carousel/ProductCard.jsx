import React from 'react'
import {CardSection,ProductImage,ProductDetailStrip,ProductTitle,ProductPrice} from './styled'

const ProductCard = (props) => {
  const {url,name,category,rating,price,refer} = props
  return (
    <CardSection ref={refer}>
        <ProductImage src={url}alt=""></ProductImage>
        <ProductDetailStrip>
            <p>{category}</p>
            <span>{rating}</span>
        </ProductDetailStrip>
        <ProductTitle>{name}</ProductTitle>
        <ProductPrice>{price}</ProductPrice>
    </CardSection>
  )
}

export default ProductCard