import {render } from '@testing-library/react'
import Header from 'react'

// import the components also

// we need something to put brain in the test files that it have to identify import
// we need something to understand the jsx in the test files


test("logo should load when the header will load",()=>{

    // load the header component
    const header = render(<Header/>);

    // check if the logo is there
})

// import Body from 'BODY.JS'
