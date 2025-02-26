import React from 'react'

interface BreadCrumbType{
    data:{
        title: string;
        href?: string;
    }[]
}

const BreadCrumb:React.FC<BreadCrumbType> = ({data}) => {
    return (
        <nav className="breadcrumb mb-6 text-gray-600">
            <ol className="list-reset flex items-center space-x-2">
            {data.map((item, index) => (
                <React.Fragment key={index}>
                <li>
                    {item.href ? (
                    <a href={item.href} className="text-blue-500 hover:text-blue-700">{item.title}</a>
                    ) : (
                    <span className="text-gray-500">{item.title}</span>
                    )}
                </li>
                {index < data.length - 1 && (
                    <li>
                    <span className="mx-2">/</span>
                    </li>
                )}
                </React.Fragment>
            ))}
            </ol>
        </nav>
    )
}

export default BreadCrumb