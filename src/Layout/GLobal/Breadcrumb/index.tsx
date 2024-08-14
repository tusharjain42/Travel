"use client";

import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import styles from "@/styles/SideBreadcrumb.module.scss"

function SiteBreadcrumb() {
  return (   
      <Breadcrumb className={styles.BreadcrumbOuter}>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">India</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Delhi NCR</Breadcrumb.Item>
        <Breadcrumb.Item href="#">New Delhi</Breadcrumb.Item>
        <Breadcrumb.Item active>Search results</Breadcrumb.Item>
      </Breadcrumb> 
  );
}

export default SiteBreadcrumb ;
