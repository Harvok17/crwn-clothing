import "./collection-preview.styles.scss";

import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import { OptionLink } from "../header/header.styles";

// Add scrolling feature here

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview">
      <OptionLink to={`/shop/${routeName}`} className="title">
        {title.toUpperCase()}
      </OptionLink>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
