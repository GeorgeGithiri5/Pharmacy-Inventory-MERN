import React from 'react'

export default function BannerHolder({children,bannerclass}){
    return (
        <div className={bannerclass}>
            {children}
        </div>
    )
}