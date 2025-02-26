import React from 'react'
import { Link } from 'react-router-dom';

interface BreadCrumbType {
    data: {
        title: string;
        href?: string;
    }[]
}

const BreadCrumb: React.FC<BreadCrumbType> = ({ data }) => {
    return (
        <nav className="breadcrumb mb-6 text-gray-700 p-2 px-5">
            <ol className="list-reset flex items-center space-x-2">
            {data.map((item, index) => (
                <React.Fragment key={index}>
                <li>
                    {item.href ? (
                    <Link to={item.href} className="text-blue-600 hover:text-blue-800 transition-colors duration-300">{item.title}</Link>
                    ) : (
                    <span className="text-gray-700">{item.title}</span>
                    )}
                </li>
                {index < data.length - 1 && (
                    <li>
                    <span className="mx-2 transition-opacity duration-300 opacity-70 hover:opacity-100">/</span>
                    </li>
                )}
                </React.Fragment>
            ))}
            </ol>
        </nav>
    )
}

export default BreadCrumb