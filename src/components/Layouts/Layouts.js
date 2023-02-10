import  Head  from "next/document"
import { Fragment } from "react"

export const Layouts = ({children, title}) => {
    return (
        <Fragment>
            {/* <Head>
                <title> {title} </title>
            </Head> */}
            {children}
        </Fragment>
    )
}