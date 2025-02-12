import React from 'react';
import ProductCard from '../cssModuleComponents/ProductCard';
import styles from './page.module.css';

const CSSModulePage = () => {
  return (
    <div className={ styles.body }>
      <ProductCard />
    </div>
  );
};

export default CSSModulePage;;